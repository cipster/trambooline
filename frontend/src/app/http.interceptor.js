(function () {
    'use strict';

    angular
        .module('trambooline')
        .service('HttpRequestInterceptor', HttpRequestInterceptor);

    /** @ngInject */
    function HttpRequestInterceptor($rootScope, $q, $cookies, ENV, SpringDataRestAdapter) {
        return {
            request: function (config) {
                var token = $cookies.get('XSRF-TOKEN');

                if (token) {
                    config.headers['X-XSRF-TOKEN'] = token;
                }

                var restRequestRegex = new RegExp('^.*?/api/(.*)$');
                config.url = config.url.replace(restRequestRegex, ENV.apiUrl + '/$1');
                return config;
            },
            response: function (res) {
                // If res.data is not an object, then it cannot be processed by the SpringDataRestAdapter,
                // so it should just be passed on unchanged
                if (!angular.isObject(res.data)) {
                    return res;
                }

                return SpringDataRestAdapter.process(res.data)
                    .then(function (processedResponse) {
                        res.data = processedResponse;
                        return res;
                    });
            },
            responseError: function (response) {
                var status = response.status;
                if (status === 102 || status === -1) {
                    $rootScope.$broadcast(ENV.EVENTS.SERVER_DOWN);
                }
                if (status === 401) {
                    $rootScope.$broadcast(ENV.EVENTS.RESET_ALL_STORES);
                }
                if (status === 403) {
                    $rootScope.$broadcast(ENV.EVENTS.FORBIDDEN);
                }
                if (status === 404) {
                    $rootScope.$broadcast(ENV.EVENTS.NOT_FOUND);
                }

                return $q.reject(response);
            }

        };
    }
})();
