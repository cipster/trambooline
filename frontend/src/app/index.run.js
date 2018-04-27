(function() {
    'use strict';

    angular
        .module('trambooline')
        .run(runBlock);

    /** @ngInject */
    function runBlock(ENV, UrlUtils) {

        ENV.apiUrl = UrlUtils.generateDomain(window.location.href) + '/api';
        ENV.domain = UrlUtils.generateDomain(window.location.href);
    }

})();
