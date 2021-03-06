angular.module('budgeteer.controllers', ['budgeteer.services'])
	
	.controller('budget-list', ['$scope', 'Slug', function ($scope, Slug) {
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

	.controller('budget', ['$scope', function($scope) {
		
		// You can access the scope of the controller from here
		$scope.budget_name = 'hey this is myctrl2.js!';
		
	}]);