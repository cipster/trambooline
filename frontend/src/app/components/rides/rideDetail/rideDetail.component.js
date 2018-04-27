(function () {
    'use strict';

    angular.module('rideDetail')
        .component('rideDetail', {
            restrict: 'E',
            bindToController: true,
            templateUrl: 'app/components/rides/rideDetail/rideDetail.html',
            controller: 'rideDetailController as $ctrl',
            bindings: {}
        });
})();
