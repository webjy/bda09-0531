(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["unitManagement"],{"0a2e":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container",attrs:{id:"unitManagement"}},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",attrs:{placeholder:"车组名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.groupNo,callback:function(t){e.$set(e.listQuery,"groupNo",t)},expression:"listQuery.groupNo"}}),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:e.handleCreate}},[e._v("添加")])],1),n("div",{staticClass:"tableBox"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,fit:"","highlight-current-row":"","row-class-name":e.tableRowClassName}},[n("el-table-column",{attrs:{label:"序号",fixed:"",prop:"id",sortable:"custom",align:"center",width:"80",type:"index",index:e.indexMethod}}),n("el-table-column",{attrs:{label:"车组名称","min-width":"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[1==e.power?n("span",{staticClass:"link-type",on:{click:function(t){return e.handleUpdate(i)}}},[e._v(e._s(i.groupName))]):n("span",[e._v(e._s(i.groupName))])]}}])}),n("el-table-column",{attrs:{label:"车组长","min-width":"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.leaderName))])]}}])}),n("el-table-column",{attrs:{label:"司机","min-width":"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.driverName))])]}}])}),n("el-table-column",{attrs:{label:"押运员1","min-width":"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.safetyName))])]}}])}),n("el-table-column",{attrs:{label:"押运员2","min-width":"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.additionSafetyName))])]}}])}),n("el-table-column",{attrs:{label:"业务员1","min-width":"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.businessName))])]}}])}),n("el-table-column",{attrs:{label:"业务员2","min-width":"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.addBusinessName))])]}}])}),n("el-table-column",{attrs:{label:"操作",fixed:"right",align:"center",width:"400","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit-outline"},on:{click:function(t){return e.handleUpdate(i)}}},[e._v("编辑")]),1!==i.status?n("el-button",{attrs:{type:"primary",size:"mini",icon:"iconfont iconjihuo"},on:{click:function(t){return e.handleUse(i)}}},[e._v("激活")]):n("el-button",{staticClass:"el-icon-delete",attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.deleteConfirmOpen(i)}}},[e._v("删除")])]}}])})],1)],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{"page-sizes":[5,10,15,20],total:e.total,page:e.listQuery.page,limit:e.listQuery.limit,layout:"prev, pager, next, sizes, total, jumper"},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),n("el-dialog",{attrs:{id:"myDialog",title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticClass:"formStyle",attrs:{rules:e.rules,model:e.temp,"label-position":"left"}},["create"==e.dialogStatus?n("el-form-item",{attrs:{label:"车组名称",prop:"groupName"}},[n("el-input",{model:{value:e.temp.groupName,callback:function(t){e.$set(e.temp,"groupName",t)},expression:"temp.groupName"}})],1):e._e(),n("el-form-item",{attrs:{label:"车组长",prop:"leaderId"}},[n("el-select",{staticClass:"filter-item",class:{removeClass:e.judgeRemoveIn(e.teamLeaderOptions,e.temp.leaderId)},attrs:{filterable:"",placeholder:"Please select"},model:{value:e.temp.leaderId,callback:function(t){e.$set(e.temp,"leaderId",t)},expression:"temp.leaderId"}},e._l(e.teamLeaderOptions,function(e){return n("el-option",{key:e.id,class:{removeClass:e.remove},attrs:{label:e.name,value:e.id,disabled:e.remove}})}),1)],1),n("el-form-item",{attrs:{label:"司机",prop:"driverId"}},[n("el-select",{staticClass:"filter-item",class:{removeClass:e.judgeRemoveIn(e.driverOptions,e.temp.driverId)},attrs:{filterable:"",placeholder:"Please select"},model:{value:e.temp.driverId,callback:function(t){e.$set(e.temp,"driverId",t)},expression:"temp.driverId"}},e._l(e.driverOptions,function(e){return n("el-option",{key:e.id,class:{removeClass:e.remove},attrs:{label:e.name,value:e.id,disabled:e.remove}})}),1)],1),n("el-form-item",{attrs:{label:"押运员1",prop:"safetyId"}},[n("el-select",{staticClass:"filter-item",class:{removeClass:e.judgeRemoveIn(e.supercargoOptions,e.temp.safetyId)},attrs:{filterable:"",placeholder:"Please select"},model:{value:e.temp.safetyId,callback:function(t){e.$set(e.temp,"safetyId",t)},expression:"temp.safetyId"}},e._l(e.supercargoOptions,function(e){return n("el-option",{key:e.id,class:{removeClass:e.remove},attrs:{label:e.name,value:e.id,disabled:e.remove||null==e.id}})}),1)],1),n("el-form-item",{attrs:{label:"押运员2",prop:"additionSafetyId"}},[n("el-select",{staticClass:"filter-item",class:{removeClass:e.judgeRemoveIn(e.supercargoOptions,e.temp.additionSafetyId)},attrs:{filterable:"",placeholder:"Please select"},model:{value:e.temp.additionSafetyId,callback:function(t){e.$set(e.temp,"additionSafetyId",t)},expression:"temp.additionSafetyId"}},e._l(e.supercargoOptions,function(e){return n("el-option",{key:e.id,class:{removeClass:e.remove},attrs:{label:e.name,value:e.id,disabled:e.remove}})}),1)],1),n("el-form-item",{attrs:{label:"业务员1",prop:"businessId"}},[n("el-select",{staticClass:"filter-item",class:{removeClass:e.judgeRemoveIn(e.businessManagerOptions,e.temp.businessId)},attrs:{filterable:"",placeholder:"Please select"},model:{value:e.temp.businessId,callback:function(t){e.$set(e.temp,"businessId",t)},expression:"temp.businessId"}},e._l(e.businessManagerOptions,function(e){return n("el-option",{key:e.id,class:{removeClass:e.remove},attrs:{label:e.name,value:e.id,disabled:e.remove||null==e.id}})}),1)],1),n("el-form-item",{attrs:{label:"业务员2",prop:"addBusinessId"}},[n("el-select",{staticClass:"filter-item",class:{removeClass:e.judgeRemoveIn(e.businessManagerOptions,e.temp.addBusinessId)},attrs:{filterable:"",placeholder:"Please select"},model:{value:e.temp.addBusinessId,callback:function(t){e.$set(e.temp,"addBusinessId",t)},expression:"temp.addBusinessId"}},e._l(e.businessManagerOptions,function(e){return n("el-option",{key:e.id,class:{removeClass:e.remove},attrs:{label:e.name,value:e.id,disabled:e.remove}})}),1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.handleSave1(e.temp)}}},[e._v("确定")])],1)],1),n("el-dialog",{attrs:{id:"myDialog",title:e.bindMap[e.bindDialogStatus],visible:e.BindDialogFormVisible,center:""},on:{"update:visible":function(t){e.BindDialogFormVisible=t}}},[n("el-form",{ref:"bindForm",attrs:{rules:e.bindRules,model:e.bindTemp,"label-position":"left"}},[n("el-form-item",{attrs:{label:e.bindMap[e.bindDialogStatus]+"类型",prop:"type"}},[n("el-select",{staticClass:"filter-item",attrs:{filterable:"",placeholder:"Please select"},model:{value:e.bindTemp.type,callback:function(t){e.$set(e.bindTemp,"type",t)},expression:"bindTemp.type"}},e._l(e.bindTypeOptions,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id,disabled:e.disabled}})}),1)],1),3==e.bindTemp.type&&"bind"==e.bindDialogStatus?n("el-form-item",{attrs:{label:"司机",prop:"driverId"}},[n("el-select",{staticClass:"filter-item",attrs:{filterable:"",placeholder:"Please select"},model:{value:e.bindTemp.driverId,callback:function(t){e.$set(e.bindTemp,"driverId",t)},expression:"bindTemp.driverId "}},e._l(e.driverOptions,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1):e._e(),2==e.bindTemp.type&&"bind"==e.bindDialogStatus?n("el-form-item",{attrs:{label:"所属大队",prop:"teamId"}},[n("el-select",{staticClass:"filter-item",attrs:{filterable:"",placeholder:"Please select"},model:{value:e.bindTemp.teamId,callback:function(t){e.$set(e.bindTemp,"teamId",t)},expression:"bindTemp.teamId "}},e._l(e.largeTeamOptions,function(e){return n("el-option",{key:e.id,attrs:{label:e.teamName,value:e.id}})}),1)],1):e._e(),4==e.bindTemp.type&&"bind"==e.bindDialogStatus?n("el-form-item",{attrs:{label:"押运员A",prop:"securityId"}},[n("el-select",{staticClass:"filter-item",attrs:{filterable:"",placeholder:"Please select"},model:{value:e.bindTemp.securityId,callback:function(t){e.$set(e.bindTemp,"securityId",t)},expression:"bindTemp.securityId "}},e._l(e.supercargoOptions,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id,disabled:e.remove}})}),1)],1):e._e(),5==e.bindTemp.type&&"bind"==e.bindDialogStatus?n("el-form-item",{attrs:{label:"押运员B",prop:"merchandiserId"}},[n("el-select",{staticClass:"filter-item",attrs:{filterable:"",placeholder:"Please select"},model:{value:e.bindTemp.merchandiserId,callback:function(t){e.$set(e.bindTemp,"merchandiserId",t)},expression:"bindTemp.merchandiserId "}},e._l(e.businessManagerOptions,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id,disabled:e.remove}})}),1)],1):e._e(),1==e.bindTemp.type&&"bind"==e.bindDialogStatus?n("el-form-item",{attrs:{label:"车牌号",prop:"armoredcarId"}},[n("el-select",{staticClass:"filter-item",attrs:{filterable:"",placeholder:"Please select"},model:{value:e.bindTemp.armoredcarId,callback:function(t){e.$set(e.bindTemp,"armoredcarId",t)},expression:"bindTemp.armoredcarId"}},e._l(e.carOptions,function(e){return n("el-option",{key:e.id,attrs:{label:e.licenseNo,value:e.id}})}),1)],1):e._e()],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){"bind"==e.bindDialogStatus?e.bindSubmit():e.unbindSubmit()}}},[e._v("确定")])],1)],1)],1)},a=[],r=(n("34ef"),n("7f7f"),n("7514"),n("f3e2"),n("ac6a"),n("5df3"),n("bd86")),s=(n("759f"),n("cebc")),o=(n("6d67"),n("78ce"),n("333d")),l=n("a90f"),d=n("66e8"),u=(n("69d9"),void 0),c=function(e,t,n){null==t?n(new Error("请选择")):n()},m={name:"unitManagement",components:{Pagination:o["a"]},data:function(){return{power:JSON.parse(sessionStorage.getItem("userInfo")).Power,tableKey:0,list:null,total:0,indexMethod:1,listLoading:!0,listQuery:{page:1,limit:10},largeTeamOptions:[{id:null,teamName:"请选择"}],driverOptions:[{id:null,name:"请选择"}],bindTypeOptions:[{id:null,name:"请选择"},{id:1,name:"车辆"},{id:2,name:"大队"},{id:3,name:"司机"},{id:4,name:"押运员A"},{id:5,name:"押运员B"}],teamLeaderOptions:[{id:null,name:"请选择"}],supercargoOptions:[{id:null,name:"请选择"}],businessManagerOptions:[{id:null,name:"请选择"}],additionSafetyOptions:[{id:null,name:"请选择"}],addBusinessOptions:[{id:null,name:"请选择"}],carOptions:[{id:null,licenseNo:"请选择"}],temp:{groupName:""},bindTemp:{relatedId:-1,type:1,groupId:-1},BindDialogFormVisible:!1,dialogFormVisible:!1,dialogStatus:"",bindDialogStatus:"",textMap:{update:"编辑",create:"添加"},bindobj:{},bindMap:{bind:"绑定",unbind:"解绑"},getSelectPromises:[],rules:{driverId:[{required:!0,message:"请选择司机",trigger:"change"}],groupName:[{required:!0,message:"请填写车组名称",trigger:"blur"}],leaderId:[{required:!0,message:"请选择车组长",trigger:"change"}],safetyId:[{required:!0,message:"请选择押运员",trigger:"change"}],businessId:[{required:!0,message:"请选择业务员",trigger:"change"}]},bindRules:{type:[{required:!0,message:"请选择绑定类型",trigger:"change",validator:c}],driverId:[{required:!0,message:"请选择绑定司机",trigger:"change",validator:c}],teamId:[{required:!0,message:"请选择绑定大队",trigger:"change",validator:c}],securityId:[{required:!0,message:"请选择绑定押运员A",trigger:"change",validator:c}],merchandiserId:[{required:!0,message:"请选择绑定押运员B",trigger:"change",validator:c}],armoredcarId:[{required:!0,message:"请选择绑定车辆",trigger:"change",validator:c}]},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]},routeDialogFormVisible:!1,routeRules:{routeIds:[{required:!0,message:"请选择路线",trigger:"change",validator:c}]},routeTemp:{routeIds:[]},routeOptions:[{id:null,routeId:"请选择"}],routeObj:{}}},created:function(){this.getList(),this.getSelect()},methods:{deleteConfirmOpen:function(e){var t=this;this.$confirm("确定进行此操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.handleDelete(e)}).catch(function(){t.$message({type:"info",message:"已取消"})})},queryBindedRoutesById:function(e){var t=this;Object(l["j"])({groupId:e}).then(function(e){0==e.status?(e.data||(e.data=[]),t.routeTemp.routeIds=e.data.map(function(e,t){return e.id})):t.$message.error(e.msg)}).finally(function(){})},handleBindRoute:function(e){var t=this;this.routeDialogFormVisible=!0,this.$nextTick(function(){t.$refs["routeForm"].clearValidate()}),this.routeTemp={id:e.id,routeIds:[]},this.queryBindedRoutesById(e.id)},handleUnbindRoute:function(e){var t=this;u=this.$loading({target:"#routeDialog .el-dialog"}),Object(l["l"])({id:e.id}).then(function(e){0==e.status?(t.getList(),t.$message.success(e.msg)):t.$message.error(e.msg)}).finally(function(){u.close()})},routeSubmit:function(){var e=this;this.$refs["routeForm"].validate(function(t){if(t){u=e.$loading({target:"#routeDialog .el-dialog"});var n=Object(s["a"])({},e.routeTemp);Object(l["b"])(n).then(function(t){0==t.status?(e.getList(),e.$message.success(t.msg),e.routeDialogFormVisible=!1):e.$message.error(t.msg)}).finally(function(){u.close()})}})},judgeRemoveIn:function(e,t){var n=!1;e.some(function(e){e.id===t&&!0===e.remove&&(n=!0)});return n},handleSelectOptions:function(e,t,n,i,a){for(var s,o=!1,l=0;l<e.length;l++)if(e[l][i]==t)return void(o=!0);!1===o&&(null!==t&&e.unshift((s={},Object(r["a"])(s,i,t),Object(r["a"])(s,a,n),Object(r["a"])(s,"remove",!0),s)))},getList:function(){var e=this,t=this;t.listLoading=!0,Object(l["f"])({page:this.listQuery.page,limit:this.listQuery.limit,status:[1]}).then(function(n){if(e.listLoading=!1,0==n.status){e.list=n.data,e.total=n.count,e.getSelect();for(var i=function(n){var i=e.list[n];Promise.all(e.getSelectPromises).then(function(){t.handleSelectOptions(t.teamLeaderOptions,i.leaderId,i.leaderName,"id","name"),t.handleSelectOptions(t.supercargoOptions,i.safetyId,i.safetyName,"id","name"),t.handleSelectOptions(t.businessManagerOptions,i.businessId,i.businessName,"id","name"),t.handleSelectOptions(t.supercargoOptions,i.additionSafetyId,i.additionSafetyName,"id","name"),t.handleSelectOptions(t.businessManagerOptions,i.addBusinessId,i.addBusinessName,"id","name"),t.handleSelectOptions(t.driverOptions,i.driverId,i.driverName,"id","name")})},a=0;a<e.list.length;a++)i(a);e.indexMethod=(t.listQuery.page-1)*t.listQuery.limit+1}else e.$message.error(n.msg)}).finally(function(){t.listLoading=!1})},dealData:function(){var e=this;this.list.forEach(function(t,n){-1==e.list[n].teamId&&(e.list[n].teamId=null,e.list[n].teamName=null),-1==e.list[n].driverId&&(e.list[n].driverId=null,e.list[n].driverName=null),-1==e.list[n].leaderId&&(e.list[n].leaderId=null,e.list[n].leaderName=null),-1==e.list[n].securityId&&(e.list[n].securityId=null,e.list[n].securityName=null),-1==e.list[n].merchandiserId&&(e.list[n].merchandiserId=null,e.list[n].merchandiserName=null),-1==e.list[n].armoredcarId&&(e.list[n].armoredcarId=null,e.list[n].armoredcarLicenseNo=null)})},resetTemp:function(){this.temp={groupName:""}},handleBind:function(e){var t=this;this.$nextTick(function(){t.$refs["bindForm"].clearValidate()}),this.bindTypeOptions=[{id:-1,name:"请选择"},{id:1,name:"车辆"},{id:2,name:"大队"},{id:3,name:"司机"},{id:4,name:"押运员A"},{id:5,name:"押运员B"}],this.bindDialogStatus="bind",this.bindTemp={groupId:e.id,type:1,armoredcarId:e.armoredcarId,teamId:e.teamId,driverId:e.driverId,securityId:e.securityId,merchandiserId:e.merchandiserId},this.BindDialogFormVisible=!0},handleUnbind:function(e){-1==e.armoredcarId&&(this.bindTypeOptions[1].disabled=!0),-1==e.teamId&&(this.bindTypeOptions[2].disabled=!0),-1==e.driverId&&(this.bindTypeOptions[3].disabled=!0),-1==e.securityId&&(this.bindTypeOptions[4].disabled=!0),-1==e.merchandiserId&&(this.bindTypeOptions[5].disabled=!0),this.bindDialogStatus="unbind",this.bindTemp={groupId:e.id,type:-1},this.BindDialogFormVisible=!0},bindSubmit:function(){var e=this;this.$refs["bindForm"].validate(function(t){if(t){u=e.$loading({target:"#myDialog .el-dialog"}),1==e.bindTemp.type?e.bindTemp.relatedId=e.bindTemp.armoredcarId:2==e.bindTemp.type?e.bindTemp.relatedId=e.bindTemp.teamId:3==e.bindTemp.type?e.bindTemp.relatedId=e.bindTemp.driverId:4==e.bindTemp.type?e.bindTemp.relatedId=e.bindTemp.securityId:5==e.bindTemp.type&&(e.bindTemp.relatedId=e.bindTemp.merchandiserId);var n={type:e.bindTemp.type,relatedId:e.bindTemp.relatedId,groupId:e.bindTemp.groupId};Object(l["a"])(n).then(function(t){0==t.status?(e.getList(),e.$message.success(t.msg),e.BindDialogFormVisible=!1):e.$message.error(t.msg)}).finally(function(){u.close()})}})},unbindSubmit:function(){var e=this;u=this.$loading({target:"#myDialog .el-dialog"}),Object(l["k"])(this.bindTemp).then(function(t){0==t.status?(e.getList(),e.$message.success(t.msg),e.BindDialogFormVisible=!1):e.$message.error(t.msg)}).finally(function(){u.close()})},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},createData:function(){var e=this;this.$refs["dataForm"].validate(function(t){if(t){u=e.$loading({target:"#myDialog .el-dialog"});var n=Object(s["a"])({},e.temp);n.additionSafetyId&&(n.addSafetyId=n.additionSafetyId,delete n.additionSafetyId),Object(l["e"])(n).then(function(t){0==t.status?(e.getList(),e.$message.success("添加成功"),e.dialogFormVisible=!1):e.$message.error(t.msg)}).finally(function(){u.close()})}})},handleUpdate:function(e){var t=this;this.temp=Object(s["a"])({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},updateData:function(){var e=this;this.$refs["dataForm"].validate(function(t){if(t){u=e.$loading({target:"#myDialog .el-dialog"});var n=Object(s["a"])({},e.temp);Object(l["g"])(n).then(function(t){0==t.status?(e.getList(),e.$message.success("编辑成功"),e.dialogFormVisible=!1):e.$message.error(t.msg)}).finally(function(){u.close()})}})},handleSave1:function(e){var t=this,n=this;n.listLoading=!0;var i={groupId:e.id,leaderId:e.leaderId,securityId:e.safetyId,merchandiserId:e.businessId,driverId:e.driverId};null!==e.additionSafetyId&&(i.addSecurityId=e.additionSafetyId),null!==e.addBusinessId&&(i.addBusinessId=e.addBusinessId),Object(l["a"])(i).then(function(e){0==e.status?(t.dialogFormVisible=!1,n.listQuery.page>1&&n.list.length<=1&&(n.listQuery.page-=1),t.getList(),n.$message.success(e.msg)):(t.$message.error(e.msg),n.listLoading=!1)}).catch(function(e){n.listLoading=!1})},handleSave:function(e){var t=this,n=this;n.listLoading=!0;var i={groupId:e.id,leaderId:e.leaderId,securityId:e.safetyId,merchandiserId:e.businessId,driverId:e.driverId};null!==e.additionSafetyId&&(i.addSecurityId=e.additionSafetyId),null!==e.addBusinessId&&(i.addBusinessId=e.addBusinessId),Object(l["a"])(i).then(function(e){0==e.status?(t.dialogFormVisible=!1,n.listQuery.page>1&&n.list.length<=1&&(n.listQuery.page-=1),t.getList(),n.$message.success(e.msg)):(t.$message.error(e.msg),n.listLoading=!1)}).catch(function(e){n.listLoading=!1})},handleUse:function(e){var t=this,n=this;n.listLoading=!0,Object(l["i"])({groupId:e.id}).then(function(e){0==e.status?(n.listQuery.page>1&&n.list.length<=1&&(n.listQuery.page-=1),t.getList(),n.$message.success(e.msg)):(t.$message.error(e.msg),n.listLoading=!1)}).catch(function(e){n.listLoading=!1})},handleDelete:function(e){var t=this,n=this;n.listLoading=!0,Object(l["h"])({groupId:e.id}).then(function(e){0==e.status?(n.listQuery.page>1&&n.list.length<=1&&(n.listQuery.page-=1),t.getList(),n.$message.success(e.msg)):(t.$message.error(e.msg),n.listLoading=!1)}).catch(function(e){n.listLoading=!1})},handleFilter:function(){var e=this;if(""==this.listQuery.groupNo||void 0==this.listQuery.groupNo)return this.listQuery.groupNo=null,void this.getList();Object(l["d"])({keyword:this.listQuery.groupNo}).then(function(t){0==t.status?(e.listQuery.page=1,e.listLoading=!1,e.list=[],e.list=t.data,e.total=0):e.$message.error(t.msg)})},selectFilter:function(e,t,n,i,a,r){var s={};s=t.find(function(t){return t[n]===e}),this.temp[r]=s[i]},getSelect:function(){var e=this,t=this;Object(d["f"])({status:1}).then(function(n){if(0==n.status){if(null==n.data)return;t.routeOptions=n.data,t.routeObj={},t.routeOptions.forEach(function(e,n){t.routeObj[e.id]=e.name})}else null==n.data&&(e.routeOptions=[]),e.$message.error(n.msg)}),Object(d["j"])({status:1}).then(function(n){if(0==n.status){if(null==n.data)return;t.largeTeamOptions=n.data,t.largeTeamOptions.unshift({id:null,teamName:"请选择"})}else null==n.data&&(e.largeTeamOptions=[],e.largeTeamOptions.pop()),e.$message.error(n.msg)}),Object(d["a"])({status:1}).then(function(n){if(0==n.status){if(null==n.data)return;t.carOptions=n.data,t.carOptions.unshift({id:null,licenseNo:"请选择"})}else null==n.data&&(e.carOptions=[],e.carOptions.pop()),e.$message.error(n.msg)});var n=new Promise(function(n,i){Object(d["g"])({work:1,status:1}).then(function(i){if(0==i.status){if(null==i.data)return;t.driverOptions=i.data}else null==i.data&&(e.driverOptions=[],e.driverOptions.pop()),e.$message.error(i.msg);n()})}),i=new Promise(function(n,i){Object(d["g"])({work:2,status:1}).then(function(i){if(0==i.status){if(null==i.data)return;t.teamLeaderOptions=i.data}else null==i.data&&(e.teamLeaderOptions=[],e.teamLeaderOptions.pop()),e.$message.error(i.msg);n()})}),a=new Promise(function(n,i){Object(d["g"])({work:3,status:1}).then(function(i){if(0==i.status){if(null==i.data)return;t.supercargoOptions=i.data,t.supercargoOptions.unshift({id:null,name:"请选择"})}else null==i.data&&(e.supercargoOptions=[],e.supercargoOptions.pop()),e.$message.error(i.msg);n()})}),r=new Promise(function(n,i){Object(d["g"])({work:4,status:1}).then(function(i){if(0==i.status){if(null==i.data)return;t.businessManagerOptions=i.data,t.businessManagerOptions.unshift({id:null,name:"请选择"})}else null==i.data&&(e.businessManagerOptions=[],e.businessManagerOptions.pop()),e.$message.error(i.msg);n()})});this.getSelectPromises=[i,a,r,n]},changToNull:function(e){return null==e.teamId&&(e.teamName=null),null==e.driverId&&(e.driverName=null),null==e.leaderId&&(e.leaderName=null),null==e.securityId&&(e.securityName=null),null==e.merchandiserId&&(e.merchandiserName=null),null==e.armoredcarId&&(e.armoredcarLicenseNo=null),e},tableRowClassName:function(e){e.row;var t=e.rowIndex;return t%2==0?"color-row":t%2==1?"noColor-row":""},exportExcel:function(){var e=this;Object(d["b"])({excelType:6,title:"车组信息"}).then(function(t){try{var n=new TextDecoder("utf-8"),i=JSON.parse(n.decode(new Uint8Array(t)));e.$message({message:i.msg,type:"warning"})}catch(o){t.headers;var a="车组信息.xls",r=new Blob([t],{type:"application/excel"}),s=document.createElement("a");s.href=window.URL.createObjectURL(r),s.download=a,s.click(),s.remove()}})}}},p=m,f=(n("de15"),n("2877")),g=Object(f["a"])(p,i,a,!1,null,null,null);t["default"]=g.exports},"1c8e":function(e,t,n){},"333d":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},a=[];n("c5f6");Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,n){var i=o(),a=e-i,l=20,d=0;t="undefined"===typeof t?500:t;var u=function e(){d+=l;var o=Math.easeInOutQuad(d,i,a,t);s(o),d<t?r(e):n&&"function"===typeof n&&n()};u()}var d={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.currentPage=1,this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},u=d,c=(n("abce"),n("2877")),m=Object(c["a"])(u,i,a,!1,null,"2d3d4633",null);t["a"]=m.exports},"66e8":function(e,t,n){"use strict";n.d(t,"j",function(){return a}),n.d(t,"g",function(){return r}),n.d(t,"i",function(){return s}),n.d(t,"a",function(){return o}),n.d(t,"f",function(){return l}),n.d(t,"e",function(){return d}),n.d(t,"b",function(){return u}),n.d(t,"k",function(){return c}),n.d(t,"c",function(){return m}),n.d(t,"h",function(){return p}),n.d(t,"d",function(){return f});var i=n("2ade");function a(e){return Object(i["a"])({url:"teams/select",method:"post",data:e})}function r(e){return Object(i["a"])({url:"persons/select",method:"post",data:e})}function s(e){return Object(i["a"])({url:"persons/selectByCondition",method:"post",data:e,headers:{"content-type":"application/json"}})}function o(e){return Object(i["a"])({url:"cars/select",method:"post",data:e})}function l(e){return Object(i["a"])({url:"/map/routeByStatus",method:"post",data:e})}function d(e){return Object(i["a"])({url:"logs/invoke",method:"post",data:e})}function u(e){return Object(i["a"])({url:"/file/exportExcel",method:"post",data:e,responseType:"arraybuffer",headers:{"content-type":"application/json"}})}function c(e){return Object(i["a"])({url:"/noapp/file/xxx/upload",method:"post",data:e})}function m(e){return Object(i["a"])({url:"/file/importExcel",method:"post",data:e})}function p(e){return Object(i["a"])({url:"/eoms/schedulings/queryTaskByIds",method:"post",data:e})}function f(e){return Object(i["a"])({url:"/file/importFile",method:"post",data:e})}},"69d9":function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o});n("ac6a"),n("f3e2"),n("8ea5"),n("a481"),n("0298"),n("df7c");function i(e,t){var n=new Date(e),i=n.getFullYear(),r=a(n.getMonth()+1),s=a(n.getDate()),o=a(n.getHours()),l=a(n.getMinutes()),d=a(n.getSeconds());return 1==t?i+"-"+r+"-"+s+" "+o+":"+l+":"+d:i+"-"+r+"-"+s}function a(e){return e<10?"0"+e:e}function r(e){var t=new Date(e).toJSON();return new Date(+new Date(t)+288e5).toISOString().replace(/T/g," ").replace(/\.[\d]{3}Z/,"")}function s(e){var t=m(e.lat,e.lng),n=new BMap.Point(t[1],t[0]);return n}function o(e){var t=[];return e.forEach(function(e){var n=m(e.lat,e.lng),i=new BMap.Point(n[1],n[0]);t.push(i)}),t}var l=3.141592653589793,d=6378245,u=.006693421622965943,c=52.35987755982988;function m(e,t){var n=f(e,t),i=p(n[0],n[1]);return i}function p(e,t){var n=t,i=e,a=Math.sqrt(n*n+i*i)+2e-5*Math.sin(i*c),r=Math.atan2(i,n)+3e-6*Math.cos(n*c),s=a*Math.cos(r)+.0065,o=a*Math.sin(r)+.006,l=[];return l.push(o),l.push(s),l}function f(e,t){var n=g(t-105,e-35),i=b(t-105,e-35),a=e/180*l,r=Math.sin(a);r=1-u*r*r;var s=Math.sqrt(r);n=180*n/(d*(1-u)/(r*s)*l),i=180*i/(d/s*Math.cos(a)*l);var o=e+n,c=t+i,m=[];return m.push(o),m.push(c),m}function g(e,t){var n=2*e-100+3*t+.2*t*t+.1*e*t+.2*Math.sqrt(Math.abs(e));return n+=2*(20*Math.sin(6*e*l)+20*Math.sin(2*e*l))/3,n+=2*(20*Math.sin(t*l)+40*Math.sin(t/3*l))/3,n+=2*(160*Math.sin(t/12*l)+320*Math.sin(t*l/30))/3,n}function b(e,t){var n=300+e+2*t+.1*e*e+.1*e*t+.1*Math.sqrt(Math.abs(e));return n+=2*(20*Math.sin(6*e*l)+20*Math.sin(2*e*l))/3,n+=2*(20*Math.sin(e*l)+40*Math.sin(e/3*l))/3,n+=2*(150*Math.sin(e/12*l)+300*Math.sin(e/30*l))/3,n}},a90f:function(e,t,n){"use strict";n.d(t,"f",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"e",function(){return s}),n.d(t,"g",function(){return o}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return d}),n.d(t,"k",function(){return u}),n.d(t,"i",function(){return c}),n.d(t,"h",function(){return m}),n.d(t,"b",function(){return p}),n.d(t,"l",function(){return f}),n.d(t,"j",function(){return g});var i=n("2ade");function a(e){return Object(i["a"])({url:"/eoms/groups/page",method:"post",data:e})}function r(e){return Object(i["a"])({url:"/eoms/groups/list",method:"post",data:e})}function s(e){return Object(i["a"])({url:"/eoms/groups/add",method:"post",data:e})}function o(e){return Object(i["a"])({url:"/groups/update",method:"post",data:e})}function l(e){return Object(i["a"])({url:"/eoms/groups/fuzzyQuery",method:"post",data:e})}function d(e){return Object(i["a"])({url:"/eoms/groups/bind",method:"post",data:e})}function u(e){return Object(i["a"])({url:"/eoms/groups/unbind",method:"post",data:e})}function c(e){return Object(i["a"])({url:"/eoms/groups/enable",method:"post",data:e})}function m(e){return Object(i["a"])({url:"/eoms/groups/disable",method:"post",data:e})}function p(e){return Object(i["a"])({url:"/eoms/groups/bindRoute",method:"post",data:e})}function f(e){return Object(i["a"])({url:"/eoms/groups/unbindRoute",method:"post",data:e})}function g(e){return Object(i["a"])({url:"/eoms/groups/queryBindedRoutes",method:"post",data:e})}},abce:function(e,t,n){"use strict";var i=n("e052"),a=n.n(i);a.a},de15:function(e,t,n){"use strict";var i=n("1c8e"),a=n.n(i);a.a},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var a=e[i];"."===a?e.splice(i,1):".."===a?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(e){return i.exec(e).slice(1)};function r(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",i=!1,a=arguments.length-1;a>=-1&&!i;a--){var s=a>=0?arguments[a]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,i="/"===s.charAt(0))}return t=n(r(t.split("/"),function(e){return!!e}),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var i=t.isAbsolute(e),a="/"===s(e,-1);return e=n(r(e.split("/"),function(e){return!!e}),!i).join("/"),e||i||(e="."),e&&a&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var a=i(e.split("/")),r=i(n.split("/")),s=Math.min(a.length,r.length),o=s,l=0;l<s;l++)if(a[l]!==r[l]){o=l;break}var d=[];for(l=o;l<a.length;l++)d.push("..");return d=d.concat(r.slice(o)),d.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=a(e),n=t[0],i=t[1];return n||i?(i&&(i=i.substr(0,i.length-1)),n+i):"."},t.basename=function(e,t){var n=a(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return a(e)[3]};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("f28c"))},e052:function(e,t,n){}}]);
//# sourceMappingURL=unitManagement.5b8ae717.js.map