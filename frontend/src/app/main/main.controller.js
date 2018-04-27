(function () {
    'use strict';

    angular
        .module('trambooline')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $mdSidenav, $mdDialog, ridesResource) {
        this.rides = [];
        this.currentPage = 1;
        this.totalPages = 0;
        this.$onChanges = function (changes) {
            var currentSearchText = this.searchText || '';
            if (changes.searchText && !changes.searchText.isFirstChange()) {
                currentSearchText = changes.searchText.currentValue;
            }
            this.fetchRides(currentSearchText, 0);
            $scope.$watch(function () {
                return this.selectedIndex;
            }.bind(this), function (currentRide) {

            }.bind(this));

        };
        this.nextPage = function () {
            this.fetchRides(this.searchText, this.currentPage);
        };
        this.previousPage = function () {
            this.fetchRides(this.searchText, this.currentPage - 2);
        };
        this.fetchRides = function (searchText, pageNumber) {
            ridesResource.filter({
                search: searchText,
                page: pageNumber,
                size: 15
            })
                .then(function (response) {
                    this.rides = response.items;
                    this.currentPage = response.page.number + 1;
                    this.totalPages = response.page.totalPages;
                }.bind(this));
        };

        this.selectedRide = null;
        var previous = null;
        this.selectedIndex = 0;

        this.addTab = function (title, view) {
            view = view || title + " Content View";
            this.rides.push({title: title, content: view, disabled: false});
        };

        this.openAddDialog = function () {
            $mdDialog.show({
                controller: 'rideDialogController as $ctrl',
                templateUrl: 'app/components/rides/rideDialog.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: false,
                fullscreen: true // Only for -xs, -sm breakpoints.
            });
        };

        this.removeRide = function (tab) {
            var index = this.rides.indexOf(tab);
            this.rides.splice(index, 1);
        };
        this.toggleSidebar = buildToggle('right');

        function buildToggle(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            };
        }
    }
})();
