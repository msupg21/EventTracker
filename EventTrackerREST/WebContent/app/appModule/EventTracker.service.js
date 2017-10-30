angular.module("appModule")
	.factory("ChipotleOrder", function($http) {
		var service = {};
		
		var BASE_URL = "api/orders"
		
		service.index = function() {
			return $http({
				method : "GET",
				url    : BASE_URL
			});
		};
		
		service.show = function(id) {
			return $http({
				method   :   "GET",
				url      : BASE_URL + "/" + id
			});
		};
		
		service.create = function(ChipotleOrder) {
			return $http({
				method   :   "POST",
				url      :   BASE_URL,
				headers  : {
			        'Content-Type' : 'application/json'
			      },
			    data      : ChipotleOrder
			});
		};
		
		service.update = function(id, ChipotleOrder) {
			return $http({
				method   :   "PUT",
				url      :   BASE_URL + "/" + id,
				headers  : {
			        'Content-Type' : 'application/json'
			      },
			    data      : ChipotleOrder
			});
		};
		
		service.destroy = function(id) {
			return $http({
				method    :   "DELETE",
				url       : BASE_URL + "/" + id
			});
		};
		
		return service;
	});
