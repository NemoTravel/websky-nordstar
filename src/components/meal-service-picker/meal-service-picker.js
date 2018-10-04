angular.module('app').component('mealServicePicker', {
    templateUrl: 'components/meal-service-picker/meal-service-picker.html',
    controller: [MealServicePickerController],
    controllerAs: 'vm',
    bindings: {
        count: '=',
        mealItem: '=',
        limit: '=',
        onIncrease: '&',
        onDecrease: '&',
        locked: '='
    }
});

function MealServicePickerController() {
    var vm = this;

    vm.increase = increase;
    vm.decrease = decrease;

    updateState();

    function increase() {
        if (vm.canPlus) {
            updateState();
            vm.onIncrease();
        }
    }

    function decrease() {
        if (vm.canMinus) {
            updateState();
            vm.onDecrease();
        }
    }

    function updateState() {
        if (!vm.count) {
            vm.count = 0;
        }

        vm.canPlus = (vm.count < vm.limit && !vm.mealItem.restrictSelect);
        vm.canMinus = (vm.count > 0);
    }
}
