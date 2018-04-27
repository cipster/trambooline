(function() {
    'use strict';

    angular
        .module('trambooline')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                template: '<main></main>'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
