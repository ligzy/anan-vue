(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7b81","chunk-4da8"],{"2GEI":function(e,t,r){"use strict";r.d(t,"g",function(){return a}),r.d(t,"k",function(){return l}),r.d(t,"f",function(){return u}),r.d(t,"j",function(){return c}),r.d(t,"e",function(){return d}),r.d(t,"d",function(){return f}),r.d(t,"l",function(){return m}),r.d(t,"a",function(){return p}),r.d(t,"h",function(){return h}),r.d(t,"c",function(){return g}),r.d(t,"b",function(){return v}),r.d(t,"i",function(){return b});var i=r("t3Un"),n=r("SbkY"),o=r("NFKh"),s=r.n(o);function a(e){return Object(i.a)({url:"/platform/v1/user/roles/"+e,method:"post"})}function l(e,t){return Object(i.a)({url:"/platform/v1/user/roles/"+e,method:"put",data:t})}function u(e){return Object(i.a)({url:"/platform/v1/user/permissions/"+e,method:"post"})}function c(e,t){return Object(i.a)({url:"/platform/v1/user/permissions/"+e,method:"put",data:t})}function d(e){return Object(i.a)({url:"/platform/v1/user/pageList",method:"post",data:e})}function f(e){return Object(i.a)({url:"/platform/v1/user/childList/organizId/"+e,method:"post"})}function m(e){return Object(i.a)({url:"/platform/v1/user/resetPassword/"+e,method:"post"})}function p(e){var t=s.a.lib.WordArray.random(16).toString(s.a.enc.Hex),r=s.a.lib.WordArray.random(16).toString(s.a.enc.Hex),o=s.a.lib.WordArray.random(16).toString(s.a.enc.Hex),a={a:Object(n.a)(128,999,r,t,o,e.password),b:Object(n.a)(128,999,r,t,o,e.confirmPassword1),c:o,d:t,e:r,f:128,g:999,h:Object(n.a)(128,999,r,t,o,e.confirmPassword2),i:e.id};return Object(i.a)({url:"/platform/v1/user/changePassword",method:"post",params:a})}function h(e){return Object(i.a)({url:"/platform/v1/user/",method:"post",data:e})}function g(e,t){return Object(i.a)({url:"/platform/v1/user/"+e,method:t||"post"})}function v(e){return Object(i.a)({url:"/platform/v1/user/"+e,method:"delete"})}function b(e){return Object(i.a)({url:"/platform/v1/user",method:"put",data:e})}},"7r7F":function(e,t,r){"use strict";r.r(t);var i=r("4d7F"),n=r.n(i),o=r("QbLZ"),s=r.n(o),a=r("wf06"),l=r("2GEI"),u=r("xGbm"),c=r("8WsT"),d=r("L2JU"),f=r("DQzz"),m=r("HGrs"),p={name:"SystemRole",components:{grantPermission:f.default},filters:{statusFilter:function(e){return{0:"有效",1:"禁用"}[e]},dateFormatFilter:function(e,t){return Object(u.a)(e,t||"yyyy-MM-dd HH:mm:ss")}},data:function(){return{oraganizOptions:[],organizList:[],roleUsers:[],allUsers:[],filterPermissionText:"",versionId:-1,topId:-1,checkedKeys:[],expandKeys:[],defaultProps:{children:"children",label:"name",isLeaf:"leaf",disabled:"disabled"},roleList:null,total:null,listLoading:!0,pageModule:{pageNumber:1,pageSize:10,searchText:"",sortName:"",sortOrder:""},pageSizes:[5,10,25,50,100],form:{},rules:{name:[{required:!0,message:"角色名称",trigger:"blur"},{min:1,max:64,message:"长度在 1 到 64 个字符",trigger:"blur"}],organizId:[{required:!0,message:"请选择机构",trigger:"blur"}],value:[{required:!0,message:"角色标识",trigger:"blur"},{min:1,max:64,message:"长度在 1 到 64 个字符",trigger:"blur"}]},statusOptions:[0,1],rolesOptions:void 0,dialogFormVisible:!1,dialogPermissionVisible:!1,dialogRoleUserVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建",permission:"分配权限",user:"分配用户"},isDisabled:{0:!1,1:!0}}},computed:s()({},Object(d.b)(["permissions","userInfo"])),watch:{filterPermissionText:function(e){this.$refs.permissionTree.filter(e)}},mounted:function(){var e=this;(!this.organizList||this.organizList.length<1)&&this.loadOrganizAllChild(this.userInfo.organizId),this.asyncOrganizParameterValue("DefaultPageSize","10","表格默认每页记录数",function(t){e.pageModule.pageSize=parseInt(t)}),this.asyncOrganizParameterValue("DefaultPageSizes","5,10,25,50,100","表格默认每页记录数可选择项",function(t){var r=t.split(",");e.pageSizes=[];for(var i=0;i<r.length;i++)e.pageSizes[i]=parseInt(r[i])})},methods:{roleUserfilterMethod:function(e,t){return t.usercode.indexOf(e)>-1||t.username.indexOf(e)>-1},getList:function(){var e=this;this.listLoading=!0,Object(a.d)(this.pageModule,this.userInfo.organizId).then(function(t){e.roleList=t.data.rows,e.total=t.data.total,e.listLoading=!1}).catch(function(t){e.$notify({title:"获取角色列表失败",message:t.message,type:"error",duration:5e3})})},loadOrganizAllChild:function(e){var t=this;Object(c.d)(e).then(function(e){t.organizList=e.data||[],t.oraganizOptions=t.organizList}).catch(function(e){t.$notify({title:"查询后代机构信息失败",message:e.message,type:"error",duration:5e3})})},organizSelectFilter:function(e){this.oraganizOptions=this.organizList.filter(function(t,r){return-1!==t.name.indexOf(e)||-1!==t.id.indexOf(e)||-1!==t.fullname.indexOf(e)})},getOrganizName:function(e,t){var r=this.organizList.filter(function(t){return t.id===e.organizId});return!r||r.length<1?e.organizId:r[0].fullname||r[0].name||e.organizId},handleFilter:function(){this.pageModule.pageNumber=1,this.getList()},handleSizeChange:function(e){this.pageModule.pageSize=e,this.getList()},handleCurrentChange:function(e){this.pageModule.pageNumber=e,this.getList()},handleAdd:function(){this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0},handleEdit:function(){var e=this;this.form&&this.form.id&&this.form.name?Object(a.b)(this.form.id).then(function(t){var r=t.data;r&&1===r.builtIn?e.$message({message:"系统内置角色不能修改!"}):(e.form=t.data,e.dialogFormVisible=!0,e.dialogStatus="update")}).catch(function(t){e.$notify({title:"获取角色失败",message:t.message,type:"error",duration:5e3})}):this.$message({message:"操作前请先选择一条数据!"})},handleRolePermission:function(e){var t=this;Object(a.e)(e.id).then(function(r){Object(c.b)(e.organizId).then(function(i){t.topId=i.data.topId,t.form=e,Object(c.c)(t.topId).then(function(e){var i=e.data.versionId;t.$refs.grantPermission.initData(t,t.form,r.data,"49",i!==t.versionId),t.versionId=i}).catch(function(e){t.$notify({title:"获取版本信息失败",message:e.message,type:"error",duration:5e3})})}).catch(function(e){t.$notify({title:"获取机构信息失败",message:e.message,type:"error",duration:5e3})})}).catch(function(e){t.$notify({title:"获取角色权限失败",message:e.message,type:"error",duration:5e3})})},updatePermession:function(e,t){for(var r=[],i=0;i<t.length;i++){var o={id:void 0,roleId:e,permissionId:t[i]};r.push(o)}return new n.a(function(t,i){Object(a.i)(e,r).then(function(){t(!0)}).catch(function(e){i(e)})})},listChildPermissions:function(e){var t=this;return new n.a(function(r,i){Object(m.d)(e,t.versionId).then(function(e){r(e)}).catch(function(e){i(e)})})},listOrganizUser:function(){var e=this;Object(l.d)(this.form.organizId).then(function(t){e.allUsers=t.data}).catch(function(t){e.$notify({title:"获取所有用户失败",message:t.message,type:"error",duration:5e3})})},handleRoleUser:function(e){var t=this;Object(a.f)(e.id).then(function(r){t.dialogStatus="user",t.dialogRoleUserVisible=!0,t.form=e,t.listOrganizUser();var i=r.data;t.roleUsers=[];for(var n=0;n<i.length;n++){var o=i[n].id;t.roleUsers.push(o)}}).catch(function(e){t.$notify({title:"获取角色用户失败",message:e.message,type:"error",duration:5e3})})},updateRoleUser:function(e,t){for(var r=this,i=[],n=0;n<this.roleUsers.length;n++){var o={userId:this.roleUsers[n],roleId:this.form.id,organizId:void 0};i.push(o)}Object(a.j)(this.form.id,i).then(function(e){r.dialogRoleUserVisible=!1,r.$notify({title:"成功",message:"修改角色用户成功!",type:"success",duration:2e3})}).catch(function(e){r.$notify({title:"更新角色用户失败",message:e.message,type:"error",duration:5e3})})},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},handleDelete:function(){var e=this;this.form&&this.form.id&&this.form.name?this.form&&1===this.form.builtIn?this.$message({message:"系统内置角色不能删除!"}):this.$confirm("此操作将永久删除角色名( "+this.form.name+" )的相关数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.a)(e.form.id).then(function(t){e.dialogFormVisible=!1,e.getList(),e.$notify({title:"成功",message:"删除角色成功!",type:"success",duration:2e3})}).catch(function(t){e.$notify({title:"删除角色失败",message:t.message,type:"error",duration:5e3})})}).catch(function(e){}):this.$message({message:"操作前请先选择一条数据!"})},create:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;Object(a.g)(t.form).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}).catch(function(e){t.$notify({title:"新建角色失败",message:e.message,type:"error",duration:5e3})})})},cancel:function(e){this.dialogFormVisible=!1,this.dialogPermissionVisible=!1,this.dialogRoleUserVisible=!1,"form"===e&&this.$refs[e].resetFields()},update:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.dialogFormVisible=!1,Object(a.h)(t.form).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})}).catch(function(e){t.$notify({title:"更新角色信息失败",message:e.message,type:"error",duration:5e3})})})},resetForm:function(){this.form={id:void 0,organizId:void 0,name:void 0,value:void 0,tips:void 0,status:0,builtIn:0}},sortChange:function(e){this.pageModule.sortOrder=e.order&&"descending"===e.order?"DESC":"ASC",this.pageModule.sortName=e.prop,this.pageModule.sortName&&this.getList()},rowClick:function(e,t,r){this.form=e}}},h=(r("sF7O"),r("KHd+")),g=Object(h.a)(p,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container calendar-list-container"},[r("div",{staticClass:"filter-container"},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("cdp_role.searchText")},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.pageModule.searchText,callback:function(t){e.$set(e.pageModule,"searchText",t)},expression:"pageModule.searchText"}}),e._v(" "),r("el-button-group",[r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{round:"",type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n        "+e._s(e.$t("table.search"))+"\n      ")]),e._v(" "),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"24",expression:"'24'"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{round:"",type:"primary",icon:"el-icon-circle-plus"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("table.add"))+"\n      ")]),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"25",expression:"'25'"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{round:"",type:"success",icon:"el-icon-edit"},on:{click:function(t){e.handleEdit()}}},[e._v(e._s(e.$t("table.edit"))+"\n      ")]),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"26",expression:"'26'"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{round:"",type:"danger",icon:"el-icon-delete"},on:{click:function(t){e.handleDelete()}}},[e._v(e._s(e.$t("table.delete"))+"\n      ")])],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.roleList,"default-sort":{prop:"value",order:"descending"},"element-loading-text":"努力加载中",border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange,"row-click":e.rowClick}},[r("el-table-column",{attrs:{label:e.$t("cdp_role.value.label"),align:"center",sortable:"",prop:"value"}}),e._v(" "),r("el-table-column",{attrs:{label:e.$t("cdp_role.name.label"),align:"center",sortable:"",prop:"name"}}),e._v(" "),r("el-table-column",{attrs:{label:e.$t("cdp_role.organizId.label"),formatter:e.getOrganizName,prop:"organizId",align:"center","show-overflow-tooltip":"",sortable:""}}),e._v(" "),r("el-table-column",{attrs:{label:e.$t("cdp_role.createTime.label"),align:"center",sortable:"",prop:"createTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e._f("dateFormatFilter")(t.row.createTime,"yyyy-MM-dd HH:mm:ss")))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:e.$t("cdp_role.updateTime.label"),align:"center",sortable:"",prop:"updateTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e._f("dateFormatFilter")(t.row.updateTime,"yyyy-MM-dd HH:mm:ss")))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:e.$t("cdp_role.status.label"),align:"center","class-name":"status-col",width:"80",sortable:"",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",[e._v(e._s(e._f("statusFilter")(t.row.status)))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:e.$t("table.permission"),align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{round:"",size:"mini",type:"primary"},on:{click:function(r){e.handleRoleUser(t.row)}}},[e._v("\n          "+e._s(e.$t("table.user"))+"\n        ")]),e._v(" "),r("el-button",{attrs:{round:"",size:"mini",type:"warning"},on:{click:function(r){e.handleRolePermission(t.row)}}},[e._v("\n          "+e._s(e.$t("table.permission"))+"\n        ")])]}}])})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[r("el-pagination",{attrs:{"current-page":e.pageModule.pageNumber,"page-sizes":e.pageSizes,"page-size":e.pageModule.pageSize,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){e.$set(e.pageModule,"pageNumber",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),r("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:e.$t("cdp_role.value.label"),prop:"value"}},[r("el-input",{attrs:{placeholder:e.$t("cdp_role.value.placeholder")},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("cdp_role.name.label"),prop:"name"}},[r("el-input",{attrs:{placeholder:e.$t("cdp_role.name.placeholder")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("cdp_role.organizId.label"),prop:"organizId"}},[r("el-select",{staticClass:"filter-item",attrs:{placeholder:e.$t("cdp_role.organizId.placeholder"),"filter-method":e.organizSelectFilter,filterable:""},model:{value:e.form.organizId,callback:function(t){e.$set(e.form,"organizId",t)},expression:"form.organizId"}},e._l(e.oraganizOptions,function(t){return r("el-option",{key:t.id,attrs:{label:t.fullname||t.name,value:t.id,disabled:e.isDisabled[t.status]}},[r("span",{staticStyle:{float:"left",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.code))]),e._v(" "),r("span",{staticStyle:{float:"right"}},[e._v(e._s(t.fullname||t.name))])])}))],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("cdp_role.tips.label"),prop:"tips"}},[r("el-input",{attrs:{placeholder:e.$t("cdp_role.tips.placeholder")},model:{value:e.form.tips,callback:function(t){e.$set(e.form,"tips",t)},expression:"form.tips"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("cdp_role.status.label"),prop:"status"}},[r("el-select",{staticClass:"filter-item",attrs:{placeholder:e.$t("cdp_role.status.placeholder")},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,function(t){return r("el-option",{key:t,attrs:{label:e._f("statusFilter")(t),value:t}})}))],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{round:"",icon:"el-icon-circle-close"},on:{click:function(t){e.cancel("form")}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?r("el-button",{attrs:{round:"",type:"primary",icon:"el-icon-circle-check",autofocus:""},on:{click:function(t){e.create("form")}}},[e._v(e._s(e.$t("table.confirm"))+"\n      ")]):r("el-button",{attrs:{round:"",type:"primary",icon:"el-icon-circle-check",autofocus:""},on:{click:function(t){e.update("form")}}},[e._v("\n        "+e._s(e.$t("table.update"))+"\n      ")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.textMap[e.dialogStatus]+" ---\x3e "+e.form.name,visible:e.dialogRoleUserVisible,width:"550px"},on:{"update:visible":function(t){e.dialogRoleUserVisible=t}}},[r("el-transfer",{ref:"roleUser",attrs:{"filter-method":e.roleUserfilterMethod,props:{key:"id",label:"username"},titles:["未拥有用户","已拥有用户"],data:e.allUsers,filterable:""},model:{value:e.roleUsers,callback:function(t){e.roleUsers=t},expression:"roleUsers"}}),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{round:"",icon:"el-icon-circle-close"},on:{click:function(t){e.cancel("roleUser")}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"43",expression:"'43'"}],attrs:{round:"",type:"primary",icon:"el-icon-circle-check"},on:{click:function(t){e.updateRoleUser()}}},[e._v(e._s(e.$t("table.update"))+"\n      ")])],1)],1),e._v(" "),r("grantPermission",{ref:"grantPermission"})],1)},[],!1,null,"27a9d3df",null);g.options.__file="index.vue";t.default=g.exports},"8Pae":function(e,t,r){"use strict";var i=r("AR/1");r.n(i).a},"8WsT":function(e,t,r){"use strict";r.d(t,"h",function(){return n}),r.d(t,"e",function(){return o}),r.d(t,"d",function(){return s}),r.d(t,"f",function(){return a}),r.d(t,"b",function(){return l}),r.d(t,"a",function(){return u}),r.d(t,"g",function(){return c}),r.d(t,"c",function(){return d});var i=r("t3Un");function n(e){return Object(i.a)({url:"/platform/v1/organiz/tree/"+e,method:"post"})}function o(e){return Object(i.a)({url:"/platform/v1/organiz/listChild/"+e,method:"post"})}function s(e){return Object(i.a)({url:"/platform/v1/organiz/listAllChild/"+e,method:"post"})}function a(e){return Object(i.a)({url:"/platform/v1/organiz/",method:"post",data:e})}function l(e,t){return Object(i.a)({url:"/platform/v1/organiz/"+e,method:t||"post"})}function u(e){return Object(i.a)({url:"/platform/v1/organiz/"+e,method:"delete"})}function c(e){return Object(i.a)({url:"/platform/v1/organiz",method:"put",data:e})}function d(e,t){return Object(i.a)({url:"/platform/v1/organiz/auth/"+e,method:t||"post"})}},"AR/1":function(e,t,r){},DQzz:function(e,t,r){"use strict";r.r(t);var i=r("QbLZ"),n=r.n(i),o=r("L2JU"),s={name:"GrantPermission",data:function(){return{parent:{},form:{},title:"分配权限",expandKeys:[],checkedKeys:[],dialogPermissionVisible:!1,hackReset:!1,permissionId:"-1",defaultProps:{children:"children",label:"name",isLeaf:"leaf",disabled:"disabled"},filterPermissionText:""}},computed:n()({},Object(o.b)(["permissions"])),watch:{filterPermissionText:function(e){this.$refs.permissionTree.filter(e)}},methods:{hasPermission:function(e){if(!e||"string"!=typeof e)throw new Error("need permission! Like \"'1'\"");var t=this.permissions[e]||!1;return!!t},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},updatePermession:function(e,t){var r=this,i=this.$refs.permissionTree.getCheckedKeys().sort(),n=this.$refs.permissionTree.getHalfCheckedKeys().sort(),o=this.checkedKeys.sort(),s=this.expandKeys.sort(),a=i.concat(n.filter(function(e){return-1===i.indexOf(e)})).sort(),l=o.filter(function(e){return-1===s.indexOf(e)}),u=l.concat(a.filter(function(e){return-1===l.indexOf(e)})).sort();u.toString()!==o.toString()?this.parent.updatePermession(e,u).then(function(){r.dialogPermissionVisible=!1,r.$notify({title:"成功",message:"修改权限成功!",type:"success",duration:2e3})}).catch(function(e){r.$notify({title:"更新权限失败",message:e.message,type:"error",duration:5e3})}):this.dialogPermissionVisible=!1},getCheckedKeys:function(e){var t=[];if(!e||e.length<1)return t;for(var r=0;r<e.length;r++)t.push(e[r].permissionId);return t},initData:function(e,t,r,i,n){var o=this;this.parent=e,this.form=t,this.permissionId=i,this.checkedKeys=this.getCheckedKeys(r),this.$refs&&this.$refs.permissionTree&&this.$refs.permissionTree.setCheckedKeys(this.checkedKeys),this.dialogPermissionVisible=!0,n?(this.hackReset=!1,this.$nextTick(function(){o.hackReset=!0})):this.hackReset=!0,this.title="分配权限 -> "+t.name},cancel:function(){this.dialogPermissionVisible=!1},loadChildPermissions:function(e,t){var r=this,i=0;0!==e.level&&(i=e.data.id),this.parent.listChildPermissions(i).then(function(e){for(var i=e.data||[],n=0;n<i.length;n++){var o=i[n].id;r.expandKeys.push(o)}return t(i)}).catch(function(e){r.$notify({title:"加载子节点失败",message:e.message,type:"error",duration:5e3})})},close:function(){this.parent={},this.form={},this.checkedKeys=[],this.title="",this.expandKeys=[],this.dialogPermissionVisible=!1}}},a=(r("8Pae"),r("KHd+")),l=Object(a.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.title,visible:e.dialogPermissionVisible,width:"550px"},on:{"update:visible":function(t){e.dialogPermissionVisible=t},close:e.close}},[r("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterPermissionText,callback:function(t){e.filterPermissionText=t},expression:"filterPermissionText"}}),e._v(" "),e.hackReset?r("el-tree",{ref:"permissionTree",staticClass:"filter-tree",attrs:{"default-checked-keys":e.checkedKeys,load:e.loadChildPermissions,props:e.defaultProps,"filter-node-method":e.filterNode,"default-expanded-keys":[1],"node-key":"id","highlight-current":"","show-checkbox":"",lazy:"","check-strictly":""}}):e._e(),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{round:"",icon:"el-icon-circle-close"},on:{click:function(t){e.cancel()}}},[e._v(e._s(e.$t("table.cancel"))+"\n    ")]),e._v(" "),e.hasPermission(e.permissionId)?r("el-button",{attrs:{round:"",type:"primary",icon:"el-icon-circle-check"},on:{click:function(t){e.updatePermession(e.form.id)}}},[e._v("\n      "+e._s(e.$t("table.update"))+"\n    ")]):e._e()],1)],1)},[],!1,null,"1a73b1d3",null);l.options.__file="grantPermission.vue";t.default=l.exports},HGrs:function(e,t,r){"use strict";r.d(t,"e",function(){return n}),r.d(t,"c",function(){return o}),r.d(t,"g",function(){return s}),r.d(t,"b",function(){return a}),r.d(t,"a",function(){return l}),r.d(t,"h",function(){return u}),r.d(t,"f",function(){return c}),r.d(t,"i",function(){return d}),r.d(t,"d",function(){return f});var i=r("t3Un");function n(e){return Object(i.a)({url:"platform/v1/version/pageList",method:"post",data:e})}function o(){return Object(i.a)({url:"platform/v1/version/list",method:"post"})}function s(e){return Object(i.a)({url:"platform/v1/version",method:"post",data:e})}function a(e,t){return Object(i.a)({url:"platform/v1/version/"+e,method:t||"post"})}function l(e){return Object(i.a)({url:"platform/v1/version/"+e,method:"delete"})}function u(e){return Object(i.a)({url:"platform/v1/version",method:"put",data:e})}function c(e){return Object(i.a)({url:"/platform/v1/version/permissions/"+e,method:"post"})}function d(e,t){return Object(i.a)({url:"/platform/v1/version/permissions/"+e,method:"put",data:t})}function f(e,t){return Object(i.a)({url:"platform/v1/version/listChild/"+e+"?versionId="+t,method:"post"})}},KCEP:function(e,t,r){},sF7O:function(e,t,r){"use strict";var i=r("KCEP");r.n(i).a},wf06:function(e,t,r){"use strict";r.d(t,"f",function(){return n}),r.d(t,"j",function(){return o}),r.d(t,"d",function(){return s}),r.d(t,"e",function(){return a}),r.d(t,"i",function(){return l}),r.d(t,"c",function(){return u}),r.d(t,"g",function(){return c}),r.d(t,"b",function(){return d}),r.d(t,"a",function(){return f}),r.d(t,"h",function(){return m});var i=r("t3Un");function n(e){return Object(i.a)({url:"/platform/v1/role/users/"+e,method:"post"})}function o(e,t){return Object(i.a)({url:"/platform/v1/role/users/"+e,method:"put",data:t})}function s(e,t){return Object(i.a)({url:"/platform/v1/role/pageList/organizId/"+t,method:"post",data:e})}function a(e){return Object(i.a)({url:"/platform/v1/role/permissions/"+e,method:"post"})}function l(e,t){return Object(i.a)({url:"/platform/v1/role/permissions/"+e,method:"put",data:t})}function u(e){return Object(i.a)({url:"/platform/v1/role/childList/organizId/"+e,method:"post"})}function c(e){return Object(i.a)({url:"/platform/v1/role/",method:"post",data:e})}function d(e,t){return Object(i.a)({url:"/platform/v1/role/"+e,method:t||"post"})}function f(e){return Object(i.a)({url:"/platform/v1/role/"+e,method:"delete"})}function m(e){return Object(i.a)({url:"/platform/v1/role",method:"put",data:e})}},xGbm:function(e,t,r){"use strict";function i(e,t){if(!e||""===e)return e;if("string"==typeof e&&(e=new Date(e)),!(e instanceof Date))return e;/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var r={"M+":e.getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var i in r)if(new RegExp("("+i+")").test(t)){var o=r[i]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?o:n(o))}return t}function n(e){return("00"+e).substr(e.length)}r.d(t,"a",function(){return i})}}]);