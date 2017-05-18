(function() {

  angular
    .module('app')
    .service('ClassifiedsService', ClassifiedsService)

    function ClassifiedsService($http) {
      const BASE_URL = '/api/classifieds'

      this.getClassifieds = function() {
        return $http.get(BASE_URL).then((response) => {
          return response.data;
        });
      };
    }

    ClassifiedsService.$inject = ["$http"];
})();
