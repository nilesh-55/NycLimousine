(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicles-vehicles-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicles.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles/vehicles.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"vehicle-title\">\n      <b> {{locationstart}} </b>\n      <b> <small> to </small> {{locationend}}</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-toolbar class=\"home-page\">\n  <div class=\"calculator-card\">\n    <ion-item lines=\"none\" class=\"date-time-row\" style=\"border-bottom: none !important;\">\n      <ion-col size=\"6\" class=\"padding-0\">\n        <ion-item lines=\"none\" class=\"no__padding\">\n          <ion-label position=\"stacked\" class=\"label label--pick-date\"> PICKUP DATE </ion-label>\n          <div>\n            <span class=\"date\">{{selectDate}}</span>\n            <span class=\"month\">{{selectMonthYear}}</span>\n            <span class=\"month-year\">{{selectDay}}</span>\n          </div>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\" class=\"padding-0\">\n        <ion-item class=\"no__padding\" lines=\"none\">\n          <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'A'\"> FLIGHT ARRIVAL TIME </ion-label>\n          <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'B'\"> PICKUP TIME </ion-label>\n          <div>\n            <span class=\"date\"> {{FullTime}}</span>\n            <span class=\"month-year\"> {{HalfTime}}</span>\n          </div>\n        </ion-item>\n      </ion-col>\n  </ion-item> \n  </div>\n</ion-toolbar>\n<ion-content>\n\n  <div bg *ngIf=\"roundtrip == 'Round Trip'\">\n    <ion-label>Step 1 of 2 - Origin Trip</ion-label>\n  </div>\n\n  <ion-row>\n    <ng-container *ngFor=\"let item of vehicleDetails\">\n      <ion-col size=\"6\" class=\"padding-0\" *ngIf=\"item.clsVehicleFinalRates !== null\" (click)=\"viewDetail(item)\">\n        <ion-card class=\"vehicles-card\" routerDirection=\"forward\">\n          <ion-card-header>\n            <div class=\"car--image\" [style.backgroundImage]=\"'url(' + item.Vehicle_Image + ')'\">\n              <span *ngIf=\"item.clsVehicleFinalRates.DiscountVal != null\">-{{item.clsVehicleFinalRates.DiscountVal}}</span>\n            </div>\n            <div class=\"car--name\">\n              <ion-label><b>{{item.Vehicle_Name}}</b></ion-label>\n            </div>\n            <ion-grid class=\"icon-section\">\n              <ion-row>\n                <ion-col size=\"12\" class=\"icons-row\">\n                  <ion-img src={{item.Luggage_Image}}></ion-img>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-row *ngIf=\"serviceName == 'Hourly'\">\n                <!-- <ion-col *ngIf = \"minimumHour >= item.clsVehicleFinalRates.Hourly_min_hours && minimumHour != null\">\n                    <ion-label>{{minimumHour}} hours at\n                      ${{item.clsVehicleFinalRates.Hourly_Rate}} p/hr</ion-label>\n                  </ion-col> -->\n              <ion-col>\n                <ion-label *ngIf = \"item.clsVehicleFinalRates.Discounted_Fare == null\">{{item.clsVehicleFinalRates.Hourly_min_hours}} hours at\n                  ${{item.clsVehicleFinalRates.Hourly_Rate}} p/hr</ion-label>\n                  <ion-label *ngIf = \"item.clsVehicleFinalRates.Discounted_Fare != null\">{{item.clsVehicleFinalRates.Hourly_min_hours}} hours at\n                    ${{item.clsVehicleFinalRates.Hourly_Rate - item.clsVehicleFinalRates.Discount_Span_value}} p/hr</ion-label>\n              </ion-col>\n            </ion-row>\n            <div class=\"vehicle-amount\">\n              <div class=\"null\" *ngIf=\"item.clsVehicleFinalRates != null && item.clsVehicleFinalRates.Discount_Span_value == null\">$ {{item.clsVehicleFinalRates.Rate}}</div>\n              <div class=\"null\" *ngIf=\"item.clsVehicleFinalRates != null && item.clsVehicleFinalRates.Discount_Span_value != null\">$ {{item.clsVehicleFinalRates.Discounted_Fare}}</div>\n            </div>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ng-container>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/vehicles/vehicles.module.ts":
/*!*********************************************!*\
  !*** ./src/app/vehicles/vehicles.module.ts ***!
  \*********************************************/
/*! exports provided: VehiclesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesPageModule", function() { return VehiclesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicles.page */ "./src/app/vehicles/vehicles.page.ts");







var routes = [
    {
        path: '',
        component: _vehicles_page__WEBPACK_IMPORTED_MODULE_6__["VehiclesPage"]
    }
];
var VehiclesPageModule = /** @class */ (function () {
    function VehiclesPageModule() {
    }
    VehiclesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vehicles_page__WEBPACK_IMPORTED_MODULE_6__["VehiclesPage"]]
        })
    ], VehiclesPageModule);
    return VehiclesPageModule;
}());



/***/ }),

/***/ "./src/app/vehicles/vehicles.page.scss":
/*!*********************************************!*\
  !*** ./src/app/vehicles/vehicles.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzL3ZlaGljbGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vehicles/vehicles.page.ts":
/*!*******************************************!*\
  !*** ./src/app/vehicles/vehicles.page.ts ***!
  \*******************************************/
/*! exports provided: VehiclesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesPage", function() { return VehiclesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var VehiclesPage = /** @class */ (function () {
    function VehiclesPage(router) {
        this.router = router;
        var data = localStorage.getItem('all_detail');
        this.data = JSON.parse(data);
        console.log(this.data);
        this.locationType = this.data.FromLocationDetail.Location_Type;
        var value = localStorage.getItem('fromLocation');
        this.locationstart = value;
        var value2 = localStorage.getItem('toLocation');
        this.locationend = value2;
        this.selectDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('DD');
        this.selectMonthYear = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('MMM YYYY');
        this.selectDay = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('dddd');
        this.FullTime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('H:mm');
        this.HalfTime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('h:mm A');
        this.vehicleDetails = this.data.clsVehicelDetail;
        console.log(this.vehicleDetails);
        this.vehicleName = this.data.clsVehicelDetail.Vehicle_Name;
        this.serviceName = this.data.TypeOfServiceName;
    }
    VehiclesPage.prototype.ngOnInit = function () {
        this.roundtrip = this.data.TypeOfServiceName;
        localStorage.removeItem('salesTax');
        localStorage.removeItem('amenityData');
        localStorage.removeItem('salesTax2');
        localStorage.removeItem('amenityData2');
        var val = localStorage.getItem("noofHours");
        this.minimumHour = val;
        console.log(this.minimumHour);
    };
    VehiclesPage.prototype.ionViewWillEnter = function () {
        localStorage.removeItem('numberofHours');
        localStorage.removeItem("amenityData");
    };
    VehiclesPage.prototype.viewDetail = function (item) {
        console.log(item);
        localStorage.setItem('car_detail', JSON.stringify(item));
        this.router.navigate(['/selectvehicle']);
    };
    VehiclesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    VehiclesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicles',
            template: __webpack_require__(/*! raw-loader!./vehicles.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicles/vehicles.page.html"),
            styles: [__webpack_require__(/*! ./vehicles.page.scss */ "./src/app/vehicles/vehicles.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VehiclesPage);
    return VehiclesPage;
}());



/***/ })

}]);
//# sourceMappingURL=vehicles-vehicles-module-es5.js.map