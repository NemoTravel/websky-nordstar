var app = angular.module('app');

app.directive('returnToPreviousSubgroup', function () {

    return {
        restrict: 'A',
        controllerAs: 'mv',
        scope: {
            activeSubgroup: '='
        },
        bindToController: true,
        controller: 'returnToPreviousCtrl',
        link: function (el, attr, $scope) {
            var $el = $(el);
        }
    }

});


app.controller('returnToPreviousCtrl', ['$scope', 'watchman', returnToPreviousCtrl]);

function returnToPreviousCtrl($scope, watchman) {
    var vm = this;
}
