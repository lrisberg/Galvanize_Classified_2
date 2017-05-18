(function() {

  angular
    .module('app')
    .service('clService', clService)

    function clService($http) {
      const BASE_URL = '/api/classifieds'

      this.getcl = function() {
        return $http.get(BASE_URL).then((response) => {
          response.data.forEach(ad => {
            ad.created_at = moment(ad.created_at);
          })
          return response.data;
        });
      };

      this.createAd = function(newAd) {
        return $http.post(BASE_URL, newAd).then((response) => {
          return response.data;
        });
      };
      
    }


    clService.$inject = ["$http"];
})();
