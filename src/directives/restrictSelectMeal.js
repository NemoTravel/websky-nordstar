angular.module('app').directive('restrictMealSelect', function () {
    return {
        restrict: 'A',
        controllerAs: 'vm',
        scope: {
            'restrictCount': '=',
            'orderInfo': '=',
            'mealMenu': '=',
            'service': '='
        },
        bindToController: true,
        controller:
            'restrictSelectMealController'
    }
});


angular.module('app').controller('restrictSelectMealController', ['$scope', 'watchman', restrictSelectMealController]);


function restrictSelectMealController($scope, watchman) {
    var vm = this;

    $scope.$watchCollection(angular.bind(this, function () {
        return vm.service;
    }, true), function (newServiceValue) {
        _.forEach(newServiceValue.itemsByPassengerSegments, function (passenger, id) {
            _.forEach(passenger, function (subgroup) {
                var totalSelectedMealCountForPassenger = _.reduce(subgroup, function (result, subgroupItem) {

                    return result + _.reduce(subgroupItem, function (sum, mealItem) {
                        if (mealItem.alreadySelectedCount) {
                            return sum + mealItem.alreadySelectedCount;
                        } else {
                            return sum;
                        }
                    }, 0);
                }, 0);

                if (totalSelectedMealCountForPassenger >= 2) {
                    restrcitMealSelect(subgroup);
                }
            })
        });
    });

    function restrcitMealSelect(subgroup) {
        if (subgroup) {
            _.forEach(subgroup, function (subgroup) {
                _.forEach(subgroup, function (mealItem) {
                    mealItem.restrictSelect = true;
                })
            })
        }
    }
}