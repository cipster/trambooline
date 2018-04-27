(function () {
    'use strict';

    angular.module('trambooline')
        .component('main', {
            restrict: 'E',
            bindToController: true,
            templateUrl: 'app/main/main.html',
            controller: 'MainController as $ctrl',
            bindings: {}
        });
})();
