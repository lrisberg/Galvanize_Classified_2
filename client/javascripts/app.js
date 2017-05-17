angular.module("app", [])

  .component('classifiedsMain', {

    controller: function() {
      const vm = this;

      vm.greeting = 'Hello';
    },

    templateUrl: './views/classifiedsMain.html'
  })
