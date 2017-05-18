(function() {

  angular
    .module('app')
    .controller('classifiedsNavController', classifiedsNavController)
    .controller('classifiedsMainController',
  classifiedsMainController)
    .controller('classifiedsClassifiedController', classifiedsClassifiedController)

    function classifiedsNavController() {
      const vm = this;

      vm.greeting = 'hello';
    };

    function classifiedsMainController(ClassifiedsService) {
      const vm = this;

      vm.$onInit = function() {
        ClassifiedsService.getClassifieds().then(function(response) {
          vm.classifieds = response;
        })
      }
    }

    classifiedsMainController.$inject = ['ClassifiedsService'];

    function classifiedsClassifiedController() {
      const vm = this;
    }



})();
