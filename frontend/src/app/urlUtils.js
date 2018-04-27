(function () {
    'use strict';

    angular
        .module('trambooline')
        .service('UrlUtils', UrlUtils);

    /** @ngInject */
    function UrlUtils() {
        this.generateDomain = function (url) {
            var parsedURL = new URL(url);
            var port = parseInt(parsedURL.port, 10);

            return parsedURL.protocol + '//' + parsedURL.hostname + (port === 3000 || port === 8080 ? ':8080' : '');
        };
        this.generateSubDomain = function (url) {
            var parsedURL = new URL(url);

            var subDomain = parsedURL.hostname.replace(/\..+$/, '');
            if (subDomain === 'admin') {
                // subDomain = '';
            }
            return subDomain;
        };
    }
})();
