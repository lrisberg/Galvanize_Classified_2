(function() {

  angular
    .module('app')
    .component('clNav', {
      controller: 'clNavController',
      controllerAs: '$ctrl',
      templateUrl: '/views/clNav.html'
    })

    .component('clMain', {
      controller: 'clMainController',
      controllerAs: '$ctrl',
      templateUrl: '/views/clMain.html'
    })

    .component('clAd', {
      bindings: {
        'ad': '='
      },
      controller: 'clAdController',
      controllerAs: '$ctrl',
      templateUrl: '/views/clAd.html'
    })
})();
