angular.module("appModule")
	.component("test", {
		templateUrl  :  "app/appModule/EventTracker.component.html",
		controller   : function() {
//			var vm = this;
//
//			vm.chipOrder = [];
//			vm.selected = null;
//			vm.showCreateForm = false;
//			vm.didShitPants = false;
//			vm.edit = null;
//			
//			vm.reload = function() {
//				orderService.index()
//					.then(function(result) {
//						vm.chipOrder = result.data;
//				});
//			};
//			
//			vm.show = function(id) {
//				orderService.show(id)
//					.then(function(result) {
//						vm.selected = result.data;
//					})
//			}
//			
//			vm.create = function(user) {
//				orderService.create(user)
//					.then(function(result) {
//						vm.showCreateForm = false;
//						vm.reload();
//					});
//			};
//			
//			vm.update = function(id, updated) {
//				console.log(id);
//				orderService.update(id, updated)
//					.then(function(result) {
//						console.log(result.data);
//						vm.edit = null;
//						vm.selected = result.data;
//						vm.reload();
//					});
//			}
//			
//			vm.delete = function(id) {
//				orderService.destroy(id)
//					.then(function() {
//						vm.selected = null;
//						vm.reload();
//					})
//			}
//			
//			vm.reload();
//			
//			vm.didShitPants = function() {
//				var didShit = false;
//			
//				vm.chipOrder.forEach(function(val) {
//					if(amountSpent > 30) {
//						didShit = true;
//					}
//					
//				})
//				
//				return didShit;
//			}
//			
//			
		},
		controllerAs :  "vm"
	});