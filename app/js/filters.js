define(['angular', 'services'], function (angular, services) {
	'use strict';
	
	angular.module('budgetApp.filters', ['budgetApp.services'])
		.filter('interpolate', ['version', function(version) {
			return function(text) {
				return String(text).replace(/\%VERSION\%/mg, version);
			};
	}]);
});
