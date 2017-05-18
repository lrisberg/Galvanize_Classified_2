(function() {

  angular
    .module('app')
    .controller('clNavController', clNavController)
    .controller('clMainController',
  clMainController)
    .controller('clAdController', clAdController)
    .controller('clNewAdFormController', clNewAdFormController)

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

      vm.toggleForm = function() {
        vm.showForm = !vm.showForm;
      }
    }

    clMainController.$inject = ['clService'];

    function clAdController() {
      const vm = this;
    }

    function clNewAdFormController() {
      const vm = this;
    }



})();
