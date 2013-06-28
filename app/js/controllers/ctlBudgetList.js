define([], function() {
	return ['$scope', '$http', function($scope, $http) {

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

		// because this has happened asynchroneusly we've missed
		// Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicityly call it at the end of our Controller constructor
		$scope.$apply();
	}];
});