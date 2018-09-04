angular.module('app').directive('mealLimit', [function () {
    return {

        restrict: 'A',

        scope: {
            orderInfo: '='
        },

        controller: 'testCtrl',
        controllerAs: 'vm',
        bindToController: true

    }
}]);


angular.module('app').controller('testCtrl', ['$scope', 'backend', testCtrl]);


function testCtrl($scope, backend) {
    var vm = this;

    // https://stackoverflow.com/questions/24078535/angularjs-controller-as-syntax-and-watch
    $scope.$watch(angular.bind(this, function () {
        return this.orderInfo
    }), function (newValue) {
        var newOrderInfoMeal = _.find(newValue.editable_extra_services, {code: "meal"});


        // Питание не выбрано
        if (!newOrderInfoMeal) {
            return;
        }

        // Питание выбрано
        _.forEach(newOrderInfoMeal.passengers, function (passenger) {
            _.forEach(passenger.segments, function (segment) {


                // Подсчитать кол-во блюд для каждого пассажира
                var mealCount = _.reduce(segment.selectedExtraServices, function (result, key) {
                    return result + key.amount
                }, 0);


                if (mealCount > 2) {

                    // найти блюдо, которое выбрано дважды.
                    var twiceSelectedMeal = _.find(segment.selectedExtraServices, function (item) {
                        return item.amount === 2
                    });

                    // Если такого блюда не найдено, удалить первое в массиве segment.selectedExtraServices
                    var mealToRemove = twiceSelectedMeal ? twiceSelectedMeal : segment.selectedExtraServices[0];

                    backend.modifyExtraService({
                        code: 'meal',
                        passenger_id: passenger.id,
                        segment_id: segment.id,
                        subgroup: 'cold',
                        amount: mealToRemove.amount - 1,
                        service_type: mealToRemove.serviceType,
                        rfisc: mealToRemove.rfisc
                    });
                }
            })
        })
    })
}

// function testCtrl() {
//
// }
