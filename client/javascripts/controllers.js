(function() {

  angular
    .module('app')
    .controller('classifiedsNavController', classifiedsNavController)
    .controller('classifiedsMainController',
  classifiedsMainController)
    .controller('classifiedsAdController', classifiedsAdController)

    function classifiedsNavController() {
      const vm = this;

      vm.greeting = 'hello';
    };

    function classifiedsMainController() {

    }

    function classifiedsAdController() {

    }
})();
