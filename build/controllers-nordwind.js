!function(){function e(r,t,n){function s(a,o){if(!t[a]){if(!r[a]){var l="function"==typeof require&&require;if(!o&&l)return l(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var d=t[a]={exports:{}};r[a][0].call(d.exports,function(e){var t=r[a][1][e];return s(t||e)},d,d.exports,e,r,t,n)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)s(n[a]);return s}return e}()({1:[function(e,r,t){"use strict";function n(e,r,t,n){function s(){h.locked||t.checkServiceRemovalProhibited("meal")||(h.service.active=!h.service.active,h.service.active?a():t.removeExtraService({code:"meal"}))}function i(e,r){h.selectedFlight=e,h.selectedPassenger=r,o()}function a(){h.selectedFlight=m(),h.selectedPassenger=v(h.selectedFlight),o()}function o(){h.mealMenu=h.service.itemsByPassengerSegments[h.selectedPassenger][h.selectedFlight],h.mealMenuSubgroup=!1}function l(e,r,n){h.locked||t.modifyExtraService({code:"meal",passenger_id:h.orderInfo.passengers[h.selectedPassenger].id,segment_id:h.orderInfo.plainFlights[h.selectedFlight].id,subgroup:h.service.subgroups[e],amount:(r.alreadySelectedCount||0)+n,service_type:r.serviceType,rfisc:r.rfisc})}function c(e,r){h.locked||t.checkServiceRemovalProhibited("meal",e,r)||t.removeExtraService({code:"meal",passenger_id:h.orderInfo.passengers[e].id,segment_id:h.orderInfo.plainFlights[r].id})}function d(e,r){var t,n=0,s=0;return h.orderInfo.groupedEditableExtraServices&&h.orderInfo.groupedEditableExtraServices.meal&&h.orderInfo.groupedEditableExtraServices.meal[e]&&h.orderInfo.groupedEditableExtraServices.meal[e][r]&&h.orderInfo.groupedEditableExtraServices.meal[e][r].length&&h.orderInfo.groupedEditableExtraServices.meal[e][r].forEach(function(e){e.amount&&(n+=e.amount),e.totalPrice&&(s=Big(s).plus(e.totalPrice).toFixed(2),t=e.currency)}),n?{count:n,cost:s,currency:t}:!1}function u(){p.scrollTo(0)}function g(){p.scrollTo(p[0].scrollWidth)}function f(){var r=p[0].scrollLeft,t=p[0].scrollWidth,n=p[0].clientWidth,s=t-n-r;h.canScrollRight=0!==s,h.canScrollLeft=0!==r,e.$apply()}function m(){var e;for(e=0;e<h.orderInfo.plainFlights.length;e++)if(h.service.availableBySegments[e])return e;return-1}function v(e){var r;if(h.service.availableByPassengerSegments)for(r=0;r<h.orderInfo.passengers.length;r++)if(h.service.availableByPassengerSegments[r][e])return r;return-1}var h=this,p=r.find("div.passengersTableContainer");h.switchService=s,h.selectFlightPassenger=i,h.selectFirstAvailablePassengerFlight=a,h.mealCountChangeHandler=l,h.removePassengerFlightMeal=c,h.getSelectedPassengerFlightMeal=d,h.scrollToStart=u,h.scrollToEnd=g,h.hasAlias=t.hasAlias,h.getAvailablePassengersCount=n.getAvailablePassengersCount,h.checkServiceRemovalProhibited=t.checkServiceRemovalProhibited,h.canScrollRight=!0,h.canScrollLeft=!1,h.selectedFlight=0,h.selectedPassenger=0,t.getParam("site.externalStorageBaseUrl")?h.mealImagesPath=t.getParam("site.externalStorageBaseUrl")+"/img/content/meal":h.mealImagesPath="./themes/websky/assets/static/img/content/meal",t.addOrderInfoListener(function(e){h.orderInfo=e},!1,!0),e.$watch("vm.service",function(){o()}),p.on("scroll",f),h.service.active&&o()}angular.module("app").component("esMeal",{templateUrl:"components/es-meal/es-meal.html",controller:["$scope","$element","backend","utils",n],controllerAs:"vm",bindings:{service:"=service",locked:"=locked"}})},{}],2:[function(e,r,t){"use strict";e("./components/es-meal/es-meal")},{"./components/es-meal/es-meal":1}]},{},[2]);
//# sourceMappingURL=controllers-nordwind.js.map
