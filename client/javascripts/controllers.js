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

    function clNewAdFormController(clService) {
      const vm = this;

      vm.createAd = function() {
        console.log(vm.newAd);
        clService.createAd(vm.newAd).then((response) => {
          console.log(response);
          vm.ads.push(response);
          delete vm.newAd;
          vm.showForm = false;
        })
      }
    }

    clNewAdFormController.$inject = ['clService'];



})();
