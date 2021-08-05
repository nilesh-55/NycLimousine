(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./add-passenger/add-passenger.module": [
		"./src/app/add-passenger/add-passenger.module.ts",
		"add-passenger-add-passenger-module"
	],
	"./add-project/add-project.module": [
		"./src/app/add-project/add-project.module.ts",
		"add-project-add-project-module"
	],
	"./farecalculations/farecalculations.module": [
		"./src/app/farecalculations/farecalculations.module.ts",
		"farecalculations-farecalculations-module"
	],
	"./farecalculationsreturn/farecalculationsreturn.module": [
		"./src/app/farecalculationsreturn/farecalculationsreturn.module.ts",
		"farecalculationsreturn-farecalculationsreturn-module"
	],
	"./feedback-modal/feedback-modal.module": [
		"./src/app/feedback-modal/feedback-modal.module.ts",
		"feedback-modal-feedback-modal-module"
	],
	"./filldetails/filldetails.module": [
		"./src/app/filldetails/filldetails.module.ts",
		"default~filldetails-filldetails-module~home-home-module~mytrips-mytrips-module~reviewdetails-reviewd~c2799781",
		"filldetails-filldetails-module"
	],
	"./legalpage/legalpage.module": [
		"./src/app/legalpage/legalpage.module.ts",
		"legalpage-legalpage-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./modalpage/modalpage.module": [
		"./src/app/modalpage/modalpage.module.ts",
		"modalpage-modalpage-module"
	],
	"./my-passengers/my-passengers.module": [
		"./src/app/my-passengers/my-passengers.module.ts",
		"my-passengers-my-passengers-module"
	],
	"./my-payment/my-payment.module": [
		"./src/app/my-payment/my-payment.module.ts",
		"my-payment-my-payment-module"
	],
	"./my-projects/my-projects.module": [
		"./src/app/my-projects/my-projects.module.ts",
		"my-projects-my-projects-module"
	],
	"./mytrips/mytrips.module": [
		"./src/app/mytrips/mytrips.module.ts",
		"default~filldetails-filldetails-module~home-home-module~mytrips-mytrips-module~reviewdetails-reviewd~c2799781",
		"mytrips-mytrips-module"
	],
	"./otp-confirmation/otp-confirmation.module": [
		"./src/app/otp-confirmation/otp-confirmation.module.ts",
		"otp-confirmation-otp-confirmation-module"
	],
	"./payment-modal/payment-modal.module": [
		"./src/app/payment-modal/payment-modal.module.ts",
		"payment-modal-payment-modal-module"
	],
	"./placeorder/placeorder.module": [
		"./src/app/placeorder/placeorder.module.ts",
		"placeorder-placeorder-module"
	],
	"./privacy-modal/privacy-modal.module": [
		"./src/app/privacy-modal/privacy-modal.module.ts",
		"privacy-modal-privacy-modal-module"
	],
	"./register/register.module": [
		"./src/app/register/register.module.ts",
		"register-register-module"
	],
	"./reviewdetails/reviewdetails.module": [
		"./src/app/reviewdetails/reviewdetails.module.ts",
		"default~filldetails-filldetails-module~home-home-module~mytrips-mytrips-module~reviewdetails-reviewd~c2799781",
		"reviewdetails-reviewdetails-module"
	],
	"./select-returnvehicle/select-returnvehicle.module": [
		"./src/app/select-returnvehicle/select-returnvehicle.module.ts",
		"default~filldetails-filldetails-module~home-home-module~mytrips-mytrips-module~reviewdetails-reviewd~c2799781",
		"select-returnvehicle-select-returnvehicle-module"
	],
	"./selectvehicle/selectvehicle.module": [
		"./src/app/selectvehicle/selectvehicle.module.ts",
		"default~filldetails-filldetails-module~home-home-module~mytrips-mytrips-module~reviewdetails-reviewd~c2799781",
		"selectvehicle-selectvehicle-module"
	],
	"./stops-location/stops-location.module": [
		"./src/app/stops-location/stops-location.module.ts",
		"stops-location-stops-location-module"
	],
	"./thankyou/thankyou.module": [
		"./src/app/thankyou/thankyou.module.ts",
		"default~filldetails-filldetails-module~home-home-module~mytrips-mytrips-module~reviewdetails-reviewd~c2799781",
		"thankyou-thankyou-module"
	],
	"./trip-dates/trip-dates.module": [
		"./src/app/trip-dates/trip-dates.module.ts",
		"trip-dates-trip-dates-module"
	],
	"./userprofile/userprofile.module": [
		"./src/app/userprofile/userprofile.module.ts",
		"userprofile-userprofile-module"
	],
	"./vehicles-return-page/vehicles-return-page.module": [
		"./src/app/vehicles-return-page/vehicles-return-page.module.ts",
		"default~filldetails-filldetails-module~home-home-module~mytrips-mytrips-module~reviewdetails-reviewd~c2799781",
		"vehicles-return-page-vehicles-return-page-module"
	],
	"./vehicles/vehicles.module": [
		"./src/app/vehicles/vehicles.module.ts",
		"default~filldetails-filldetails-module~home-home-module~mytrips-mytrips-module~reviewdetails-reviewd~c2799781",
		"vehicles-vehicles-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5 lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-controller_8.entry.js",
		"common",
		2
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js",
		"common",
		3
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-md.entry.js",
		"common",
		4
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-alert-ios.entry.js",
		"common",
		5
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-alert-md.entry.js",
		"common",
		6
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-app_8-ios.entry.js",
		0,
		"common",
		7
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-app_8-md.entry.js",
		0,
		"common",
		8
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-ios.entry.js",
		"common",
		9
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-md.entry.js",
		"common",
		10
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-back-button-ios.entry.js",
		"common",
		11
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-back-button-md.entry.js",
		"common",
		12
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-ios.entry.js",
		13
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-md.entry.js",
		14
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-button_2-ios.entry.js",
		"common",
		15
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-button_2-md.entry.js",
		"common",
		16
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-card_5-ios.entry.js",
		"common",
		17
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-card_5-md.entry.js",
		"common",
		18
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-checkbox-ios.entry.js",
		"common",
		19
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-checkbox-md.entry.js",
		"common",
		20
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-chip-ios.entry.js",
		"common",
		21
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-chip-md.entry.js",
		"common",
		22
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-col_3.entry.js",
		23
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-ios.entry.js",
		"common",
		24
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-md.entry.js",
		"common",
		25
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-ios.entry.js",
		"common",
		26
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-md.entry.js",
		"common",
		27
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js",
		28
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-ios.entry.js",
		"common",
		29
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-md.entry.js",
		"common",
		30
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-input-ios.entry.js",
		"common",
		31
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-input-md.entry.js",
		"common",
		32
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-ios.entry.js",
		"common",
		33
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-md.entry.js",
		"common",
		34
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item_8-ios.entry.js",
		"common",
		35
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item_8-md.entry.js",
		"common",
		36
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-loading-ios.entry.js",
		"common",
		37
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-loading-md.entry.js",
		"common",
		38
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-ios.entry.js",
		"common",
		39
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-md.entry.js",
		"common",
		40
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-modal-ios.entry.js",
		0,
		"common",
		41
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-modal-md.entry.js",
		0,
		"common",
		42
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-nav_5.entry.js",
		0,
		"common",
		43
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-popover-ios.entry.js",
		0,
		"common",
		44
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-popover-md.entry.js",
		0,
		"common",
		45
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-progress-bar-ios.entry.js",
		"common",
		46
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-progress-bar-md.entry.js",
		"common",
		47
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-radio_2-ios.entry.js",
		"common",
		48
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-radio_2-md.entry.js",
		"common",
		49
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-range-ios.entry.js",
		"common",
		50
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-range-md.entry.js",
		"common",
		51
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-ios.entry.js",
		"common",
		52
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-md.entry.js",
		"common",
		53
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-ios.entry.js",
		"common",
		54
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-md.entry.js",
		"common",
		55
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-ripple-effect.entry.js",
		56
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-route_4.entry.js",
		"common",
		57
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-ios.entry.js",
		"common",
		58
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-md.entry.js",
		"common",
		59
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-ios.entry.js",
		"common",
		60
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-md.entry.js",
		"common",
		61
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-select_3-ios.entry.js",
		"common",
		62
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-select_3-md.entry.js",
		"common",
		63
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-ios.entry.js",
		64
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-md.entry.js",
		65
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-spinner.entry.js",
		"common",
		66
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-split-pane-ios.entry.js",
		67
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-split-pane-md.entry.js",
		68
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-ios.entry.js",
		"common",
		69
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-md.entry.js",
		"common",
		70
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab_2.entry.js",
		1
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js",
		"common",
		71
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-textarea-ios.entry.js",
		"common",
		72
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-textarea-md.entry.js",
		"common",
		73
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toast-ios.entry.js",
		"common",
		74
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toast-md.entry.js",
		"common",
		75
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toggle-ios.entry.js",
		"common",
		76
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toggle-md.entry.js",
		"common",
		77
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-virtual-scroll.entry.js",
		78
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-passenger/add-passenger.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-passenger/add-passenger.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page--title\">Passenger Details</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" class=\"close-icon\" (click)=\"dismissModal()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form>\n    <ion-row>\n        <div class=\"input-border\">\n          <ion-label position=\"stacked\" class=\"name-css\">First Name<span class=\"mendatary\"> * </span></ion-label>\n          <ion-input type=\"text\" class=\"input-css\" [(ngModel)]=\"firstName\"></ion-input>\n        </div>\n\n        <!--\n        <ion-item lines=\"none\" *ngIf=\"(form.get('CardType').hasError('required') ) && form.get('CardType').touched\">\n          <div class=\"error\" *ngIf=\"form.get('CardType').hasError('required') && form.get('CardType').touched\">\n            Please Enter Credit Card Type\n          </div>\n        </ion-item>\n        -->\n        <div class=\"input-border\">\n          <ion-label position=\"stacked\" class=\"name-css\">Last Name<span class=\"mendatary\"> * </span></ion-label>\n          <ion-input type=\"text\" class=\"input-css\" [(ngModel)]=\"lastName\"></ion-input>\n        </div>\n\n        <div class=\"input-border\">\n          <ion-label position=\"stacked\" class=\"name-css\">Email<span class=\"mendatary\"> * </span></ion-label>\n          <ion-input type=\"text\" class=\"input-css\" [(ngModel)]=\"emailId\"></ion-input>\n        </div>\n\n        <div class=\"input-border\">\n          <ion-label position=\"stacked\" class=\"name-css\">Address<span class=\"mendatary\"> * </span></ion-label>\n          <ion-input type=\"text\" class=\"input-css\"  [(ngModel)]=\"address\"></ion-input>\n        </div>\n\n        <div class=\"input-border\">\n          <ion-label position=\"stacked\" class=\"name-css\">Comment</ion-label>\n          <ion-input type=\"text\" class=\"input-css\"  [(ngModel)]=\"comment\"></ion-input>\n        </div>\n\n        <div class=\"input-border\">\n          <ion-label position=\"stacked\" class=\"name-css\">Telephone No.</ion-label>\n          <ion-input type=\"text\" class=\"input-css\" [(ngModel)]=\"telephoneNo\"></ion-input>\n        </div>\n\n        <div class=\"input-border\">\n          <ion-label position=\"stacked\" class=\"name-css\">Cell No.</ion-label>\n          <ion-input type=\"text\" class=\"input-css\" [(ngModel)]=\"cellNo\"></ion-input>\n        </div>\n\n        <ion-button type=\"submit\" class=\"main-button\" (click)=\"addPassenger()\">Save</ion-button>\n\n      </ion-row>\n  </form>\n</ion-content>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-project/add-project.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-project/add-project.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page--title\">Project Details</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" class=\"close-icon\" (click)=\"dismissModal()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<form>\n  <ion-row>\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\" class=\"name-css\">Project Name<span class=\"mendatary\"> * </span></ion-label>\n        <ion-input type=\"text\" class=\"input-css\" [(ngModel)]=\"projectName\"></ion-input>\n      </div>\n\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\" class=\"name-css\">Project Description<span class=\"mendatary\"> * </span></ion-label>\n        <ion-input type=\"text\" class=\"input-css\" [(ngModel)]=\"projectDescription\"></ion-input>\n      </div>\n\n      <ion-button type=\"submit\" class=\"main-button\" (click)=\"addProject()\">Save</ion-button>\n\n    </ion-row>\n</form>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-split-pane>\n    <ion-menu type=\"overlay\">\n      <ion-header style=\"--background: transparent;\">\n        <ion-toolbar class=\"transparent-toolbar\" style=\"--border-width: 0; border-bottom: none;--background: transparent;\">\n          <ion-img src=\"assets/nyclogo.png\"></ion-img>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <ion-menu-toggle auto-hide=\"false\">\n          <ion-item routerLink = \"/home\">Home </ion-item>\n          <ion-item routerLink = \"/login\" *ngIf= \"isLoggedOut\">Login </ion-item>\n          <ion-item routerLink = \"/userprofile\" *ngIf= \"isLoggedin\">Profile </ion-item>\n          <ion-item routerLink = \"/mytrips\" *ngIf= \"isLoggedin\">My Trips </ion-item>\n          <ion-item routerLink = \"/my-projects\" *ngIf= \"isLoggedin\">My Projects </ion-item>\n          <ion-item routerLink = \"/my-passengers\" *ngIf= \"isLoggedin\">My Passengers </ion-item>\n          <ion-item routerLink = \"/my-payment\" *ngIf= \"isLoggedin\">My Payments </ion-item>\n          <ion-item (click)=\"logOut()\" *ngIf= \"isLoggedin\"> Log-out </ion-item>\n         </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n      <ion-footer>\n        <ion-row class=\"ion-text-center\">\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" (click)=\"privacyPage()\">Privacy</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" (click)=\"legalpage()\">Legal</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-footer>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/farecalculations/farecalculations.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/farecalculations/farecalculations.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page--title\"> Fare Breakup </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" class=\"close-icon\" (click)=\"dismissModal()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: transparent;\">\n\n\n  <ion-item lines=\"none\" *ngIf=\"serviceName == 'One way' && vehicleStopRates == null\">\n    <ion-label> Base Fare :</ion-label>\n    <ion-text> {{rate}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"serviceName == 'One way' && vehicleStopRates != null\">\n    <ion-label> Fare({{locationstart}} to {{locationend}}) :</ion-label>\n    <ion-text> {{rate}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"serviceName == 'Wait and Return'\">\n    <ion-label> Roundtrip Fare :</ion-label>\n    <ion-text> {{rate}} </ion-text>\n  </ion-item>\n\n  <ion-item *ngIf=\"serviceName == 'Hourly'\">\n    <ion-label>Hourly Rate</ion-label>\n    <ion-text> {{hourlyRate}} </ion-text>\n  </ion-item>\n\n  <ng-container *ngFor = \"let items of vehicleStopRates\">\n  <ion-item>\n    <ion-label>{{items.stopSpanText}}</ion-label>\n    <ion-text> {{items.Hourly_Rate}} </ion-text>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{items.StopWaitingTimeSpan}}</ion-label>\n    <ion-text> {{items.StopWaitingTimeCost}} </ion-text>\n  </ion-item>\n</ng-container>\n\n \n\n  <div bg *ngIf=\"serviceName == 'Round Trip' && rate2 != null\">\n    <ion-label>Origin Trip</ion-label>\n  </div>\n\n  <ion-item lines=\"none\" *ngIf=\"serviceName == 'Round Trip'\">\n    <ion-label> Fare :</ion-label>\n    <ion-text> {{rate}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"discount != null && serviceName != 'Hourly'\">\n    <ion-label>{{discount}} :</ion-label>\n    <ion-text>-{{discountedValue}}</ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf = \"hourlyCalculate && serviceName == 'Hourly' && discount != null\">\n    <ion-label>{{discount}} :</ion-label>\n    <ion-text>-{{discountedValue}}</ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"serviceName == 'Hourly' && hourlyCalculate && discount != null\">\n    <ion-label>Discounted Hourly Rate :</ion-label>\n    <ion-text>{{afterDiscount}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"serviceName != 'Hourly' && discount != null\">\n    <ion-label >Discounted Fare :</ion-label>\n    <ion-text >{{afterDiscount}} </ion-text>\n    </ion-item>\n\n  <ion-item *ngIf=\"serviceName == 'Hourly'\">\n    <ion-label>Number of Hours</ion-label>\n    <ion-select (ionChange)=\"getRates($event)\" [(ngModel)]=\"minHours\">\n      <ion-select-option *ngFor=\"let obj of hours\" [value]=obj>{{obj.Text}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"serviceName == 'Hourly'\">\n    <ion-label>SubTotal : </ion-label>\n    <ion-text> {{finalRate}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"serviceName == 'Wait and Return'\">\n    <ion-label>Waiting Time : </ion-label>\n    <ion-text> {{waitingTime}} </ion-text>\n  </ion-item>\n\n  <ng-container *ngFor=\"let items of extraCharges\">\n    <ion-item lines=\"none\" *ngIf=\"items.ExtraChargeValue != 0\">\n      <ion-label>{{items.ExtraChargeSpan}} :</ion-label>\n      <ion-text> {{items.ExtraChargeSpan_val}} </ion-text>\n    </ion-item>\n  </ng-container>\n\n  <ion-item lines=\"none\" *ngIf=\"subtotal != null\">\n    <ion-label>SubTotal : </ion-label>\n    <ion-text> {{subtotal}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"serviceName == 'Wait and Return'\">\n    <ion-label>SubTotal : </ion-label>\n    <ion-text> {{finalRate}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"airport_parking != null\">\n    <ion-label>Airport Parking : </ion-label>\n    <ion-text> {{airport_parking}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"tolls != null\">\n    <ion-label>Tolls : </ion-label>\n    <ion-text> {{tolls}} </ion-text>\n  </ion-item>\n\n  <ng-container *ngFor=\"let items of amenities_fare\">\n    <ion-item lines=\"none\" *ngIf=\"items.selectAmenityQty != '0'\">\n      <ion-label>{{items.selectAmenityQty}} {{items.AmenityName}} : </ion-label>\n      <ion-text> {{items.selectAmenityAmt}} </ion-text>\n    </ion-item>\n  </ng-container>\n\n  <ion-item lines=\"none\" *ngIf=\"Sales_tax_Span != null && Sales_tax_Span != 0\">\n    <ion-label>{{Sales_tax_value}} : </ion-label>\n    <ion-text> {{Sales_tax_Span}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"congestionCharge != null\">\n    <ion-label>Congestion Surcharge : </ion-label>\n    <ion-text> {{congestionCharge}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-label>Total (USD) : </ion-label>\n    <ion-text> ${{finalCalculation}} </ion-text>\n  </ion-item>\n\n  <p class=\"discount-note\" *ngIf= \"discount_description != null\">*{{discount_description}}</p>\n  <!-- //for ROundtrip// -->\n  <div bg *ngIf=\"serviceName == 'Round Trip' && rate2 != null\">\n    <ion-label>Return Trip</ion-label>\n  </div>\n  <ion-item lines=\"none\" *ngIf=\"serviceName == 'Round Trip' && rate2 != null\">\n    <ion-label> Fare :</ion-label>\n    <ion-text> {{rate2}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"serviceName == 'Round Trip' && discount2 != null\">\n    <ion-label>{{discount2}} :</ion-label>\n    <ion-text>-{{discountedValue2}}</ion-text>\n  </ion-item>\n\n  <ng-container *ngFor=\"let items of extraCharges2\">\n    <ion-item lines=\"none\" *ngIf=\"items.ExtraChargeValue != 0\">\n      <ion-label>{{items.ExtraChargeSpan}} :</ion-label>\n      <ion-text> {{items.ExtraChargeSpan_val}} </ion-text>\n    </ion-item>\n  </ng-container>\n\n  <ion-item lines=\"none\" *ngIf=\"subtotal2 != null\">\n    <ion-label>SubTotal : </ion-label>\n    <ion-text> {{subtotal2}} </ion-text>\n  </ion-item>\n\n  <ng-container *ngFor=\"let items of amenities_fare2\">\n    <ion-item lines=\"none\" *ngIf=\"items.selectAmenityQty != '0'\">\n      <ion-label>{{items.selectAmenityQty}} {{items.AmenityName}} : </ion-label>\n      <ion-text> {{items.selectAmenityAmt}} </ion-text>\n    </ion-item>\n  </ng-container>\n\n  <ion-item lines=\"none\" *ngIf=\"Sales_tax_Span2 != null\">\n    <ion-label>{{Sales_tax_value2}} : </ion-label>\n    <ion-text> {{Sales_tax_Span2}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"congestionCharge !== null && finalCalculation2 !=null\">\n    <ion-label>Congestion Surcharge : </ion-label>\n    <ion-text> {{congestionCharge}} </ion-text>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngIf=\"finalCalculation2 !=null\">\n    <ion-label>Total (USD) : </ion-label>\n    <ion-text> ${{finalCalculation2}} </ion-text>\n  </ion-item>\n\n  <p class=\"discount-note\" *ngIf= \"discount_descriptionReturn != null\">*{{discount_descriptionReturn}}</p>\n</ion-content>\n\n<ion-footer *ngIf=\"serviceName == 'Round Trip' && rate2 != null\">\n  <ion-item lines=\"none\">\n    <ion-label>Grand Total (USD) : </ion-label>\n    <ion-text> ${{final_Price}} </ion-text>\n  </ion-item>\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/farecalculationsreturn/farecalculationsreturn.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/farecalculationsreturn/farecalculationsreturn.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page--title\"> Fare Breakup </ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-icon name=\"close\" class=\"close-icon\" (click)=\"dismissModal()\"></ion-icon>\n        </ion-buttons>\n     </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item lines=\"none\" *ngIf=\"serviceName == 'Round Trip' && rate2 != null\">\n        <ion-label> Fare :</ion-label>\n        <ion-text> {{rate2}} </ion-text>\n      </ion-item>\n\n      <ion-item lines=\"none\" *ngIf=\"discount != null\">\n        <ion-label>{{discount}} :</ion-label>\n        <ion-text>-{{discountedValue}}</ion-text>\n      </ion-item>\n    \n      <ion-item lines=\"none\" *ngIf=\"discount != null\">\n        <ion-label>Discounted Fare :</ion-label>\n        <ion-text>{{afterDiscount}} </ion-text>\n      </ion-item>\n    \n      <ng-container *ngFor=\"let items of extraCharges2\">\n        <ion-item lines=\"none\" *ngIf=\"items.ExtraChargeValue != 0\">\n          <ion-label>{{items.ExtraChargeSpan}} :</ion-label>\n          <ion-text> {{items.ExtraChargeSpan_val}} </ion-text>\n        </ion-item>\n      </ng-container>\n    \n      <ion-item lines=\"none\" *ngIf=\"subtotal2 != null\">\n        <ion-label>SubTotal : </ion-label>\n        <ion-text> {{subtotal2}} </ion-text>\n      </ion-item>\n    \n      <ion-item lines=\"none\" *ngIf=\"airport_parking != null\">\n        <ion-label>Airport Parking : </ion-label>\n        <ion-text> {{airport_parking}} </ion-text>\n      </ion-item>\n    \n      <ion-item lines=\"none\" *ngIf=\"tolls != null\">\n        <ion-label>Tolls : </ion-label>\n        <ion-text> {{tolls}} </ion-text>\n      </ion-item>\n      \n      <ng-container *ngFor=\"let items of amenities_fare2\">\n        <ion-item lines=\"none\" *ngIf=\"items.selectAmenityQty != '0'\">\n          <ion-label>{{items.selectAmenityQty}} {{items.AmenityName}} : </ion-label>\n          <ion-text> {{items.selectAmenityAmt}} </ion-text>\n        </ion-item>\n      </ng-container>\n    \n      <ion-item lines=\"none\" *ngIf=\"Sales_tax_Span2 != null\">\n        <ion-label>{{Sales_tax_value2}} : </ion-label>\n        <ion-text> {{Sales_tax_Span2}} </ion-text>\n      </ion-item>\n    \n      <ion-item lines=\"none\" *ngIf=\"congestionCharge !== null && finalCalculation2 !=null\">\n        <ion-label>Congestion Surcharge : </ion-label>\n        <ion-text> {{congestionCharge}} </ion-text>\n      </ion-item>\n    \n      <ion-item lines=\"none\" *ngIf=\"finalCalculation2 !=null\">\n        <ion-label>Total (USD) : </ion-label>\n        <ion-text> ${{finalCalculation2}} </ion-text>\n      </ion-item>\n    \n      <p class=\"discount-rate\" *ngIf =\"discount_description != null\">*{{discount_description}}</p>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/feedback-modal/feedback-modal.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/feedback-modal/feedback-modal.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page--title\">Write to Us</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" class=\"close-icon\" (click)=\"dismissModal()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center ion-padding\">\n    <ion-text class=\"ion-padding\">\n      We value our customers and believe you deserve the best service and our full attention. If you are having trouble\n      finding answers to your questions or need more information, customer service representatives are available to\n      help.\n    </ion-text>\n  </div>\n  <form [formGroup]=\"form\" class=\"login-form\" (ngSubmit)=\"feedback(form.value)\">\n\n    <ion-row>\n\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Name <span style=\"color:red\">*</span></ion-label>\n        <ion-input type=\"text\" formControlName=\"Name\"></ion-input>\n      </div>\n\n\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Email <span style=\"color:red\">*</span></ion-label>\n        <ion-input formControlName=\"email\"></ion-input>\n      </div>\n\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Contact No. (Optional)</ion-label>\n        <ion-input type=\"tel\" formControlName=\"phone\"></ion-input>\n      </div>\n\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Confirmation No. (Optional)</ion-label>\n        <ion-input type=\"tel\"></ion-input>\n        </div>\n\n        <div class=\"input-border\">\n          <ion-label position=\"stacked\">Subject</ion-label>\n          <ion-select>\n            <ion-select-option value=\"1\">Rate Inquiry</ion-select-option>\n            <ion-select-option value=\"2\">Billing Inquiry</ion-select-option>\n            <ion-select-option value=\"3\">Edit Reservation</ion-select-option>\n            <ion-select-option value=\"4\">Cancel Reservation</ion-select-option>\n            <ion-select-option value=\"4\">Customer Service</ion-select-option>\n\n          </ion-select>\n        </div>\n\n        <div class=\"input-border\">\n          <ion-label position=\"stacked\">Message <span style=\"color:red\">*</span></ion-label>\n          <ion-textarea type=\"password\" formControlName=\"Message\"></ion-textarea>\n        </div>\n\n        <ion-button class=\"main-button\" type=\"submit\">Send</ion-button>\n    </ion-row>\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/legalpage/legalpage.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/legalpage/legalpage.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page--title\">Legal</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" class=\"close-icon\" (click)=\"dismissModal()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"legal-information\" [innerHTML]=\"legacyStatement\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"--background: transparent;\">\n  <ion-toolbar class=\"transparent-toolbar\" style=\"--border-width: 0; border-bottom: none;--background: transparent;\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"b1\">\n  <div style=\"display: table;position: absolute;left: 0;top: 0;height: 100%;width: 100%;\">\n    <div style=\"display: table-cell;vertical-align: middle;\">\n      <form [formGroup]=\"form\" class=\"login-form\" (ngSubmit)=\"onLogin(form.value)\">\n        <ion-card class=\"card-css\">\n          <ion-card-header>\n            <ion-img src=\"assets/nyclogo.png\" class=\"img-nyclogo\"></ion-img>\n          </ion-card-header>\n          <ion-card-content>\n    \n            <div class=\"input-border\">\n              <ion-label position=\"stacked\">Username</ion-label>\n              <ion-input type=\"email\" formControlName=\"username\"></ion-input>\n            </div>\n            <div *ngIf=\"(form.get('username').hasError('required') ) && form.get('username').touched\">\n              <div class=\"error\" *ngIf=\"form.get('username').hasError('required') && form.get('username').touched\">\n                Please Enter Username\n              </div>\n            </div>\n            <div class=\"input-border\">\n              <ion-label position=\"stacked\">Password</ion-label>\n              <ion-input formControlName=\"password\" [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\n              <ion-icon slot=\"end\" item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n            </div>\n            <div *ngIf=\"(form.get('password').hasError('required') ) && form.get('password').touched\">\n              <div class=\"error\" *ngIf=\"form.get('password').hasError('required') && form.get('password').touched\">\n                Please Enter Password\n              </div>\n            </div>\n    \n            <ion-label class=\"forget-password\" (click)=\"presentAlertPrompt()\">Forgot Password?</ion-label>\n            <ion-button type=\"submit\" class=\"login-button\" [disabled]=\"!form.valid\"> Login</ion-button>\n            <div class=\"or-border\"><span>OR</span></div>\n    \n            <ion-button class=\"google-button\">\n              <ion-img src=\"assets/google-image.png\" (click)=\"googleLogin()\"></ion-img> Signin With Google\n            </ion-button>\n    \n          </ion-card-content>\n        </ion-card>\n      </form>\n      <h5>DON'T HAVE AN ACCOUNT</h5>\n      <h4 routerLink=\"/register\">REGISTER</h4>  \n    </div>\n  </div>\n \n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modalpage/modalpage.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modalpage/modalpage.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page--title\">Service Agreement</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" class=\"close-icon\" (click)=\"dismissModal()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<div class=\"legal-information\" [innerHTML]=\"agreement\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modelfrom/modelfrom.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modelfrom/modelfrom.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"--background: transparent;\">\n  <ion-toolbar class=\"transparent-toolbar\" style=\"--border-width: 0; border-bottom: none;--background: transparent;padding-bottom: 0;\">\n    <div>\n      <ion-item class=\"full-width\" lines=\"none\">\n        <ion-label style=\"padding: 0 0px 0 6px; margin-bottom: 0;\" position=\"stacked\">From</ion-label>\n        <ion-input placeholder=\"Enter Address or Airport\" type=\"text\" debounce=\"500\" [(ngModel)]=\"formData0.row\"\n          (ionChange)=\"getItems($event)\">\n          <img src=\"assets/loader.gif\" *ngIf=\"showLoaderImg\" />\n        </ion-input>\n  \n        <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\" (click)=\"dismissModal()\"></ion-back-button>\n        </ion-buttons>\n  \n        <ion-buttons slot=\"end\">\n          <ion-button style=\"cursor: pointer;font-size: 14px; color: #000;font-weight: 700;margin-top: 0.6rem;\"\n            (click)=\"ClearInput()\">CLEAR</ion-button>\n        </ion-buttons>\n  \n      </ion-item>\n    </div>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"isItemAvailable\">\n    <ng-container *ngFor=\"let item of items\">\n\n      <div class=\"form-section form-section--suggetion-list\" *ngIf=\"item.Location_Type == 'A'\" (click)=\"putvalue(item)\">\n        {{ item.Location_Name }}\n      </div>\n\n      <div class=\"form-section form-section--suggetion-list\" *ngIf=\"item.Location_Type == 'B' && item.Location_Address !== item.Location_Name\" (click)=\"putvalue(item)\">\n        {{ item.Location_Name }} {{item.Location_Address}}\n      </div>\n\n      <div class=\"form-section form-section--suggetion-list\" *ngIf=\"item.Location_Type == 'B' && item.Location_Address == item.Location_Name\" (click)=\"putvalue(item)\">\n         {{item.Location_Address}}\n      </div>\n\n      <ion-item *ngIf=\"item.Location_Name == ''\" (click)=\"putvalue(item)\">\n        {{item.Location_Address}}\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modelto/modelto.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modelto/modelto.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"--background: transparent;\">\n  <ion-toolbar class=\"transparent-toolbar\" style=\"--border-width: 0; border-bottom: none;--background: transparent;padding-bottom: 0;\">\n    <div>\n      <ion-item class=\"full-width\" lines=\"none\">\n        <ion-label style=\"padding: 0 0px 0 6px; margin-bottom: 0;\" position=\"stacked\">To</ion-label>\n        <ion-input placeholder=\"Enter Address or Airport\" type=\"text\" debounce=\"500\" [(ngModel)]=\"formData0.row\"\n          (ionChange)=\"getItem($event)\">\n          <img src=\"assets/loader.gif\" *ngIf=\"showLoaderImg\" />\n        </ion-input>\n  \n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\" (click)=\"dismissModal()\"></ion-back-button>\n        </ion-buttons>\n  \n        <ion-buttons slot=\"end\">\n          <ion-button style=\"cursor: pointer;font-size: 14px; color: #000;font-weight: 700;margin-top: 0.6rem;\" (click)=\"ClearInput()\">CLEAR</ion-button>\n        </ion-buttons>\n      </ion-item>\n      \n    </div>\n  </ion-toolbar>\n  \n</ion-header>\n<ion-content>\n  <ion-list *ngIf=\"isItemAvailable1\">\n    <ng-container *ngFor=\"let row of rows\">\n    \n      <div class=\"form-section form-section--suggetion-list\" *ngIf=\"row.Location_Type == 'A'\" (click)=\"putvalue(row)\">\n        {{ row.Location_Name }} \n      </div>\n\n      <div class=\"form-section form-section--suggetion-list\" *ngIf=\"row.Location_Type == 'B' && row.Location_Address !== row.Location_Name\" (click)=\"putvalue(row)\">\n        {{ row.Location_Name }} {{row.Location_Address}}\n      </div>\n\n      <div class=\"form-section form-section--suggetion-list\" *ngIf=\"row.Location_Type == 'B' && row.Location_Address == row.Location_Name\" (click)=\"putvalue(row)\">\n         {{row.Location_Address}}\n      </div>\n\n      <div class=\"form-section form-section--suggetion-list\" *ngIf=\"row.Location_Name == ''\" (click)=\"putvalue(row)\">\n        {{row.Location_Address}}\n      </div>\n\n    </ng-container>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/payment-modal/payment-modal.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payment-modal/payment-modal.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page--title\">Card Details</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" class=\"close-icon\" (click)=\"dismissModal()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"form\" (ngSubmit)=\"addCardDetails(form.value)\">\n    <ion-row>\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\" class=\"name-css\">Credit card type<span class=\"mendatary\"> * </span></ion-label>\n        <ion-select placeholder=\"Select Card Type\" formControlName=\"CardType\">\n          <ion-select-option value=\"VISA\">Visa</ion-select-option>\n          <ion-select-option value=\"MASTER\">Master</ion-select-option>\n          <ion-select-option value=\"DESERVE PRO\">Deserve Pro</ion-select-option>\n          <ion-select-option value=\"DESERVE EDU\">Deserve Edu</ion-select-option>\n        </ion-select>\n      </div>\n      <ion-item lines=\"none\" *ngIf=\"(form.get('CardType').hasError('required') ) && form.get('CardType').touched\">\n        <div class=\"error\" *ngIf=\"form.get('CardType').hasError('required') && form.get('CardType').touched\">\n          Please Enter Credit Card Type\n        </div>\n      </ion-item>\n  \n  \n      <div class=\"input-border\">\n        <ion-label position=\"stacked\" class=\"name-css\">Credit card number<span class=\"mendatary\"> * </span></ion-label>\n        <ion-input type=\"tel\" minlength=\"16\" maxlength=\"16\" class=\"input-css\" formControlName=\"CardNumber\"></ion-input>\n      </div>\n  \n      <ion-item lines=\"none\" *ngIf=\"(form.get('CardNumber').hasError('required') ) && form.get('CardNumber').touched\">\n        <div class=\"error\" *ngIf=\"form.get('CardNumber').hasError('required') && form.get('CardNumber').touched\">\n          Please Enter Credit Card Number\n        </div>\n      </ion-item>\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Expiration month<span class=\"mendatary\"> * </span></ion-label>\n        <ion-select class=\"input-css\" placeholder=\"Exp month\" formControlName=\"CCExpiryMonth\"\n          (ionChange)=\"getCardYear($event,value)\">\n          <ion-select-option value=\"01\">January</ion-select-option>\n          <ion-select-option value=\"02\">February</ion-select-option>\n          <ion-select-option value=\"03\">March</ion-select-option>\n          <ion-select-option value=\"04\">April</ion-select-option>\n          <ion-select-option value=\"05\">May</ion-select-option>\n          <ion-select-option value=\"06\">June</ion-select-option>\n          <ion-select-option value=\"07\">July</ion-select-option>\n          <ion-select-option value=\"08\">Augest</ion-select-option>\n          <ion-select-option value=\"09\">September</ion-select-option>\n          <ion-select-option value=\"10\">October</ion-select-option>\n          <ion-select-option value=\"11\">November</ion-select-option>\n          <ion-select-option value=\"12\">December</ion-select-option>\n        </ion-select>\n      </div>\n      <ion-item lines=\"none\"\n        *ngIf=\"(form.get('CCExpiryMonth').hasError('required') ) && form.get('CCExpiryMonth').touched\">\n        <div class=\"error\" *ngIf=\"form.get('CCExpiryMonth').hasError('required') && form.get('CCExpiryMonth').touched\">\n          Please Enter Expiry Month\n        </div>\n      </ion-item>\n  \n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Expiration year<span class=\"mendatary\"> * </span></ion-label>\n        <ion-select placeholder=\"Exp year\" interface=\"popover\" formControlName=\"CCExpiryYear\">\n          <ion-select-option selected=\"{{CCExpiryYear}}\" *ngFor=\"let item of cardYear\">{{item.Text}}</ion-select-option>\n        </ion-select>\n      </div>\n  \n      <ion-item lines=\"none\" *ngIf=\"(form.get('CCExpiryYear').hasError('required') ) && form.get('CCExpiryYear').touched\">\n        <div class=\"error\" *ngIf=\"form.get('CCExpiryYear').hasError('required') && form.get('CCExpiryYear').touched\">\n          Please Enter Expiry Year\n        </div>\n      </ion-item>\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Cvv<span class=\"mendatary\"> * </span></ion-label>\n        <ion-input type=\"text\" placeholder=\"\" class=\"input-css\" formControlName=\"CVVNumber\"></ion-input>\n      </div>\n  \n      <ion-item lines=\"none\" *ngIf=\"(form.get('CVVNumber').hasError('required') ) && form.get('CVVNumber').touched\">\n        <div class=\"error\" *ngIf=\"form.get('CVVNumber').hasError('required') && form.get('CVVNumber').touched\">\n          Please Enter CVV\n        </div>\n      </ion-item>\n  \n      <div class=\"input-border\">\n        <ion-label position=\"stacked\" class=\"name-css\">CardHolder's name<span class=\"mendatary\"> * </span></ion-label>\n        <ion-input type=\"text\" placeholder=\"\" class=\"input-css\" formControlName=\"CardHolderName\"></ion-input>\n      </div>\n  \n      <ion-item lines=\"none\"\n        *ngIf=\"(form.get('CardHolderName').hasError('required') ) && form.get('CardHolderName').touched\">\n        <div class=\"error\" *ngIf=\"form.get('CardHolderName').hasError('required') && form.get('CardHolderName').touched\">\n          Please Enter Cardholder's Name\n        </div>\n      </ion-item>\n  \n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Address1<span class=\"mendatary\"> * </span></ion-label>\n        <ion-input type=\"text\" placeholder=\"\" class=\"input-css\" formControlName=\"BillingAddress1\"></ion-input>\n      </div>\n  \n      <ion-item lines=\"none\"\n        *ngIf=\"(form.get('BillingAddress1').hasError('required') ) && form.get('BillingAddress1').touched\">\n        <div class=\"error\"\n          *ngIf=\"form.get('BillingAddress1').hasError('required') && form.get('BillingAddress1').touched\">\n          Please Enter Address\n        </div>\n      </ion-item>\n  \n  \n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Address2</ion-label>\n        <ion-input type=\"text\" placeholder=\"\" class=\"input-css\" formControlName=\"BillingAddress2\"></ion-input>\n      </div>\n  \n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">City<span class=\"mendatary\"> * </span></ion-label>\n        <ion-input type=\"text\" placeholder=\"\" class=\"input-css\" formControlName=\"BillingCity\"></ion-input>\n      </div>\n  \n      <ion-item lines=\"none\" *ngIf=\"(form.get('BillingCity').hasError('required') ) && form.get('BillingCity').touched\">\n        <div class=\"error\" *ngIf=\"form.get('BillingCity').hasError('required') && form.get('BillingCity').touched\">\n          Please Enter City\n        </div>\n      </ion-item>\n  \n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">State/Region<span class=\"mendatary\"> * </span></ion-label>\n        <ion-input type=\"text\" placeholder=\"\" class=\"input-css\" formControlName=\"BillingState\"></ion-input>\n      </div>\n  \n      <ion-item lines=\"none\" *ngIf=\"(form.get('BillingState').hasError('required') ) && form.get('BillingState').touched\">\n        <div class=\"error\" *ngIf=\"form.get('BillingState').hasError('required') && form.get('BillingState').touched\">\n          Please Enter State/Region\n        </div>\n      </ion-item>\n  \n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Zipcode<span class=\"mendatary\"> * </span></ion-label>\n        <ion-input type=\"text\" placeholder=\"\" class=\"input-css\" formControlName=\"BillingZip\"></ion-input>\n      </div>\n  \n      <ion-item lines=\"none\" *ngIf=\"(form.get('BillingZip').hasError('required') ) && form.get('BillingZip').touched\">\n        <div class=\"error\" *ngIf=\"form.get('BillingZip').hasError('required') && form.get('BillingZip').touched\">\n          Please Enter ZipCode\n        </div>\n      </ion-item>\n  \n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Country<span class=\"mendatary\"> * </span></ion-label>\n        <ion-select formControlName=\"BillingCountry\">\n          <ion-select-option value=\"0\">---</ion-select-option>\n          <ion-select-option value=\"AF\">Afghanistan</ion-select-option>\n          <ion-select-option value=\"AL\">Albania</ion-select-option>\n          <ion-select-option value=\"AX\">Åland Islands</ion-select-option>\n          <ion-select-option value=\"AO\">Angola</ion-select-option>\n          <ion-select-option value=\"DZ\">Algeria</ion-select-option>\n          <ion-select-option value=\"AS\">American Samoa</ion-select-option>\n          <ion-select-option value=\"AD\">Andorra</ion-select-option>\n          <ion-select-option value=\"AI\">Anguilla</ion-select-option>\n          <ion-select-option value=\"AQ\">Antarctica</ion-select-option>\n          <ion-select-option value=\"AG\">Antigua And Barbuda</ion-select-option>\n          <ion-select-option value=\"AR\">Argentina</ion-select-option>\n          <ion-select-option value=\"AM\">Armenia</ion-select-option>\n          <ion-select-option value=\"AW\">Aruba</ion-select-option>\n          <ion-select-option value=\"AU\">Australia</ion-select-option>\n          <ion-select-option value=\"AT\">Austria</ion-select-option>\n          <ion-select-option value=\"AZ\">Azerbaijan</ion-select-option>\n          <ion-select-option value=\"BS\">Bahamas</ion-select-option>\n          <ion-select-option value=\"BH\">Bahrain</ion-select-option>\n          <ion-select-option value=\"BD\">Bangladesh</ion-select-option>\n          <ion-select-option value=\"BB\">Barbados</ion-select-option>\n          <ion-select-option value=\"BY\">Belarus</ion-select-option>\n          <ion-select-option value=\"BE\">Belgium</ion-select-option>\n          <ion-select-option value=\"BZ\">Belize</ion-select-option>\n          <ion-select-option value=\"BJ\">Benin</ion-select-option>\n          <ion-select-option value=\"BM\">Bermuda</ion-select-option>\n          <ion-select-option value=\"BT\">Bhutan</ion-select-option>\n          <ion-select-option value=\"BO\">Bolivia</ion-select-option>\n          <ion-select-option value=\"BA\">Bosnia and Herzegovina</ion-select-option>\n          <ion-select-option value=\"BW\">Botswana</ion-select-option>\n          <ion-select-option value=\"BV\">Bouvet Island</ion-select-option>\n          <ion-select-option value=\"BR\">Brazil</ion-select-option>\n          <ion-select-option value=\"IO\">British Indian Ocean Territory</ion-select-option>\n          <ion-select-option value=\"BN\">Brunei Darussalam</ion-select-option>\n          <ion-select-option value=\"BG\">Bulgaria</ion-select-option>\n          <ion-select-option value=\"BF\">Burkina Faso</ion-select-option>\n          <ion-select-option value=\"BI\">Burundi</ion-select-option>\n          <ion-select-option value=\"KH\">Cambodia</ion-select-option>\n          <ion-select-option value=\"CM\">Cameroon</ion-select-option>\n          <ion-select-option value=\"CA\">Canada</ion-select-option>\n          <ion-select-option value=\"CV\">Cape Verde</ion-select-option>\n          <ion-select-option value=\"KY\">Cayman Islands</ion-select-option>\n          <ion-select-option value=\"CF\">Central African Republic</ion-select-option>\n          <ion-select-option value=\"TD\">Chad</ion-select-option>\n          <ion-select-option value=\"CL\">Chile</ion-select-option>\n          <ion-select-option value=\"CN\">China</ion-select-option>\n          <ion-select-option value=\"CX\">Christmas Island</ion-select-option>\n          <ion-select-option value=\"CC\">Cocos (Keeling) Islands</ion-select-option>\n          <ion-select-option value=\"CO\">Colombia</ion-select-option>\n          <ion-select-option value=\"KM\">Comoros</ion-select-option>\n          <ion-select-option value=\"CG\">Congo</ion-select-option>\n          <ion-select-option value=\"CD\">Congo, the Democratic Republic of the</ion-select-option>\n          <ion-select-option value=\"CK\">Cook Islands</ion-select-option>\n          <ion-select-option value=\"CR\">Costa Rica</ion-select-option>\n          <ion-select-option value=\"CI\">Cote d'Ivoire</ion-select-option>\n          <ion-select-option value=\"HR\">Croatia</ion-select-option>\n          <ion-select-option value=\"CY\">Cyprus</ion-select-option>\n          <ion-select-option value=\"CZ\">Czech Republic</ion-select-option>\n          <ion-select-option value=\"DK\">Denmark</ion-select-option>\n          <ion-select-option value=\"DJ\">Djibouti</ion-select-option>\n          <ion-select-option value=\"DM\">Dominica</ion-select-option>\n          <ion-select-option value=\"DO\">Dominican Republic</ion-select-option>\n          <ion-select-option value=\"TP\">East Timor</ion-select-option>\n          <ion-select-option value=\"EC\">Ecuador</ion-select-option>\n          <ion-select-option value=\"EG\">Egypt</ion-select-option>\n          <ion-select-option value=\"SV\">El Salvador</ion-select-option>\n          <ion-select-option value=\"GQ\">Equatorial Guinea</ion-select-option>\n          <ion-select-option value=\"ER\">Eritrea</ion-select-option>\n          <ion-select-option value=\"EE\">Estonia</ion-select-option>\n          <ion-select-option value=\"ET\">Ethiopia</ion-select-option>\n          <ion-select-option value=\"FK\">Falkland Islands</ion-select-option>\n          <ion-select-option value=\"FO\">Faroe Islands</ion-select-option>\n          <ion-select-option value=\"FJ\">Fiji</ion-select-option>\n          <ion-select-option value=\"FI\">Finland</ion-select-option>\n          <ion-select-option value=\"FR\">France</ion-select-option>\n          <ion-select-option value=\"GF\">French Guiana</ion-select-option>\n          <ion-select-option value=\"PF\">French Polynesia</ion-select-option>\n          <ion-select-option value=\"TF\">French Southern Territories</ion-select-option>\n          <ion-select-option value=\"GA\">Gabon</ion-select-option>\n          <ion-select-option value=\"GM\">Gambia</ion-select-option>\n          <ion-select-option value=\"GE\">Georgia</ion-select-option>\n          <ion-select-option value=\"DE\">Germany</ion-select-option>\n          <ion-select-option value=\"GH\">Ghana</ion-select-option>\n          <ion-select-option value=\"GI\">Gibraltar</ion-select-option>\n          <ion-select-option value=\"GR\">Greece</ion-select-option>\n          <ion-select-option value=\"GL\">Greenland</ion-select-option>\n          <ion-select-option value=\"GD\">Grenada</ion-select-option>\n          <ion-select-option value=\"GP\">Guadeloupe</ion-select-option>\n          <ion-select-option value=\"GU\">Guam</ion-select-option>\n          <ion-select-option value=\"GT\">Guatemala</ion-select-option>\n          <ion-select-option value=\"GG\">Guernsey</ion-select-option>\n          <ion-select-option value=\"GN\">Guinea</ion-select-option>\n          <ion-select-option value=\"GW\">Guinea-Bissau</ion-select-option>\n          <ion-select-option value=\"GY\">Guyana</ion-select-option>\n          <ion-select-option value=\"HT\">Haiti</ion-select-option>\n          <ion-select-option value=\"HM\">Heard and Mc Donald Islands</ion-select-option>\n          <ion-select-option value=\"HN\">Honduras</ion-select-option>\n          <ion-select-option value=\"HK\">Hong Kong</ion-select-option>\n          <ion-select-option value=\"HU\">Hungary</ion-select-option>\n          <ion-select-option value=\"IS\">Iceland</ion-select-option>\n          <ion-select-option value=\"IN\">India</ion-select-option>\n          <ion-select-option value=\"ID\">Indonesia</ion-select-option>\n          <ion-select-option value=\"IQ\">Iraq</ion-select-option>\n          <ion-select-option value=\"IE\">Ireland</ion-select-option>\n          <ion-select-option value=\"IM\">Isle of Man</ion-select-option>\n          <ion-select-option value=\"IL\">Israel</ion-select-option>\n          <ion-select-option value=\"IT\">Italy</ion-select-option>\n          <ion-select-option value=\"JM\">Jamaica</ion-select-option>\n          <ion-select-option value=\"JP\">Japan</ion-select-option>\n          <ion-select-option value=\"JE\">Jersey</ion-select-option>\n          <ion-select-option value=\"JO\">Jordan</ion-select-option>\n          <ion-select-option value=\"KZ\">Kazakhstan</ion-select-option>\n          <ion-select-option value=\"KE\">Kenya</ion-select-option>\n          <ion-select-option value=\"KI\">Kiribati</ion-select-option>\n          <ion-select-option value=\"KR\">Korea, Republic of</ion-select-option>\n          <ion-select-option value=\"KW\">Kuwait</ion-select-option>\n          <ion-select-option value=\"KG\">Kyrgyzstan</ion-select-option>\n          <ion-select-option value=\"LA\">Lao People's Democratic Republic</ion-select-option>\n          <ion-select-option value=\"LV\">Latvia</ion-select-option>\n          <ion-select-option value=\"LB\">Lebanon</ion-select-option>\n          <ion-select-option value=\"LS\">Lesotho</ion-select-option>\n          <ion-select-option value=\"LR\">Liberia</ion-select-option>\n          <ion-select-option value=\"LY\">Libya</ion-select-option>\n          <ion-select-option value=\"LI\">Liechtenstein</ion-select-option>\n          <ion-select-option value=\"LT\">Lithuania</ion-select-option>\n          <ion-select-option value=\"LU\">Luxembourg</ion-select-option>\n          <ion-select-option value=\"MO\">Macau</ion-select-option>\n          <ion-select-option value=\"MK\">Macedonia</ion-select-option>\n          <ion-select-option value=\"MG\">Madagascar</ion-select-option>\n          <ion-select-option value=\"MW\">Malawi</ion-select-option>\n          <ion-select-option value=\"MY\">Malaysia</ion-select-option>\n          <ion-select-option value=\"MV\">Maldives</ion-select-option>\n          <ion-select-option value=\"ML\">Mali</ion-select-option>\n          <ion-select-option value=\"MT\">Malta</ion-select-option>\n          <ion-select-option value=\"MH\">Marshall Islands</ion-select-option>\n          <ion-select-option value=\"MQ\">Martinique</ion-select-option>\n          <ion-select-option value=\"MR\">Mauritania</ion-select-option>\n          <ion-select-option value=\"MU\">Mauritius</ion-select-option>\n          <ion-select-option value=\"YT\">Mayotte</ion-select-option>\n          <ion-select-option value=\"MX\">Mexico</ion-select-option>\n          <ion-select-option value=\"FM\">Micronesia, Federated States of</ion-select-option>\n          <ion-select-option value=\"MD\">Moldova, Republic of</ion-select-option>\n          <ion-select-option value=\"MC\">Monaco</ion-select-option>\n          <ion-select-option value=\"MN\">Mongolia</ion-select-option>\n          <ion-select-option value=\"ME\">Montenegro</ion-select-option>\n          <ion-select-option value=\"MS\">Montserrat</ion-select-option>\n          <ion-select-option value=\"MA\">Morocco</ion-select-option>\n          <ion-select-option value=\"MZ\">Mozambique</ion-select-option>\n          <ion-select-option value=\"MM\">Myanmar</ion-select-option>\n          <ion-select-option value=\"NA\">Namibia</ion-select-option>\n          <ion-select-option value=\"NR\">Nauru</ion-select-option>\n          <ion-select-option value=\"NP\">Nepal</ion-select-option>\n          <ion-select-option value=\"NL\">Netherlands</ion-select-option>\n          <ion-select-option value=\"AN\">Netherlands Antilles</ion-select-option>\n          <ion-select-option value=\"NC\">New Caledonia</ion-select-option>\n          <ion-select-option value=\"NZ\">New Zealand</ion-select-option>\n          <ion-select-option value=\"NI\">Nicaragua</ion-select-option>\n          <ion-select-option value=\"NE\">Niger</ion-select-option>\n          <ion-select-option value=\"NG\">Nigeria</ion-select-option>\n          <ion-select-option value=\"NU\">Niue</ion-select-option>\n          <ion-select-option value=\"NF\">Norfolk Island</ion-select-option>\n          <ion-select-option value=\"MP\">Northern Mariana Islands</ion-select-option>\n          <ion-select-option value=\"NO\">Norway</ion-select-option>\n          <ion-select-option value=\"OM\">Oman</ion-select-option>\n          <ion-select-option value=\"PK\">Pakistan</ion-select-option>\n          <ion-select-option value=\"PW\">Palau</ion-select-option>\n          <ion-select-option value=\"PS\">Palestinian Territories</ion-select-option>\n          <ion-select-option value=\"PA\">Panama</ion-select-option>\n          <ion-select-option value=\"PG\">Papua New Guinea</ion-select-option>\n          <ion-select-option value=\"PY\">Paraguay</ion-select-option>\n          <ion-select-option value=\"PE\">Peru</ion-select-option>\n          <ion-select-option value=\"PH\">Philippines</ion-select-option>\n          <ion-select-option value=\"PN\">Pitcairn</ion-select-option>\n          <ion-select-option value=\"PL\">Poland</ion-select-option>\n          <ion-select-option value=\"PT\">Portugal</ion-select-option>\n          <ion-select-option value=\"PR\">Puerto Rico</ion-select-option>\n          <ion-select-option value=\"QA\">Qatar</ion-select-option>\n          <ion-select-option value=\"RE\">Reunion</ion-select-option>\n          <ion-select-option value=\"RO\">Romania</ion-select-option>\n          <ion-select-option value=\"RU\">Russian Federation</ion-select-option>\n          <ion-select-option value=\"RW\">Rwanda</ion-select-option>\n          <ion-select-option value=\"BL\">Saint Barthélemy</ion-select-option>\n          <ion-select-option value=\"KN\">Saint Kitts and Nevis</ion-select-option>\n          <ion-select-option value=\"LC\">Saint Lucia</ion-select-option>\n          <ion-select-option value=\"MF\">Saint Martin</ion-select-option>\n          <ion-select-option value=\"VC\">Saint Vincent and the Grenadines</ion-select-option>\n          <ion-select-option value=\"WS\">Samoa (Independent)</ion-select-option>\n          <ion-select-option value=\"SM\">San Marino</ion-select-option>\n          <ion-select-option value=\"ST\">Sao Tome and Principe</ion-select-option>\n          <ion-select-option value=\"SA\">Saudi Arabia</ion-select-option>\n          <ion-select-option value=\"SN\">Senegal</ion-select-option>\n          <ion-select-option value=\"RS\">Serbia</ion-select-option>\n          <ion-select-option value=\"SC\">Seychelles</ion-select-option>\n          <ion-select-option value=\"SL\">Sierra Leone</ion-select-option>\n          <ion-select-option value=\"SG\">Singapore</ion-select-option>\n          <ion-select-option value=\"SK\">Slovakia</ion-select-option>\n          <ion-select-option value=\"SI\">Slovenia</ion-select-option>\n          <ion-select-option value=\"SB\">Solomon Islands</ion-select-option>\n          <ion-select-option value=\"SO\">Somalia</ion-select-option>\n          <ion-select-option value=\"ZA\">South Africa</ion-select-option>\n          <ion-select-option value=\"GS\">South Georgia and the South Sandwich Islands</ion-select-option>\n          <ion-select-option value=\"ES\">Spain</ion-select-option>\n          <ion-select-option value=\"LK\">Sri Lanka</ion-select-option>\n          <ion-select-option value=\"SH\">St. Helena</ion-select-option>\n          <ion-select-option value=\"PM\">St. Pierre and Miquelon</ion-select-option>\n          <ion-select-option value=\"SR\">Suriname</ion-select-option>\n          <ion-select-option value=\"SJ\">Svalbard and Jan Mayen Islands</ion-select-option>\n          <ion-select-option value=\"SZ\">Swaziland</ion-select-option>\n          <ion-select-option value=\"SE\">Sweden</ion-select-option>\n          <ion-select-option value=\"CH\">Switzerland</ion-select-option>\n          <ion-select-option value=\"TW\">Taiwan</ion-select-option>\n          <ion-select-option value=\"TJ\">Tajikistan</ion-select-option>\n          <ion-select-option value=\"TZ\">Tanzania</ion-select-option>\n          <ion-select-option value=\"TH\">Thailand</ion-select-option>\n          <ion-select-option value=\"TG\">Togo</ion-select-option>\n          <ion-select-option value=\"TK\">Tokelau</ion-select-option>\n          <ion-select-option value=\"TO\">Tonga</ion-select-option>\n          <ion-select-option value=\"TT\">Trinidad and Tobago</ion-select-option>\n          <ion-select-option value=\"TN\">Tunisia</ion-select-option>\n          <ion-select-option value=\"TR\">Turkey</ion-select-option>\n          <ion-select-option value=\"TM\">Turkmenistan</ion-select-option>\n          <ion-select-option value=\"TC\">Turks and Caicos Islands</ion-select-option>\n          <ion-select-option value=\"TV\">Tuvalu</ion-select-option>\n          <ion-select-option value=\"UG\">Uganda</ion-select-option>\n          <ion-select-option value=\"UA\">Ukraine</ion-select-option>\n          <ion-select-option value=\"AE\">United Arab Emirates</ion-select-option>\n          <ion-select-option value=\"GB\">United Kingdom</ion-select-option>\n          <ion-select-option value=\"US\" selected=\"selected\">United States</ion-select-option>\n          <ion-select-option value=\"UM\">United States Minor Outlying Islands</ion-select-option>\n          <ion-select-option value=\"UY\">Uruguay</ion-select-option>\n          <ion-select-option value=\"UZ\">Uzbekistan</ion-select-option>\n          <ion-select-option value=\"VU\">Vanuatu</ion-select-option>\n          <ion-select-option value=\"VA\">Vatican City State (Holy See)</ion-select-option>\n          <ion-select-option value=\"VE\">Venezuela</ion-select-option>\n          <ion-select-option value=\"VN\">Viet Nam</ion-select-option>\n          <ion-select-option value=\"VG\">Virgin Islands (British)</ion-select-option>\n          <ion-select-option value=\"VI\">Virgin Islands (U.S.)</ion-select-option>\n          <ion-select-option value=\"WF\">Wallis and Futuna Islands</ion-select-option>\n          <ion-select-option value=\"EH\">Western Sahara</ion-select-option>\n          <ion-select-option value=\"YE\">Yemen</ion-select-option>\n          <ion-select-option value=\"ZM\">Zambia</ion-select-option>\n          <ion-select-option value=\"ZW\">Zimbabwe</ion-select-option>\n        </ion-select>\n      </div>\n  \n      <ion-item lines=\"none\"\n        *ngIf=\"(form.get('BillingCountry').hasError('required') ) && form.get('BillingCountry').touched\">\n        <div class=\"error\" *ngIf=\"form.get('BillingCountry').hasError('required') && form.get('BillingCountry').touched\">\n          Please Enter Country Name\n        </div>\n      </ion-item>\n  \n      <ion-button type=\"submit\" class=\"main-button\" [disabled]=\"!form.valid\" *ngIf=\"paymentInfo == null\">Save</ion-button>\n      <ion-button type=\"submit\" class=\"main-button\" *ngIf=\"paymentInfo != null\">Save</ion-button>\n  \n    </ion-row>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/privacy-modal/privacy-modal.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/privacy-modal/privacy-modal.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page--title\">Privacy Policy</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" class=\"close-icon\" (click)=\"dismissModal()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div class=\"privacy\" [innerHTML]=\"privacyStatement\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stops-location/stops-location.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stops-location/stops-location.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"--background: transparent;\">\n  <ion-toolbar class=\"transparent-toolbar\" style=\"--border-width: 0; border-bottom: none;--background: transparent;padding-bottom: 0;\">\n    <div>\n      <ion-item class=\"full-width\" lines=\"none\">\n        <ion-label style=\"padding: 0 0px 0 6px; margin-bottom: 0;\" position=\"stacked\">Stop</ion-label>\n        <ion-input placeholder=\"Enter Address or Airport\" type=\"text\" debounce=\"500\" [(ngModel)]=\"formData0.row\"\n          (ionChange)=\"getItems($event)\">\n          <img src=\"assets/loader.gif\" *ngIf=\"showLoaderImg\" />\n        </ion-input>\n  \n        <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\" (click)=\"dismissModal()\"></ion-back-button>\n        </ion-buttons>\n  \n        <ion-buttons slot=\"end\">\n          <ion-button style=\"cursor: pointer;font-size: 14px; color: #000;font-weight: 700;margin-top: 0.6rem;\"\n            (click)=\"ClearInput()\">CLEAR</ion-button>\n        </ion-buttons>\n  \n      </ion-item>\n    </div>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"isItemAvailable\">\n    <ng-container *ngFor=\"let item of items\">\n\n      <div class=\"form-section form-section--suggetion-list\" *ngIf=\"item.Location_Type == 'A'\" (click)=\"putvalue(item)\">\n        {{ item.Location_Name }}\n      </div>\n\n      <div class=\"form-section form-section--suggetion-list\" *ngIf=\"item.Location_Type == 'B' && item.Location_Address !== item.Location_Name\" (click)=\"putvalue(item)\">\n        {{ item.Location_Name }} {{item.Location_Address}}\n      </div>\n\n      <div class=\"form-section form-section--suggetion-list\" *ngIf=\"item.Location_Type == 'B' && item.Location_Address == item.Location_Name\" (click)=\"putvalue(item)\">\n         {{item.Location_Address}}\n      </div>\n\n      <ion-item *ngIf=\"item.Location_Name == ''\" (click)=\"putvalue(item)\">\n        {{item.Location_Address}}\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/trip-dates/trip-dates.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/trip-dates/trip-dates.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Trip Dates</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" class=\"close-icon\" (click)=\"dismissModal()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n  <ion-label>From</ion-label>\n  <ion-datetime displayFormat=\"MMM DD, YYYY\" placeholder=\"Select date\"></ion-datetime>\n</ion-item>\n<ion-item>\n  <ion-label>To</ion-label>\n  <ion-datetime displayFormat=\"MMM DD, YYYY\" placeholder=\"Select date\"></ion-datetime> \n</ion-item>\n<ion-item>\n  <ion-button (click)=\"confirmDates()\">Done</ion-button>\n</ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-passenger/add-passenger.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/add-passenger/add-passenger.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mendatary {\n  color: red;\n  font-size: 15px;\n}\n\nform {\n  background: #fff;\n}\n\nform .input-border {\n  border-bottom: 1px solid #ddd;\n  width: 100%;\n  padding: 5px 15px;\n}\n\nform .input-border ion-input {\n  font-size: 13px;\n  color: #000;\n  letter-spacing: 0.5px;\n  --padding-bottom: 4px;\n  --padding-top: 10px;\n  --padding-start: 0;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 900;\n}\n\nform .input-border ion-select {\n  --padding-start: 0;\n  color: #000;\n  font-size: 14px;\n  --placeholder-colo: #000;\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.3px;\n}\n\nform .input-border ion-label {\n  position: relative;\n  top: 0.5rem;\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL2FkZC1wYXNzZW5nZXIvYWRkLXBhc3Nlbmdlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1wYXNzZW5nZXIvYWRkLXBhc3Nlbmdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURESTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDR1I7O0FERlE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0laOztBREZRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQ0laOztBREZRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQ0laIiwiZmlsZSI6InNyYy9hcHAvYWRkLXBhc3Nlbmdlci9hZGQtcGFzc2VuZ2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW5kYXRhcnkge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5mb3JtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAuaW5wdXQtYm9yZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvOiAjMDAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5tZW5kYXRhcnkge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuZm9ybSAuaW5wdXQtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cbmZvcm0gLmlucHV0LWJvcmRlciBpb24taW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbmZvcm0gLmlucHV0LWJvcmRlciBpb24tc2VsZWN0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG86ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG5mb3JtIC5pbnB1dC1ib3JkZXIgaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-passenger/add-passenger.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-passenger/add-passenger.page.ts ***!
  \*****************************************************/
/*! exports provided: AddPassengerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPassengerPage", function() { return AddPassengerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");




var AddPassengerPage = /** @class */ (function () {
    function AddPassengerPage(envservice, loadingController, modalController, toastCtrl) {
        this.envservice = envservice;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.toastCtrl = toastCtrl;
        this.formData = { "PassengerId": "", "FKUserId": "", "FK_User_CCInfoId": "", "Prefix": "", "FirstName": "", "LastName": "", "EmailId": "", "Address": "", "Comment": "", "TeleNo": "", "Cellno": "", "IsSavePassangerInfo": "" };
    }
    AddPassengerPage.prototype.ngOnInit = function () {
        if (localStorage.getItem("addPassengers")) {
            var passengerValue = localStorage.getItem("addPassengers");
            this.passengerVal = JSON.parse(passengerValue);
            console.log(this.passengerVal);
            this.firstName = this.passengerVal.FirstName;
            this.lastName = this.passengerVal.LastName;
            this.emailId = this.passengerVal.EmailId;
            this.address = this.passengerVal.Address;
            this.comment = this.passengerVal.Comment;
            this.telephoneNo = this.passengerVal.TeleNo;
            this.cellNo = this.passengerVal.Cellno;
        }
    };
    AddPassengerPage.prototype.addPassenger = function () {
        var _this = this;
        var id = localStorage.getItem("user_id");
        // var username = localStorage.getItem("username")
        this.userId = id;
        // this.userName = username;
        this.presentLoading().then(function (a) {
            if (localStorage.getItem("addPassengers")) {
                var passengerValue = localStorage.getItem("addPassengers");
                _this.passengerVal = JSON.parse(passengerValue);
                console.log(_this.passengerVal);
                _this.formData.PassengerId = _this.passengerVal.PassengerId;
            }
            else {
                _this.formData.PassengerId = "0";
            }
            _this.formData.FKUserId = _this.userId;
            _this.formData.FK_User_CCInfoId = "null";
            _this.formData.Prefix = "null";
            _this.formData.FirstName = _this.firstName;
            _this.formData.LastName = _this.lastName;
            _this.formData.EmailId = _this.emailId;
            _this.formData.Address = _this.address;
            _this.formData.Comment = _this.comment;
            _this.formData.TeleNo = _this.telephoneNo;
            _this.formData.Cellno = _this.cellNo;
            _this.formData.IsSavePassangerInfo = "null";
            console.log(_this.formData.PassengerId);
            _this.envservice.addPassengers(_this.formData).then(function (data) {
                _this.response = JSON.parse(data.data);
                console.log(_this.response);
                _this.presentToast(_this.response.Data);
                _this.loadingController.dismiss();
                _this.dismissModal();
            }).catch(function (error) {
                _this.errorResponse = JSON.parse(error.error);
                console.log("error", error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                console.log("error", error);
                alert(_this.errorResponse.Message);
                _this.loadingController.dismiss();
            });
        });
    };
    AddPassengerPage.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
                            cssClass: 'custom-loader',
                            spinner: null
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddPassengerPage.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    AddPassengerPage.prototype.presentToast = function (message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPassengerPage.ctorParameters = function () { return [
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    AddPassengerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-passenger',
            template: __webpack_require__(/*! raw-loader!./add-passenger.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-passenger/add-passenger.page.html"),
            styles: [__webpack_require__(/*! ./add-passenger.page.scss */ "./src/app/add-passenger/add-passenger.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], AddPassengerPage);
    return AddPassengerPage;
}());



/***/ }),

/***/ "./src/app/add-project/add-project.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-project/add-project.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mendatary {\n  color: red;\n  font-size: 15px;\n}\n\nform {\n  background: #fff;\n}\n\nform .input-border {\n  border-bottom: 1px solid #ddd;\n  width: 100%;\n  padding: 5px 15px;\n}\n\nform .input-border ion-input {\n  font-size: 13px;\n  color: #000;\n  letter-spacing: 0.5px;\n  --padding-bottom: 4px;\n  --padding-top: 10px;\n  --padding-start: 0;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 900;\n}\n\nform .input-border ion-select {\n  --padding-start: 0;\n  color: #000;\n  font-size: 14px;\n  --placeholder-colo: #000;\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.3px;\n}\n\nform .input-border ion-label {\n  position: relative;\n  top: 0.5rem;\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL2FkZC1wcm9qZWN0L2FkZC1wcm9qZWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLXByb2plY3QvYWRkLXByb2plY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEREk7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0dSOztBREZRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNJWjs7QURGUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUNJWjs7QURGUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUNJWiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9qZWN0L2FkZC1wcm9qZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW5kYXRhcnkge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5mb3JtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAuaW5wdXQtYm9yZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvOiAjMDAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5tZW5kYXRhcnkge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuZm9ybSAuaW5wdXQtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cbmZvcm0gLmlucHV0LWJvcmRlciBpb24taW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbmZvcm0gLmlucHV0LWJvcmRlciBpb24tc2VsZWN0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG86ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG5mb3JtIC5pbnB1dC1ib3JkZXIgaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-project/add-project.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-project/add-project.page.ts ***!
  \*************************************************/
/*! exports provided: AddProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectPage", function() { return AddProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");





var AddProjectPage = /** @class */ (function () {
    function AddProjectPage(loadingController, envservice, _FB, modalController, toastCtrl) {
        this.loadingController = loadingController;
        this.envservice = envservice;
        this._FB = _FB;
        this.modalController = modalController;
        this.toastCtrl = toastCtrl;
        this.formData = { "ProjectId": "", "ProjectName": "", "projectdescription": "", "fk_user_ccinfoid": "", "useriD": "", "username": "" };
    }
    AddProjectPage.prototype.ngOnInit = function () {
        if (localStorage.getItem("project")) {
            var projectValue = localStorage.getItem("project");
            this.projectVal = JSON.parse(projectValue);
            console.log(this.projectVal);
            this.projectName = this.projectVal.ProjectName;
            this.projectDescription = this.projectVal.ProjectDescription;
        }
        else {
        }
    };
    AddProjectPage.prototype.addProject = function () {
        var _this = this;
        var id = localStorage.getItem("user_id");
        var username = localStorage.getItem("username");
        this.userId = id;
        this.userName = username;
        this.presentLoading().then(function (a) {
            if (localStorage.getItem("project")) {
                var projectValue = localStorage.getItem("project");
                _this.projectVal = JSON.parse(projectValue);
                _this.formData.ProjectId = _this.projectVal.ProjectId;
            }
            else {
                _this.formData.ProjectId = "0";
            }
            _this.formData.ProjectName = _this.projectName;
            _this.formData.projectdescription = _this.projectDescription;
            _this.formData.fk_user_ccinfoid = null;
            _this.formData.useriD = _this.userId;
            _this.formData.username = _this.userName;
            console.log(_this.formData.ProjectId);
            _this.envservice.addProjects(_this.formData.ProjectId, _this.formData.ProjectName, _this.formData.projectdescription, _this.formData.fk_user_ccinfoid, _this.formData.useriD, _this.formData.username).then(function (data) {
                _this.response = JSON.parse(data.data);
                console.log(_this.response);
                _this.presentToast(_this.response.Data);
                _this.loadingController.dismiss();
                _this.dismissModal();
            });
        });
    };
    AddProjectPage.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
                            cssClass: 'custom-loader',
                            spinner: null
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddProjectPage.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    AddProjectPage.prototype.presentToast = function (message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddProjectPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    AddProjectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__(/*! raw-loader!./add-project.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-project/add-project.page.html"),
            styles: [__webpack_require__(/*! ./add-project.page.scss */ "./src/app/add-project/add-project.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], AddProjectPage);
    return AddProjectPage;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: function () { return Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~filldetails-filldetails-module~home-home-module~mytrips-mytrips-module~reviewdetails-reviewd~c2799781"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomePageModule; }); }
    },
    {
        path: 'list',
        loadChildren: function () { return __webpack_require__.e(/*! import() | list-list-module */ "list-list-module").then(__webpack_require__.bind(null, /*! ./list/list.module */ "./src/app/list/list.module.ts")).then(function (m) { return m.ListPageModule; }); }
    },
    { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesPageModule' },
    { path: 'selectvehicle', loadChildren: './selectvehicle/selectvehicle.module#SelectvehiclePageModule' },
    { path: 'filldetails', loadChildren: './filldetails/filldetails.module#FilldetailsPageModule' },
    { path: 'reviewdetails', loadChildren: './reviewdetails/reviewdetails.module#ReviewdetailsPageModule' },
    { path: 'placeorder', loadChildren: './placeorder/placeorder.module#PlaceorderPageModule' },
    { path: 'thankyou', loadChildren: './thankyou/thankyou.module#ThankyouPageModule' },
    { path: 'farecalculations', loadChildren: './farecalculations/farecalculations.module#FarecalculationsPageModule' },
    { path: 'vehicles-return-page', loadChildren: './vehicles-return-page/vehicles-return-page.module#VehiclesReturnPagePageModule' },
    { path: 'select-returnvehicle', loadChildren: './select-returnvehicle/select-returnvehicle.module#SelectReturnvehiclePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'mytrips', loadChildren: './mytrips/mytrips.module#MytripsPageModule' },
    { path: 'modalpage', loadChildren: './modalpage/modalpage.module#ModalpagePageModule' },
    { path: 'otp-confirmation', loadChildren: './otp-confirmation/otp-confirmation.module#OtpConfirmationPageModule' },
    { path: 'my-payment', loadChildren: './my-payment/my-payment.module#MyPaymentPageModule' },
    { path: 'payment-modal', loadChildren: './payment-modal/payment-modal.module#PaymentModalPageModule' },
    { path: 'privacy-modal', loadChildren: './privacy-modal/privacy-modal.module#PrivacyModalPageModule' },
    { path: 'my-projects', loadChildren: './my-projects/my-projects.module#MyProjectsPageModule' },
    { path: 'farecalculationsreturn', loadChildren: './farecalculationsreturn/farecalculationsreturn.module#FarecalculationsreturnPageModule' },
    { path: 'userprofile', loadChildren: './userprofile/userprofile.module#UserprofilePageModule' },
    { path: 'my-passengers', loadChildren: './my-passengers/my-passengers.module#MyPassengersPageModule' },
    { path: 'legalpage', loadChildren: './legalpage/legalpage.module#LegalpagePageModule' },
    { path: 'feedback-modal', loadChildren: './feedback-modal/feedback-modal.module#FeedbackModalPageModule' },
    { path: 'add-project', loadChildren: './add-project/add-project.module#AddProjectPageModule' },
    { path: 'add-passenger', loadChildren: './add-passenger/add-passenger.module#AddPassengerPageModule' },
    { path: 'trip-dates', loadChildren: './trip-dates/trip-dates.module#TripDatesPageModule' },
    { path: 'stops-location', loadChildren: './stops-location/stops-location.module#StopsLocationPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background:#fff;\n}\nion-content ion-list ion-menu-toggle ion-item {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\nion-header ion-img {\n  width: 85px;\n  margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjtBREVZO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0FoQjtBRE1JO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDojZmZmO1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGlvbi1tZW51LXRvZ2dsZSB7XHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyxzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24taGVhZGVyIHtcclxuICAgIGlvbi1pbWcge1xyXG4gICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvOyAgIFxyXG4gICAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmY7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tbWVudS10b2dnbGUgaW9uLWl0ZW0ge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbmlvbi1oZWFkZXIgaW9uLWltZyB7XG4gIHdpZHRoOiA4NXB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _privacy_modal_privacy_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy-modal/privacy-modal.page */ "./src/app/privacy-modal/privacy-modal.page.ts");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _legalpage_legalpage_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./legalpage/legalpage.page */ "./src/app/legalpage/legalpage.page.ts");









var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, router, modalController, loginPanel, alertController, loadingController) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.modalController = modalController;
        this.loginPanel = loginPanel;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (localStorage.getItem("user_id")) {
                _this.isLoggedOut = false;
                _this.isLoggedin = true;
            }
            else {
                _this.isLoggedOut = true;
                _this.isLoggedin = false;
            }
        });
    };
    AppComponent.prototype.logOut = function () {
        this.presentAlertConfirm();
    };
    AppComponent.prototype.presentAlertConfirm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Are you sure want to <strong>Logout</strong>?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.presentLoading().then(function (a) {
                                            localStorage.clear();
                                            _this.isLoggedin = false;
                                            _this.isLoggedOut = true;
                                            _this.router.navigate(['/home']);
                                            _this.loadingController.dismiss();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
                            cssClass: 'custom-loader',
                            spinner: null
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.isLoggedin = localStorage.isLoggedin;
        this.isLoggedOut = this.isLoggedOut;
    };
    AppComponent.prototype.privacyPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _privacy_modal_privacy_modal_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyModalPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AppComponent.prototype.legalpage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _legalpage_legalpage_page__WEBPACK_IMPORTED_MODULE_8__["LegalpagePage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _modelfrom_modelfrom_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modelfrom/modelfrom.component */ "./src/app/modelfrom/modelfrom.component.ts");
/* harmony import */ var _modelto_modelto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modelto/modelto.component */ "./src/app/modelto/modelto.component.ts");
/* harmony import */ var _farecalculations_farecalculations_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./farecalculations/farecalculations.page */ "./src/app/farecalculations/farecalculations.page.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _modalpage_modalpage_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modalpage/modalpage.page */ "./src/app/modalpage/modalpage.page.ts");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _payment_modal_payment_modal_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./payment-modal/payment-modal.page */ "./src/app/payment-modal/payment-modal.page.ts");
/* harmony import */ var _privacy_modal_privacy_modal_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./privacy-modal/privacy-modal.page */ "./src/app/privacy-modal/privacy-modal.page.ts");
/* harmony import */ var _farecalculationsreturn_farecalculationsreturn_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./farecalculationsreturn/farecalculationsreturn.page */ "./src/app/farecalculationsreturn/farecalculationsreturn.page.ts");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _legalpage_legalpage_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./legalpage/legalpage.page */ "./src/app/legalpage/legalpage.page.ts");
/* harmony import */ var _feedback_modal_feedback_modal_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./feedback-modal/feedback-modal.page */ "./src/app/feedback-modal/feedback-modal.page.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _add_project_add_project_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./add-project/add-project.page */ "./src/app/add-project/add-project.page.ts");
/* harmony import */ var _add_passenger_add_passenger_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./add-passenger/add-passenger.page */ "./src/app/add-passenger/add-passenger.page.ts");
/* harmony import */ var _trip_dates_trip_dates_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./trip-dates/trip-dates.page */ "./src/app/trip-dates/trip-dates.page.ts");
/* harmony import */ var _stops_location_stops_location_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./stops-location/stops-location.page */ "./src/app/stops-location/stops-location.page.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _modelfrom_modelfrom_component__WEBPACK_IMPORTED_MODULE_13__["ModelfromComponent"],
                _modelto_modelto_component__WEBPACK_IMPORTED_MODULE_14__["ModeltoComponent"],
                _farecalculations_farecalculations_page__WEBPACK_IMPORTED_MODULE_15__["FarecalculationsPage"],
                _modalpage_modalpage_page__WEBPACK_IMPORTED_MODULE_17__["ModalpagePage"],
                _payment_modal_payment_modal_page__WEBPACK_IMPORTED_MODULE_19__["PaymentModalPage"],
                _privacy_modal_privacy_modal_page__WEBPACK_IMPORTED_MODULE_20__["PrivacyModalPage"],
                _farecalculationsreturn_farecalculationsreturn_page__WEBPACK_IMPORTED_MODULE_21__["FarecalculationsreturnPage"],
                _legalpage_legalpage_page__WEBPACK_IMPORTED_MODULE_23__["LegalpagePage"],
                _feedback_modal_feedback_modal_page__WEBPACK_IMPORTED_MODULE_24__["FeedbackModalPage"],
                _add_project_add_project_page__WEBPACK_IMPORTED_MODULE_26__["AddProjectPage"],
                _add_passenger_add_passenger_page__WEBPACK_IMPORTED_MODULE_27__["AddPassengerPage"],
                _trip_dates_trip_dates_page__WEBPACK_IMPORTED_MODULE_28__["TripDatesPage"],
                _stops_location_stops_location_page__WEBPACK_IMPORTED_MODULE_29__["StopsLocationPage"]
            ],
            entryComponents: [
                _modelfrom_modelfrom_component__WEBPACK_IMPORTED_MODULE_13__["ModelfromComponent"],
                _modelto_modelto_component__WEBPACK_IMPORTED_MODULE_14__["ModeltoComponent"],
                _farecalculations_farecalculations_page__WEBPACK_IMPORTED_MODULE_15__["FarecalculationsPage"],
                _modalpage_modalpage_page__WEBPACK_IMPORTED_MODULE_17__["ModalpagePage"],
                _payment_modal_payment_modal_page__WEBPACK_IMPORTED_MODULE_19__["PaymentModalPage"],
                _privacy_modal_privacy_modal_page__WEBPACK_IMPORTED_MODULE_20__["PrivacyModalPage"],
                _farecalculationsreturn_farecalculationsreturn_page__WEBPACK_IMPORTED_MODULE_21__["FarecalculationsreturnPage"],
                _legalpage_legalpage_page__WEBPACK_IMPORTED_MODULE_23__["LegalpagePage"],
                _feedback_modal_feedback_modal_page__WEBPACK_IMPORTED_MODULE_24__["FeedbackModalPage"],
                _add_project_add_project_page__WEBPACK_IMPORTED_MODULE_26__["AddProjectPage"],
                _add_passenger_add_passenger_page__WEBPACK_IMPORTED_MODULE_27__["AddPassengerPage"],
                _trip_dates_trip_dates_page__WEBPACK_IMPORTED_MODULE_28__["TripDatesPage"],
                _stops_location_stops_location_page__WEBPACK_IMPORTED_MODULE_29__["StopsLocationPage"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_11__["AutoCompleteModule"]
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
                _services_env_service__WEBPACK_IMPORTED_MODULE_12__["EnvService"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
                _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_16__["CallNumber"],
                _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_18__["GooglePlus"],
                _login_login_page__WEBPACK_IMPORTED_MODULE_22__["LoginPage"],
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_25__["HTTP"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/farecalculations/farecalculations.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/farecalculations/farecalculations.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-item {\n  border-bottom: 1px solid #ddd;\n}\nion-content ion-item ion-label, ion-content ion-item ion-text {\n  color: #000;\n  font-weight: 800;\n  font-size: 14.5px;\n}\nion-footer ion-text {\n  color: #fff;\n}\n.discount-note {\n  text-align: center;\n  color: #000;\n  font-weight: 600;\n  padding: 8px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL2ZhcmVjYWxjdWxhdGlvbnMvZmFyZWNhbGN1bGF0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZhcmVjYWxjdWxhdGlvbnMvZmFyZWNhbGN1bGF0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw2QkFBQTtBQ0FSO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NaO0FESUk7RUFDRSxXQUFBO0FDRE47QURJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2ZhcmVjYWxjdWxhdGlvbnMvZmFyZWNhbGN1bGF0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgaW9uLWxhYmVsICwgaW9uLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNC41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gICAgaW9uLXRleHQge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufVxyXG4uZGlzY291bnQtbm90ZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG59IiwiaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCwgaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLXRleHQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNC41cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRleHQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRpc2NvdW50LW5vdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/farecalculations/farecalculations.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/farecalculations/farecalculations.page.ts ***!
  \***********************************************************/
/*! exports provided: FarecalculationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarecalculationsPage", function() { return FarecalculationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var FarecalculationsPage = /** @class */ (function () {
    function FarecalculationsPage(modalController) {
        this.modalController = modalController;
        this.total = 0;
        var data = localStorage.getItem('car_detail');
        this.carData = JSON.parse(data);
        console.log(this.carData);
        if (localStorage.getItem('all_detail')) {
            this.details = localStorage.getItem('all_detail');
            this.data = JSON.parse(this.details);
            var congestion = this.data.CongestionSurchargeValue;
            this.congestionCharge = congestion;
            // let Rate=0;
            // if(congestion>0){
            // Rate = (Number(this.carData.clsVehicleFinalRates.Inclusive_all_tax)+ Number(congestion))
            // this.finalRate = Rate
            // console.log(this.finalRate)
            // }else{
            //   this.finalRate = this.carData.clsVehicleFinalRates.Total_Fare;
            // }
        }
        this.finalRate = this.carData.clsVehicleFinalRates.Total_Fare;
        this.serviceName = this.data.TypeOfServiceName;
        this.extraCharges = this.carData.clsVehicleExtraCharges;
        this.discount = this.carData.clsVehicleFinalRates.Discount_Span;
        this.discount_description = this.carData.clsVehicleFinalRates.Discount_Descripion;
        //----------------Airport Parking-------------//
        if (this.carData.clsVehicleFinalRates.Airport_Parking == 0) {
            this.airport_parking = null;
        }
        else if (this.carData.clsVehicleFinalRates.Airport_Parking == null) {
            this.airport_parking = null;
        }
        else {
            this.airport_parking = Number(this.carData.clsVehicleFinalRates.Airport_Parking).toFixed(2);
        }
        //----------------Airport Parking-------------//
        //--------------------Tolls---------------------//
        if (this.carData.clsVehicleFinalRates.Tolls == 0) {
            this.tolls = null;
        }
        else if (this.carData.clsVehicleFinalRates.Tolls == null) {
            this.tolls = null;
        }
        else {
            this.tolls = Number(this.carData.clsVehicleFinalRates.Tolls).toFixed(2);
        }
        //--------------------Tolls---------------------//
        if (this.carData.clsVehicleFinalRates.Sales_tax != null) {
            this.Sales_tax_Span = this.carData.clsVehicleFinalRates.Sales_tax;
            this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_Span;
        }
        // if(localStorage.getItem('salesTax')){
        //   const salesValue = localStorage.getItem('salesTax');
        //   this.sales = JSON.parse(salesValue);
        //   console.log(this.sales)
        //   this.Sales_tax_Span = Number(this.sales).toFixed(2);
        //   this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_value;
        // }
        // if(this.carData.clsVehicleFinalRates.Sales_tax != null){
        // }
        // var final_price = localStorage.getItem('Final_rate');
        // this.total_Price =final_price;
        // var check = this.extraCharges.findIndex(x=>x.ExtraChargeSpan_val);
        // if(check != -1)
        // {
        //   console.log(this.extraCharges[check].ExtraChargeSpan_val)
        //   // this.extraCharges[check].ExtraChargeSpan_val=(Number(this.finalRate)*Number(this.extraCharges[check].ExtraChargeValue)/100);
        //       console.log(this.extraCharges);
        // }
        // let saletaxValue=this.carData.clsVehicleFinalRates.Sales_tax_value;
        //  console.log("sales tax addition",Number(this.finalRate) + Number(this.extraCharges[check].ExtraChargeSpan_val));
        // this.Sales_tax_Span = (((Number(this.finalRate) + Number(this.extraCharges[check].ExtraChargeSpan_val)) * Number(saletaxValue))/100).toFixed(2);
        // console.log(Number(this.Sales_tax_Span).toFixed(2));
        // this.finalCalculation = (Number(this.finalRate) + Number(this.extraCharges[check].ExtraChargeSpan_val)+ Number(this.Sales_tax_Span)+ Number(this.congestionCharge)).toFixed(2);
        // console.log(this.finalCalculation)
        // var check = this.extraCharges.findIndex(x=>x.ExtraChargeSpan_val);
        // if(check != -1)
        // {
        //   console.log(this.extraCharges[check].ExtraChargeSpan_val)
        // }
        // console.log(check)
        this.oneWay();
        this.hourly();
        this.waitAndReturn();
        this.roundtrip();
    }
    FarecalculationsPage.prototype.ngOnInit = function () {
        this.vehicleStopRates = this.carData.clsLiVehicleStopRates;
    };
    FarecalculationsPage.prototype.oneWay = function () {
        var extracharge = 0;
        this.servicetypes = this.data.Event;
        if (this.serviceName == "One way") {
            console.log("One way", this.serviceName);
            var value1 = localStorage.getItem('fromLocation');
            this.locationstart = value1;
            var value2 = localStorage.getItem('toLocation');
            this.locationend = value2;
            this.rate = Number(this.carData.clsVehicleFinalRates.Rate).toFixed(2);
            this.discountSpan = this.carData.clsVehicleFinalRates.DiscountValWithoutSign;
            this.discountedValue = ((Number(this.discountSpan) * Number(this.rate)) / 100).toFixed(2);
            this.afterDiscount = (Number(this.rate) - Number(this.discountedValue)).toFixed(2);
            //for vehicle extra charges
            this.vehicleStopRates = this.carData.clsLiVehicleStopRates;
            var check = this.vehicleStopRates.findIndex(function (x) { return x.Hourly_Rate; });
            var stops = 0;
            if (check != -1) {
                for (var i = 0; i < this.vehicleStopRates.length; i++) {
                    console.log(this.vehicleStopRates[i].Hourly_Rate);
                    stops = stops + this.vehicleStopRates[i].Hourly_Rate;
                }
            }
            if (this.discountSpan == null || 0) {
                this.finalRate = this.carData.clsVehicleFinalRates.Rate + stops;
            }
            else {
                this.finalRate = this.afterDiscount + stops;
            }
            var check = this.extraCharges.findIndex(function (x) { return x.ExtraChargeSpan_val; });
            if (check != -1) {
                console.log(this.extraCharges[check].ExtraChargeSpan_val);
                this.extraCharges[check].ExtraChargeSpan_val = (Number(this.finalRate) * Number(this.extraCharges[check].ExtraChargeValue) / 100).toFixed(2);
                console.log(this.extraCharges);
                for (var i = 0; i < this.extraCharges.length; i++) {
                    console.log(this.extraCharges[i].ExtraChargeSpan_val);
                    extracharge = extracharge + Number(this.extraCharges[i].ExtraChargeSpan_val);
                    this.extraCharges[i].NewExtraChargeValue = this.extraCharges[i].ExtraChargeSpan_val;
                }
                console.log(this.extraCharges);
                localStorage.setItem("extracharges", JSON.stringify(this.extraCharges));
            }
            console.log(check);
            if (localStorage.getItem('amenityData')) {
                var amenities_data = localStorage.getItem('amenityData');
                this.amenities_fare = JSON.parse(amenities_data);
                console.log(this.amenities_fare);
                this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
            }
            this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
            if (localStorage.getItem('salesTax')) {
                var salesValue = localStorage.getItem('salesTax');
                this.sales = JSON.parse(salesValue);
                console.log(this.sales);
                if (this.sales == 0) {
                    this.Sales_tax_Span = null;
                }
                else if (this.sales == null) {
                    this.Sales_tax_Span = null;
                }
                else {
                    this.Sales_tax_Span = Number(this.sales).toFixed(2);
                }
                console.log(this.Sales_tax_Span);
                this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_Span;
            }
            this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
            console.log(this.saleValue);
            // if(this.Sales_tax_Span != this.saleValue){
            //   this.subtotal = (Number(extracharge) + Number(this.rate)).toFixed(2);
            //   console.log("subtotal is", this.Sales_tax_Span > this.saleValue)
            // }
            if (localStorage.getItem('final_rate')) {
                var FinalRate = localStorage.getItem('final_rate');
                this.finalCalculation = JSON.parse(FinalRate);
            }
            var finalValue = this.carData.clsVehicleFinalRates.Inclusive_all_tax;
            if (this.finalCalculation != finalValue) {
                this.subtotal = (Number(extracharge) + Number(this.finalRate)).toFixed(2);
            }
        }
    };
    FarecalculationsPage.prototype.hourly = function () {
        var total = 0;
        var extracharge = 0;
        this.servicetypes = this.data.Event;
        if (this.serviceName == "Hourly") {
            console.log(this.serviceName);
            this.Hourly_discount_min_hours = this.carData.clsVehicleFinalRates.Hourly_discount_min_hours;
            if (localStorage.getItem('numberofHours')) {
                var newHourly = localStorage.getItem('numberofHours');
                this.minHours = newHourly;
                console.log(this.minHours);
            }
            else {
                this.minHours = this.carData.clsVehicleFinalRates.Hourly_min_hours;
                console.log(this.minHours);
            }
            this.hourlyRate = Number(this.carData.clsVehicleFinalRates.Hourly_Rate).toFixed(2);
            this.hours = this.carData.clsVehicleFinalRates.minHorly;
            this.servicetypes = this.data.Event;
            console.log(this.servicetypes);
            this.discountedValue = ((Number(this.carData.clsVehicleFinalRates.DiscountValWithoutSign) * Number(this.hourlyRate)) / 100).toFixed(2);
            this.afterDiscount = (Number(this.hourlyRate) - Number(this.discountedValue)).toFixed(2);
            if (this.carData.clsVehicleFinalRates.DiscountValWithoutSign != 0 && this.minHours >= this.Hourly_discount_min_hours) {
                this.finalRate = Number((this.minHours * this.afterDiscount)).toFixed(2);
                this.hourlyCalculate = true;
            }
            else if (this.minHours < this.Hourly_discount_min_hours) {
                this.finalRate = Number((this.minHours * this.hourlyRate)).toFixed(2);
                this.hourlyCalculate = false;
            }
            var check = this.extraCharges.findIndex(function (x) { return x.ExtraChargeSpan_val; });
            if (check != -1) {
                console.log(this.extraCharges[check].ExtraChargeSpan_val);
                this.extraCharges[check].ExtraChargeSpan_val = (Number(this.finalRate) * Number(this.extraCharges[check].ExtraChargeValue) / 100).toFixed(2);
                console.log(this.extraCharges);
                for (var i = 0; i < this.extraCharges.length; i++) {
                    console.log(this.extraCharges[i].ExtraChargeSpan_val);
                    extracharge = extracharge + Number(this.extraCharges[i].ExtraChargeSpan_val);
                }
            }
            if (localStorage.getItem('amenityData')) {
                var amenities_data = localStorage.getItem('amenityData');
                this.amenities_fare = JSON.parse(amenities_data);
                console.log(this.amenities_fare);
                // console.log(this.amenities_fare.clsVehicleFinalRates.NewInclusivealltax)
                this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
                var check = this.amenities_fare.findIndex(function (x) { return x.selectAmenityAmt; });
                if (check != -1) {
                    console.log(this.amenities_fare[check].selectAmenityAmt);
                }
                for (var i = 0; i < this.amenities_fare.length; i++) {
                    console.log(this.amenities_fare[i].selectAmenityAmt);
                    total = total + Number(this.amenities_fare[i].selectAmenityAmt);
                }
            }
            var saletaxValue = this.carData.clsVehicleFinalRates.Sales_tax_value;
            if (localStorage.getItem('salesTax')) {
                var salesValue = localStorage.getItem('salesTax');
                this.sales = JSON.parse(salesValue);
                console.log(this.sales);
                if (this.sales == 0) {
                    this.Sales_tax_Span = null;
                }
                else if (this.sales == null) {
                    this.Sales_tax_Span = null;
                }
                else {
                    // this.Sales_tax_Span = Number(this.sales).toFixed(2);
                    this.Sales_tax_Span = (((Number(this.finalRate) + Number(extracharge) + Number(total)) * Number(saletaxValue)) / 100).toFixed(2);
                }
                console.log(this.Sales_tax_Span);
                // this.Sales_tax_Span = Number(this.sales).toFixed(2);
            }
            // else if(extracharge != 0){
            // this.Sales_tax_Span = (((Number(this.finalRate) + Number(extracharge)+ Number(total)) * Number(saletaxValue))/100).toFixed(2);
            // }
            this.finalCalculation = (Number(this.finalRate) + Number(extracharge) + Number(total) + Number(this.Sales_tax_Span) + Number(this.congestionCharge)).toFixed(2);
            localStorage.setItem("finalValue", this.finalCalculation);
            //  if(localStorage.getItem('final_rate')){
            //   const FinalRate= localStorage.getItem('final_rate');
            //      this.finalCalculation = JSON.parse(FinalRate);
            //  } 
            // if(localStorage.getItem('final_rate')){
            //   const FinalRate= localStorage.getItem('final_rate');
            //    this.finalCalculation = JSON.parse(FinalRate);
            //    }  
        }
    };
    FarecalculationsPage.prototype.waitAndReturn = function () {
        this.servicetypes = this.data.Event;
        console.log(this.serviceName);
        if (this.serviceName == "Wait and Return") {
            var extracharge = 0;
            this.rate = Number(this.carData.clsVehicleFinalRates.Rate).toFixed(2);
            this.waitingTime = Number(this.carData.clsVehicleFinalRates.WaitingTimeCost).toFixed(2);
            console.log(this.waitingTime);
            var check = this.extraCharges.findIndex(function (x) { return x.ExtraChargeSpan_val; });
            if (check != -1) {
                console.log(this.extraCharges[check].ExtraChargeSpan_val);
                this.extraCharges[check].ExtraChargeSpan_val = ((Number(this.rate) + Number(this.waitingTime)) * Number(this.extraCharges[check].ExtraChargeValue) / 100).toFixed(2);
                console.log(this.extraCharges);
                for (var i = 0; i < this.extraCharges.length; i++) {
                    console.log(this.extraCharges[i].ExtraChargeSpan_val);
                    extracharge = extracharge + Number(this.extraCharges[i].ExtraChargeSpan_val);
                }
                this.finalRate = (Number(this.rate) + Number(this.waitingTime) + Number(extracharge)).toFixed(2);
                // for(var i = 0; i < this.extraCharges.length; i++){
                //   console.log(this.extraCharges[i].ExtraChargeSpan_val)
                //     extracharge=extracharge+Number(this.extraCharges[i].ExtraChargeSpan_val);
                //     this.extraCharges[i].NewExtraChargeValue = this.extraCharges[i].ExtraChargeSpan_val;
                //  }
                //  console.log(this.extraCharges)
                //  localStorage.setItem("extracharges", JSON.stringify(this.extraCharges));
            }
            var saletaxValue = this.carData.clsVehicleFinalRates.Sales_tax_value;
            if (localStorage.getItem('salesTax')) {
                var salesValue = localStorage.getItem('salesTax');
                this.sales = JSON.parse(salesValue);
                // if(this.sales == 0){
                //     this.Sales_tax_Span = null;
                //         }else if(this.sales == null){
                //           this.Sales_tax_Span = null;
                //         }else{
                this.Sales_tax_Span = Number(this.sales).toFixed(2);
                // }
            }
            if (localStorage.getItem('amenityData')) {
                var amenities_data = localStorage.getItem('amenityData');
                this.amenities_fare = JSON.parse(amenities_data);
                console.log(this.amenities_fare);
                // console.log(this.amenities_fare.clsVehicleFinalRates.NewInclusivealltax)
                this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
                // console.log(this.amenityFare)
                // this.total_Price= this.amenities_fare.clsVehicleFinalRates.NewInclusivealltax;
                // console.log(this.total_Price)
            }
            if (localStorage.getItem('final_rate')) {
                var FinalRate = localStorage.getItem('final_rate');
                this.finalCalculation = JSON.parse(FinalRate);
            }
        }
    };
    FarecalculationsPage.prototype.roundtrip = function () {
        var extracharge = 0;
        this.servicetypes = this.data.Event;
        if (this.serviceName == "Round Trip") {
            console.log("Round Trip", this.serviceName);
            //for going
            this.rate = Number(this.carData.clsVehicleFinalRates.Rate).toFixed(2);
            this.discountedValue = ((Number(this.carData.clsVehicleFinalRates.DiscountValWithoutSign) * Number(this.rate)) / 100).toFixed(2);
            this.afterDiscount = (Number(this.rate) - Number(this.discountedValue)).toFixed(2);
            if (this.discountedValue == null || 0) {
                this.finalRate = this.carData.clsVehicleFinalRates.Rate;
            }
            else {
                this.finalRate = this.afterDiscount;
            }
            //for vehicle extra charges
            var check = this.extraCharges.findIndex(function (x) { return x.ExtraChargeSpan_val; });
            if (check != -1) {
                console.log(this.extraCharges[check].ExtraChargeSpan_val);
                this.extraCharges[check].ExtraChargeSpan_val = (Number(this.finalRate) * Number(this.extraCharges[check].ExtraChargeValue) / 100).toFixed(2);
                console.log(this.extraCharges);
                for (var i = 0; i < this.extraCharges.length; i++) {
                    console.log(this.extraCharges[i].ExtraChargeSpan_val);
                    extracharge = extracharge + Number(this.extraCharges[i].ExtraChargeSpan_val);
                    this.extraCharges[i].NewExtraChargeValue = this.extraCharges[i].ExtraChargeSpan_val;
                }
                console.log(this.extraCharges);
                localStorage.setItem("extracharges", JSON.stringify(this.extraCharges));
            }
            console.log(check);
            if (localStorage.getItem('amenityData')) {
                var amenities_data = localStorage.getItem('amenityData');
                this.amenities_fare = JSON.parse(amenities_data);
                console.log(this.amenities_fare);
                this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
            }
            this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
            if (localStorage.getItem('salesTax')) {
                var salesValue = localStorage.getItem('salesTax');
                this.sales = JSON.parse(salesValue);
                console.log(this.sales);
                if (this.sales == 0) {
                    this.Sales_tax_Span = null;
                }
                else if (this.sales == null) {
                    this.Sales_tax_Span = null;
                }
                else {
                    this.Sales_tax_Span = Number(this.sales).toFixed(2);
                }
                console.log(this.Sales_tax_Span);
                this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_Span;
            }
            this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
            console.log(this.saleValue);
            // if(this.Sales_tax_Span != this.saleValue){
            //   this.subtotal = (Number(extracharge) + Number(this.rate)).toFixed(2);
            //   console.log("subtotal is", this.Sales_tax_Span > this.saleValue)
            // }
            if (localStorage.getItem('final_rate')) {
                var FinalRate = localStorage.getItem('final_rate');
                this.finalCalculation = JSON.parse(FinalRate);
            }
            var finalValue = this.carData.clsVehicleFinalRates.Inclusive_all_tax;
            if (this.finalCalculation != finalValue) {
                this.subtotal = (Number(extracharge) + Number(this.finalRate)).toFixed(2);
            }
            //for return
            if (localStorage.getItem('car_detail2')) {
                var data2 = localStorage.getItem('car_detail2');
                this.carData2 = JSON.parse(data2);
                console.log(this.carData2);
                this.discount2 = this.carData2.clsVehicleFinalRates.Discount_Span;
                var extracharge2 = 0;
                this.rate2 = Number(this.carData2.clsVehicleFinalRates.Rate).toFixed(2);
                this.discountedValue2 = ((Number(this.carData2.clsVehicleFinalRates.DiscountValWithoutSign) * Number(this.rate2)) / 100).toFixed(2);
                this.afterDiscount2 = (Number(this.rate2) - Number(this.discountedValue)).toFixed(2);
                this.discount_descriptionReturn = this.carData2.clsVehicleFinalRates.Discount_Descripion;
                if (this.discountedValue == null || 0) {
                    this.finalRate = this.carData.clsVehicleFinalRates.Rate;
                }
                else {
                    this.finalRate = this.afterDiscount2;
                }
                //for vehicle extra charges
                this.finalRate = this.carData2.clsVehicleFinalRates.Rate;
                this.extraCharges2 = this.carData2.clsVehicleExtraCharges;
                var check = this.extraCharges2.findIndex(function (x) { return x.ExtraChargeSpan_val; });
                if (check != -1) {
                    console.log(this.extraCharges2[check].ExtraChargeSpan_val);
                    this.extraCharges2[check].ExtraChargeSpan_val = (Number(this.finalRate) * Number(this.extraCharges2[check].ExtraChargeValue) / 100).toFixed(2);
                    console.log(this.extraCharges2);
                    for (var i = 0; i < this.extraCharges2.length; i++) {
                        console.log(this.extraCharges2[i].ExtraChargeSpan_val);
                        extracharge2 = extracharge2 + Number(this.extraCharges2[i].ExtraChargeSpan_val);
                        this.extraCharges2[i].NewExtraChargeValue = this.extraCharges2[i].ExtraChargeSpan_val;
                    }
                    console.log(this.extraCharges2);
                    localStorage.setItem("extracharges2", JSON.stringify(this.extraCharges2));
                }
                console.log(check);
                if (localStorage.getItem('amenityData2')) {
                    var amenities_data = localStorage.getItem('amenityData2');
                    this.amenities_fare2 = JSON.parse(amenities_data);
                    console.log(this.amenities_fare2);
                    this.amenityFare2 = this.amenities_fare2.clsVehicleAmenityDetails;
                }
                this.saleValue2 = Number(this.carData2.clsVehicleFinalRates.Sales_tax);
                if (localStorage.getItem('salesTax2')) {
                    var salesValue2 = localStorage.getItem('salesTax2');
                    this.sales2 = JSON.parse(salesValue2);
                    console.log(this.sales2);
                    if (this.sales2 == 0) {
                        this.Sales_tax_Span2 = null;
                    }
                    else if (this.sales2 == null) {
                        this.Sales_tax_Span2 = null;
                    }
                    else {
                        this.Sales_tax_Span2 = Number(this.sales2).toFixed(2);
                    }
                    console.log(this.Sales_tax_Span2);
                    this.Sales_tax_value2 = this.carData2.clsVehicleFinalRates.Sales_tax_Span;
                }
                this.saleValue2 = Number(this.carData2.clsVehicleFinalRates.Sales_tax);
                console.log(this.saleValue2);
                // if(this.Sales_tax_Span != this.saleValue){
                //   this.subtotal = (Number(extracharge) + Number(this.rate)).toFixed(2);
                //   console.log("subtotal is", this.Sales_tax_Span > this.saleValue)
                // }
                if (localStorage.getItem('final_rate2')) {
                    var FinalRate2 = localStorage.getItem('final_rate2');
                    this.finalCalculation2 = JSON.parse(FinalRate2);
                    console.log(this.finalCalculation);
                    console.log(this.finalCalculation2);
                    this.final_Price = (Number(this.finalCalculation) + Number(this.finalCalculation2)).toFixed(2);
                }
                var finalValue2 = this.carData2.clsVehicleFinalRates.Inclusive_all_tax;
                if (this.finalCalculation2 != finalValue2) {
                    this.subtotal2 = (Number(extracharge2) + Number(this.rate2)).toFixed(2);
                }
            }
        }
    };
    FarecalculationsPage.prototype.getRates = function (value) {
        this.hourlyValue = value.detail.value.Text;
        console.log(value.detail.value.Text);
        localStorage.setItem("numberofHours", value.detail.value.Text);
        if (this.discountedValue != 0 && this.hourlyValue >= this.Hourly_discount_min_hours) {
            this.finalRate = Number((value.detail.value.Text * this.afterDiscount)).toFixed(2);
            this.hourlyCalculate = true;
        }
        else if (this.hourlyValue < this.Hourly_discount_min_hours) {
            this.finalRate = Number((value.detail.value.Text * this.hourlyRate)).toFixed(2);
            this.hourlyCalculate = false;
        }
        else {
            this.finalRate = Number((value.detail.value.Text * this.hourlyRate)).toFixed(2);
        }
        localStorage.setItem("subtotal", this.finalRate);
        var check = this.extraCharges.findIndex(function (x) { return x.ExtraChargeSpan_val; });
        if (check != -1) {
            console.log(this.extraCharges[check].ExtraChargeSpan_val);
            this.extraCharges[check].ExtraChargeSpan_val = (Number(this.finalRate) * Number(this.extraCharges[check].ExtraChargeValue) / 100).toFixed(2);
            console.log(this.extraCharges);
        }
        if (localStorage.getItem('amenityData')) {
            var amenities_data = localStorage.getItem('amenityData');
            this.amenities_fare = JSON.parse(amenities_data);
            console.log(this.amenities_fare);
            // console.log(this.amenities_fare.clsVehicleFinalRates.NewInclusivealltax)
            this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
            var check = this.amenities_fare.findIndex(function (x) { return x.selectAmenityAmt; });
            if (check != -1) {
                console.log(this.amenities_fare[check].selectAmenityAmt);
            }
        }
        var total = 0;
        for (var i = 0; i < this.amenities_fare.length; i++) {
            console.log(this.amenities_fare[i].selectAmenityAmt);
            total = total + Number(this.amenities_fare[i].selectAmenityAmt);
        }
        console.log("amenity", total);
        var extracharge = 0;
        for (var i = 0; i < this.extraCharges.length; i++) {
            console.log(this.extraCharges[i].ExtraChargeSpan_val);
            extracharge = extracharge + Number(this.extraCharges[i].ExtraChargeSpan_val);
        }
        console.log("extracharges", extracharge);
        var saletaxValue = this.carData.clsVehicleFinalRates.Sales_tax_value;
        console.log("sales tax addition", Number(this.finalRate) + Number(extracharge));
        if (localStorage.getItem('salesTax')) {
            var salesValue = localStorage.getItem('salesTax');
            this.sales = JSON.parse(salesValue);
            // if(this.sales == 0){
            //     this.Sales_tax_Span = null;
            //         }else if(this.sales == null){
            //           this.Sales_tax_Span = null;
            //         }else{
            // this.Sales_tax_Span = Number(this.sales).toFixed(2);
            //   }
        }
        this.Sales_tax_Span = (((Number(this.finalRate) + Number(extracharge) + Number(total)) * Number(saletaxValue)) / 100).toFixed(2);
        console.log(Number(this.Sales_tax_Span).toFixed(2));
        localStorage.setItem("salesTax", this.Sales_tax_Span);
        this.finalCalculation = (Number(this.finalRate) + Number(extracharge) + Number(this.Sales_tax_Span) + Number(total) + Number(this.congestionCharge)).toFixed(2);
        localStorage.setItem(this.finalCalculation, "final_rate");
        console.log(this.finalCalculation);
    };
    FarecalculationsPage.prototype.dismissModal = function () {
        this.modalController.dismiss(this.finalCalculation);
    };
    FarecalculationsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    FarecalculationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farecalculations',
            template: __webpack_require__(/*! raw-loader!./farecalculations.page.html */ "./node_modules/raw-loader/index.js!./src/app/farecalculations/farecalculations.page.html"),
            styles: [__webpack_require__(/*! ./farecalculations.page.scss */ "./src/app/farecalculations/farecalculations.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], FarecalculationsPage);
    return FarecalculationsPage;
}());



/***/ }),

/***/ "./src/app/farecalculationsreturn/farecalculationsreturn.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/farecalculationsreturn/farecalculationsreturn.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-item {\n  border-bottom: 1px solid #ddd;\n}\nion-content ion-item ion-label, ion-content ion-item ion-text {\n  color: #000;\n  font-weight: 800;\n  font-size: 14.5px;\n}\nion-footer ion-text {\n  color: #fff;\n}\n.discount-rate {\n  text-align: center;\n  color: #000;\n  font-weight: 600;\n  padding: 8px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL2ZhcmVjYWxjdWxhdGlvbnNyZXR1cm4vZmFyZWNhbGN1bGF0aW9uc3JldHVybi5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZhcmVjYWxjdWxhdGlvbnNyZXR1cm4vZmFyZWNhbGN1bGF0aW9uc3JldHVybi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RJO0VBQ0ksNkJBQUE7QUNyRFI7QURzRFE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3BEWjtBRHlESTtFQUNFLFdBQUE7QUN0RE47QUR5REE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDdERKIiwiZmlsZSI6InNyYy9hcHAvZmFyZWNhbGN1bGF0aW9uc3JldHVybi9mYXJlY2FsY3VsYXRpb25zcmV0dXJuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1oZWFkZXIge1xyXG4vLyAgICAgaW9uLXRvb2xiYXIge1xyXG4vLyAgICAgICAgIGlvbi1idXR0b25zIHtcclxuLy8gICAgICAgICAgICAgaW9uLWljb24ge1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpb24tbGFiZWwge1xyXG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gaW9uLWNvbnRlbnQge1xyXG4vLyAgICAgaW9uLWxhYmVsIHtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpb24taXRlbSB7XHJcbi8vICAgICAgICAgaW9uLXRleHQge1xyXG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBpb24tZm9vdGVyIHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICAgICAgICBib3R0b206IDA7XHJcbi8vICAgICAgICAgaW9uLWxhYmVsIHtcclxuLy8gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gICAgICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlvbi10ZXh0IHtcclxuLy8gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAuZGlzY291bnQtbm90ZXtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGNvbG9yOiAjMDAwO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4vLyB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgaW9uLWxhYmVsICwgaW9uLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNC41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gICAgaW9uLXRleHQge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufVxyXG4uZGlzY291bnQtcmF0ZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG59IiwiaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCwgaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLXRleHQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNC41cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRleHQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRpc2NvdW50LXJhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/farecalculationsreturn/farecalculationsreturn.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/farecalculationsreturn/farecalculationsreturn.page.ts ***!
  \***********************************************************************/
/*! exports provided: FarecalculationsreturnPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarecalculationsreturnPage", function() { return FarecalculationsreturnPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var FarecalculationsreturnPage = /** @class */ (function () {
    function FarecalculationsreturnPage(modalController) {
        this.modalController = modalController;
    }
    FarecalculationsreturnPage.prototype.ngOnInit = function () {
        var data = localStorage.getItem('car_detail');
        this.carData = JSON.parse(data);
        console.log(this.carData);
        if (localStorage.getItem('all_detail')) {
            this.details = localStorage.getItem('all_detail');
            this.data = JSON.parse(this.details);
            var congestion = this.data.CongestionSurchargeValue;
            this.congestionCharge = congestion;
        }
        this.finalRate = this.carData.clsVehicleFinalRates.Total_Fare;
        this.serviceName = this.data.TypeOfServiceName;
        this.extraCharges = this.carData.clsVehicleExtraCharges;
        this.discount = this.carData.clsVehicleFinalRates.Discount_Span;
        if (this.carData.clsVehicleFinalRates.Sales_tax != null) {
            this.Sales_tax_Span = this.carData.clsVehicleFinalRates.Sales_tax;
            this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_Span;
        }
        this.roundtrip();
    };
    FarecalculationsreturnPage.prototype.roundtrip = function () {
        var extracharge = 0;
        this.servicetypes = this.data.Event;
        if (this.serviceName == "Round Trip") {
            console.log("Round Trip", this.serviceName);
            //for going
            //     this.rate = Number(this.carData.clsVehicleFinalRates.Rate).toFixed(2);
            //   this.discountedValue = ((Number(this.carData2.clsVehicleFinalRates.DiscountValWithoutSign) * Number(this.rate))/100).toFixed(2);
            // this.afterDiscount = (Number(this.rate2) - Number(this.discountedValue)).toFixed(2);
            //   if(this.discountedValue == null || 0){
            //     this.finalRate = this.carData.clsVehicleFinalRates.Rate;
            //   }else{
            //     this.finalRate = this.afterDiscount;
            //   }
            //     //for vehicle extra charges
            //         this.finalRate = this.carData.clsVehicleFinalRates.Rate;
            //     var check = this.extraCharges.findIndex(x=>x.ExtraChargeSpan_val);
            //   if(check != -1)
            //   {
            //     console.log(this.extraCharges[check].ExtraChargeSpan_val)
            //     this.extraCharges[check].ExtraChargeSpan_val=(Number(this.finalRate)*Number(this.extraCharges[check].ExtraChargeValue)/100).toFixed(2);
            //         console.log(this.extraCharges);
            //         for(var i = 0; i < this.extraCharges.length; i++){
            //           console.log(this.extraCharges[i].ExtraChargeSpan_val)
            //             extracharge=extracharge+Number(this.extraCharges[i].ExtraChargeSpan_val);
            //             this.extraCharges[i].NewExtraChargeValue = this.extraCharges[i].ExtraChargeSpan_val;
            //          }
            //          console.log(this.extraCharges)
            //          localStorage.setItem("extracharges", JSON.stringify(this.extraCharges));
            //   }
            //   console.log(check)
            //   if(localStorage.getItem('amenityData')){
            //     var amenities_data = localStorage.getItem('amenityData');
            //     this.amenities_fare = JSON.parse(amenities_data);
            //     console.log(this.amenities_fare)
            //     this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
            //   }
            //   this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
            //   if(localStorage.getItem('salesTax')){
            //     const salesValue = localStorage.getItem('salesTax');
            //     this.sales = JSON.parse(salesValue);
            //     console.log(this.sales)
            //     if(this.sales == 0){
            // this.Sales_tax_Span = null;
            //     }else if(this.sales == null){
            //       this.Sales_tax_Span = null;
            //     }else{
            //       this.Sales_tax_Span = Number(this.sales).toFixed(2);
            //     }
            //     console.log(this.Sales_tax_Span)
            //     this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_Span;
            //   }
            //   this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
            //   console.log(this.saleValue)
            //   // if(this.Sales_tax_Span != this.saleValue){
            //   //   this.subtotal = (Number(extracharge) + Number(this.rate)).toFixed(2);
            //   //   console.log("subtotal is", this.Sales_tax_Span > this.saleValue)
            //   // }
            //   if(localStorage.getItem('final_rate')){
            //     const FinalRate= localStorage.getItem('final_rate');
            //      this.finalCalculation = JSON.parse(FinalRate);
            //      }
            //      let finalValue = this.carData.clsVehicleFinalRates.Inclusive_all_tax;
            //      if(this.finalCalculation != finalValue){
            //       this.subtotal = (Number(extracharge) + Number(this.rate)).toFixed(2);
            //      }
            //for return
            if (localStorage.getItem('car_detail2')) {
                var data2 = localStorage.getItem('car_detail2');
                this.carData2 = JSON.parse(data2);
                console.log(this.carData2);
                var extracharge2 = 0;
                this.rate2 = Number(this.carData2.clsVehicleFinalRates.Rate).toFixed(2);
                this.discountedValue = ((Number(this.carData2.clsVehicleFinalRates.DiscountValWithoutSign) * Number(this.rate2)) / 100).toFixed(2);
                this.afterDiscount = (Number(this.rate2) - Number(this.discountedValue)).toFixed(2);
                this.discount_description = this.carData2.clsVehicleFinalRates.Discount_Descripion;
                //----------------Airport Parking-------------//
                if (this.carData2.clsVehicleFinalRates.Airport_Parking == 0) {
                    this.airport_parking = null;
                }
                else if (this.carData2.clsVehicleFinalRates.Airport_Parking == null) {
                    this.airport_parking = null;
                }
                else {
                    this.airport_parking = Number(this.carData2.clsVehicleFinalRates.Airport_Parking).toFixed(2);
                }
                //----------------Airport Parking-------------//
                //--------------------Tolls---------------------//
                if (this.carData2.clsVehicleFinalRates.Tolls == 0) {
                    this.tolls = null;
                }
                else if (this.carData2.clsVehicleFinalRates.Tolls == null) {
                    this.tolls = null;
                }
                else {
                    this.tolls = Number(this.carData2.clsVehicleFinalRates.Tolls).toFixed(2);
                }
                //--------------------Tolls---------------------//
                //for vehicle extra charges
                if (this.discountedValue == null || 0) {
                    this.finalRate = this.carData2.clsVehicleFinalRates.Rate;
                }
                else {
                    this.finalRate = this.afterDiscount;
                }
                this.extraCharges2 = this.carData2.clsVehicleExtraCharges;
                var check = this.extraCharges2.findIndex(function (x) { return x.ExtraChargeSpan_val; });
                if (check != -1) {
                    console.log(this.extraCharges2[check].ExtraChargeSpan_val);
                    this.extraCharges2[check].ExtraChargeSpan_val = (Number(this.finalRate) * Number(this.extraCharges2[check].ExtraChargeValue) / 100).toFixed(2);
                    console.log(this.extraCharges2);
                    for (var i = 0; i < this.extraCharges2.length; i++) {
                        console.log(this.extraCharges2[i].ExtraChargeSpan_val);
                        extracharge2 = extracharge2 + Number(this.extraCharges2[i].ExtraChargeSpan_val);
                        this.extraCharges2[i].NewExtraChargeValue = this.extraCharges2[i].ExtraChargeSpan_val;
                    }
                    console.log(this.extraCharges2);
                    localStorage.setItem("extracharges2", JSON.stringify(this.extraCharges2));
                }
                console.log(check);
                if (localStorage.getItem('amenityData2')) {
                    var amenities_data = localStorage.getItem('amenityData2');
                    this.amenities_fare2 = JSON.parse(amenities_data);
                    console.log(this.amenities_fare2);
                    this.amenityFare2 = this.amenities_fare2.clsVehicleAmenityDetails;
                }
                this.saleValue2 = Number(this.carData2.clsVehicleFinalRates.Sales_tax);
                if (localStorage.getItem('salesTax2')) {
                    var salesValue2 = localStorage.getItem('salesTax2');
                    this.sales2 = JSON.parse(salesValue2);
                    console.log(this.sales2);
                    if (this.sales2 == 0) {
                        this.Sales_tax_Span2 = null;
                    }
                    else if (this.sales2 == null) {
                        this.Sales_tax_Span2 = null;
                    }
                    else {
                        this.Sales_tax_Span2 = Number(this.sales2).toFixed(2);
                    }
                    console.log(this.Sales_tax_Span2);
                    this.Sales_tax_value2 = this.carData2.clsVehicleFinalRates.Sales_tax_Span;
                }
                this.saleValue2 = Number(this.carData2.clsVehicleFinalRates.Sales_tax);
                console.log(this.saleValue2);
                // if(this.Sales_tax_Span != this.saleValue){
                //   this.subtotal = (Number(extracharge) + Number(this.rate)).toFixed(2);
                //   console.log("subtotal is", this.Sales_tax_Span > this.saleValue)
                // }
                if (localStorage.getItem('final_rate2')) {
                    var FinalRate2 = localStorage.getItem('final_rate2');
                    this.finalCalculation2 = JSON.parse(FinalRate2);
                }
                var finalValue2 = this.carData2.clsVehicleFinalRates.Inclusive_all_tax;
                if (this.finalCalculation2 != finalValue2) {
                    this.subtotal2 = (Number(extracharge2) + Number(this.finalRate)).toFixed(2);
                }
            }
        }
    };
    FarecalculationsreturnPage.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    FarecalculationsreturnPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    FarecalculationsreturnPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farecalculationsreturn',
            template: __webpack_require__(/*! raw-loader!./farecalculationsreturn.page.html */ "./node_modules/raw-loader/index.js!./src/app/farecalculationsreturn/farecalculationsreturn.page.html"),
            styles: [__webpack_require__(/*! ./farecalculationsreturn.page.scss */ "./src/app/farecalculationsreturn/farecalculationsreturn.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], FarecalculationsreturnPage);
    return FarecalculationsreturnPage;
}());



/***/ }),

/***/ "./src/app/feedback-modal/feedback-modal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/feedback-modal/feedback-modal.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  background: #fff;\n}\nform .input-border {\n  border-bottom: 1px solid #ddd;\n  width: 100%;\n  padding: 5px 15px;\n}\nform .input-border ion-input, form .input-border ion-select, form .input-border ion-textarea {\n  font-size: 13px;\n  color: #000;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  font-weight: 900;\n}\nform .input-border ion-label {\n  position: relative;\n  top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL2ZlZWRiYWNrLW1vZGFsL2ZlZWRiYWNrLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmVlZGJhY2stbW9kYWwvZmVlZGJhY2stbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREFJO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNFUjtBRERRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNHWjtBRERRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9mZWVkYmFjay1tb2RhbC9mZWVkYmFjay1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAuaW5wdXQtYm9yZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBpb24taW5wdXQgLCBpb24tc2VsZWN0ICwgaW9uLXRleHRhcmVhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJmb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbmZvcm0gLmlucHV0LWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5mb3JtIC5pbnB1dC1ib3JkZXIgaW9uLWlucHV0LCBmb3JtIC5pbnB1dC1ib3JkZXIgaW9uLXNlbGVjdCwgZm9ybSAuaW5wdXQtYm9yZGVyIGlvbi10ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5mb3JtIC5pbnB1dC1ib3JkZXIgaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/feedback-modal/feedback-modal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/feedback-modal/feedback-modal.page.ts ***!
  \*******************************************************/
/*! exports provided: FeedbackModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModalPage", function() { return FeedbackModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var FeedbackModalPage = /** @class */ (function () {
    function FeedbackModalPage(envservice, loadingController, modalController, _FB) {
        this.envservice = envservice;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this._FB = _FB;
    }
    FeedbackModalPage.prototype.ngOnInit = function () {
        this.form = this._FB.group({
            Name: [''],
            email: [''],
            phone: [''],
            Message: ['']
        });
    };
    FeedbackModalPage.prototype.feedback = function () {
        var _this = this;
        this.presentLoading().then(function (a) {
            _this.name = _this.form.get('Name').value;
            _this.email = _this.form.get('email').value;
            _this.cellphone = _this.form.get('email').value;
            _this.message = _this.form.get('email').value;
            _this.envservice.feedbackPost(_this.name, _this.email, _this.cellphone, _this.message).subscribe(function (data) {
                console.log(data);
                if (data.Message == 'success') {
                    alert('Thank You, We will get back to you soon !!');
                    _this.dismissModal();
                }
                _this.loadingController.dismiss();
            });
        });
    };
    FeedbackModalPage.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
                            cssClass: 'custom-loader',
                            spinner: null
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FeedbackModalPage.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    FeedbackModalPage.ctorParameters = function () { return [
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    FeedbackModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback-modal',
            template: __webpack_require__(/*! raw-loader!./feedback-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/feedback-modal/feedback-modal.page.html"),
            styles: [__webpack_require__(/*! ./feedback-modal.page.scss */ "./src/app/feedback-modal/feedback-modal.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], FeedbackModalPage);
    return FeedbackModalPage;
}());



/***/ }),

/***/ "./src/app/legalpage/legalpage.page.scss":
/*!***********************************************!*\
  !*** ./src/app/legalpage/legalpage.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlZ2FscGFnZS9sZWdhbHBhZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/legalpage/legalpage.page.ts":
/*!*********************************************!*\
  !*** ./src/app/legalpage/legalpage.page.ts ***!
  \*********************************************/
/*! exports provided: LegalpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalpagePage", function() { return LegalpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");




var LegalpagePage = /** @class */ (function () {
    function LegalpagePage(loadingController, envservice, modalController) {
        this.loadingController = loadingController;
        this.envservice = envservice;
        this.modalController = modalController;
    }
    LegalpagePage.prototype.ngOnInit = function () {
        var _this = this;
        this.presentLoading().then(function (a) {
            _this.envservice.legacyStatement()
                .subscribe(function (data) {
                _this.legacyStatement = data.Data;
                _this.loadingController.dismiss();
            });
        });
    };
    LegalpagePage.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
                            cssClass: 'custom-loader',
                            spinner: null
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LegalpagePage.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    LegalpagePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    LegalpagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-legalpage',
            template: __webpack_require__(/*! raw-loader!./legalpage.page.html */ "./node_modules/raw-loader/index.js!./src/app/legalpage/legalpage.page.html"),
            styles: [__webpack_require__(/*! ./legalpage.page.scss */ "./src/app/legalpage/legalpage.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], LegalpagePage);
    return LegalpagePage;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-buttons ion-back-button {\n  color: #fff;\n  opacity: 0.7;\n}\n\nion-card ion-card-header {\n  margin: 0;\n  padding: 0 !important;\n}\n\nion-card-content ion-item ion-label {\n  font-size: 14px;\n  color: #000;\n  margin: 0;\n  padding-bottom: 5px;\n}\n\nion-card-content .forget-password {\n  float: right;\n  padding-top: 0.65rem;\n}\n\nion-content.b1 {\n  position: absolute;\n  --background: linear-gradient(to bottom, #00000080, #04040424, #000000a6, #000),\n  url('login-background.png') no-repeat center center / cover;\n}\n\n.img-nyclogo {\n  width: 100px;\n  margin: auto;\n  margin-top: 10px;\n}\n\n.card-css {\n  border-radius: 0px;\n  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.12);\n}\n\n.card-css ion-card-content {\n  padding-bottom: 5px;\n}\n\n.card-css ion-card-content .input-border {\n  border-bottom: 1px solid #ddd;\n}\n\n.card-css ion-card-content .input-border ion-input {\n  font-size: 13px;\n  color: #000;\n  letter-spacing: 0.5px;\n  position: inherit;\n  --padding-bottom: 5px;\n  --padding-top: 10px;\n  --padding-start: 0px;\n  font-weight: 700;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.card-css ion-card-content .input-border ion-label {\n  position: relative;\n  top: 0.5rem;\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.5px;\n}\n\n.card-css ion-card-content .login-button {\n  --background: var(--ion-color-primary);\n  --background: #fdc600;\n  color: black;\n  text-transform: capitalize;\n  width: 100%;\n  margin-top: 13px;\n  --border-radius: 0px;\n  font-size: 20px;\n  height: 40px;\n  font-weight: 600;\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.5px;\n}\n\n.card-css ion-card-content .or-border {\n  border-bottom: 1px solid #ddd;\n  margin: 0;\n  padding: 0;\n}\n\n.card-css ion-card-content .or-border span {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #ddd;\n  font-size: 13px;\n  padding: 4px 3px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n  top: 1rem;\n  outline: none;\n}\n\n.card-css ion-card-content .google-button {\n  --background: #ffffff;\n  color: #888;\n  font-weight: 700;\n  margin-top: 1.4rem;\n  box-shadow: 0px 2px 5px #00000026;\n  width: 100%;\n  font-size: 19px;\n}\n\n.card-css ion-card-content .google-button ion-img {\n  width: 35px;\n  margin-right: 10px;\n}\n\n.card-css ion-card-content .error {\n  font-size: 12px;\n  color: red;\n  padding: 5px 0px;\n}\n\nh5 {\n  font-family: \"Nunito\", sans-serif;\n  margin-top: 0;\n  font-size: 15px;\n  color: #fff;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\nh4 {\n  color: #fdc600;\n  text-align: center;\n  font-family: \"Nunito\", sans-serif;\n  margin: 0;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n  outline: none;\n}\n\n.passwordIcon {\n  font-size: 20px;\n  margin-right: 15px;\n  margin-top: -1.5rem;\n  display: block;\n  position: absolute;\n  right: 0;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGUjs7QURNSTtFQUNJLFNBQUE7RUFDQSxxQkFBQTtBQ0hSOztBRFFRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNMWjs7QURRSTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQ05SOztBRFVBO0VBQ0ksa0JBQUE7RUFDQTs2REFBQTtBQ05KOztBRFNLO0VBQ0csWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ05SOztBRFFLO0VBRUcsa0JBQUE7RUFDQSx5Q0FBQTtBQ05SOztBRE9RO0VBQ0ksbUJBQUE7QUNMWjs7QURNWTtFQUNJLDZCQUFBO0FDSmhCOztBREtnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNIcEI7O0FES2dCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQ0hwQjs7QURNWTtFQUNJLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FDSmhCOztBRE1ZO0VBQ0ksNkJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0poQjs7QURLaUI7RUFDRyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ0hwQjs7QURNYTtFQUNPLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSnBCOztBREtvQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0h4Qjs7QURNYTtFQUNHLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNKaEI7O0FEUUs7RUFDRyxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNMUjs7QURPSztFQUNHLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNKUjs7QURNSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0hSOztBREtBO0VBQ0ksaUNBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW9uLWJ1dHRvbnMge1xyXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAuNztcclxuICAgIH1cclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JnZXQtcGFzc3dvcmQge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC42NXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQuYjEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwODAsICMwNDA0MDQyNCwgIzAwMDAwMGE2LCAjMDAwKSwgXHJcbiAgICB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi1iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuICAgICAuaW1nLW55Y2xvZ297XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgIH1cclxuICAgICAuY2FyZC1jc3N7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogNS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDFweCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIC5pbnB1dC1ib3JkZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyxzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9naW4tYnV0dG9uICB7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZkYzYwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9yLWJvcmRlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLmdvb2dsZS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAjMDAwMDAwMjY7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgaDUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyxzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7ICAgIFxyXG4gICAgIH1cclxuICAgICBoNCB7XHJcbiAgICAgICAgY29sb3I6ICNmZGM2MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyxzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgfVxyXG4gICAgLnBhc3N3b3JkSWNvbntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5oZWFkZXItbWQ6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG59IiwiaW9uLWJ1dHRvbnMgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuaW9uLWNhcmQtY29udGVudCAuZm9yZ2V0LXBhc3N3b3JkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMC42NXJlbTtcbn1cblxuaW9uLWNvbnRlbnQuYjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMDAwMDgwLCAjMDQwNDA0MjQsICMwMDAwMDBhNiwgIzAwMCksXG4gIHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbi1iYWNrZ3JvdW5kLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG4uaW1nLW55Y2xvZ28ge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNhcmQtY3NzIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwIDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jYXJkLWNzcyBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5jYXJkLWNzcyBpb24tY2FyZC1jb250ZW50IC5pbnB1dC1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbi5jYXJkLWNzcyBpb24tY2FyZC1jb250ZW50IC5pbnB1dC1ib3JkZXIgaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uY2FyZC1jc3MgaW9uLWNhcmQtY29udGVudCAuaW5wdXQtYm9yZGVyIGlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4uY2FyZC1jc3MgaW9uLWNhcmQtY29udGVudCAubG9naW4tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZDogI2ZkYzYwMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbi5jYXJkLWNzcyBpb24tY2FyZC1jb250ZW50IC5vci1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcmQtY3NzIGlvbi1jYXJkLWNvbnRlbnQgLm9yLWJvcmRlciBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogNHB4IDNweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jYXJkLWNzcyBpb24tY2FyZC1jb250ZW50IC5nb29nbGUtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogMS40cmVtO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAjMDAwMDAwMjY7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE5cHg7XG59XG4uY2FyZC1jc3MgaW9uLWNhcmQtY29udGVudCAuZ29vZ2xlLWJ1dHRvbiBpb24taW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jYXJkLWNzcyBpb24tY2FyZC1jb250ZW50IC5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuaDUge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbmg0IHtcbiAgY29sb3I6ICNmZGM2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wYXNzd29yZEljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTEuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(_FB, envservice, loadingController, router, alertController, route, googlePlus) {
        this._FB = _FB;
        this.envservice = envservice;
        this.loadingController = loadingController;
        this.router = router;
        this.alertController = alertController;
        this.route = route;
        this.googlePlus = googlePlus;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.formData = { "UserName": "", "Password": "" };
        this.isLoggedin = false;
        this.isLoggedOut = true;
        this.form = this._FB.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.isLoggedin = false;
        localStorage.isLoggedOut = true;
        console.log(localStorage);
        this.route.queryParams.subscribe(function (params) {
            if (params && params.special) {
                _this.email = JSON.parse(params.special);
            }
        });
        this.form.controls['username'].setValue(this.email);
    };
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        this.presentLoading().then(function (a) {
            _this.formData.UserName = _this.form.get('username').value;
            _this.formData.Password = _this.form.get('password').value;
            // this.envservice.login(this.formData).then((data: any) =>{
            _this.envservice.login(_this.formData).then(function (data) {
                _this.response = JSON.parse(data.data);
                console.log("data", data.status);
                console.log(_this.response.Data.Data); // data received by server
                console.log(data.headers);
                localStorage.setItem("user_id", _this.response.Data.Data.Userid);
                localStorage.setItem("username", _this.response.Data.Data.Email);
                localStorage.setItem("loginData", JSON.stringify(_this.response.Data.Data));
                if (_this.response.Message == 'success') {
                    _this.isLoggedin = true;
                    _this.isLoggedOut = false;
                    localStorage.isLoggedin = true;
                    localStorage.isLoggedOut = false;
                    localStorage.NavigateMytrips = true;
                    _this.router.navigate(['/mytrips']);
                    // this.router.navigate(['/mytrips']);
                    _this.loadingController.dismiss();
                }
            })
                .catch(function (error) {
                _this.errorResponse = JSON.parse(error.error);
                console.log("error", error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                console.log("error", error);
                alert(_this.errorResponse.Message);
                _this.loadingController.dismiss();
            });
            // console.log(data);
            // localStorage.setItem("user_id", data.Data.Data.Userid);
            // localStorage.setItem("username", data.Data.Data.Email);
            // localStorage.setItem("loginData", JSON.stringify(data.Data.Data));
            // if(data.Message == 'success'){
            //   this.isLoggedin=true;
            //   this.isLoggedOut=false;
            //   localStorage.isLoggedin=true;
            //   localStorage.isLoggedOut=false;
            //   localStorage.NavigateMytrips=true;
            //   this.router.navigate(['/mytrips']);
            //   // this.router.navigate(['/mytrips']);
            //   this.loadingController.dismiss();  
            // }
            // },(error: HttpErrorResponse)=>{
            //   alert(error.error.Message)
            //   this.loadingController.dismiss(); 
            // });
        });
    };
    LoginPage.prototype.hideShowPassword = function () {
        console.log('123');
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
                            cssClass: 'custom-loader',
                            spinner: null
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.presentAlertPrompt = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Forgot Password',
                            inputs: [
                                {
                                    name: 'name1',
                                    type: 'text',
                                    placeholder: 'Enter your email'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (value) {
                                        _this.presentLoading().then(function (a) {
                                            _this.envservice.sendotp(value.name1).subscribe(function (data) {
                                                console.log(data);
                                                if (data.Message == 'success') {
                                                    var navigationExtras = {
                                                        queryParams: {
                                                            special: JSON.stringify(value.name1)
                                                        }
                                                    };
                                                    _this.router.navigate(['/otp-confirmation'], navigationExtras);
                                                    var passwordValue = '1';
                                                    localStorage.setItem("forgot_password", passwordValue);
                                                    _this.loadingController.dismiss();
                                                }
                                                //  this.router.navigate(['/otp-confirmation'])
                                                //   this.loadingController.dismiss();
                                                // }
                                            }, function (error) {
                                                if (error.error.Message == "Email id not match") {
                                                    _this.presentAlert();
                                                }
                                                _this.loadingController.dismiss();
                                            });
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            // header: 'Alert',
                            message: 'Email id not match',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.googleLogin = function () {
        this.googlePlus.login({})
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return console.error(err); });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"] }
    ]; };
    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/modalpage/modalpage.page.scss":
/*!***********************************************!*\
  !*** ./src/app/modalpage/modalpage.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".legal-information {\n  font-family: \"Nunito\", sans-serif !important;\n}\n.legal-information p {\n  font-size: 15px !important;\n  color: #333;\n}\nion-title {\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL21vZGFscGFnZS9tb2RhbHBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHBhZ2UvbW9kYWxwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0FDQ0o7QURBUTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtBQ0VaO0FEQ0E7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZGFscGFnZS9tb2RhbHBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZ2FsLWluZm9ybWF0aW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxufSIsIi5sZWdhbC1pbmZvcm1hdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG4ubGVnYWwtaW5mb3JtYXRpb24gcCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMzMztcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modalpage/modalpage.page.ts":
/*!*********************************************!*\
  !*** ./src/app/modalpage/modalpage.page.ts ***!
  \*********************************************/
/*! exports provided: ModalpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalpagePage", function() { return ModalpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ModalpagePage = /** @class */ (function () {
    function ModalpagePage(envservice, modalController, loadingController) {
        this.envservice = envservice;
        this.modalController = modalController;
        this.loadingController = loadingController;
    }
    ModalpagePage.prototype.ngOnInit = function () {
        var _this = this;
        this.presentLoading().then(function (a) {
            _this.envservice.getTermsConditions()
                .then(function (data) {
                console.log(data.data);
                _this.response = JSON.parse(data.data);
                console.log("data", data.status);
                console.log(_this.response); // data received by server
                console.log(data.headers);
                _this.agreement = _this.response.Data;
                _this.loadingController.dismiss();
            }).catch(function (error) {
                _this.errorResponse = JSON.parse(error.error);
                console.log("error", error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                console.log("error", error);
                alert(_this.errorResponse.Message);
                _this.loadingController.dismiss();
            });
            ;
        });
    };
    ModalpagePage.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
                            cssClass: 'custom-loader',
                            spinner: null
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ModalpagePage.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    ModalpagePage.ctorParameters = function () { return [
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
    ModalpagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modalpage',
            template: __webpack_require__(/*! raw-loader!./modalpage.page.html */ "./node_modules/raw-loader/index.js!./src/app/modalpage/modalpage.page.html"),
            styles: [__webpack_require__(/*! ./modalpage.page.scss */ "./src/app/modalpage/modalpage.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], ModalpagePage);
    return ModalpagePage;
}());



/***/ }),

/***/ "./src/app/modelfrom/modelfrom.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modelfrom/modelfrom.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header div .full-width {\n  width: 100%;\n  height: 60px;\n  border-bottom: 1px solid #ddd;\n}\nion-header div .full-width ion-input {\n  position: absolute;\n  bottom: 6px;\n  left: 6px;\n  font-size: 14px;\n}\nion-header div .full-width ion-input img {\n  width: 70px;\n  height: 70px;\n  position: absolute;\n  right: 70px;\n  z-index: 999;\n}\nion-header div .full-width ion-buttons {\n  margin-top: 1rem;\n  margin-right: 0;\n  margin-left: -15px;\n}\nion-header div .full-width ion-buttons ion-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL21vZGVsZnJvbS9tb2RlbGZyb20uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZGVsZnJvbS9tb2RlbGZyb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDREg7QURFRztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQUo7QURDSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NMO0FERUc7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDQyxlQUFBO0FDQ0wiLCJmaWxlIjoic3JjL2FwcC9tb2RlbGZyb20vbW9kZWxmcm9tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcblx0ZGl2IHtcclxuXHRcdC5mdWxsLXdpZHRoIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogNjBweDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcblx0XHRcdGlvbi1pbnB1dCB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGJvdHRvbTogNnB4O1xyXG5cdFx0XHRcdGxlZnQ6IDZweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA3MHB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA3MHB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0cmlnaHQ6IDcwcHg7XHJcblx0XHRcdFx0XHR6LWluZGV4OiA5OTk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1idXR0b25zIHtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAxcmVtO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogLTE1cHg7XHJcblx0XHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImlvbi1oZWFkZXIgZGl2IC5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5pb24taGVhZGVyIGRpdiAuZnVsbC13aWR0aCBpb24taW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNnB4O1xuICBsZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1oZWFkZXIgZGl2IC5mdWxsLXdpZHRoIGlvbi1pbnB1dCBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA3MHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5pb24taGVhZGVyIGRpdiAuZnVsbC13aWR0aCBpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuaW9uLWhlYWRlciBkaXYgLmZ1bGwtd2lkdGggaW9uLWJ1dHRvbnMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modelfrom/modelfrom.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modelfrom/modelfrom.component.ts ***!
  \**************************************************/
/*! exports provided: ModelfromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelfromComponent", function() { return ModelfromComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");




var ModelfromComponent = /** @class */ (function () {
    function ModelfromComponent(modalController, envservice) {
        this.modalController = modalController;
        this.envservice = envservice;
        this.isItemAvailable = false;
        this.showLoaderImg = false;
        this.formData0 = { "from": "", "to": "", "row": "" };
        this.showLoaderImg = false;
    }
    ModelfromComponent.prototype.ngOnInit = function () {
    };
    ModelfromComponent.prototype.ClearInput = function (row) {
        this.formData0.row = '';
    };
    ModelfromComponent.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    ModelfromComponent.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val.length > 0) {
            this.showLoaderImg = true;
            if (val && val.trim() != '') {
                this.envservice.suggetionlist(val)
                    .subscribe(function (user) {
                    _this.isItemAvailable = true;
                    _this.response = user;
                    _this.items = _this.response.Data;
                    console.log(_this.items);
                    _this.showLoaderImg = false;
                    _this.items = _this.items.filter(function (item) {
                        return (item.Location_Name + item.Location_Address);
                        // .toLowerCase().indexOf(val.toLowerCase()) > -1 
                    });
                }, function (error) {
                    if (error.error.Message) {
                        _this.showLoaderImg = false;
                    }
                });
            }
        }
        else {
            this.items = [];
        }
    };
    ModelfromComponent.prototype.catch = function (error) {
        console.log(error);
    };
    ModelfromComponent.prototype.putvalue = function (row) {
        this.modalController.dismiss(row);
    };
    ModelfromComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] }
    ]; };
    ModelfromComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modelfrom',
            template: __webpack_require__(/*! raw-loader!./modelfrom.component.html */ "./node_modules/raw-loader/index.js!./src/app/modelfrom/modelfrom.component.html"),
            styles: [__webpack_require__(/*! ./modelfrom.component.scss */ "./src/app/modelfrom/modelfrom.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])
    ], ModelfromComponent);
    return ModelfromComponent;
}());



/***/ }),

/***/ "./src/app/modelto/modelto.component.scss":
/*!************************************************!*\
  !*** ./src/app/modelto/modelto.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header div .full-width {\n  width: 100%;\n  height: 60px;\n  border-bottom: 1px solid #ddd;\n}\nion-header div .full-width ion-input {\n  position: absolute;\n  bottom: 6px;\n  left: 6px;\n  font-size: 14px;\n}\nion-header div .full-width ion-input img {\n  width: 70px;\n  height: 70px;\n  position: absolute;\n  right: 70px;\n  z-index: 999;\n}\nion-header div .full-width ion-buttons {\n  margin-top: 1rem;\n  margin-right: 0;\n  margin-left: -15px;\n}\nion-header div .full-width ion-buttons ion-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL21vZGVsdG8vbW9kZWx0by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kZWx0by9tb2RlbHRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0RIO0FERUc7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0FKO0FEQ0k7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDTDtBREVHO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBQ0MsZUFBQTtBQ0NMIiwiZmlsZSI6InNyYy9hcHAvbW9kZWx0by9tb2RlbHRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcblx0ZGl2IHtcclxuXHRcdC5mdWxsLXdpZHRoIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogNjBweDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcblx0XHRcdGlvbi1pbnB1dCB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGJvdHRvbTogNnB4O1xyXG5cdFx0XHRcdGxlZnQ6IDZweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA3MHB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA3MHB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0cmlnaHQ6IDcwcHg7XHJcblx0XHRcdFx0XHR6LWluZGV4OiA5OTk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1idXR0b25zIHtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAxcmVtO1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogLTE1cHg7XHJcblx0XHRcdFx0aW9uLWljb24ge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImlvbi1oZWFkZXIgZGl2IC5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5pb24taGVhZGVyIGRpdiAuZnVsbC13aWR0aCBpb24taW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNnB4O1xuICBsZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1oZWFkZXIgZGl2IC5mdWxsLXdpZHRoIGlvbi1pbnB1dCBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA3MHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5pb24taGVhZGVyIGRpdiAuZnVsbC13aWR0aCBpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuaW9uLWhlYWRlciBkaXYgLmZ1bGwtd2lkdGggaW9uLWJ1dHRvbnMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modelto/modelto.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modelto/modelto.component.ts ***!
  \**********************************************/
/*! exports provided: ModeltoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeltoComponent", function() { return ModeltoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ModeltoComponent = /** @class */ (function () {
    function ModeltoComponent(modalController, envservice) {
        this.modalController = modalController;
        this.envservice = envservice;
        this.isItemAvailable1 = false;
        this.showLoaderImg = false;
        this.formData0 = { "from": "", "to": "", "row": "" };
        this.showLoaderImg = false;
    }
    ModeltoComponent_1 = ModeltoComponent;
    ModeltoComponent.prototype.ngOnInit = function () { };
    ModeltoComponent.prototype.ClearInput = function (row) {
        this.formData0.row = '';
    };
    ModeltoComponent.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    ModeltoComponent.prototype.getItem = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val.length > 0) {
            this.showLoaderImg = true;
            if (val && val.trim() != '') {
                this.envservice.suggetionlist(val)
                    .subscribe(function (user) {
                    _this.isItemAvailable1 = true;
                    _this.response = user;
                    _this.rows = _this.response.Data;
                    console.log(_this.rows);
                    _this.showLoaderImg = false;
                    _this.rows = _this.rows.filter(function (item) {
                        return (item.Location_Name + item.Location_Address);
                    });
                }, function (error) {
                    if (error.error.Message) {
                        _this.showLoaderImg = false;
                    }
                });
            }
        }
        else {
            this.rows = [];
        }
    };
    ModeltoComponent.prototype.catch = function (error) {
        console.log(error);
    };
    ModeltoComponent.prototype.putvalue = function (row) {
        this.modalController.dismiss(row);
    };
    ModeltoComponent.prototype.presentmodal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModeltoComponent_1
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            var val = data.data;
                            _this.formData0.to = val.Location_Name;
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var ModeltoComponent_1;
    ModeltoComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"] }
    ]; };
    ModeltoComponent = ModeltoComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modelto',
            template: __webpack_require__(/*! raw-loader!./modelto.component.html */ "./node_modules/raw-loader/index.js!./src/app/modelto/modelto.component.html"),
            styles: [__webpack_require__(/*! ./modelto.component.scss */ "./src/app/modelto/modelto.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"]])
    ], ModeltoComponent);
    return ModeltoComponent;
}());



/***/ }),

/***/ "./src/app/payment-modal/payment-modal.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/payment-modal/payment-modal.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".payment-css1 {\n  margin-left: -19px;\n  color: black;\n  font-weight: bold;\n}\n\n.payment-css2 {\n  float: right;\n  font-size: 26px;\n  color: red;\n  margin-left: 10px;\n}\n\n.payment-css3 {\n  float: right;\n  font-size: 26px;\n  color: grey;\n}\n\n.mendatary {\n  color: red;\n  font-size: 15px;\n}\n\n.footer1 {\n  text-align: center;\n  background: black;\n}\n\n.btncolor {\n  --background: #fdc600;\n  color: black;\n  text-transform: capitalize;\n  width: 90%;\n}\n\nion-title {\n  font-family: \"Nunito\", sans-serif;\n}\n\nform {\n  background: #fff;\n}\n\nform .input-border {\n  border-bottom: 1px solid #ddd;\n  width: 100%;\n  padding: 5px 15px;\n}\n\nform .input-border ion-input {\n  font-size: 13px;\n  color: #000;\n  letter-spacing: 0.5px;\n  --padding-bottom: 4px;\n  --padding-top: 10px;\n  --padding-start: 0;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 900;\n}\n\nform .input-border ion-select {\n  --padding-start: 0;\n  color: #000;\n  font-size: 14px;\n  --placeholder-colo: #000;\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.3px;\n}\n\nform .input-border ion-label {\n  position: relative;\n  top: 0.5rem;\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL3BheW1lbnQtbW9kYWwvcGF5bWVudC1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BheW1lbnQtbW9kYWwvcGF5bWVudC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUVJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0ksaUNBQUE7QUNHSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FERkk7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0lSOztBREhRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNLWjs7QURIUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUNLWjs7QURIUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUNLWiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtbW9kYWwvcGF5bWVudC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5bWVudC1jc3Mxe1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wYXltZW50LWNzczJ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wYXltZW50LWNzczN7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLm1lbmRhdGFyeSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5mb290ZXIxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuLmJ0bmNvbG9yICB7XHJcbiAgXHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZGM2MDA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyxzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAuaW5wdXQtYm9yZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvOiAjMDAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5wYXltZW50LWNzczEge1xuICBtYXJnaW4tbGVmdDogLTE5cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYXltZW50LWNzczIge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wYXltZW50LWNzczMge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5tZW5kYXRhcnkge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5mb290ZXIxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmJ0bmNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRjNjAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB3aWR0aDogOTAlO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5mb3JtIC5pbnB1dC1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuZm9ybSAuaW5wdXQtYm9yZGVyIGlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuZm9ybSAuaW5wdXQtYm9yZGVyIGlvbi1zZWxlY3Qge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC0tcGxhY2Vob2xkZXItY29sbzogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cbmZvcm0gLmlucHV0LWJvcmRlciBpb24tbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMC41cmVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/payment-modal/payment-modal.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/payment-modal/payment-modal.page.ts ***!
  \*****************************************************/
/*! exports provided: PaymentModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModalPage", function() { return PaymentModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PaymentModalPage = /** @class */ (function () {
    function PaymentModalPage(modalController, envservice, _FB, loadingController) {
        this.modalController = modalController;
        this.envservice = envservice;
        this._FB = _FB;
        this.loadingController = loadingController;
        this.formData = { "CCInfoId": "", "FKUserId": "", "CardNumber": "", "CVVNumber": "", "CCCardType": "", "CCExpiryMonth": "",
            "CCExpiryYear": "", "CardHolderName": "", "BillingCity": "", "BillingAddress1": "", "BillingAddress2": "",
            "FromScreen": "", "BillingState": "", "BillingZip": "", "BillingCountry": "", "IsDeleted": "", "username": "", "userid": "" };
    }
    PaymentModalPage.prototype.ngOnInit = function () {
        this.form = this._FB.group({
            CardType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            CardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            CCExpiryMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            CCExpiryYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            CVVNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            CardHolderName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            BillingAddress1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            BillingAddress2: [''],
            BillingCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            BillingState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            BillingZip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            BillingCountry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.cardInfo();
        this.getCardYear();
        var value = localStorage.getItem("username");
        this.username = value;
        var id = localStorage.getItem("user_id");
        this.userId = id;
    };
    PaymentModalPage.prototype.cardInfo = function () {
        if (localStorage.getItem('addPayments')) {
            var paymentDetails = localStorage.getItem('addPayments');
            this.paymentInfo = JSON.parse(paymentDetails);
            console.log(this.paymentInfo);
            this.cardType = this.paymentInfo.CCCardType;
            this.CardNumber = this.paymentInfo.CardNumber;
            this.CCExpiryMonth = this.paymentInfo.CCExpiryMonth;
            this.CCExpiryYear = this.paymentInfo.CCExpiryYear;
            this.CVVNumber = this.paymentInfo.CVVNumber;
            this.CardHolderName = this.paymentInfo.CardHolderName;
            this.BillingAddress1 = this.paymentInfo.BillingAddress1;
            this.BillingAddress2 = this.paymentInfo.BillingAddress2;
            this.BillingCity = this.paymentInfo.BillingCity;
            this.BillingState = this.paymentInfo.BillingState;
            this.BillingZip = this.paymentInfo.BillingZip;
            this.BillingCountry = this.paymentInfo.BillingCountry;
            this.form.controls['CardType'].setValue(this.cardType);
            this.form.controls['CardNumber'].setValue(this.CardNumber);
            this.form.controls['CCExpiryMonth'].setValue(this.CCExpiryMonth);
            this.form.controls['CCExpiryYear'].setValue(this.CCExpiryYear);
            this.form.controls['CVVNumber'].setValue(this.CVVNumber);
            this.form.controls['CardHolderName'].setValue(this.CardHolderName);
            this.form.controls['BillingAddress1'].setValue(this.BillingAddress1);
            this.form.controls['BillingAddress2'].setValue(this.BillingAddress2);
            this.form.controls['BillingCity'].setValue(this.BillingCity);
            this.form.controls['BillingState'].setValue(this.BillingState);
            this.form.controls['BillingZip'].setValue(this.BillingZip);
            this.form.controls['BillingCountry'].setValue(this.BillingCountry);
        }
    };
    PaymentModalPage.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    PaymentModalPage.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
                            cssClass: 'custom-loader',
                            spinner: null
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentModalPage.prototype.addCardDetails = function () {
        var _this = this;
        this.presentLoading().then(function (a) {
            if (localStorage.getItem('addPayments')) {
                var paymentDetails = localStorage.getItem('addPayments');
                _this.paymentInfo = JSON.parse(paymentDetails);
                _this.formData.CCInfoId = _this.paymentInfo.CCInfoId;
            }
            else {
                _this.formData.CCInfoId = "0";
            }
            _this.formData.FromScreen = "MyPayment";
            _this.formData.username = _this.username;
            _this.formData.userid = _this.userId;
            _this.formData.CCCardType = _this.form.get('CardType').value;
            _this.formData.CardNumber = _this.form.get('CardNumber').value;
            _this.formData.CCExpiryMonth = _this.form.get('CCExpiryMonth').value;
            _this.formData.CCExpiryYear = _this.form.get('CCExpiryYear').value;
            _this.formData.CVVNumber = _this.form.get('CVVNumber').value;
            _this.formData.CardHolderName = _this.form.get('CardHolderName').value;
            _this.formData.BillingAddress1 = _this.form.get('BillingAddress1').value;
            _this.formData.BillingAddress2 = _this.form.get('BillingAddress2').value;
            _this.formData.BillingCity = _this.form.get('BillingCity').value;
            _this.formData.BillingState = _this.form.get('BillingState').value;
            _this.formData.BillingZip = _this.form.get('BillingZip').value;
            _this.formData.BillingCountry = _this.form.get('BillingCountry').value;
            _this.envservice.savePaymentInfo(_this.formData.CCInfoId, _this.formData.CardNumber, _this.formData.CCCardType, _this.formData.CVVNumber, _this.formData.CCExpiryMonth, _this.formData.CCExpiryYear, _this.formData.CardHolderName, _this.formData.BillingAddress1, _this.formData.BillingAddress2, _this.formData.BillingCity, _this.formData.BillingState, _this.formData.BillingZip, _this.formData.BillingCountry, _this.formData.FromScreen, _this.formData.username, _this.formData.userid).subscribe(function (data) {
                if (data.Message == 'success') {
                    alert(data.Data);
                    _this.dismissModal();
                }
            });
            _this.loadingController.dismiss();
        });
    };
    PaymentModalPage.prototype.getCardYear = function () {
        var _this = this;
        this.envservice.getCardyear(this.form.get('CCExpiryMonth').value)
            .subscribe(function (data) {
            console.log(data);
            _this.cardYear = data.Data;
        });
    };
    PaymentModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    PaymentModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-modal',
            template: __webpack_require__(/*! raw-loader!./payment-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/payment-modal/payment-modal.page.html"),
            styles: [__webpack_require__(/*! ./payment-modal.page.scss */ "./src/app/payment-modal/payment-modal.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], PaymentModalPage);
    return PaymentModalPage;
}());



/***/ }),

/***/ "./src/app/privacy-modal/privacy-modal.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/privacy-modal/privacy-modal.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktbW9kYWwvcHJpdmFjeS1tb2RhbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/privacy-modal/privacy-modal.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/privacy-modal/privacy-modal.page.ts ***!
  \*****************************************************/
/*! exports provided: PrivacyModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyModalPage", function() { return PrivacyModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");




var PrivacyModalPage = /** @class */ (function () {
    function PrivacyModalPage(modalController, loadingController, envservice) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.envservice = envservice;
    }
    PrivacyModalPage.prototype.ngOnInit = function () {
        var _this = this;
        this.presentLoading().then(function (a) {
            _this.envservice.privacyStatement().subscribe(function (data) {
                console.log(data.Data);
                _this.privacyStatement = data.Data;
                _this.loadingController.dismiss();
            });
        });
    };
    PrivacyModalPage.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    PrivacyModalPage.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
                            cssClass: 'custom-loader',
                            spinner: null
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PrivacyModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] }
    ]; };
    PrivacyModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy-modal',
            template: __webpack_require__(/*! raw-loader!./privacy-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/privacy-modal/privacy-modal.page.html"),
            styles: [__webpack_require__(/*! ./privacy-modal.page.scss */ "./src/app/privacy-modal/privacy-modal.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])
    ], PrivacyModalPage);
    return PrivacyModalPage;
}());



/***/ }),

/***/ "./src/app/services/env.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/env.service.ts ***!
  \*****************************************/
/*! exports provided: EnvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvService", function() { return EnvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");





var EnvService = /** @class */ (function () {
    function EnvService(http, http1) {
        this.http = http;
        this.http1 = http1;
        this.API_URL = 'http://52.188.12.211:900';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        this.header = this.http1.setHeader('*', String("Access-Control-Allow-Origin"), String("*"));
    }
    EnvService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    EnvService.prototype.suggetionlist = function (value) {
        return this.http.post(this.API_URL + "/Api/Suggestion/SuggestionList?suggestionName=" + value, value);
    };
    EnvService.prototype.vehicleDetails = function (value) {
        return this.http.post(this.API_URL + "/Api/Reservation/Index", value);
        // return this.http.post(`${this.API_URL}/Api/Reservation/Index`, value,
        // this.httpOptions)
        //    .pipe(
        //      retry(2),
        //      catchError(this.handleError)
        //    )
        // return this.http1.post(`${this.API_URL}/Api/Reservation/Index`,{}, value)
    };
    EnvService.prototype.waitingTime = function (value) {
        return this.http.post(this.API_URL + "/Api/Reservation/GetWaitingTime", value);
    };
    EnvService.prototype.submitAllData = function (value) {
        return this.http1.post(this.API_URL + "/Api/Reservation/Index", value, this.http1.setDataSerializer("json"));
        // return this.http1.post(this.API_URL + "/Api/Reservation/Index",{value},this.httpOptions);
    };
    EnvService.prototype.amenityCalculation = function (value) {
        return this.http.post(this.API_URL + "/Api/Reservation/GetAmenityCalculation", value);
    };
    EnvService.prototype.forPayment = function (value) {
        return this.http.post(this.API_URL + "/Api/Reservation/Payment", value);
    };
    EnvService.prototype.airlineNames = function (value) {
        return this.http.post(this.API_URL + "/Api/Reservation/GetAirLineWithKeyWord?AirLineName=" + value, value);
    };
    EnvService.prototype.internationalAirport = function (value) {
        return this.http.post(this.API_URL + "/Api/Reservation/GetInternationalAirport?AirportName=" + value, value);
    };
    EnvService.prototype.reviewInformation = function (value) {
        return this.http.post(this.API_URL + "/Api/Reservation/ReviewConfirmation", value);
    };
    EnvService.prototype.getServiceList = function () {
        return this.http.get(this.API_URL + "/Api/Reservation/GetHourlyEvent");
    };
    EnvService.prototype.getHourlyType = function () {
        return this.http.get(this.API_URL + "/Api/Reservation/GetHourlyTime ");
    };
    EnvService.prototype.getWaitingTime = function () {
        return this.http.get(this.API_URL + "/Api/Reservation/GetWaitingTime ");
    };
    EnvService.prototype.getCardyear = function (value) {
        return this.http.get(this.API_URL + "/Api/Reservation/GetYearList?month=" + value, value);
    };
    EnvService.prototype.getTerminal = function (value) {
        return this.http.get(this.API_URL + "/Api/Reservation/GetTermianlList?AirportName=" + value, value);
    };
    EnvService.prototype.getConfirmation = function (value) {
        // return this.http.post(`${this.API_URL}/Api/Reservation/ConfirmationMessage_V2`,value);
        return this.http1.post(this.API_URL + "/Api/Reservation/ConfirmationMessage_V2", value, this.http1.setDataSerializer("json"));
    };
    EnvService.prototype.getReturnConfirmation = function (value) {
        return this.http.post(this.API_URL + "/Api/Reservation/ReturnConfirmationMessage_V2", value);
    };
    EnvService.prototype.login = function (value) {
        return this.http1.post(this.API_URL + "/Api/Account/Login", { UserName: value.UserName,
            Password: value.Password }, this.header);
        // return this.http.post(this.API_URL + "/Api/Account/Login", {UserName: value.UserName,
        // Password: value.Password}).pipe(
        //     map(user => {
        //       return user;
        //     })
        //   )       
        // return this.http.post(this.API_URL + "/Api/Account/Login", value).pipe(
        //     map(user => {
        //       return user;
        //     })
        //   )
    };
    EnvService.prototype.register = function (value) {
        return this.http.post(this.API_URL + "/Api/Account/RegisterNewuser", value);
    };
    EnvService.prototype.sendotp = function (value) {
        return this.http.post(this.API_URL + "/Api/Account/SendOTP?Email=" + value, value);
    };
    EnvService.prototype.confirmOtp = function (value1, value2) {
        return this.http.post(this.API_URL + "/Api/Account/OTPConfirmation?emailId=" + value1 + "&otp=" + value2, value1, value2);
    };
    EnvService.prototype.getTermsConditions = function () {
        return this.http1.post(this.API_URL + "/Api/Reservation/GetTermsCondition", this.header, this.http1.setDataSerializer("json"));
    };
    EnvService.prototype.getNewPassword = function (value1, value2) {
        return this.http.post(this.API_URL + "/Api/Account/ResetPassword?Password=" + value1 + "&EmailId=" + value2, value1, value2);
    };
    EnvService.prototype.getTripList = function (value) {
        return this.http1.post(this.API_URL + "/Api/MyTrip/MYTripList", value, this.http1.setDataSerializer("json"));
    };
    EnvService.prototype.getPaymentList = function (value) {
        return this.http1.post(this.API_URL + "/Api/MYPayment/GetPayment", value, this.http1.setDataSerializer("json"));
    };
    EnvService.prototype.legacyStatement = function () {
        return this.http.get(this.API_URL + "/Api/Doc/Legal", {});
    };
    EnvService.prototype.savePaymentInfo = function (value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16) {
        return this.http.post(this.API_URL + "/Api/MYPayment/SavePayment?CCInfoId=" + value1 + "&CardNumber=" + value2 + "\n        &CCCardType=" + value3 + "&CVVNumber=" + value4 + "&CCExpiryMonth=" + value5 + "&CCExpiryYear=" + value6 + "&CardHolderName=" + value7 + "\n        &BillingAddress1=" + value8 + "&BillingAddress2=" + value9 + "&BillingCity=" + value10 + "&BillingState=" + value11 + "\n        &BillingZip=" + value12 + "&BillingCountry=" + value13 + "&FromScreen=" + value14 + "&username=" + value15 + "&userid=" + value16, value1);
    };
    EnvService.prototype.privacyStatement = function () {
        return this.http.get(this.API_URL + "/Api/Doc/Privacy", {});
    };
    EnvService.prototype.updateProfile = function (value1, value2, value3, value4, value5) {
        return this.http.post(this.API_URL + "/api/Account/UPdateAccount?BFirstName=" + value1 + "&BLastName=" + value2 + "&bTeleNo=" + value3 + "&BEmailId=" + value4 + "&username=" + value5, value1);
    };
    EnvService.prototype.getProjectList = function (value) {
        return this.http1.post(this.API_URL + "/Api/MYProject/GetprojectList", value, this.http1.setDataSerializer("json"));
    };
    EnvService.prototype.getPassengerList = function (value) {
        return this.http1.post(this.API_URL + "/Api/MyPassenger/Getpassenger", value, this.http1.setDataSerializer("json"));
    };
    EnvService.prototype.feedbackPost = function (value1, value2, value3, value4) {
        return this.http.post(this.API_URL + "/Api/Account/SaveData?name=" + value1 + "&EmailID=" + value2 + "\n        &telephone=" + value3 + "&Message=" + value4, {});
    };
    EnvService.prototype.deletePayment = function (value1, value2, value3) {
        return this.http.post(this.API_URL + "/Api/MYPayment/DeletePayment?CCInfoId=" + value1 + "&Username=" + value2 + "&UserId=" + value3, value1);
    };
    EnvService.prototype.addProjects = function (value1, value2, value3, value4, value5, value6) {
        return this.http1.post(this.API_URL + "/Api/MYProject/SaveMaster?ProjectId=" + value1 + "&ProjectName=" + value2 + "&projectdescription=" + value3 + "&fk_user_ccinfoid=" + value4 + "&userid=" + value5 + "&username=" + value6, this.header, this.http1.setDataSerializer("json"));
    };
    EnvService.prototype.deleteProject = function (value1, value2, value3) {
        return this.http1.post(this.API_URL + "/Api/MYProject/DeleteProject?UserID=" + value1 + "&UserName=" + value2 + "&ProjectId=" + value3, this.header, this.http1.setDataSerializer("json"));
    };
    EnvService.prototype.addPassengers = function (value) {
        return this.http1.post(this.API_URL + "/Api/MyPassenger/SaveMasterpassenger", value, this.http1.setDataSerializer("json"));
    };
    EnvService.prototype.deletePassenger = function (value1, value2, value3) {
        return this.http1.post(this.API_URL + "/Api/MyPassenger/DeleteMaster?PkId=" + value1 + "&userid=" + value2 + "&username=" + value3, this.header, this.http1.setDataSerializer("json"));
    };
    EnvService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] }
    ]; };
    EnvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])
    ], EnvService);
    return EnvService;
}());



/***/ }),

/***/ "./src/app/stops-location/stops-location.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/stops-location/stops-location.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header div .full-width {\n  width: 100%;\n  height: 60px;\n  border-bottom: 1px solid #ddd;\n}\nion-header div .full-width ion-input {\n  position: absolute;\n  bottom: 6px;\n  left: 6px;\n  font-size: 14px;\n}\nion-header div .full-width ion-input img {\n  width: 70px;\n  height: 70px;\n  position: absolute;\n  right: 70px;\n  z-index: 999;\n}\nion-header div .full-width ion-buttons {\n  margin-top: 1rem;\n  margin-right: 0;\n  margin-left: -15px;\n}\nion-header div .full-width ion-buttons ion-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL3N0b3BzLWxvY2F0aW9uL3N0b3BzLWxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RvcHMtbG9jYXRpb24vc3RvcHMtbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0RIO0FERUc7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0FKO0FEQ0k7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDTDtBREVHO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBQ0MsZUFBQTtBQ0NMIiwiZmlsZSI6InNyYy9hcHAvc3RvcHMtbG9jYXRpb24vc3RvcHMtbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG5cdGRpdiB7XG5cdFx0LmZ1bGwtd2lkdGgge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcblx0XHRcdGlvbi1pbnB1dCB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0Ym90dG9tOiA2cHg7XG5cdFx0XHRcdGxlZnQ6IDZweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiA3MHB4O1xuXHRcdFx0XHRcdGhlaWdodDogNzBweDtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0cmlnaHQ6IDcwcHg7XG5cdFx0XHRcdFx0ei1pbmRleDogOTk5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpb24tYnV0dG9ucyB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDFyZW07XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xNXB4O1xuXHRcdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiaW9uLWhlYWRlciBkaXYgLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbmlvbi1oZWFkZXIgZGl2IC5mdWxsLXdpZHRoIGlvbi1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA2cHg7XG4gIGxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWhlYWRlciBkaXYgLmZ1bGwtd2lkdGggaW9uLWlucHV0IGltZyB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDcwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cbmlvbi1oZWFkZXIgZGl2IC5mdWxsLXdpZHRoIGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5pb24taGVhZGVyIGRpdiAuZnVsbC13aWR0aCBpb24tYnV0dG9ucyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stops-location/stops-location.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/stops-location/stops-location.page.ts ***!
  \*******************************************************/
/*! exports provided: StopsLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopsLocationPage", function() { return StopsLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");




var StopsLocationPage = /** @class */ (function () {
    function StopsLocationPage(modalController, envservice) {
        this.modalController = modalController;
        this.envservice = envservice;
        this.isItemAvailable = false;
        this.showLoaderImg = false;
        this.formData0 = { "from": "", "to": "", "row": "" };
        this.showLoaderImg = false;
    }
    StopsLocationPage.prototype.ngOnInit = function () {
    };
    StopsLocationPage.prototype.ClearInput = function (row) {
        this.formData0.row = '';
    };
    StopsLocationPage.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    StopsLocationPage.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val.length > 0) {
            this.showLoaderImg = true;
            if (val && val.trim() != '') {
                this.envservice.suggetionlist(val)
                    .subscribe(function (user) {
                    _this.isItemAvailable = true;
                    _this.response = user;
                    _this.items = _this.response.Data;
                    console.log(_this.items);
                    _this.showLoaderImg = false;
                    _this.items = _this.items.filter(function (item) {
                        return (item.Location_Name + item.Location_Address);
                        // .toLowerCase().indexOf(val.toLowerCase()) > -1 
                    });
                }, function (error) {
                    if (error.error.Message) {
                        _this.showLoaderImg = false;
                    }
                });
            }
        }
        else {
            this.items = [];
        }
    };
    StopsLocationPage.prototype.catch = function (error) {
        console.log(error);
    };
    StopsLocationPage.prototype.putvalue = function (row) {
        this.modalController.dismiss(row);
    };
    StopsLocationPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] }
    ]; };
    StopsLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stops-location',
            template: __webpack_require__(/*! raw-loader!./stops-location.page.html */ "./node_modules/raw-loader/index.js!./src/app/stops-location/stops-location.page.html"),
            styles: [__webpack_require__(/*! ./stops-location.page.scss */ "./src/app/stops-location/stops-location.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])
    ], StopsLocationPage);
    return StopsLocationPage;
}());



/***/ }),

/***/ "./src/app/trip-dates/trip-dates.page.scss":
/*!*************************************************!*\
  !*** ./src/app/trip-dates/trip-dates.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGF0ZXMvdHJpcC1kYXRlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/trip-dates/trip-dates.page.ts":
/*!***********************************************!*\
  !*** ./src/app/trip-dates/trip-dates.page.ts ***!
  \***********************************************/
/*! exports provided: TripDatesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDatesPage", function() { return TripDatesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TripDatesPage = /** @class */ (function () {
    function TripDatesPage(modalController) {
        this.modalController = modalController;
    }
    TripDatesPage.prototype.ngOnInit = function () {
    };
    TripDatesPage.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    TripDatesPage.prototype.confirmDates = function () {
        this.dismissModal();
    };
    TripDatesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    TripDatesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip-dates',
            template: __webpack_require__(/*! raw-loader!./trip-dates.page.html */ "./node_modules/raw-loader/index.js!./src/app/trip-dates/trip-dates.page.html"),
            styles: [__webpack_require__(/*! ./trip-dates.page.scss */ "./src/app/trip-dates/trip-dates.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], TripDatesPage);
    return TripDatesPage;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Desktop/nyc git/NycLimousine/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map