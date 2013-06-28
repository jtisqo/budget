define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		
		$routeProvider.
			when('/budgets', {
				templateUrl: '/app/partials/budget-list.html',
				controller: 'ctlBudgetList'
			}).
			when('/budgets/:id', {
				templateUrl: '/app/partials/budget.html',
				controller: 'ctrl-budget'
			});

		$routeProvider.otherwise({redirectTo: '/budgets'});
	}]);

});