angular.module('budgetApp.controllers', ['budgetApp.services'])
	// Sample controller where service is being used
	.controller('ctlBudgetList', ['$scope', function ($scope) {
		
		$scope.budgets = [
			{
				slug: "budget_1",
				title: "Budget 1"
			},
			{
				slug: "budget_2",
				title: "Budget 2"
			},
			{
				slug: "budget_3",
				title: "Budget 3"
			},
			{
				slug: "budget_4",
				title: "Budget 4"
			},
			{
				slug: "budget_5",
				title: "Budget 5"
			},
			{
				slug: "budget_6",
				title: "Budget 6"
			}
		];

		$scope.new_budget_title = "";

		$scope.budgets.add = function () {
			//$scope.budgets.push({
			//});
			console.log($scope.new_budget_title);
		}

	}])
	// More involved example where controller is required from an external file
	.controller('MyCtrl2', ['$scope', function($scope) {
		
		// You can access the scope of the controller from here
		$scope.welcomeMessage = 'hey this is myctrl2.js!';
		
	}]);