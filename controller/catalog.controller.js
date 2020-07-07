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

  return Controller.extend('namespace.controller.catalog', {

    onInit: function onInit () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			let oList = this.getView().byId("catalogList");
			
			this.oRouter.getRoute('cataloig').attachPatternMatched(function (oEvent) {
				oList.getBinding('items').filter([]);
      }, this);
			this.oRouter.getRoute('category').attachPatternMatched(function (oEvent) {
				let sCategory = oEvent.getParameter('arguments').category;
				
				var oFilter = new sap.ui.model.Filter("type", function (sText) {
					return sText.toLowerCase() == sCategory.toLowerCase();
				});
					
				oList.getBinding('items').filter(oFilter);
      }, this);
    },
  });
});
