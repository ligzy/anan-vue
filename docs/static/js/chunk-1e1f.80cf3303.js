(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1e1f","Uf/o"],{CedF:function(e,t,a){"use strict";var s=a("gBgV");a.n(s).a},"Uf/o":function(e,t,a){var s={"./404.svg":"oUrx","./bug.svg":"F3lI","./button.svg":"TtTH","./chart.svg":"yCkv","./clipboard.svg":"vDVG","./component.svg":"VtY+","./dashboard.svg":"94Jb","./dictionary.svg":"MKf/","./directory.svg":"6DCX","./document.svg":"/SjJ","./documentation.svg":"kPu2","./drag.svg":"m7++","./edit.svg":"qkZ8","./email.svg":"y7eQ","./example.svg":"MMMJ","./excel.svg":"ZZmv","./eye.svg":"TfVu","./favatar.svg":"fNvi","./form.svg":"6xvN","./guide.svg":"ZoO1","./icon.svg":"nZHn","./international.svg":"F9+T","./language.svg":"JYDz","./link.svg":"GPBF","./list.svg":"MokB","./lock.svg":"qwAt","./mavatar.svg":"Vo8O","./menu.svg":"vT3+","./message.svg":"R/8a","./money.svg":"MEYL","./monitor.svg":"zex5","./nested.svg":"3PhE","./organization.svg":"4aEQ","./parameter.svg":"Esv5","./password.svg":"Kj24","./people.svg":"0Fbn","./peoples.svg":"LxGF","./permision.svg":"zyXD","./permission.svg":"OXmT","./qq.svg":"FDDl","./role.svg":"Ugzh","./root.svg":"ZQu8","./service.svg":"TgQf","./shoppingCard.svg":"xsEB","./size.svg":"hkRB","./star.svg":"cIpu","./tab.svg":"j7e1","./table.svg":"R/Hx","./theme.svg":"5TQQ","./tree.svg":"k80C","./user.svg":"s7Vf","./user2.svg":"GXZd","./wechat.svg":"gNoN","./zip.svg":"iqZD"};function r(e){var t=o(e);return a(t)}function o(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="Uf/o"},XdKy:function(e,t,a){"use strict";a.r(t);var s=a("kYp+"),r=a("slWK"),o={name:"DevelopmentPermission",components:{IconsSelect:a("QVxH").default},data:function(){return{parent:{},list:null,total:null,formUpdate:!0,appNameUpdate:!0,hackReset:!0,formAdd:!0,formStatus:"",showElement:!1,typeOptions:[],methodOptions:[],appOptions:[],listQuery:{name:void 0},treeData:[],defaultExpandedKeys:[1],defaultProps:{children:"children",label:"vname",isLeaf:"leaf"},labelPosition:"right",form:{icon:"permission",methodArray:[]},currentId:-1,formRules:{url:[{pattern:/^[A-Za-z0-9/:.@?=& \\-]+$/,message:"资源路径只支持大小写字母 数字 & / : . @ - ? ="}],path:[{pattern:/^[A-Za-z0-9/?*. \\-]+$/,message:"匹配路径只支持大小写字母 数字 / . * - ?"}],name:[{required:!0,message:"名称不能为空",trigger:"blur"},{min:1,max:64,message:"长度在 1 到 64 个字符",trigger:"blur"},{pattern:/^[^`~!@#$^&*()=|{}'\\":;,\[\].<>/?！￥…（）—【】‘；：”“。，、？%+_·-]{1,64}$/,message:"名称不能包含特殊字符,长度不超过64位"}],code:[{required:!0,message:"编码不能为空",trigger:"blur"},{min:1,max:64,message:"长度在 1 到 64 个字符",trigger:"blur"},{pattern:/^[A-Z][a-zA-Z0-9]{1,64}$/,message:"权限编码只能大写字母开始，大小写字母、数字组合而成,长度不超过64位"}]}}},mounted:function(){var e=this;this.asyncLoadDictionaryByCode(13,function(t){e.typeOptions=t}),this.asyncLoadDictionaryByCode(12,function(t){e.methodOptions=t}),Object(r.a)().then(function(t){e.appOptions=t.data}).catch(function(t){e.$notify({title:"加载应用服务列表失败",message:t.message,type:"error",duration:5e3})}),this.$refs.iconsSelect.init(this.setAvatar),this.resetForm()},methods:{handleSelectAvatar:function(){this.formUpdate||this.$refs.iconsSelect.show()},setAvatar:function(e){this.form.icon=e},getFileName:function(e){var t=e;if(e){var a=e.lastIndexOf("/");if(a>0){var s=e.substr(a+1),r=s.lastIndexOf(".");r>0&&(t=s.substr(0,r))}}return t},loadChild:function(e,t){var a=this,r=0;0!==e.level&&(r=e.data.id),Object(s.c)(r).then(function(e){0===r&&(a.defaultExpandedKeys[0]=e.data[0].id);var s=e.data;if(s&&s.length>0)for(var o=0;o<s.length;o++)s[o].vname=a.getVname(s[o]);return t(e.data||[])}).catch(function(e){a.$notify({title:"加载子节点失败",message:e.message,type:"error",duration:5e3})})},getVname:function(e){return!this.typeOptions||this.typeOptions.length<1?e.name+"-"+e.id:e.name+"    -    "+this.typeOptions[e.type].value+"-"+e.id},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},getNodeData:function(e){var t=this;if(e.id!==this.currentId){this.formUpdate||(this.formStatus="update"),Object(s.b)(e.id).then(function(e){t.form=e.data,t.form.status=t.form.status+"",t.form.methodArray=[],t.form.method&&(t.form.methodArray=t.form.method.split(",")),t.form.icon||(t.form.icon="")}).catch(function(e){t.$notify({title:"获取权限失败",message:e.message,type:"error",duration:5e3})}),this.currentId=e.id,this.showElement=!0;var a=this.$refs.permissionTree.getNode(e.pid);a?this.parent=a.data:(this.parent=e,this.formStatus="",this.formUpdate=!0)}},handlerUpdate:function(){this.$refs.permissionTree.getNode(this.form.pid)?this.form.id&&(this.formUpdate=!1,this.formStatus="update"):this.$message({message:"根节点不能修改"})},handlerRefresh:function(){var e=this;this.hackReset=!1,this.$nextTick(function(){e.hackReset=!0})},handlerAdd:function(){this.parent=this.form,this.parent.id?0!==this.parent.type?(this.resetForm(),this.formUpdate=!1,this.formStatus="create"):this.$message({message:"按钮下不能再新增子节点"}):this.$message({message:"请选择一个父节点再新增子节点"})},handleDelete:function(){var e=this;if(this.form&&this.form.id){var t=this.$refs.permissionTree.getNode(this.form.id);t&&t.childNodes&&t.childNodes.length>0?this.$message({message:"该节点还存在子节点不能直接删除"}):this.$confirm("此操作将永久删除节点[ "+this.form.name+" ], 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.a)(e.currentId).then(function(){e.$refs.permissionTree.remove(e.currentId),e.resetForm(),e.onCancel(),e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})}).catch(function(t){e.$notify({title:"删除权限失败",message:t.message,type:"error",duration:5e3})})}).catch(function(e){})}else this.$message({message:"请先选择一个要删除的节点!"})},update:function(){var e=this;this.form.method=this.form.methodArray.join(","),Object(s.e)(this.form).then(function(t){var a=e.$refs.permissionTree.getNode(e.form.id);a&&(t.data.vname=e.getVname(t.data),a.data=t.data),e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})}).catch(function(t){e.$notify({title:"更新权限失败",message:t.message,type:"error",duration:5e3})})},create:function(){var e=this;this.form.method=this.form.methodArray.join(","),Object(s.d)(this.form).then(function(t){var a=e.$refs.permissionTree.getNode(e.form.pid);t.data.vname=e.getVname(t.data),e.$refs.permissionTree.append(t.data,a),a.data.children=null,e.resetForm(),e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}).catch(function(t){e.$notify({title:"创建权限失败",message:t.message,type:"error",duration:5e3})})},onCancel:function(){this.formUpdate=!0,this.formStatus=""},resetForm:function(){var e=this.parent.code||"",t=void 0,a=1;if(this.$refs&&this.$refs.permissionTree){var s=this.$refs.permissionTree.getNode(this.parent.id||0);s&&(t=s.childNodes.length+1,1===s.level&&(e=""),t>1&&(a=s.childNodes[0].data.type))}var r="permission";switch(a){case 0:r="button";break;case 1:r="menu";break;case 2:r="link";break;case 3:r="directory";break;case 4:r="link";break;case 5:r="service"}this.form={code:e,name:void 0,id:void 0,pid:this.currentId,url:"",sort:t,type:a,status:"0",icon:r,level:this.parent.level+1,method:void 0,methodArray:[],appName:this.parent.appName}}}},i=(a("CedF"),a("KHd+")),n=Object(i.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-button-group",[a("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"84",expression:"'84'"}],staticClass:"filter-item",attrs:{round:"",type:"primary",icon:"el-icon-refresh"},on:{click:e.handlerRefresh}},[e._v(e._s(e.$t("table.refresh")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"8",expression:"'8'"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{round:"",type:"primary",icon:"el-icon-circle-plus"},on:{click:e.handlerAdd}},[e._v(e._s(e.$t("table.add")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"9",expression:"'9'"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{round:"",type:"success",icon:"el-icon-edit"},on:{click:e.handlerUpdate}},[e._v(e._s(e.$t("table.edit")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"10",expression:"'10'"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{round:"",type:"danger",icon:"el-icon-delete"},on:{click:e.handleDelete}},[e._v(e._s(e.$t("table.delete")))])],1)],1),e._v(" "),a("el-row",[a("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:8}},[e.hackReset?a("el-tree",{ref:"permissionTree",staticClass:"filter-tree",attrs:{load:e.loadChild,"default-expanded-keys":e.defaultExpandedKeys,"filter-node-method":e.filterNode,props:e.defaultProps,"node-key":"id","highlight-current":"",lazy:""},on:{"node-click":e.getNodeData}}):e._e()],1),e._v(" "),a("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:16}},[a("el-card",{staticClass:"box-card"},[a("el-form",{ref:"form",attrs:{"label-position":e.labelPosition,model:e.form,rules:e.formRules,"label-width":"100px"}},["update"===e.formStatus?a("el-form-item",[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{round:"",icon:"el-icon-circle-close"},on:{click:e.onCancel}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{round:"",type:"primary",icon:"el-icon-circle-check"},on:{click:e.update}},[e._v(e._s(e.$t("table.update")))])],1):e._e(),e._v(" "),"create"===e.formStatus?a("el-form-item",[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{round:"",icon:"el-icon-circle-close"},on:{click:e.onCancel}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{round:"",type:"primary",icon:"el-icon-circle-check"},on:{click:e.create}},[e._v(e._s(e.$t("table.create")))])],1):e._e(),e._v(" "),a("el-row",[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:e.$t("cdp_permission.pId.label"),prop:"pName"}},[a("el-tag",[e._v(e._s(e.parent.name))])],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:e.$t("cdp_permission.level.label"),prop:"level"}},[a("el-tag",[e._v(e._s(e.form.level))])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("cdp_permission.appName.label"),prop:"appName"}},[a("el-select",{staticClass:"filter-item",attrs:{disabled:e.formUpdate?e.formUpdate:0!==e.parent.level,placeholder:e.$t("cdp_permission.appName.placeholder"),value:""},model:{value:e.form.appName,callback:function(t){e.$set(e.form,"appName",t)},expression:"form.appName"}},e._l(e.appOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("cdp_permission.name.label"),prop:"name"}},[a("el-input",{attrs:{disabled:e.formUpdate,placeholder:e.$t("cdp_permission.name.placeholder")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("cdp_permission.code.label"),prop:"code"}},[a("el-input",{attrs:{disabled:e.formUpdate,placeholder:e.$t("cdp_permission.code.placeholder")},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("cdp_permission.url.label"),prop:"url"}},[a("el-input",{attrs:{disabled:e.formUpdate,placeholder:e.$t("cdp_permission.url.placeholder")},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("cdp_permission.path.label"),prop:"path"}},[a("el-input",{attrs:{disabled:e.formUpdate,placeholder:e.$t("cdp_permission.path.placeholder")},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:20}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:e.$t("cdp_permission.method.label"),prop:"methodArray"}},[a("el-select",{attrs:{disabled:e.formUpdate,placeholder:e.$t("cdp_permission.method.placeholder"),multiple:""},model:{value:e.form.methodArray,callback:function(t){e.$set(e.form,"methodArray",t)},expression:"form.methodArray"}},e._l(e.methodOptions,function(e){return a("el-option",{key:e.scode,attrs:{label:e.value,value:e.scode}})}))],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("cdp_permission.type.label"),prop:"type"}},[a("el-select",{staticClass:"filter-item",attrs:{disabled:e.formUpdate,placeholder:e.$t("cdp_permission.type.placeholder")},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeOptions,function(e){return a("el-option",{key:e.name,attrs:{label:e.value,value:e.name,disabled:1===e.status}})}))],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:e.$t("cdp_permission.sort.label"),prop:"sort"}},[a("el-input",{attrs:{disabled:e.formUpdate,placeholder:e.$t("cdp_permission.sort.placeholder")},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("svg-icon",{staticStyle:{width:"80px",height:"80px","border-radius":"50%","margin-left":"20px","margin-top":"15px",background:"#fff",color:"#40c9c6"},attrs:{"icon-class":e.form.icon},nativeOn:{click:function(t){return e.handleSelectAvatar(t)}}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("cdp_permission.status.label"),prop:"status"}},[a("el-switch",{attrs:{disabled:e.formUpdate,"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"0","inactive-value":"1"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1)],1)],1)],1),e._v(" "),a("IconsSelect",{ref:"iconsSelect"})],1)},[],!1,null,"d7dc118e",null);n.options.__file="index.vue";t.default=n.exports},gBgV:function(e,t,a){},"kYp+":function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return i}),a.d(t,"a",function(){return n}),a.d(t,"e",function(){return l});var s=a("t3Un");function r(e){return Object(s.a)({url:"/platform/v1/permission/listChild/"+e,method:"post"})}function o(e){return Object(s.a)({url:"/platform/v1/permission/",method:"post",data:e})}function i(e,t){return Object(s.a)({url:"/platform/v1/permission/"+e,method:t||"post"})}function n(e){return Object(s.a)({url:"/platform/v1/permission/"+e,method:"delete"})}function l(e){return Object(s.a)({url:"/platform/v1/permission/",method:"put",data:e})}},slWK:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return o});var s=a("t3Un");function r(e,t){return Object(s.a)({url:e,method:t||"post"})}function o(e){return Object(s.a)({url:"/platform/v1/application/serviceNames",method:e||"post"})}}}]);