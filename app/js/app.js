angular.module('budgetApp', ['budgetApp.controllers', 'budgetApp.filters', 'budgetApp.services', 'budgetApp.directives'])
	
	.config(['$compileProvider', function ($compileProvider) {
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    }])

	.config(['$routeProvider', function($routeProvider) {
		
		$routeProvider.
			when('/budgets', {
				templateUrl: '/app/partials/budget-list.html',
				controller: 'ctlBudgetList'
			}).
			when('/budgets/:id', {
				templateUrl: '/app/partials/budget.html',
				controller: 'ctrl-budget'
			}).
			otherwise({redirectTo: '/budgets'});
	}]);