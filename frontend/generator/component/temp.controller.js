(function () {
    'use strict';

    angular
        .module('<%= name %>')
        .controller('<%= name %>Controller', Controller);

    /** @ngInject */
    function Controller() {
        this.name = '<%= name %>';

    }
})();
