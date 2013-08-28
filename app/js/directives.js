angular.module('budgeteer.directives', ['budgeteer.services'])
	.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
	};
}]);