(window.webpackJsonp=window.webpackJsonp||[]).push([["rMmT"],{rMmT:function(t,e,n){"use strict";n.r(e);var s={filters:{statusFilter:function(t){return{success:"success",pending:"danger"}[t]}},data:function(){return{list:null}},mounted:function(){this.fetchData()},methods:{fetchData:function(){}}},l=n("KHd+"),a=Object(l.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%","padding-top":"15px"},attrs:{data:t.list}},[n("el-table-column",{attrs:{label:"Order_No","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.order_no)+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Price",width:"195",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      ¥"+t._s(t._f("toThousandslsFilter")(e.row.price))+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Status",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))])]}}])})],1)},[],!1,null,null,null);a.options.__file="TransactionTable.vue";e.default=a.exports}}]);