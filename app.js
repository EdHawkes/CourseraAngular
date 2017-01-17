(function () {
'use strict';
		
angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	function ShoppingListCheckOffService(){
		var service = this;		
		var tobuyList = 
		[
			{ name: "cookies", quantity: 10 },
			{ name: "soda", quantity: 6 },
			{ name: "bag of flour", quantity: 1 },
			{ name: "donuts", quantity: 12 },
			{ name: "bagels", quantity: 2 }
		];
		var boughtList = 
		[
			 
		];
		service.itemsToBuy = function(){
			return tobuyList;
		};
		service.itemsBought = function(){
			return boughtList;
		};
	  
		service.buy = function(index){
			var value = tobuyList[index];
			boughtList.push(value);
			tobuyList.splice(index, 1);					
		};
	}
	
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var buyController = this;
		buyController.itemsToBuy = ShoppingListCheckOffService.itemsToBuy();

		buyController.buy = function(index){
			ShoppingListCheckOffService.buy(index);
		};

		buyController.isEmpty = function(){
			return buyController.itemsToBuy.length === 0;
		};
	}
	
	AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"]; 
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var boughtController = this;
		boughtController.itemsBought = ShoppingListCheckOffService.itemsBought();

		boughtController.isEmpty = function(){
			return boughtController.itemsBought.length === 0;
		};
	}
})();
