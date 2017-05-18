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

    .component('classifiedsClassified', {
      controller: 'classifiedsClassifiedController',
      controllerAs: '$ctrl',
      templateUrl: '/views/classifiedsClassified.html'
    })
})();
