(function () {
    'use strict';

    angular.module('<%= name %>')
        .component('<%= name %>', {
            restrict: 'E',
            bindToController: true,
            templateUrl: 'app/components/<%= parentPath %><%= name %>/<%= name %>.html',
            controller: '<%= name %>Controller as $ctrl',
            bindings: {}
        });
})();
