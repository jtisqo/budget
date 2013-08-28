angular.module('budgeteer.controllers', ['budgeteer.services'])
	// Sample controller where service is being used
	.controller('ctlBudgetList', ['$scope', 'Slug', function ($scope, Slug) {
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
			var new_budget = {
				slug: Slug.slugify($scope.new_budget_title),
				title: $scope.new_budget_title
			}

			$scope.budgets.push(new_budget);
			$scope.new_budget_title = "";
		}

	}])
	// More involved example where controller is required from an external file
	.controller('MyCtrl2', ['$scope', function($scope) {
		
		// You can access the scope of the controller from here
		$scope.welcomeMessage = 'hey this is myctrl2.js!';
		
	}]);