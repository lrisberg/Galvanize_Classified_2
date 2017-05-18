(function() {

  angular
    .module('app')
    .controller('clNavController', clNavController)
    .controller('clMainController',
  clMainController)
    .controller('clAdController', clAdController)
    .controller('clNewAdFormController', clNewAdFormController)
    .controller('clEditAdController', clEditAdController)

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

    function clAdController(clService, $state) {
      const vm = this;

      vm.deleteAd = function() {
        clService.deleteAd(vm.ad.id).then((response) => {
          let adId = vm.ad.id;
          console.log(adId);
          console.log(vm.ads);
          let adIndex = vm.ads.indexOf(vm.ad);
          vm.ads.splice(adIndex);
        })
      }
    }

    clAdController.$inject = ['clService', '$state'];

    function clNewAdFormController(clService) {
      const vm = this;

      vm.createAd = function() {
        clService.createAd(vm.newAd).then((response) => {
          vm.ads.push(response);
          delete vm.newAd;
          vm.showForm = false;
        })
      }
    }

    clNewAdFormController.$inject = ['clService'];

    function clEditAdController(clService, $stateParams) {
      const vm = this;

      vm.$onInit = function() {
        clService.getAd($stateParams.ad_id).then((response) => {
          console.log(response);
          vm.editedAd = response;
        })
      }
    }

    clEditAdController.$inject = ['clService', '$stateParams'];


})();
