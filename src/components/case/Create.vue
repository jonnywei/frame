<template>
    <el-form>
        <el-input placeholder="请输入内容"   v-model="inputUrl" class="input-with-select">
          <el-select v-model="httpMethod"  slot="prepend" placeholder="请求方法" @change="httpMethodChange" >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button @click="visible = true" slot="append"  icon="el-icon-caret-right">Send</el-button>
        </el-input>
      <el-dialog :visible.sync="visible" title="Hello world">
        <p>欢迎使用 Element</p>
      </el-dialog>

      <el-tabs type="border-card">
        <el-tab-pane label="Authorization">
          <el-row :gutter="20">
            <el-col :span="3">
              变量名
            </el-col>
            <el-col :span="4">
              变量类型
            </el-col>
            <el-col :span="10">
              变量值
            </el-col>
            <el-col :span="3">
              数据类型
            </el-col>
          </el-row>
          <el-row :gutter="20" v-for="item in signFormList">
            <!--<el-col :span="3">-->
            <!--<el-checkbox class="checkbox" v-model="item.require">必填</el-checkbox>-->
            <!--</el-col>-->
            <el-col :span="4" class="title">
              <el-input   v-model="item.title" size="large"></el-input>
            </el-col>
            <el-col :span="4" class="title">
              <el-select   v-model="item.title" size="large">
                <el-option
                  v-for="item in varTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="10">
              <el-input   :placeholder="'提示语:请输入您的'+item.title" size="large" ></el-input>
            </el-col>

            <el-button icon="delete" @click.native.prevent="removeItem(item)" title="删除">删除</el-button>
            <el-dropdown trigger="click"  style="margin-left: 10px;color: #20a0ff;">
              <el-button>
                移动<i class="el-icon-caret-bottom el-icon-right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="moveTop(item)">置顶</el-dropdown-item>
                <el-dropdown-item @click.native="moveUp(item)">上移</el-dropdown-item>
                <el-dropdown-item @click.native="moveDown(item)">下移</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>

          <el-row>
            <el-col :span="14" :offset="5">
              <el-button :span="24" type="primary" size="large" @click.native="addItem">添加更多</el-button>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="Headers">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="Key"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="Value"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="Description">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="props">
                <el-button @click.native="showDetail(props.row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="Body" id="bodyPane"  v-if ="httpMethod !='GET'">
          <el-row>
            <el-col :span="14">
              <el-radio-group v-model="bodyType" >
                <el-radio  label="1">form-data</el-radio>
                <el-radio  label="2">x-www-form-urlencoded</el-radio>
                <el-radio  label="3">raw</el-radio>
                <el-radio  label="4">binary</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :span="10">
              <el-form-item label="" v-show="bodyType == '3'">
                <el-select value="text" v-model="rawContentType">
                  <el-option
                    v-for="item in rawContentTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>


          <transition name="keyValueList">
            <el-form-item label="" v-show="bodyType == '1'">
              <el-row :gutter="20">
                <el-col :span="3">
                  变量名
                </el-col>
                <el-col :span="10">
                  变量值
                </el-col>
                <el-col :span="3">
                  数据类型
                </el-col>
              </el-row>
              <el-row :gutter="20" v-for="item in signFormList">
                <!--<el-col :span="3">-->
                <!--<el-checkbox class="checkbox" v-model="item.require">必填</el-checkbox>-->
                <!--</el-col>-->
                <el-col :span="4" class="title">
                  <el-input   v-model="item.title" size="large"></el-input>
                </el-col>
                <el-col :span="4" class="title">
                  <el-select   v-model="item.title" size="large">
                    <el-option
                      v-for="item in varTypeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="10">
                  <el-input   :placeholder="'提示语:请输入您的'+item.title" size="large" ></el-input>
                </el-col>

                <el-button icon="delete" @click.native.prevent="removeItem(item)" title="删除">删除</el-button>
                <el-dropdown trigger="click"  style="margin-left: 10px;color: #20a0ff;">
                  <el-button>
                    移动<i class="el-icon-caret-bottom el-icon-right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="moveTop(item)">置顶</el-dropdown-item>
                    <el-dropdown-item @click.native="moveUp(item)">上移</el-dropdown-item>
                    <el-dropdown-item @click.native="moveDown(item)">下移</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-row>

              <el-row>
                <el-col :span="14" :offset="5">
                  <el-button :span="24" type="primary" size="large" @click.native="addItem">添加更多</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </transition>

          <transition name="raw">
            <el-form-item label="" v-show="bodyType == '3'">
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="preScript">
              </el-input>
            </el-form-item>
          </transition>



        </el-tab-pane>
        <el-tab-pane label="PreScript">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="preScript">
          </el-input>
        </el-tab-pane>
        <el-tab-pane label="PostScript">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="postScript">
          </el-input>


        </el-tab-pane>
        <el-tab-pane label="Validation">

          <el-row :gutter="20">
            <el-col :span="3">
              结果比对类型：
              <el-select   v-model="expectType" size="large">

              </el-select>
            </el-col>
            <el-col :span="4">
              期望值：<el-input
              type="textarea"
              :rows="3"
              placeholder="请输入内容"
              v-model="expectValue">
            </el-input>
            </el-col>
          </el-row>

        </el-tab-pane>
      </el-tabs>

      <egrid border
             max-height="500"
             column-type="selection"
             :data="paramTableData"
             :columns="paramColumns"
             :columns-schema="columnsSchema"
             :columns-props="columnsProps"
             :columns-handler="columnsHandler"
             @selection-change="selectionChange">
      </egrid>
    </el-form>
</template>
<style>
  .el-select .el-input {
    width: 100px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
  import Btn from './cell-btn.vue'
  import Editor from './cell-editor.vue'
  import  Data from './Data'
  import Egrid from 'egrid'

  //  import ElForm from "../node_modules/element-ui/packages/form/src/form.vue";
  //  import ElSelect from "../node_modules/element-ui/packages/select/src/select.vue";
  //  import ElCol from "element-ui/packages/col/src/col";

  export default {
    components: {
//     ElCol,
//     ElSelect,
      Egrid,
      Data,
      Btn,
      Editor,
    },
    data:function () {
      return{
        visible: false,
        paramTableData:Data.data,
        paramColumns:Data.columns,
        inputUrl:"",
        expectValue:"",
        expectType:"",
        signFormList: [
          {title: '姓名', require: true},
          {title: '手机', require: true}
        ],
        options: [{
          value: 'GET',
          label: 'GET'
        }, {
          value: 'POST',
          label: 'POST'
        }, {
          value: 'HEAD',
          label: 'HEAD'
        }],
        rawContentType:"",
        rawContentTypeOptions: [{
          value: 'Text',
          label: 'Text'
        }, {
          value: 'JSON',
          label: 'JSON'
        }, {
          value: 'XML',
          label: 'XML'
        }, {
          value: 'Javascript',
          label: 'Javascript'
        }, {
          value: 'Html',
          label: 'Html'
        }],
        varTypeOptions: [{
          value: '文本',
          label: '文本'
        }, {
          value: '模板',
          label: '模板'
        }, {
          value: 'SQL',
          label: 'SQL'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],

        httpMethod: 'GET',
        columns:[
          {
            label: '日期',
            prop: 'date',
            width: 100

          },
          {
            label: '姓名',
            prop: 'name',
            minWidth: 100
          },
          {
            label: '姓名',
            prop: 'name',
            minWidth: 100
          }
        ],
        bodyType:'',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],

        // columnsProps 用于定义 columns 公共的属性
        columnsProps: {
          width: 120,
          sortable: true,
          // 定义表格列如何渲染
          component: Editor
        },
        columnsSchema: {
          '地址': {
            width: 'auto',
            // propsHandler 可用于转换传给自定义组件的 props 这里将 props 变成了 address
            propsHandler ({ col, row }) {
              return { address: row[col.prop] }
            },
            // 这里的 props 是 address
            component: Vue.extend({
              props: ['address'],
              render (h) {
                return h('span', {
                  style: { color: '#20A0FF' }
                }, this.address)
              }
            })
          }
        },


      }
    },
    methods:{
      httpMethodChange: function (val, oldVal) {
        console.log(val);
        if(val =='GET'){
          this.$get("#bodyPane").disabled="true";
        }
      },
      columnsHandler (cols) {
        return cols.concat({
          label: '操作',
          align: 'left',
          component: Btn,
          // listeners 可用于监听自定义组件内部 $emit 出的事件
          listeners: {
            'row-edit' (row) {
              console.log('row-edit', row)
            }
          }
        })
      },

      selectionChange (rows) {
        console.log('selected', rows)
      },

      addItem: function () {
        var n = this.signFormList ? this.signFormList.length + 1 : 1;
        this.signFormList.push({
          title: '标题' + n,
          require: false
        });
      },
      removeItem: function (item) {
        var index = this.signFormList.indexOf(item);
        this.signFormList.splice(index, 1);
      },
      moveTop: function (item) {
        var index = this.signFormList.indexOf(item);
        if(index != 0){
          this.signFormList.splice(index,1);
          this.signFormList.splice(0,0,item);
        }
      },
      moveUp: function (item) {
        var index = this.signFormList.indexOf(item);
        if(index != 0){
          this.signFormList.splice(index,1);
          this.signFormList.splice(index-1,0,item);
        }
      },
      moveDown: function (item) {
        var index = this.signFormList.indexOf(item);
        var max = this.signFormList.length ;
        if(index != max){
          this.signFormList.splice(index,1);
          this.signFormList.splice(index+1,0,item);
        }
      },
    }
  }
</script>

<style>


</style>


