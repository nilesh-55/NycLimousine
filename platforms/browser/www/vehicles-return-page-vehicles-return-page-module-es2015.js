(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicles-return-page-vehicles-return-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicles-return-page/vehicles-return-page.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicles-return-page/vehicles-return-page.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"vehicle-title\">\n      <b> {{locationend}} </b>\n      <b> <small>to</small> {{locationstart}}</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-toolbar class=\"home-page\">\n  <div class=\"calculator-card\">\n    <ion-item lines=\"none\" class=\"date-time-row\" style=\"border-bottom: none !important;\">\n      <ion-col size=\"6\" class=\"padding-0\">\n        <ion-item class=\"no__padding\" lines=\"none\">\n          <ion-label position=\"stacked\" class=\"label label--pick-date\"> RETURN DATE </ion-label>\n          <div>\n            <span class=\"date\">{{selectDate}}</span>\n            <span class=\"month\">{{selectMonthYear}}</span>\n            <span class=\"month-year\">{{selectDay}}</span>\n          </div>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\" class=\"padding-0\">\n        <ion-item class=\"no__padding\" lines=\"none\">\n          <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'A'\"> FLIGHT ARRIVAL\n            TIME </ion-label>\n          <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'B'\"> RETURN PICKUP\n            TIME </ion-label>\n          <div>\n            <span class=\"date\"> {{FullTime}}</span>\n            <span class=\"month-year\"> {{HalfTime}}</span>\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-item>\n  </div>\n</ion-toolbar>\n<ion-content>\n\n  <div bg *ngIf=\"roundtrip == 'Round Trip'\">\n    <ion-label>Step 2 of 2 - Return Trip</ion-label>\n  </div>\n\n\n  <ion-row>\n    <ion-col size=\"6\" class=\"padding-0\" *ngFor=\"let item of vehicleDetails\">\n      <ion-card class=\"vehicles-card\" routerDirection=\"forward\" *ngIf=\"item.clsVehicleFinalRates !== null\"\n        (click)=\"viewDetail(item)\">\n        <ion-card-header>\n          <div class=\"car--image\" [style.backgroundImage]=\"'url(' + item.Vehicle_Image + ')'\">\n            <span *ngIf=\"item.clsVehicleFinalRates.DiscountVal != null\"\n              class=\"disc\">-{{item.clsVehicleFinalRates.DiscountVal}}</span>\n          </div>\n          <div class=\"car--name\">\n            <ion-label><b>{{item.Vehicle_Name}}</b></ion-label>\n          </div>\n          <ion-grid class=\"icon-section\">\n            <ion-row>\n              <ion-col size=\"12\" class=\"icons-row\">\n                <ion-img src={{item.Luggage_Image}}></ion-img>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-row *ngIf=\"servicetypes !=0\">\n            <ion-col>\n              <ion-label>{{item.clsVehicleFinalRates.Hourly_min_hours}} hours at\n                ${{item.clsVehicleFinalRates.Hourly_Rate}} p/hr</ion-label>\n            </ion-col>\n          </ion-row>\n          <div class=\"vehicle-amount\">\n            <div class=\"null\" *ngIf=\"item.clsVehicleFinalRates !== null && item.clsVehicleFinalRates.Discount_Span_value == null\">$ {{item.clsVehicleFinalRates.Rate}}</div>\n            <div class=\"null\" *ngIf=\"item.clsVehicleFinalRates != null && item.clsVehicleFinalRates.Discount_Span_value != null\">$ {{item.clsVehicleFinalRates.Discounted_Fare}}</div>\n          </div>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/vehicles-return-page/vehicles-return-page.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/vehicles-return-page/vehicles-return-page.module.ts ***!
  \*********************************************************************/
/*! exports provided: VehiclesReturnPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesReturnPagePageModule", function() { return VehiclesReturnPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicles_return_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicles-return-page.page */ "./src/app/vehicles-return-page/vehicles-return-page.page.ts");







const routes = [
    {
        path: '',
        component: _vehicles_return_page_page__WEBPACK_IMPORTED_MODULE_6__["VehiclesReturnPagePage"]
    }
];
let VehiclesReturnPagePageModule = class VehiclesReturnPagePageModule {
};
VehiclesReturnPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_vehicles_return_page_page__WEBPACK_IMPORTED_MODULE_6__["VehiclesReturnPagePage"]]
    })
], VehiclesReturnPagePageModule);



/***/ }),

/***/ "./src/app/vehicles-return-page/vehicles-return-page.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/vehicles-return-page/vehicles-return-page.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzLXJldHVybi1wYWdlL3ZlaGljbGVzLXJldHVybi1wYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vehicles-return-page/vehicles-return-page.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/vehicles-return-page/vehicles-return-page.page.ts ***!
  \*******************************************************************/
/*! exports provided: VehiclesReturnPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesReturnPagePage", function() { return VehiclesReturnPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let VehiclesReturnPagePage = class VehiclesReturnPagePage {
    constructor(router, activatedRoute, envservice, toastCtrl) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.envservice = envservice;
        this.toastCtrl = toastCtrl;
        // this.activatedRoute.queryParams.subscribe(params => {
        //   if (params && params.formData) {
        //     this.data = JSON.parse(params.formData);
        //     console.log(this.data)
        const data = localStorage.getItem('all_detail');
        this.data = JSON.parse(data);
        console.log(this.data);
        this.locationType = this.data.FromLocationDetail.Location_Type;
        const value1 = localStorage.getItem('fromLocation');
        this.locationstart = value1;
        const value2 = localStorage.getItem('toLocation');
        this.locationend = value2;
        this.selectDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('DD');
        this.selectMonthYear = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('MMM YYYY');
        this.selectDay = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('dddd');
        this.FullTime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateTime).format('H:mm');
        this.HalfTime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateTime).format('h:mm A');
        this.vehicleDetails = this.data.clsReturnVehicelDetail;
        console.log(this.vehicleDetails);
        this.vehicleName = this.data.clsVehicelDetail.Vehicle_Name;
        this.servicetypes = this.data.Event;
        console.log(this.servicetypes);
        //   }
        // });
    }
    user(user) {
        throw new Error("Method not implemented.");
    }
    ionViewWillEnter() {
        localStorage.removeItem("amenityData2");
    }
    ngOnInit() {
        this.roundtrip = this.data.TypeOfServiceName;
    }
    viewDetail(item) {
        console.log(item);
        localStorage.setItem('car_detail2', JSON.stringify(item));
        this.router.navigate(['/select-returnvehicle']);
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: this.message,
                duration: 2000
            });
            toast.present();
        });
    }
};
VehiclesReturnPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
VehiclesReturnPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicles-return-page',
        template: __webpack_require__(/*! raw-loader!./vehicles-return-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicles-return-page/vehicles-return-page.page.html"),
        styles: [__webpack_require__(/*! ./vehicles-return-page.page.scss */ "./src/app/vehicles-return-page/vehicles-return-page.page.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], VehiclesReturnPagePage);



/***/ })

}]);
//# sourceMappingURL=vehicles-return-page-vehicles-return-page-module-es2015.js.map