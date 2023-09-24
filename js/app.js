
'use strict';
/* App Module */
(function (angular) {
  angular
  .module('gmsacApp', ['ngRoute','analytics'])
  .config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.
      when('/', {templateUrl: '/partials/home.html'}).
      when('/donatenow', {templateUrl: '/partials/donate.html'}).
      when('/dealerFAQ/us', {templateUrl: '/partials/dealerUS.html'}).
      when('/dealerFAQ/canada',{templateUrl: '/partials/dealerCanada.html'}).
      when('/apply',{templateUrl: '/partials/apply.html',controller: 'ApplyCtrl'}).
      when('/contact',{templateUrl: '/partials/contact.html'}).
      when('/eligibility', {templateUrl: '/partials/eligibility.html'}).
      when('/howToApply', {templateUrl: '/partials/howToApply.html'}).
      otherwise({
        redirectTo: '/'
      });

}]);
}(window.angular));

(function(angular) {

  angular.module('analytics', ['ng']).service('analytics', [
    '$rootScope', '$window', '$location', function($rootScope, $window, $location) {
      var track = function() {
        $window._gaq.push(['_trackPageview', $location.path()]);
      };
      $rootScope.$on('$viewContentLoaded', track);
    }
  ]);

}(window.angular));
