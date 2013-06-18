define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers'
	], function (angular, filters, services, directives, controllers) {
		'use strict';

		return angular.module('budgetApp', ['budgetApp.controllers', 'budgetApp.filters', 'budgetApp.services', 'budgetApp.directives']);
});
