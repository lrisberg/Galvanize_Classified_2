(function() {

  angular
    .module('app')
    .component('classifiedsNav', {
      controller: 'classifiedsNavController',
      controllerAs: '$ctrl',
      templateUrl: '/views/classifiedsNav.html'
    })

    .component('classifiedsMain', {
      controller: 'classifiedsMainController',
      controllerAs: '$ctrl',
      templateUrl: '/views/classifiedsMain.html'
    })

    .component('classifiedsAd', {
      controller: 'classifiedsAdController',
      controllerAs: '$ctrl',
      templateUrl: '/views/classifiedsAd.html'
    })
})();
