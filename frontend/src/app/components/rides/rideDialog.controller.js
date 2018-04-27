(function () {
    'use strict';

    angular
        .module('rides')
        .controller('rideDialogController', Controller);

    /** @ngInject */
    function Controller($mdDialog) {
        this.ride = {
            types: []
        };

        this.submit = function (form) {
            form.$setSubmitted();
            if (form.$invalid) {
                return false;
            }
        };

        this.closeDialog = function () {
            $mdDialog.cancel();
        };
    }
})();
