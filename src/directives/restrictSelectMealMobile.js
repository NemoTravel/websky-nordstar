var app = angular.module('app');

app.directive('restrictMealMobile', function () {
    return {
        controllerAs: 'restrictMobile',
        controller: 'restrictMobileCtrl',
        bindToController: true
    }
});


app.controller('restrictMobileCtrl', ['$scope', restrictMobileCtrl]);

function restrictMobileCtrl($scope) {
    var vm = this;
    vm.hello = 'world';

    console.log($scope, vm);
}