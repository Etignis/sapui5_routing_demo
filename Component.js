//'use strict';

sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/m/MessageBox'
  ],
  function(UIComponent, MessageBox) {
    //'use strict';

    return UIComponent.extend('namespace.Component', {
      metadata: {
        manifest: 'json'
      },

      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments); // it is obligatory(обязательно) to make the super call
        

        this.oMainModel = this.getModel('main'); // from manifest.json			
				
        this.oRouter = this.getRouter(); 
				this.oRouter.initialize();
        this.oRouter.attachBeforeRouteMatched(this._handleRout.bind(this));
					
				this._setMainmenu();
				
				//this.oRouter.navTo('notFound');
      },
			
			_setMainmenu: function(){
				let that = this;
				this.oMainModel.dataLoaded().then(function(){					
					let aTypes = that.oMainModel.getProperty("/types");
					let aOtherMenuItems = [
						{
							id: "about",
							title: "О нас",
							nav: {
								rout: "about"
							}
						},
						{
							id: "busket",
							title: "Корзина",
							nav: {
								rout: "busket"
							}
						}
					];
					let aMenu = aTypes.concat(aOtherMenuItems);
					
					that.oMainModel.setProperty("/mainMenu", aMenu);
				});
				
			},
			_handleRout: function(oEvent){
				 let sName = oEvent.getParameter("name"); 
				 //debugger;
			}
    
    });
  }
);
