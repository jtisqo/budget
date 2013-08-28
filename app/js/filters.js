angular.module('budgeteer.filters', ['budgeteer.services'])
	.filter('interpolate', ['version', function(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
}]);
