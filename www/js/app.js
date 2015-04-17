// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ProfileDemoController' , ['ngImgCrop'])

angular.module('ProfileDemo', ['ionic', 'ProfileDemoController'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {
  $ionicConfigProvider.templates.maxPrefetch(0);
  $stateProvider

    .state('app', {
      url: "/app",
      templateUrl: "templates/profile.html",
      controller: 'ProfileCtrl'
    })

  $urlRouterProvider.otherwise('/app');
}).constant('underscore',window._);
