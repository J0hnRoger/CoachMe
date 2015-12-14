(function() {
  'use strict';

  angular
    .module('coachMe')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
