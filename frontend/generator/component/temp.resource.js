(function () {
    'use strict';

    angular.module('<%= name %>')
        .service('<%= name %>Resource', Resource);

    /** @ngInject */
    function Resource($resource) {
        var resource = $resource('/api/<%= name %>/:id', {id: '@id'}, {
            save: {
                method: 'POST'
            },
            get: {
                method: 'GET'
            },
            filter: {
                url: '/api/<%= name %>/search/filter',
                method: 'GET',
                params: {
                    search: '@search',
                    page: '@page',
                    size: '@size',
                    sort: '@sort'
                },
                interceptor: {
                    response: function (response) {
                        return {
                            items: response.data._embeddedItems,
                            page: response.data.page,
                            links: response.data.links
                        };
                    }
                }
            },
            update: {
                method: 'PUT'
            },
            delete: {
                method: 'DELETE'
            }
        });

        return {
            save: function (p) {
                return resource.save(p).$promise;
            },
            get: function (p) {
                return resource.get(p).$promise;
            },
            filter: function (p) {
                return resource.filter(p).$promise;
            },
            update: function (p) {
                return resource.update(p).$promise;
            },
            delete: function (p) {
                return resource.delete(p).$promise;
            }
        };
    }
})();
