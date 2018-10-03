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
    // var vm = this;
    //
    // vm.restrictSelect = false;
    //
    // $scope.$watchCollection(angular.bind(this, function () {
    //     return vm.service;
    // }, true), function (newServiceValue) {
    //     console.log(newServiceValue.itemsByPassengerSegments);
    //     _.forEach(newServiceValue.itemsByPassengerSegments, function (segment, id) {
    //         _.forEach(segment, function (subgroup) {
    //             var totalSelectedMealCountForPassenger = _.reduce(subgroup, function (result, subgroupItem) {
    //
    //                 return result + _.reduce(subgroupItem, function (sum, mealItem) {
    //                     if (mealItem.alreadySelectedCount) {
    //                         return sum + mealItem.alreadySelectedCount;
    //                     } else {
    //                         return sum;
    //                     }
    //                 }, 0);
    //             }, 0);
    //
    //             if (totalSelectedMealCountForPassenger >= 2) {
    //                 vm.restrictSelect = true;
    //                 console.log(segment);
    //                 restrcitMealSelect(segment);
    //             }
    //         })
    //     });
    // });
    //
    // // $scope.$watch(angular.bind(this, function () {
    // //     return this.mealMenu;
    // // }), function (newMealMenu) {
    // //     if (vm.restrictSelect) {
    // //         restrcitMealSelect();
    // //     }
    // // });
    //
    //
    // function restrcitMealSelect(segment) {
    //     _.forEach(vm.mealMenu, function (segment) {
    //         if (segment) {
    //             _.forEach(segment, function (mealItem) {
    //                 mealItem.restrictSelect = true;
    //             })
    //         }
    //     });
    // }
    //
    // function restrictMealSelectForPassenger(id) {
    //     var passenger = _.find(vm.orderInfo.passengers, function (passenger) {
    //         return passenger.id === id
    //     });
    //     passenger.restrictMealSelect = true;
    // }
}