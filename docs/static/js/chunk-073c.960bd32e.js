(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-073c"],{"+cQA":function(e,t,n){},BOFL:function(e,t,n){"use strict";n.r(t);var a=n("cdYO"),i=n("hMZI"),l=n("Fu1k"),o={name:"MpiManagerMerge",components:{MergePatientinfo:i.default,ListPatientinfo:l.default,FormPatientinfo:a.default},data:function(){return{form:{},searchText:"",multipleSelection:[],mpiId:"",mpiId11:"",mpiId22:"",mpiId33:""}},methods:{handleRefreshList:function(){this.$refs.listPatientinfo.getList()},handleSearch:function(){this.$refs.listPatientinfo.handleSearch()},handleQuery:function(){this.$refs.formPatientinfo.handleQuery()},handleMerge:function(){this.$refs.listPatientinfo.handleMerge()&&this.$refs.mergePatientinfo.handleQuery()},rowClick:function(e){this.form=e,this.mpiId=e.mpiId},handleSelectionChange:function(e){this.mpiId11="",this.mpiId22="",this.mpiId33="",this.multipleSelection=e,1===this.multipleSelection.length?this.mpiId11=this.multipleSelection[0].mpiId:2===this.multipleSelection.length?(this.mpiId11=this.multipleSelection[0].mpiId,this.mpiId22=this.multipleSelection[1].mpiId):3===this.multipleSelection.length&&(this.mpiId11=this.multipleSelection[0].mpiId,this.mpiId22=this.multipleSelection[1].mpiId,this.mpiId33=this.multipleSelection[2].mpiId),this.$refs.mergePatientinfo.refreshList()}}},s=(n("jzEi"),n("KHd+")),r=Object(s.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"400px"},attrs:{placeholder:"支持姓名、卡号、手机号码、身份证号、MPIID查找"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleSearch(t):null}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),e._v(" "),n("el-button-group",[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{round:"",type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("\n        "+e._s(e.$t("table.search"))+"\n      ")]),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{round:"",type:"primary",icon:"el-icon-view"},on:{click:e.handleQuery}},[e._v(e._s(e.$t("table.view"))+"\n      ")]),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"},{name:"permission",rawName:"v-permission",value:"99",expression:"'99'"}],staticClass:"filter-item",staticStyle:{"margin-left":"5px"},attrs:{round:"",type:"primary",icon:"el-icon-circle-plus"},on:{click:e.handleMerge}},[e._v(e._s(e.$t("table.merge"))+"\n      ")])],1)],1),e._v(" "),n("ListPatientinfo",{ref:"listPatientinfo",attrs:{status:0,data:e.multipleSelection},on:{rowClick:e.rowClick,handleSelectionChange:e.handleSelectionChange}}),e._v(" "),n("FormPatientinfo",{ref:"formPatientinfo",attrs:{"mpi-id":e.form.mpiId}}),e._v(" "),n("MergePatientinfo",{ref:"mergePatientinfo",attrs:{"mpi-id":e.mpiId,"mpi-id11":e.mpiId11,"mpi-id22":e.mpiId22,"mpi-id33":e.mpiId33,"handle-refresh-list":e.handleRefreshList}})],1)},[],!1,null,"3e23813a",null);r.options.__file="merge.vue";t.default=r.exports},Fu1k:function(e,t,n){"use strict";n.r(t);var a=n("hbP8"),i=n("xGbm"),l={name:"MpiPatientinfoList",filters:{dateFormatFilter:function(e,t){return Object(i.a)(e,t||"yyyy-MM-dd HH:mm:ss")}},props:{status:{type:Number,default:0},mpiIdMain:{type:String,default:""}},data:function(){return{list:null,total:null,listLoading:!0,multipleSelection:[],pageModule:{pageNumber:1,pageSize:10,searchText:"",sortName:"",sortOrder:""},pageSizes:[5,10,25,50,100],form:{},sexOptions:[],nationOptions:[],nationalityOptions:[],bloodtypeOptions:[],rhbloodOptions:[],maritalOptions:[],educationOptions:[],insuranceOptions:[],insurancetypeOptions:[],workTypeOptions:[],deathOptions:[],infoFromOptions:[],mpidIds:[]}},mounted:function(){var e=this;this.asyncLoadDictionaryByCode(15,function(t){e.sexOptions=t}),this.asyncLoadDictionaryByCode(6,function(t){e.nationOptions=t}),this.asyncLoadDictionaryByCode(2,function(t){e.nationalityOptions=t}),this.asyncLoadDictionaryByCode(21,function(t){e.bloodtypeOptions=t}),this.asyncLoadDictionaryByCode(131,function(t){e.rhbloodOptions=t}),this.asyncLoadDictionaryByCode(5,function(t){e.maritalOptions=t}),this.asyncLoadDictionaryByCode(43,function(t){e.educationOptions=t}),this.asyncLoadDictionaryByCode(129,function(t){e.insuranceOptions=t}),this.asyncLoadDictionaryByCode(130,function(t){e.insurancetypeOptions=t}),this.asyncLoadDictionaryByCode(103,function(t){e.workTypeOptions=t}),this.asyncLoadDictionaryByCode(128,function(t){e.deathOptions=t}),this.asyncLoadDictionaryByCode(132,function(t){e.infoFromOptions=t}),this.asyncOrganizParameterValue("DefaultPageSize","10","表格默认每页记录数",function(t){e.pageModule.pageSize=parseInt(t)}),this.asyncOrganizParameterValue("DefaultPageSizes","5,10,25,50,100","表格默认每页记录数可选择项",function(t){var n=t.split(",");e.pageSizes=[];for(var a=0;a<n.length;a++)e.pageSizes[a]=parseInt(n[a])})},methods:{getList:function(){var e=this;this.listLoading=!0,Object(a.c)(this.pageModule,this.status||0).then(function(t){e.list=t.data.rows,e.total=t.data.total,e.listLoading=!1}).catch(function(t){e.$notify({title:"获取列表失败",message:t.message,type:"error",duration:5e3})})},handleSearch:function(e){this.pageModule.pageNumber=1,this.pageModule.searchText=e,this.getList()},handleSizeChange:function(e){this.pageModule.pageSize=e,this.getList()},handleCurrentChange:function(e){this.pageModule.pageNumber=e,this.getList()},sortChange:function(e){this.pageModule.sortOrder=e.order&&"descending"===e.order?"DESC":"ASC",this.pageModule.sortName=e.prop,this.pageModule.sortName&&this.getList()},rowClick:function(e,t,n){this.form=e,this.$emit("rowClick",this.form)},handleMerge:function(){return!(!this.multipleSelection||this.multipleSelection.length<1||this.multipleSelection.length>3)||(this.$message({message:"合并操作前请至少选择一条/最多不能超过三条数据！！"}),!1)},handleSelectionChange:function(e){this.multipleSelection=e,this.$emit("handleSelectionChange",this.multipleSelection),(!this.multipleSelection||this.multipleSelection.length<1||this.multipleSelection.length>3)&&this.$message({message:"合并操作前请至少选择一条/最多不能超过三条数据！"})}}},o=(n("nHcQ"),n("KHd+")),s=Object(o.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"default-sort":{prop:"name",order:"ascending"},"element-loading-text":"努力加载中",border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange,"row-click":e.rowClick,"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"卡号",sortable:"",prop:"cardNo",width:"150"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"身份证号",sortable:"",prop:"idcard",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"姓名",sortable:"",prop:"name"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"姓名简码",sortable:"",prop:"pycode"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"性别",width:"100",sortable:"",prop:"sex"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.sexOptions,t.row.sex)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"出生日期",sortable:"",prop:"birthday",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("dateFormatFilter")(t.row.birthday,"yyyy-MM-dd")))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"住址",sortable:"",prop:"address"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"邮编",sortable:"",prop:"postal"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"本人电话",sortable:"",prop:"phone"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"籍贯",sortable:"",prop:"nativePlace"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"户口",sortable:"",prop:"household"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"国籍",sortable:"",prop:"nationality"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.nationalityOptions,t.row.nationality)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"民族",sortable:"",prop:"nation"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.nationOptions,t.row.nation)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"血型",sortable:"",prop:"bloodtype"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.bloodtypeOptions,t.row.bloodtype)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"RH血型",sortable:"",prop:"rhblood"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.rhbloodOptions,t.row.rhblood)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"婚姻",sortable:"",prop:"marital"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.maritalOptions,t.row.marital)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"参加工作时间",sortable:"",prop:"workDate"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"职业类别",sortable:"",prop:"workType"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.workTypeOptions,t.row.workType)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"文化程度",sortable:"",prop:"education"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.nationalityOptions,t.row.nationality)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"参保类型",sortable:"",prop:"insurance"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.insuranceOptions,t.row.insurance)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"保险类型",sortable:"",prop:"insurancetype"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.insurancetypeOptions,t.row.insurancetype)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"工作单位",sortable:"",prop:"workplace"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"是否死亡",sortable:"",prop:"death"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.deathOptions,t.row.death)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"信息来源",sortable:"",prop:"infoFrom"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.getDicNameValue(e.infoFromOptions,t.row.infoFrom)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"版本号",sortable:"",prop:"version"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系人身份证",sortable:"",prop:"contactIdcard"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系人姓名",sortable:"",prop:"contactName"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系人电话",sortable:"",prop:"contactPhone"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系人信息",sortable:"",prop:"contactInfo"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"更新数据",sortable:"",prop:"updatesign"}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":e.pageModule.pageNumber,"page-sizes":e.pageSizes,"page-size":e.pageModule.pageSize,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){e.$set(e.pageModule,"pageNumber",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},[],!1,null,"0038d644",null);s.options.__file="selectlist.vue";t.default=s.exports},MMI7:function(e,t,n){},jzEi:function(e,t,n){"use strict";var a=n("+cQA");n.n(a).a},nHcQ:function(e,t,n){"use strict";var a=n("MMI7");n.n(a).a},xGbm:function(e,t,n){"use strict";function a(e,t){if(!e||""===e)return e;if("string"==typeof e&&(e=new Date(e)),!(e instanceof Date))return e;/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var a in n)if(new RegExp("("+a+")").test(t)){var l=n[a]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?l:i(l))}return t}function i(e){return("00"+e).substr(e.length)}n.d(t,"a",function(){return a})}}]);