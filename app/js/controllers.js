define(['angular', 'services'], function (angular) {
	'use strict';

	return angular.module('budgetApp.controllers', ['budgetApp.services'])
		// Sample controller where service is being used
		.controller('ctlBudgetList', ['$scope', function ($scope) {
			require(['controllers/ctlBudgetList'], function(ctlBudgetList) {

				// injector method takes an array of modules as the first argument
				// if you want your controller to be able to use components from
				// any of your other modules, make sure you include it together with 'ng'
				// Furthermore we need to pass on the $scope as it's unique to this controller
				angular.injector(['ng']).invoke(ctlBudgetList, this, {'$scope': $scope});

			});
		}])
		// More involved example where controller is required from an external file
		.controller('MyCtrl2', ['$scope', function($scope) {
			require(['controllers/myctrl2'], function(myctrl2) {
				// injector method takes an array of modules as the first argument
				// if you want your controller to be able to use components from
				// any of your other modules, make sure you include it together with 'ng'
				// Furthermore we need to pass on the $scope as it's unique to this controller
				angular.injector(['ng']).invoke(myctrl2, this, {'$scope': $scope});
			});
		}]);
});