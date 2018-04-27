(function () {
    'use strict';

    angular
        .module('rides')
        .component('rideDialog', {
            restrict: 'E',
            controller: 'rideDialogController as $ctrl',
            templateUrl: 'app/components/rides/rideDialog.html',
            bindToController: true,
            bindings: {}
        });
})();
