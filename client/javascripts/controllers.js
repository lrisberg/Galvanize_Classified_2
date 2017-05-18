(function() {

  angular
    .module('app')
    .controller('clNavController', clNavController)
    .controller('clMainController',
  clMainController)
    .controller('clAdController', clAdController)

    function clNavController() {
      const vm = this;

      vm.greeting = 'hello';
    };

    function clMainController(clService) {
      const vm = this;

      vm.$onInit = function() {
        clService.getcl().then(function(response) {
          vm.ads = response;
        })
      }
    }

    clMainController.$inject = ['clService'];

    function clAdController() {
      const vm = this;
    }



})();
