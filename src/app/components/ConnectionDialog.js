angular.module('connectionDialog', ['ngMaterial'])
    .controller('DialogController', function($scope, $mdDialog) { /* TODO Relier ce script au bouton de connexion de la navbar */
        $scope.status = '  ';

        $scope.showConnectionDialog = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'components/connection.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                //fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
                clickOutsideToClose: true
            })/*
             .then(function(answer) {
             $scope.status = 'Votre action a bien été prise en compte.';
             }, function() {
             $scope.status = 'Vous avez annulé la connexion.';
             });*/
        };

        function DialogController($scope, $mdDialog) {
            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }
    });