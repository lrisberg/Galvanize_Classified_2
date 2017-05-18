(function() {

  angular
    .module('app')
    .component('classifiedsNav', {
      controller: 'classifiedsNavController',
      controllerAs: '$ctrl',
      templateUrl: '/views/classifiedsNav.html'
    })

    .component('classifiedsIndex', {
      controller: function() {
        
      },
      controllerAs: '$ctrl',
      template: 'main page'
    })
})();
