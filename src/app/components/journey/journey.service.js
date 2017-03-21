(function() {
  'use strict';

  angular
      .module('copelican')
      .service('journey', journey);

  /** @ngInject */
  function journey() {
    var data = [ /* TODO récupérer les données de la base de données */
      {
        'departure_city': 'Paris',
        'arrival_city': 'Bordeaux',
        'size': 'car.png',
        'vehicule': 'en voiture'
      },
      {
        'departure_city': 'Paris',
        'arrival_city': 'Bordeaux',
        'size': 'car.png',
        'vehicule': 'en voiture'
      },
      {
        'departure_city': 'Paris',
        'arrival_city': 'Bordeaux',
        'size': 'car.png',
        'vehicule': 'en voiture'
      },
      {
        'departure_city': 'Paris',
        'arrival_city': 'Bordeaux',
        'size': 'car.png',
        'vehicule': 'en voiture'
      },
      {
        'departure_city': 'Paris',
        'arrival_city': 'Bordeaux',
        'size': 'car.png',
        'vehicule': 'en voiture'
      },
      {
        'departure_city': 'Paris',
        'arrival_city': 'Bordeaux',
        'size': 'car.png',
        'vehicule': 'en voiture'
      },
      {
        'departure_city': 'Paris',
        'arrival_city': 'Bordeaux',
        'size': 'car.png',
        'vehicule': 'en voiture'
      },
      {
        'departure_city': 'Paris',
        'arrival_city': 'Bordeaux',
        'size': 'car.png',
        'vehicule': 'en voiture'
      },
      {
        'departure_city': 'Paris',
        'arrival_city': 'Bordeaux',
        'size': 'car.png',
        'vehicule': 'en voiture'
      }
    ];

    this.getJourney = getJourney;

    function getJourney() {
      return data;
    }
  }

})();
