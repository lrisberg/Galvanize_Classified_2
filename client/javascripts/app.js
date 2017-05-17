angular.module("app", ['ui.router'])

  .component('classifiedsMain', {

    controller: function() {
      const vm = this;

      vm.greeting = 'Hello';
    },

    templateUrl: './views/classifiedsMain.html'
  })
