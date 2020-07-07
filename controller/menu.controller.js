//"use strict";

sap.ui.define([
	'sap/ui/core/mvc/Controller', 
	'sap/ui/model/json/JSONModel', 
	'sap/ui/model/resource/ResourceModel'
], function (
	Controller, 
	SONModel, 
	ResourceModel) {
  //"use strict";

  return Controller.extend('namespace.controller.menu', {

    onInit: function onInit () {
      this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    },
		omMenuItemPress: function(oEvent){
			let oContext = oEvent.getSource().getBindingContext("main").getObject();
			let sId = oContext.id;
			let oNavData = oContext.nav;
			let sRoutName = oNavData.rout;
			let aParams = oNavData.params;
			this.oRouter.navTo(sRoutName, aParams);
		}
  });
});
