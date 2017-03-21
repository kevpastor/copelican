(function() {
  'use strict';

  angular
    .module('copelican')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
