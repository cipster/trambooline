(function () {
    'use strict';

    angular
        .module('trambooline')
        .config(config);

    /** @ngInject */
    function config($logProvider, $mdThemingProvider, cfpLoadingBarProvider, $locationProvider, $httpProvider, toastr) {
        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
        // $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        // $httpProvider.defaults.withCredentials = true;

        $httpProvider.interceptors.push('HttpRequestInterceptor');

        $locationProvider.hashPrefix('');

        // Set options third-party lib
        toastr.options.timeOut = 3000;
        toastr.options.positionClass = 'toast-top-right';
        toastr.options.preventDuplicates = true;
        toastr.options.progressBar = true;

        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('green');
        $mdThemingProvider.alwaysWatchTheme(true);
        $mdThemingProvider.theme('default').dark();

        cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
        cfpLoadingBarProvider.includeSpinner = false;
    }

})();
