(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-047f"],{o2I2:function(e,t,i){"use strict";i.r(t);var a=i("t3Un");var n={name:"MpiContactinfo",props:{disabled:{type:Boolean,default:void 0},mpiId:{type:String,default:void 0}},data:function(){return{list:null,total:null,listLoading:!0,pageModule:{pageNumber:1,pageSize:10,searchText:"",sortName:"",sortOrder:""},pageSizes:[5,10,25,50,100],contactTypeOptions:[],form:{},rules:{contactType:[{required:!0,message:"请选择联系类型",trigger:"blur"}],contactPhone:[{required:!0,message:"请输入联系号码",trigger:"blur"}]},dialogFormVisible:!1,dialogStatus:"",textMap:{view:"查看",update:"编辑",create:"创建"}}},mounted:function(){var e=this;this.asyncLoadDictionaryByCode(138,function(t){e.contactTypeOptions=t}),this.asyncOrganizParameterValue("DefaultPageSize","10","表格默认每页记录数",function(t){e.pageModule.pageSize=parseInt(t)}),this.asyncOrganizParameterValue("DefaultPageSizes","5,10,25,50,100","表格默认每页记录数可选择项",function(t){var i=t.split(",");e.pageSizes=[];for(var a=0;a<i.length;a++)e.pageSizes[a]=parseInt(i[a])})},methods:{getList:function(){var e=this;this.listLoading=!0,function(e,t){return Object(a.a)({url:"mpi/v1/contactinfo/list/empId/"+e,method:"post",data:t})}(this.mpiId,this.pageModule).then(function(t){e.list=t.data.rows,e.total=t.data.total,e.listLoading=!1}).catch(function(t){e.$notify({title:"获取列表失败",message:t.message,type:"error",duration:5e3})})},handleSearch:function(){this.pageModule.pageNumber=1,this.getList()},handleSizeChange:function(e){this.pageModule.pageSize=e,this.getList()},handleCurrentChange:function(e){this.pageModule.pageNumber=e,this.getList()},handleAdd:function(){this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0},handleEdit:function(){var e=this;this.form&&this.form.contactId?function(e,t){return Object(a.a)({url:"mpi/v1/contactinfo/"+e,method:t||"post"})}(this.form.contactId).then(function(t){e.form=t.data,e.dialogFormVisible=!0,e.dialogStatus="update"}).catch(function(t){e.$notify({title:"获取失败",message:t.message,type:"error",duration:5e3})}):this.$message({message:"操作前请先选择一条数据!"})},handleDelete:function(){var e=this;this.form&&this.form.contactId?this.$confirm("此操作将永久删除相关数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){(function(e){return Object(a.a)({url:"mpi/v1/contactinfo/"+e,method:"delete"})})(e.form.contactId).then(function(t){e.dialogFormVisible=!1,e.getList(),e.$notify({title:"成功",message:"删除成功!",type:"success",duration:2e3})}).catch(function(t){e.$notify({title:"删除失败",message:t.message,type:"error",duration:5e3})})}).catch(function(e){}):this.$message({message:"操作前请先选择一条数据!"})},create:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;(function(e){return Object(a.a)({url:"mpi/v1/contactinfo",method:"post",data:e})})(t.form).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}).catch(function(e){t.$notify({title:"新建失败",message:e.message,type:"error",duration:5e3})})})},cancel:function(e){this.dialogFormVisible=!1,"form"===e&&this.$refs.form.resetFields()},update:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.dialogFormVisible=!1,function(e){return Object(a.a)({url:"mpi/v1/contactinfo",method:"put",data:e})}(t.form).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})}).catch(function(e){t.$notify({title:"更新信息失败",message:e.message,type:"error",duration:5e3})})})},resetForm:function(){this.form={mpiId:this.mpiId}},sortChange:function(e){this.pageModule.sortOrder=e.order&&"descending"===e.order?"DESC":"ASC",this.pageModule.sortName=e.prop,this.pageModule.sortName&&this.getList()},rowClick:function(e,t,i){this.form=e}}},o=(i("tU3I"),i("KHd+")),s=Object(o.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-button-group",[i("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"1",expression:"'1'"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{round:"",type:"primary",icon:"el-icon-circle-plus",size:"mini"},on:{click:e.getList}},[e._v(e._s(e.$t("table.refresh")))]),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"1",expression:"'1'"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{disabled:e.disabled,round:"",type:"primary",icon:"el-icon-circle-plus",size:"mini"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("table.add")))]),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"1",expression:"'1'"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{disabled:e.disabled,round:"",type:"success",icon:"el-icon-edit",size:"mini"},on:{click:function(t){e.handleEdit()}}},[e._v(e._s(e.$t("table.edit"))+"\n      ")]),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"1",expression:"'1'"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{disabled:e.disabled,round:"",type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(t){e.handleDelete()}}},[e._v(e._s(e.$t("table.delete"))+"\n      ")])],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"default-sort":{prop:"modifyTime",order:"descending"},disabled:e.disabled,"element-loading-text":"努力加载中",border:"",fit:"","highlight-current-row":"",size:"mini"},on:{"sort-change":e.sortChange,"row-click":e.rowClick}},[i("el-table-column",{attrs:{align:"center",label:"联系类型",sortable:"",prop:"contactType"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e.getDicNameValue(e.contactTypeOptions,t.row.contactType)))])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"联系号码",sortable:"",prop:"contactPhone"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"修改时间",sortable:"",prop:"modifyTime"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"修改单位",sortable:"",prop:"modifyUnit"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"修改时间",sortable:"",prop:"modifier"}})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":e.pageModule.pageNumber,"page-sizes":e.pageSizes,"page-size":e.pageModule.pageSize,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){e.$set(e.pageModule,"pageNumber",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"450px","append-to-body":""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"联系类型",prop:"contactType"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择联系类型"},model:{value:e.form.contactType,callback:function(t){e.$set(e.form,"contactType",t)},expression:"form.contactType"}},e._l(e.contactTypeOptions,function(e){return i("el-option",{key:e.name,attrs:{label:e.value,value:e.name}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"联系号码",prop:"contactPhone"}},[i("el-input",{attrs:{placeholder:"联系号码"},model:{value:e.form.contactPhone,callback:function(t){e.$set(e.form,"contactPhone",t)},expression:"form.contactPhone"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{round:"",icon:"el-icon-circle-close"},on:{click:function(t){e.cancel("form")}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?i("el-button",{attrs:{round:"",type:"primary",icon:"el-icon-circle-check",autofocus:""},on:{click:function(t){e.create("form")}}},[e._v(e._s(e.$t("table.confirm")))]):i("el-button",{attrs:{round:"",type:"primary",icon:"el-icon-circle-check",autofocus:""},on:{click:function(t){e.update("form")}}},[e._v(e._s(e.$t("table.update")))])],1)],1)],1)},[],!1,null,"5d063a05",null);s.options.__file="index.vue";t.default=s.exports},qf6I:function(e,t,i){},tU3I:function(e,t,i){"use strict";var a=i("qf6I");i.n(a).a}}]);