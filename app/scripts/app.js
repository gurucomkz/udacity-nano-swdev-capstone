'use strict';

/**
 * @ngdoc overview
 * @name capstoneApp
 * @description
 * # capstoneApp
 *
 * Main module of the application.
 */
angular
  .module('capstoneApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl',
        controllerAs: 'welcome'
      })
      .when('/trips', {
        templateUrl: 'views/trips.html',
        controller: 'TripsCtrl',
        controllerAs: 'trips'
      })
      .when('/trip', {
        templateUrl: 'views/trip.html',
        controller: 'TripCtrl',
        controllerAs: 'trip'
      })
      .when('/invite', {
        templateUrl: 'views/invite.html',
        controller: 'InviteCtrl',
        controllerAs: 'invite'
      })
      .when('/city', {
        templateUrl: 'views/city.html',
        controller: 'CityCtrl',
        controllerAs: 'city'
      })
      .when('/place', {
        templateUrl: 'views/place.html',
        controller: 'PlaceCtrl',
        controllerAs: 'place'
      })
      .when('/newplace', {
        templateUrl: 'views/newplace.html',
        controller: 'NewplaceCtrl',
        controllerAs: 'newplace'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
