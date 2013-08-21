angular.module('budgetApp.directives', ['budgetApp.services'])
	.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
	};
}]);