(function() {

  angular
    .module('app')
    .service('clService', clService)

    function clService($http) {
      const BASE_URL = '/api/classifieds'

      this.getcl = function() {
        return $http.get(BASE_URL).then((response) => {
          return response.data;
        });
      };
    }

    clService.$inject = ["$http"];
})();
