/* global malarkey:false, toastr:false, moment:false */
(function () {
    'use strict';

    angular
        .module('trambooline')
        .constant('malarkey', malarkey)
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('ENV', {
                environment: "dev",
                apiUrl: "http://localhost:8080/api",
                domain: "http://localhost:8080",
                EVENTS: {
                    RESET_ALL_STORES: 'RESET_ALL_STORES',
                    SERVER_DOWN: 'SERVER_DOWN',
                    NOT_AUTHORIZED: 'NOT_AUTHORIZED',
                    FORBIDDEN: 'FORBIDDEN',
                    NOT_FOUND: 'NOT_FOUND'
                }
            }
        );

})();
