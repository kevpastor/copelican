(function() {
  'use strict';

  angular
    .module('copelican')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(journey) {
    var vm = this;

    vm.journeys = [];

    getJourney();

    function getJourney() {
      vm.journeys = journey.getJourney();

      angular.forEach(vm.journeys, function(journey) {
        journey.rank = Math.random();
      });
    }
  }
})();
