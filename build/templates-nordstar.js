!function(e){try{e=angular.module("app")}catch(s){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("components/popup-meal/popup-meal.html",'<div class="popup popup_selectFood" id="popupMeal" style="display: none;"><div class="title"><div class="title__i"><p>{{ \'web.popupMeal.header\' | aliasStatic}}</p><a href="" ng-click="vm.close()" class="closePopup closePopup_js"></a></div></div><div class="foodSlider"><div class="foodSlider__i slick-initialized slick-slider"><div aria-live="polite" class="slick-list draggable"><div class="slick-track" role="listbox"><div class="item slick-slide slick-current slick-active"><div class="itemTitle"><div class="itemTitle__i"><p><geo-marker prefix="dep__point" key="es-meal" city="vm.flight.origincity" cityname="vm.flight.origincityName" port="vm.flight.originport" portname="vm.flight.originportName"></geo-marker>–<geo-marker prefix="arr__point" key="es-meal" city="vm.flight.destinationcity" cityname="vm.flight.destinationcityName" port="vm.flight.destinationport" portname="vm.flight.destinationportName"></geo-marker></p><p>{{ vm.passenger.lastName }} {{ vm.passenger.firstName }}</p></div></div><div ng-if="vm.nextPassenger || vm.prevPassenger" class="pax-switcher"><a href="" ng-if="vm.prevPassenger" ng-click="vm.switchPrev()" class="pax-switcher-prev">{{ \'web.popupMeal.switchPrev\' | aliasStatic}}</a> <a href="" ng-if="vm.nextPassenger" ng-click="vm.switchNext()" class="pax-switcher-next">{{ \'web.popupMeal.switchNext\' | aliasStatic}}</a></div><div ng-show="vm.subgroups.length > 1" class="foodSortSelect_wrap"><ui-select ng-change="vm.mealMenuSubgroupMobileChange()" ng-model="vm.mealMenuSubgroupMobile" theme="selectize" search-enabled="false" required=""><ui-select-match placeholder="{{$select.selected.value ? (\'web.meal.subgroup.\' | aliasWithPrefix:$select.selected.value) : ( \'web.meal.subgroup.all\' | aliasStatic)}}">{{$select.selected.value ? (\'web.meal.subgroup.\' | aliasWithPrefix:$select.selected.value) : ( \'web.meal.subgroup.all\' | aliasStatic)}}</ui-select-match><ui-select-choices repeat="subgroupCode.index as subgroupCode in vm.subgroupItems track by $index"><div>{{ \'web.meal.subgroup.\' | aliasWithPrefix:subgroupCode.value }}</div></ui-select-choices></ui-select></div><div class="list"><div class="list__i isotopeGrid"><wrap ng-repeat="(subgroupNum, subgroup) in vm.mealMenu"><div ng-repeat="mealItem in subgroup" ng-if="vm.mealMenuSubgroup === subgroupNum || vm.mealMenuSubgroup === false" ng-class="{ active: mealItem.active }" class="item"><a href=""><div class="img"><img ng-src="{{vm.mealImagesPath}}/{{ mealItem.serviceType }}-{{ mealItem.rfisc }}.jpg" alt=""></div><div class="name"><p>{{ mealItem.title }}</p><p class="price" ng-bind-html="{ value: mealItem.price, currency: mealItem.currency } | price"></p></div><div class="extra-service-picker"><meal-service-picker count="mealItem.alreadySelectedCount" meal-item="mealItem" limit="mealItem.limit" locked="vm.locked" on-increase="vm.mealCountChangeHandler(subgroupNum, mealItem, +1)" on-decrease="vm.mealCountChangeHandler(subgroupNum, mealItem, -1)"></meal-service-picker></div><div class="description"><p ng-bind-html="mealItem.description"></p></div></a></div></wrap></div></div></div></div></div></div></div></div>')}])}(),function(e){try{e=angular.module("app")}catch(s){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("components/es-meal/es-meal.html",'<div class="item__i mobileHide"><div class="top"><div class="top__i"><table><tbody><tr><td><div class="text"><div class="iconBox" ng-click="vm.switchService()"><i class="icon_meal"></i></div><div class="name"><h2>{{ \'web.extraServices.meal.header\' | aliasStatic}} <a href="" fancybox="popupAlias" data-popup-alias="web.extraServicesRules.meal"><span class="infoBoxWrap"><i class="icon_info"></i> <span class="infoBox"><span class="infoBox__i">{{ \'web.extraServices.serviceDesc\' | aliasStatic}}</span></span></span></a></h2><p>{{ \'web.extraServices.meal.desc\' | aliasStatic}}</p></div></div></td><td><div ng-if="!vm.service.active && vm.service.minPrice" class="price"><div class="price__i"><p>{{ \'web.extraServices.minPrice\' | aliasStatic}}</p><h3 ng-bind-html="{ value: vm.service.minPrice.price, currency: vm.service.minPrice.currency } | price"></h3></div></div></td><td><a href="" ng-click="vm.switchService()" ng-class="{ active: vm.service.active, control_disabled: vm.locked }" class="btn showDrop_js"><span class="show">{{ \'web.extraServices.meal.select\' | aliasStatic}}</span> <span class="hide">{{ \'web.extraServices.meal.deselect\' | aliasStatic}}</span></a></td></tr></tbody></table></div></div><div class="drop" ng-class="{ active: vm.service.active, show_js: vm.service.active }"><div class="drop__i"><div class="foodSelect"><div class="foodSelect__i"><div class="passengersBlock" restrict-meal-select="" restrict-count="2" order-info="vm.orderInfo" meal-menu="vm.mealMenu" service="vm.service"><div class="passengersBlock_row"><div class="passengersBlock_row-control"><div class="passengersBlock_row-control-outer" ng-repeat="(flightNum, flight) in vm.orderInfo.plainFlights"><div class="passengersBlock_row-control-passengers" ng-click="vm.selectFlightPassenger(flightNum, 0)" ng-class="{active:flightNum == vm.selectedFlight}"><i class="passengersBlock_row-control-passengers-icon" aria-hidden="true"></i> <span class="passengersBlock_row-control-passengers-racenumber">{{flight.racenumber}}</span><geo-marker prefix="dep__point" key="es-meal" city="flight.origincity" cityname="flight.origincityName" port="flight.originport" portname="flight.originportName"></geo-marker><i class="passengersBlock_row-control-passengers-delimiter" aria-hidden="true"></i><geo-marker prefix="arr__point" key="es-meal" city="flight.destinationcity" cityname="flight.destinationcityName" port="flight.destinationport" portname="flight.destinationportName"></geo-marker></div><div class="passengersBlock_row-control-droporder" ng-show="flightNum == vm.selectedFlight"><div class="passengersBlock_row-control-droporder-passenger" ng-repeat="(passengerNum, passenger) in vm.orderInfo.passengers" ng-if="vm.service.availableByPassengerSegments[passengerNum]"><div class="passengersBlock_row-control-droporder-passenger-outer" ng-click="vm.selectFlightPassenger(flightNum, passengerNum)" ng-class="{active: passengerNum == vm.selectedPassenger}"><i class="passengersBlock_row-control-droporder-passenger-icon" aria-hidden="true"></i> <span class="passengersBlock_row-control-droporder-passenger-name">{{ passenger.lastName }} {{ passenger.firstName }}</span></div><div ng-if="vm.orderInfo.groupedEditableExtraServices.meal[passengerNum][flightNum]" class="passengersBlock_row-control-droporder-passenger-order" ng-repeat="(indexMealSelect, itemMealSelect) in vm.orderInfo.groupedEditableExtraServices.meal[passengerNum][flightNum] track by $index"><div class="passengersBlock_row-control-droporder-passenger-order-outer"><span>{{itemMealSelect.title}}</span> <span ng-bind-html="{ value: itemMealSelect.totalPrice, currency: itemMealSelect.currency } | price"></span> <i class="passengersBlock_row-control-droporder-passenger-order-remove" ng-click="vm.selectFlightPassenger(flightNum, passengerNum); vm.removePassengerFlightMeal(passengerNum, flightNum)" aria-hidden="true"></i></div></div></div></div></div></div><div class="passengersBlock_row-menu"><div ng-if="!vm.mealMenu" class="passengersBlock_row-menu__no-food">{{ \'web.extraServices.meal.noFood\' | aliasStatic}}</div><div ng-if="vm.service.subgroups.length > 1 && vm.mealMenu" class="passengersBlock_row-menu-foodSorting"><ul><li ng-class="{ active: vm.mealMenuSubgroup === false }"><a href="" ng-click="vm.mealMenuSubgroup = false">{{ \'web.meal.subgroup.\' | aliasWithPrefix:\'all\' }}</a></li><li ng-repeat="(subgroupNum, subgroupCode) in vm.service.subgroups" ng-class="[\'food__icon\', \'food__icon--\' + subgroupCode, { active: vm.mealMenuSubgroup === subgroupNum }]"><a href="" ng-click="vm.mealMenuSubgroup = subgroupNum">{{ \'web.meal.subgroup.\' | aliasWithPrefix:subgroupCode }}</a></li></ul></div><div class="list customScroll_height customScroll_js" custom-scroll=""><div class="list__i isotopeGrid"><wrap ng-repeat="(subgroupNum, subgroup) in vm.mealMenu"><div ng-repeat="mealItem in subgroup" ng-if="vm.mealMenuSubgroup === subgroupNum || vm.mealMenuSubgroup === false" ng-class="{ active: mealItem.active, control_disabled: vm.locked, \'item--alreadySelected\': mealItem.alreadySelectedCount >= 1}" class="item"><div class="food_wrap"><div class="img"><span class="item__status-count" ng-if="mealItem.alreadySelectedCount">{{ mealItem.alreadySelectedCount }}</span> <img ng-src="{{vm.mealImagesPath}}/{{ mealItem.serviceType }}-{{ mealItem.rfisc }}.jpg" alt=""></div><div class="food_info"><div class="name"><p>{{ mealItem.title }}</p><p class="price" ng-bind-html="{ value: mealItem.price, currency: mealItem.currency } | price"></p></div><div class="description"><a ng-if="vm.hasAlias(\'web.extraServices.meal.ingredientsDescriptionContent.\' + mealItem.serviceType + \'.\' + mealItem.rfisc)" href="" fancybox="popupAlias" class="link link--ingredientsDescription" data-popup-alias="web.extraServices.meal.ingredientsDescriptionContent.{{mealItem.serviceType}}.{{mealItem.rfisc}}">{{ \'web.extraServices.meal.ingredientsDescriptionLabel\' | aliasStatic }}</a><p ng-bind-html="mealItem.description"></p></div><button class="item__btn" ng-click="vm.mealCountChangeHandler(subgroupNum, mealItem, +1)" ng-if="mealItem.alreadySelectedCount < 1 && !mealItem.restrictSelect">{{ \'web.extraServices.meal.choose\' | aliasStatic}}</button> <button class="item__btn" ng-click="vm.mealCountChangeHandler(subgroupNum, mealItem, +1)" ng-if="mealItem.alreadySelectedCount > 0 && mealItem.alreadySelectedCount !== mealItem.limit && !mealItem.restrictSelect">{{ \'web.extraServices.meal.addAnother\' | aliasStatic}}</button> <button class="item__btn" ng-class="{selected: mealItem.alreadySelectedCount == mealItem.limit || mealItem.restrictSelect }" ng-if="mealItem.alreadySelectedCount == mealItem.limit || mealItem.restrictSelect">{{ \'web.extraServices.meal.selected\' | aliasStatic}}</button></div></div></div></wrap></div></div></div></div><div class="passengersTable__cancel"><a href="" ng-click="vm.switchService()" class="passengersTable__link passengersTable__link_cancel">{{ \'web.extraServices.meal.cancel\' | aliasStatic }}</a></div></div></div></div></div></div></div><div class="item__i mobileShow"><div class="top"><div class="top__i"><a href=""><div class="row"><table><tbody><tr><td><i class="icon_meal"></i></td><td><div class="name">{{ \'web.extraServices.meal.header\' | aliasStatic}} <a href="" fancybox="popupAlias" data-popup-alias="web.extraServicesRules.meal"><i class="icon_info"></i></a></div></td></tr></tbody></table></div></a><div class="row"><a href=""><div ng-if="!vm.service.active && vm.service.minPrice" class="price"><div class="price__i"><p>{{ \'web.extraServices.minPrice\' | aliasStatic}}</p><h3 ng-bind-html="{ value: vm.service.minPrice.price, currency: vm.service.minPrice.currency } | price"></h3></div></div></a> <a href="" ng-click="vm.switchService()" ng-class="{ active: vm.service.active }" class="btn showDrop_js"><span class="show">{{ \'web.extraServices.meal.select\' | aliasStatic}}</span> <span class="hide">{{ \'web.extraServices.meal.deselect\' | aliasStatic}}</span></a></div></div></div><div class="drop" ng-class="{ active: vm.service.active, show_js: vm.service.active }"><div class="drop__i"><div class="foodSelect drop_mobile"><div class="foodSelect__i"><div class="passengersContainer"><div class="passengersTableContainer" ng-class="{ one_passenger: (vm.getAvailablePassengersCount(vm.service.availableByPassengerSegments) == 1) }"><a href="" ng-click="vm.scrollToEnd();" class="passengersTableContainer__control passengersTableContainer__control_next" ng-class="{ control_disabled: !vm.canScrollRight }"></a><table class="passengersTable passengersTableMobile"><tbody><tr class="headRow"><td class="firstCol"><a href="" ng-click="vm.scrollToStart();" class="passengersTable__control passengersTable__control_prev" ng-class="{ control_disabled: !vm.canScrollLeft }"></a></td><td ng-repeat="(passengerNum, passenger) in vm.orderInfo.passengers" ng-if="vm.service.availableByPassengerSegments[passengerNum]">{{ passenger.lastName }} {{ passenger.firstName }}</td></tr><tr ng-repeat="(flightNum, flight) in vm.orderInfo.plainFlights" ng-if="vm.service.availableBySegments[flightNum]" class="contentRow"><td class="firstCol"><div class="date">{{ flight.date | formatDate: \'D MMMM, dd\'}}</div><div class="route"><div class="route__dep"><span class="route__dep__city">{{ flight.originport }}</span></div><div class="route__plane"><i class="icon_plane"></i></div><div class="route__arr"><span class="route__arr__city">{{ flight.destinationport }}</span></div></div></td><td ng-repeat="(passengerNum, passenger) in vm.orderInfo.passengers" ng-if="vm.service.availableByPassengerSegments[passengerNum]" ng-class="{ active: vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum }" ng-init="selectedPassengerFlightMeals = vm.orderInfo.groupedEditableExtraServices.meal[passengerNum][flightNum]"><div ng-if="!selectedPassengerFlightMeals"><a href="" fancybox="popupMeal" ng-click="vm.selectFlightPassenger(flightNum, passengerNum)" class="passengersTable__link" ng-class="{ passengersTable__link_select: (!selectedPassengerFlightMeals && vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum) }"><wrap ng-if="vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum">{{ \'web.extraServices.meal.selectItem\' | aliasStatic}}</wrap><wrap ng-if="!(vm.selectedFlight == flightNum && vm.selectedPassenger == passengerNum)">{{ \'web.extraServices.meal.noneSelected\' | aliasStatic}}</wrap></a></div><div ng-if="selectedPassengerFlightMeals" ng-repeat="(indexMealSelect, itemMealSelect) in selectedPassengerFlightMeals track by $index"><a href="" fancybox="popupMeal" ng-click="vm.selectFlightPassenger(flightNum, passengerNum)" class="passengersTable__link" ng-class="{ passengersTable__link_empty: !selectedPassengerFlightMeals }"><wrap ng-if="selectedPassengerFlightMeals">{{ itemMealSelect.title }}</wrap></a> <span ng-if="selectedPassengerFlightMeals" class="passengersTable__priceSeat" ng-bind-html="{ value: itemMealSelect.totalPrice, currency: itemMealSelect.currency } | price"></span> <a ng-if="selectedPassengerFlightMeals" href="" ng-click="vm.removePassengerFlightMeal(passengerNum, flightNum)" class="btn-remove"><span class="infoBoxWrap"><i class="icon_remove"></i> <span class="infoBox"><span class="infoBox__i">{{ \'web.extraServices.meal.cancelByPassengerSegment\' | aliasStatic }}</span></span></span></a></div></td></tr></tbody></table></div></div><div class="passengersTable__cancel"><a href="" ng-click="vm.switchService()" class="passengersTable__link passengersTable__link_cancel">{{ \'web.extraServices.meal.cancel\' | aliasStatic}}</a></div></div></div></div></div><popup-meal menu="vm.mealMenu" passenger="vm.orderInfo.passengers[vm.selectedPassenger]" flight="vm.orderInfo.plainFlights[vm.selectedFlight]" handler="vm.mealCountChangeHandler" path="vm.mealImagesPath" subgroups="vm.service.subgroups"></popup-meal></div>')}])}(),function(e){try{e=angular.module("app")}catch(s){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("components/meal-service-picker/meal-service-picker.html",'<div class="baggageControl" ng-class="{ control_disabled: vm.locked }"><div class="baggageControl__i"><a href="" ng-click="vm.decrease()" class="minus" ng-class="{ disabled: !vm.canMinus }">-</a><div class="val val_noBagagge"><p>{{ vm.count }}</p></div><a href="" ng-click="vm.increase()" class="plus" ng-class="{ disabled: !vm.canPlus }">+</a></div></div>')}])}(),function(e){try{e=angular.module("app")}catch(s){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("screens/passengers/passengers.html",'<app-loader ng-if="vm.loading"></app-loader><section class="out" ng-if="!vm.loading"><app-header></app-header><div class="searchSteps"><div class="wrap"><div class="searchSteps__i"><ol><li class="prev"><a href="{{ \'site.mainPageUrl\' | param }}">{{ \'web.steps.search\' | aliasStatic}}</a></li><li class="prev"><a href="#{{$root.ROUTES.SEARCH}}">{{ \'web.steps.selectVariant\' | aliasStatic}}</a></li><li class="active">{{ (vm.passengers.length == 1) ? ( \'web.steps.passenger\' | aliasStatic) : ( \'web.steps.passengers\' | aliasStatic) }}</li><li>{{ \'web.steps.extraServices\' | aliasStatic}}</li><li>{{ \'web.steps.payment\' | aliasStatic}}</li><li>{{ \'web.steps.order\' | aliasStatic}}</li></ol></div></div></div><div ng-if="vm.orderInfo && vm.passengersCheck" class="searchParams searchParams_passengers"><div class="wrap"><div class="searchParams__i"><div class="info"><ul><li><geo-marker prefix="dep__point" key="passengers" city="vm.orderInfo.flights[0].flights[0].origincity" cityname="vm.orderInfo.flights[0].flights[0].origincityName" port="vm.orderInfo.flights[0].flights[0].originport" portname="vm.orderInfo.flights[0].flights[0].originportName"></geo-marker>–<geo-marker prefix="arr__point" key="passengers" city="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationcity" cityname="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationcityName" port="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationport" portname="vm.orderInfo.flights[0].flights[vm.orderInfo.flights[0].flights.length-1].destinationportName"></geo-marker></li><li ng-show="vm.orderInfo.flights.length == 2">{{ \'web.searchForm.roundtrip\' | aliasStatic}}</li><li ng-show="vm.orderInfo.flights.length == 1">{{ \'web.searchForm.oneway\' | aliasStatic}}</li><li>{{ vm.getDescPassCountStr() }}</li></ul></div></div></div></div><div class="content"><div class="wrap wrap_pt32"><div class="content__i"><div class="passengersInfo"><div class="passengersInfo__i"><h2>{{ (vm.passengers.length == 1) ? ( \'web.passengerInfo.header\' | aliasStatic) : ( \'web.passengersInfo.header\' | aliasStatic) }}</h2><p ng-if="vm.passengersCheck.isLatinNamesOnly && !(\'site.foreignSite\' | param)" class="intAttention">{{ \'web.messages.passNamesLabel\' | aliasStatic}} <span ng-bind-html="\'web.messages.passNamesLatin\' | aliasStatic"></span></p><p class="login" ng-if="!vm.authoriseCustomer && !vm.accountExist">{{ \'web.passengersInfo.loginInvitationMessage\' | aliasStatic}} <a href="" fancybox="popupLogin">{{ \'web.passengersInfo.loginInvitationLink\' | aliasStatic}}</a></p><form class="passengerForm__js {{ vm.getOrderCountriesCssClasses() }}" ng-repeat="(passengerNumber, passenger) in vm.passengers" name="vm.passengerForms[{{passengerNumber}}]" form-submit-error-highlight="" novalidate=""><input type="hidden" name="categoryCode" ng-model="passenger.categoryCode"><div class="item"><div class="item__i"><div class="itemName"><div class="itemName__number"><span ng-show="vm.passengers.length > 1">{{ passengerNumber + 1 }}.</span> {{ \'web.passengerCategory.\' | aliasWithPrefix:passenger.categoryCode }}</div><div class="selectWrap itemName__ui-select" ng-if="vm.authoriseCustomer && vm.privatePassengers.length"><ui-select name="privatePassenger" search-enabled="false" ng-model="passenger.privatePassenger" theme="selectize" ui-select-custom="" ng-change="vm.setPrivatePassenger(passengerNumber)" class="ui-select-passengers-header"><ui-select-match placeholder="{{(vm.currentLanguage !== \'ru\' && $select.selected.value.firstNameEn ? $select.selected.value.firstNameEn : $select.selected.value.firstName) || ( \'web.passengersInfo.privatePassengerSelect\' | aliasStatic)}} {{vm.currentLanguage !== \'ru\' && $select.selected.value.lastNameEn ? $select.selected.value.lastNameEn : $select.selected.value.lastName}}">{{vm.currentLanguage !== \'ru\' && $select.selected.value.firstNameEn ? $select.selected.value.firstNameEn : $select.selected.value.firstName}} {{vm.currentLanguage !== \'ru\' && $select.selected.value.lastNameEn ? $select.selected.value.lastNameEn : $select.selected.value.lastName}}</ui-select-match><ui-select-choices repeat="privatePassenger.num as (num, privatePassenger) in vm.privatePassengers"><div class="ui-select-passengers-data">{{ vm.currentLanguage !== \'ru\' && privatePassenger.value.firstNameEn ? privatePassenger.value.firstNameEn : privatePassenger.value.firstName }} {{ vm.currentLanguage !== \'ru\' && privatePassenger.value.lastNameEn ? privatePassenger.value.lastNameEn : privatePassenger.value.lastName }}</div><div class="ui-select-passengers-birth">{{ privatePassenger.value.dateOfBirth }}</div></ui-select-choices></ui-select></div></div><table class="passengerInfo"><tbody><tr><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].lastName" touched="vm.submitTouched"></error-message><input type="text" name="lastName" autocomplete="off" ng-model="passenger.lastName" ng-blur="vm.lastNameBlurHandler(passengerNumber)" required="" ng-pattern="(passenger.documentType == \'PSP\') ? vm.passengerLastNameLatRegexp : vm.passengersCheck.passengerLastNameRegexp" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.label.lastName\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].firstName" touched="vm.submitTouched"></error-message><input type="text" name="firstName" autocomplete="off" ng-model="passenger.firstName" ng-blur="vm.firstNameBlurHandler(passengerNumber)" required="" ng-pattern="(passenger.documentType == \'PSP\') ? vm.passengerFirstNameLatRegexp : vm.passengersCheck.passengerFirstNameRegexp" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.firstName\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].dateOfBirth" touched="vm.submitTouched"></error-message><input type="text" name="dateOfBirth" autocomplete="off" ng-model="passenger.dateOfBirth" required="" check-date-format="" check-date-range="" data-min-date="{{ vm.rangeBirthByPassenger[passengerNumber].from }}" data-max-date="{{ vm.rangeBirthByPassenger[passengerNumber].to }}" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}" ui-mask="99.99.9999" model-view-value="true" ui-mask-placeholder="{{ \'web.datePattern\' | aliasStatic}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.dateOfBirth\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].gender" touched="vm.submitTouched"></error-message><ui-select ng-model="passenger.gender" theme="selectize" name="gender" search-enabled="false" error-highlight="{{vm.submitTouched}}" ui-select-custom="" class="ui-select-custom ui-select-passengers" required=""><ui-select-match placeholder="{{$select.selected.name || ( \'web.privatePassengers.gender\' | aliasStatic) }}">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="gender.code as gender in vm.passangersAlias"><div ng-bind-html="gender.name"></div></ui-select-choices></ui-select><label class="inp-animate-label"><span>{{ \'web.passengersInfo.label.gender\' | aliasStatic}}</span></label></div></td></tr><tr><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].nationality" touched="vm.submitTouched"></error-message><ui-select ng-model="passenger.nationality" theme="selectize" name="nationality" search-enabled="{{ !vm.isMobile }}" skip-focusser="true" ng-change="vm.nationalityChangeHandler(passengerNumber)" error-highlight="{{vm.submitTouched}}" ui-select-custom="" class="ui-select-custom ui-select-passengers" required=""><ui-select-match placeholder="{{$select.selected[vm.localNamePropName] || ( \'web.privatePassengers.nationality\' | aliasStatic) }}">{{$select.selected[vm.localNamePropName]}}</ui-select-match><ui-select-choices repeat="country.code as country in vm.countriesList | filter: {[vm.localNamePropName]: $select.search} track by country.code"><div ng-bind-html="country[vm.localNamePropName]"></div></ui-select-choices></ui-select><label class="inp-animate-label"><span>{{ \'web.passengersInfo.label.nationality\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.passengerForms[passengerNumber].documentType" touched="vm.submitTouched"></error-message><ui-select ng-model="passenger.documentType" name="documentType" theme="selectize" search-enabled="false" ng-change="vm.documentTypeChangeHandler(passengerNumber)" class="ui-select-custom ui-select-passengers" ui-select-custom="" error-highlight="{{vm.submitTouched}}" required=""><ui-select-match placeholder="{{$select.selected.name || ( \'web.passengersInfo.documentType\' | aliasStatic) }}">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="doc.code as doc in vm.documentTypesByPassenger[passengerNumber]"><div class="{{ \'documentTypeOption_\' + doc.code }}" ng-bind-html="doc.name"></div></ui-select-choices></ui-select><label class="inp-animate-label"><span>{{ \'web.passengersInfo.label.documentType\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer" <error-message="" control="vm.passengerForms[passengerNumber].documentNumber" touched="vm.submitTouched"><info-message ng-if="passenger.documentType && vm.hasAlias(\'web.messages.formatDocumentNumber.\' + passenger.documentType)" touched="vm.submitTouched" control="vm.passengerForms[passengerNumber].documentNumber" format-alias="\'web.messages.formatDocumentNumber.\' + passenger.documentType"></info-message><input type="text" name="documentNumber" autocomplete="off" ng-model="passenger.documentNumber" required="" clean-document-number="" ng-pattern="vm.documentNumberRegexByPassenger[passengerNumber]" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.documentNumber\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer" ng-if="vm.getExpiryByDocType(passenger.documentType, passenger.categoryCode)"><error-message control="vm.passengerForms[passengerNumber].documentDate" touched="vm.submitTouched"></error-message><input type="text" name="documentDate" autocomplete="off" ng-model="passenger.documentDate" required="" check-date-format="" check-date-range="" data-min-date="{{ vm.getExpiryByDocType(passenger.documentType, passenger.categoryCode) }}" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}" ui-mask="99.99.9999" model-view-value="true" ui-mask-placeholder="{{ \'web.datePattern\' | aliasStatic}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.documentDate\' | aliasStatic}}</span></label></div></td></tr><tr ng-if="(passenger.categoryCode == \'AAA\' || passenger.categoryCode == \'CPA\' || passenger.categoryCode == \'MLA\') && (vm.passengersCheck.allowEmail || vm.passengersCheck.allowPhone)"><td><div class="inp inp-animate-outer" ng-if="vm.passengersCheck.allowPhone"><error-message control="vm.passengerForms[passengerNumber].phone" format-alias="\'web.messages.formatPhone\'" touched="vm.submitTouched"></error-message><input type="tel" name="phone" autocomplete="off" ng-model="passenger.phone" ng-blur="vm.phoneBlurHandler(passengerNumber)" phone-mask="" ng-required="vm.passengersCheck.requirePhone" ng-pattern="\'customer.phoneRegexp\' | param" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}" placeholder=""> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.phone\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer" ng-if="vm.passengersCheck.allowEmail"><error-message control="vm.passengerForms[passengerNumber].email" touched="vm.submitTouched"></error-message><input type="email" name="email" autocomplete="off" ng-model="passenger.email" ng-blur="vm.emailBlurHandler(passengerNumber)" ng-required="vm.passengersCheck.requireEmail" ng-pattern="vm.passengersCheck.emailRegex" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.email\' | aliasStatic}}</span></label></div></td><td class="mobileHide"></td><td class="mobileHide"></td></tr><tr ng-if="(passenger.categoryCode == \'AAA\' || passenger.categoryCode == \'CPA\' || passenger.categoryCode == \'MLA\') && vm.allowBonusCard"><td><div class="inp"><div class="customCheckbox"><label><input class="haveCart_js" type="checkbox" name="hasBonusCard" ng-model="passenger.hasBonusCard" ng-change="passenger.bonusCard = \'\';"><span></span> {{ \'web.passengersInfo.hasBonusCard\' | aliasStatic}}</label></div></div></td><td><div class="inp inp-animate-outer" ng-class="{ invisibleBonusCard: !passenger.hasBonusCard, visibleBonusCard: passenger.hasBonusCard }"><error-message control="vm.passengerForms[passengerNumber].bonusCard" touched="vm.submitTouched"></error-message><input type="text" class="inp-animate-placeholder" name="bonusCard" autocomplete="off" ng-model="passenger.bonusCard" ng-pattern="\'passengers.bonusCardRegex\' | param" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.passengersInfo.bonusCard\' | aliasStatic}}</span></label></div></td><td class="mobileHide"></td><td class="mobileHide"></td></tr></tbody></table></div></div></form><form ng-if="vm.orderInfo && vm.passengersCheck" name="vm.customerForm" class="customerForm__js" form-submit-error-highlight="" novalidate=""><div class="item item_contact"><div class="item__i"><h3 class="itemName">{{ \'web.passengersInfo.customerHeader\' | aliasStatic}}</h3><table><tbody><tr><td><div class="inp inp-animate-outer"><error-message control="vm.customerForm.lastName" touched="vm.submitTouched"></error-message><input type="text" name="lastName" autocomplete="off" ng-model="vm.customer.lastName" required="" ng-pattern="\'customer.lastNameRegexp\' | param" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.customerInfo.lastName\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.customerForm.firstName" touched="vm.submitTouched"></error-message><input type="text" name="firstName" autocomplete="off" ng-model="vm.customer.firstName" required="" ng-pattern="\'customer.firstNameRegexp\' | param" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.customerInfo.firstName\' | aliasStatic}}</span></label></div></td></tr><tr><td><div class="inp inp-animate-outer"><error-message control="vm.customerForm.phone" format-alias="\'web.messages.formatPhone\'" touched="vm.submitTouched"></error-message><input type="tel" name="phone" autocomplete="off" ng-model="vm.customer.phone" phone-mask="" ng-pattern="\'customer.phoneRegexp\' | param" required="" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.customerInfo.phone\' | aliasStatic}}</span></label></div></td><td><div class="inp inp-animate-outer"><error-message control="vm.customerForm.email" touched="vm.submitTouched"></error-message><input type="email" name="email" autocomplete="off" ng-model="vm.customer.email" required="" ng-pattern="\'site.emailRegexp\' | param" ng-change="vm.checkLogin()" class="textInp inp-animate-placeholder" error-highlight="{{vm.submitTouched}}"> <label class="inp-animate-label"><span>{{ \'web.customerInfo.email\' | aliasStatic}}</span></label></div></td></tr><tr ng-if="!vm.authoriseCustomer && vm.allowCreateAccount && vm.customer.createAccount"><td><div class="inp"><error-message control="vm.customerForm.password" touched="vm.submitTouched"></error-message><input type="password" name="password" autocomplete="off" ng-model="vm.customer.password" required="" ng-pattern="\'site.passwordRegexp\' | param" check-equals="{{ vm.customer.passwordRepeat }}" class="textInp" error-highlight="{{vm.submitTouched}}" tabindex="1000" placeholder="{{ \'web.customerInfo.password\' | aliasStatic}}"></div></td><td><div class="inp"><error-message control="vm.customerForm.passwordRepeat" touched="vm.submitTouched"></error-message><input type="password" name="passwordRepeat" autocomplete="off" ng-model="vm.customer.passwordRepeat" required="" ng-pattern="\'site.passwordRegexp\' | param" check-equals="{{ vm.customer.password }}" class="textInp" error-highlight="{{vm.submitTouched}}" tabindex="1001" placeholder="{{ \'web.customerInfo.passwordRepeat\' | aliasStatic}}"></div></td></tr><tr ng-if="(\'customer.showIsSmsSend\' | param) || (\'customer.showIsEmailSend\' | param)"><td><div class="inp" ng-if="\'customer.showIsSmsSend\' | param"><div class="customCheckbox"><label><input type="checkbox" ng-model="vm.customer.sendSms"> <span></span> {{ \'web.customerInfo.sendSms\' | aliasStatic}}</label></div></div></td><td><div class="inp" ng-if="\'customer.showIsEmailSend\' | param"><div class="customCheckbox"><label><input type="checkbox" ng-model="vm.customer.sendEMail"> <span></span> {{ \'web.customerInfo.sendEMail\' | aliasStatic}}</label></div></div></td></tr><tr><td colspan="2"><div class="inp" ng-if="!vm.authoriseCustomer && vm.allowCreateAccount"><div class="customCheckbox"><label><input type="checkbox" ng-model="vm.customer.createAccount"> <span></span> {{ \'web.passengersInfo.createAccountInvitationMessage\' | aliasStatic}}</label></div></div></td></tr></tbody></table></div></div></form><p class="login" ng-if="!vm.authoriseCustomer && vm.accountExist">{{ \'web.passengersInfo.accountExistMessage\' | aliasStatic}} {{ vm.customer.email }} <a href="" fancybox="popupLogin" data-login="{{ vm.customer.email }}">{{ \'web.passengersInfo.loginInvitationLink\' | aliasStatic}}</a></p><div ng-if="vm.errorMessage" class="infoMessage infoMessage_error"><div class="infoMessage__i"><p ng-bind-html="vm.errorMessage | aliasDynamic"></p></div></div><div ng-if="\'passengers.usePersonalDataAgreeCheckbox\' | param" class="iconfirm"><div class="iconfirm__i"><div class="customCheckbox"><label><input type="checkbox" id="personalDataShareAgreeChb" ng-model="vm.personalDataShareAgree"><span></span></label></div><p><label for="personalDataShareAgreeChb"><wrap ng-bind-html="\'web.personalDataShareAgree\' | aliasStatic"></wrap></label></p></div></div><div class="passengers-form-footer" ng-bind-html="\'web.passengersInfo.footer\' | aliasStatic"></div></div></div><div class="searchResultsControl"><div class="searchResultsControl__i"><a href="#{{$root.ROUTES.SEARCH}}" class="btn btn_back">{{ \'web.buttons.back\' | aliasDynamic }}</a> <a href="" ng-click="vm.submitHandler()" class="btn btn_next" ng-class="{ disabled: (!vm.personalDataShareAgree && (\'passengers.usePersonalDataAgreeCheckbox\' | param)) }" ng-if="!vm.submitLoading"><span class="mobileHide">{{ \'web.buttons.gotoExtraServices\' | aliasStatic}}</span> <span class="mobileShow">{{ \'web.buttons.next\' | aliasStatic}}</span></a> <a href="" class="btn btn_next disabled loading-start" ng-if="vm.submitLoading"><span class="loader"><img alt="" src="themes/websky/assets/static/img/general/form/loader-circle-64.gif"></span> <span class="mobileHide">{{ \'web.buttons.gotoExtraServices\' | aliasStatic}}</span> <span class="mobileShow">{{ \'web.buttons.next\' | aliasStatic}}</span></a></div></div></div></div></div><div class="push"></div></section><app-footer ng-if="!vm.loading"></app-footer>');
}])}();