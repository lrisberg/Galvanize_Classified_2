(function() {
  
  angular
    .module('app')
    .controller('classifiedsNavController', classifiedsNavController)
    .controller('classifiedsIndexController',
  classifiedsIndexController)

    function classifiedsNavController() {
      const vm = this;

      vm.greeting = 'hello';
    };

    function classifiedsIndexController() {

    }
})();
