(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-returnvehicle-select-returnvehicle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/select-returnvehicle/select-returnvehicle.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/select-returnvehicle/select-returnvehicle.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"vehicle-title\">\n      <b> {{locationend}} </b>\n      <b> <small>to</small> {{locationstart}}</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-toolbar class=\"home-page\">\n  <div class=\"calculator-card\">\n    <ion-item lines=\"none\" class=\"date-time-row\" style=\"border-bottom: none !important;\">\n      <ion-col size=\"6\" class=\"padding-0\">\n        <ion-item lines=\"none\" class=\"no__padding\">\n          <ion-label position=\"stacked\" class=\"label label--pick-date\"> RETURN DATE </ion-label>\n          <div>\n            <span class=\"date\">{{selectDate}}</span>\n            <span class=\"month\">{{selectMonthYear}}</span>\n            <span class=\"month-year\">{{selectDay}}</span>\n          </div>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\" class=\"padding-0\">\n        <ion-item class=\"no__padding\" lines=\"none\">\n          <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'A'\"> FLIGHT ARRIVAL\n            TIME </ion-label>\n          <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'B'\">RETURN PICKUP TIME\n          </ion-label>\n          <div>\n            <span class=\"date\"> {{fulltime}}</span>\n            <span class=\"month-year\"> {{halftime}}</span>\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-item>\n  </div>\n</ion-toolbar>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header style=\"padding:0;border-bottom: 1px solid #ddd;\">\n      <ion-item lines=\"none\">\n        <ion-thumbnail class=\"vehicle-thumbnail\" slot=\"start\">\n          <img src={{carImage}}>\n        </ion-thumbnail>\n        <ion-row class=\"icon-section\" slot=\"end\">\n          <ion-col class=\"icons-row\">\n            <ion-img src={{carInside}}></ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label><b>{{carName}}</b></ion-label>\n        <div class=\"vehicle-amount\" slot=\"end\">\n          $ {{carPrice}}\n        </div>\n      </ion-item>\n    </ion-card-header>\n    <p class=\"discount-rate\" *ngIf =\"discount_description != null\">*{{discount_description}}</p>\n    <ion-card-content style=\"padding:0\">\n\n      <ion-list>\n        <ion-list-header>\n          <ion-label>AMENITIES</ion-label>\n        </ion-list-header>\n        <ion-item class=\"amenities--select-section\" lines=\"none\" *ngFor=\"let items of amenitiesDetails2\">\n          <ion-col size=\"5\" *ngIf=\" items.AmenityName!='Free WiFi '\">\n            <ion-label>\n              {{items.AmenityName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"3\" *ngIf=\" items.AmenityName!='Free WiFi '\">\n            <ion-label class=\"text-center\"><b>$ {{items.AmenityPrice}}</b></ion-label>\n          </ion-col>\n          <ion-col size=\"4\" *ngIf=\" items.AmenityName!='Free WiFi '\">\n            <ion-select placeholder=\"Select One\" (ionChange)=\"getAmenityCalculations($event,items.FK_AmenityID,items.AmenityPrice)\">\n              <ion-select-option *ngFor=\"let q of items.Qtylist\" [value]=\"q\">{{q.Text}}</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"5\" *ngIf=\" items.AmenityName=='Free WiFi '\">\n            <ion-label>\n              {{items.AmenityName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"3\" *ngIf=\" items.AmenityName=='Free WiFi '\">\n            <ion-label class=\"text-center\"><b>$ {{items.AmenityPrice}}</b></ion-label>\n          </ion-col>\n          <ion-col size=\"4\" text-right *ngIf=\" items.AmenityName=='Free WiFi '\">\n            <ion-toggle color=\"primary\" [ngModel]=\"theSate\" (ionChange)=\"stateChange($event)\"></ion-toggle>\n          </ion-col>\n        </ion-item>\n       </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-item lines=\"none\">\n    <ion-label>$ {{finalAmount2}} <ion-icon name=\"information-circle-outline\" (click)=\"presentModal()\"></ion-icon>\n    </ion-label>\n    <ion-button class=\"main-button main-button--next-page\" slot=\"end\" routerDirection=\"forward\" (click)=\"goToPayment()\">Select Vehicle\n    </ion-button>\n  </ion-item>\n</ion-footer>"

/***/ }),

/***/ "./src/app/select-returnvehicle/select-returnvehicle.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/select-returnvehicle/select-returnvehicle.module.ts ***!
  \*********************************************************************/
/*! exports provided: SelectReturnvehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectReturnvehiclePageModule", function() { return SelectReturnvehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_returnvehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-returnvehicle.page */ "./src/app/select-returnvehicle/select-returnvehicle.page.ts");







var routes = [
    {
        path: '',
        component: _select_returnvehicle_page__WEBPACK_IMPORTED_MODULE_6__["SelectReturnvehiclePage"]
    }
];
var SelectReturnvehiclePageModule = /** @class */ (function () {
    function SelectReturnvehiclePageModule() {
    }
    SelectReturnvehiclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_select_returnvehicle_page__WEBPACK_IMPORTED_MODULE_6__["SelectReturnvehiclePage"]]
        })
    ], SelectReturnvehiclePageModule);
    return SelectReturnvehiclePageModule;
}());



/***/ }),

/***/ "./src/app/select-returnvehicle/select-returnvehicle.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/select-returnvehicle/select-returnvehicle.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vehicle-thumbnail {\n  width: 40%;\n  height: auto;\n  margin: 5px 0 0 0;\n}\n\n.icons-row {\n  display: -webkit-box;\n  display: flex;\n  font-size: 20px;\n  padding: 5px 0px;\n}\n\nion-list-header ion-label {\n  font-weight: 700;\n  font-size: 14px;\n  color: #6b6868;\n}\n\nb,\nsmall {\n  color: #000;\n}\n\n.text-center {\n  padding-top: 5px;\n}\n\n.text-center b {\n  font-size: 13px;\n  margin: 6px auto;\n  margin-left: 1.5rem;\n  display: block;\n  text-align: center;\n}\n\n.amenities--select-section ion-label {\n  font-size: 11px;\n  display: -webkit-inline-box;\n}\n\n.amenities--select-section ion-select {\n  min-width: 80px;\n  color: #000;\n  font-size: 12px;\n  position: absolute;\n  bottom: -15px;\n  right: -5px;\n  font-weight: 700;\n}\n\n.amenities--select-section p {\n  padding: 0.7rem 0 0 1rem;\n  font-size: 12px;\n}\n\n.discount-rate {\n  text-align: center;\n  color: #000;\n  font-weight: 600;\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL3NlbGVjdC1yZXR1cm52ZWhpY2xlL3NlbGVjdC1yZXR1cm52ZWhpY2xlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VsZWN0LXJldHVybnZlaGljbGUvc2VsZWN0LXJldHVybnZlaGljbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FER0M7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQUY7O0FESUE7O0VBRUMsV0FBQTtBQ0REOztBRElBO0VBQ0MsZ0JBQUE7QUNERDs7QURFQztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FES0M7RUFDQyxlQUFBO0VBQ0EsMkJBQUE7QUNGRjs7QURJQztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRElJO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FDRlI7O0FES0E7RUFDQyxrQkFBQTtFQUNHLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3QtcmV0dXJudmVoaWNsZS9zZWxlY3QtcmV0dXJudmVoaWNsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVoaWNsZS10aHVtYm5haWwge1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdG1hcmdpbjogNXB4IDAgMCAwO1xyXG59XHJcblxyXG4uaWNvbnMtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXIge1xyXG5cdGlvbi1sYWJlbCB7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Y29sb3I6ICM2YjY4Njg7XHJcblx0fVxyXG59XHJcblxyXG5iLFxyXG5zbWFsbCB7XHJcblx0Y29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcblx0cGFkZGluZy10b3A6IDVweDtcclxuXHRiIHtcclxuXHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdG1hcmdpbjogNnB4IGF1dG87XHJcblx0XHRtYXJnaW4tbGVmdDogMS41cmVtO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG59XHJcblxyXG4uYW1lbml0aWVzLS1zZWxlY3Qtc2VjdGlvbiB7XHJcblx0aW9uLWxhYmVsIHtcclxuXHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxuXHR9XHJcblx0aW9uLXNlbGVjdCB7XHJcblx0XHRtaW4td2lkdGg6IDgwcHg7XHJcblx0XHRjb2xvcjogIzAwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogLTE1cHg7XHJcblx0XHRyaWdodDogLTVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMCAwIDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbi5kaXNjb3VudC1yYXRle1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59IiwiLnZlaGljbGUtdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDVweCAwIDAgMDtcbn1cblxuLmljb25zLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2YjY4Njg7XG59XG5cbmIsXG5zbWFsbCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnRleHQtY2VudGVyIGIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogNnB4IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hbWVuaXRpZXMtLXNlbGVjdC1zZWN0aW9uIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xufVxuLmFtZW5pdGllcy0tc2VsZWN0LXNlY3Rpb24gaW9uLXNlbGVjdCB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xNXB4O1xuICByaWdodDogLTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5hbWVuaXRpZXMtLXNlbGVjdC1zZWN0aW9uIHAge1xuICBwYWRkaW5nOiAwLjdyZW0gMCAwIDFyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpc2NvdW50LXJhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/select-returnvehicle/select-returnvehicle.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/select-returnvehicle/select-returnvehicle.page.ts ***!
  \*******************************************************************/
/*! exports provided: SelectReturnvehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectReturnvehiclePage", function() { return SelectReturnvehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _farecalculationsreturn_farecalculationsreturn_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../farecalculationsreturn/farecalculationsreturn.page */ "./src/app/farecalculationsreturn/farecalculationsreturn.page.ts");







// import { timingSafeEqual } from 'crypto';
var SelectReturnvehiclePage = /** @class */ (function () {
    function SelectReturnvehiclePage(activatedRoute, envservice, modalController, router, loadingController) {
        this.activatedRoute = activatedRoute;
        this.envservice = envservice;
        this.modalController = modalController;
        this.router = router;
        this.loadingController = loadingController;
        this.currentNumber = 0;
        this.currentNumber1 = 0;
        this.currentNumber2 = 0;
        this.currentNumber3 = 0;
        this.sum = 0;
        this.myId2 = null;
        this.details = localStorage.getItem('all_detail');
        this.data = JSON.parse(this.details);
        console.log(this.data);
        this.locationType = this.data.FromLocationDetail.Location_Type;
        var value1 = localStorage.getItem('fromLocation');
        this.locationstart = value1;
        var value2 = localStorage.getItem('toLocation');
        this.locationend = value2;
        this.selectDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('DD');
        this.selectMonthYear = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('MMM YYYY');
        this.selectDay = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('dddd');
        this.fulltime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateTime).format('H:mm');
        this.halftime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateTime).format('h:mm A');
        var data = localStorage.getItem('car_detail2');
        this.carData2 = JSON.parse(data);
        console.log(this.carData2);
        this.carName = this.carData2.Vehicle_Name;
        this.carPrice = this.carData2.clsVehicleFinalRates.Rate;
        console.log(this.carData2.clsVehicleFinalRates.Rate);
        console.log(this.carData2.clsVehicleFinalRates.Inclusive_all_tax);
        this.carImage = this.carData2.Vehicle_Image;
        this.carInside = this.carData2.Luggage_Image;
        this.amenitiesDetails2 = this.carData2.clsVehicleAmenityDetails;
        console.log(this.amenitiesDetails2);
        this.airport_parking2 = Number(this.carData2.clsVehicleFinalRates.Airport_Parking);
        this.tolls2 = Number(this.carData2.clsVehicleFinalRates.Tolls);
        this.discount_description = this.carData2.clsVehicleFinalRates.Discount_Descripion;
        var SalesValues2 = this.carData2.clsVehicleFinalRates.Sales_tax;
        localStorage.setItem("salesTax2", JSON.stringify(SalesValues2));
        var congestion2 = this.data.CongestionSurchargeValue;
        var CongestionValue2 = 0;
        if (congestion2 > 0) {
            CongestionValue2 = (Number(this.carData2.clsVehicleFinalRates.Inclusive_all_tax) + Number(congestion2));
            this.finalAmount2 = CongestionValue2;
        }
        else {
            this.finalAmount2 = this.carData2.clsVehicleFinalRates.Inclusive_all_tax;
        }
        localStorage.setItem("final_rate2", JSON.stringify(this.finalAmount2));
        console.log(this.data.CongestionSurchargeValue);
        // var get_newData= localStorage.getItem('new_data');
        // this.data.new=get_newData;
        // console.log(this.data.new)
        var values = localStorage.getItem('finalValue2');
        console.log(values);
    }
    SelectReturnvehiclePage.prototype.ngOnInit = function () {
    };
    SelectReturnvehiclePage.prototype.getAmenityCalculations = function (e, amid, price) {
        console.log(price);
        console.log(e.detail.value.Value, amid);
        this.amenitiesDetails2 = this.carData2.clsVehicleAmenityDetails;
        console.log(this.amenitiesDetails2);
        var check = this.amenitiesDetails2.findIndex(function (x) { return x.FK_AmenityID == amid; });
        console.log(check);
        if (check != -1) {
            this.amenitiesDetails2[check].selectAmenityAmt = Number(e.detail.value.Value * this.amenitiesDetails2[check].AmenityPrice).toFixed(2);
            this.amenitiesDetails2[check].selectAmenityQty = e.detail.value.Value;
        }
        console.log('amenity details', this.amenitiesDetails2);
        localStorage.setItem('amenityData2', JSON.stringify(this.amenitiesDetails2));
        var calculation = Number(e.detail.value.Value) * Number(price);
        this.cal = calculation;
        console.log(calculation);
        var total2 = 0;
        console.log(this.carData2.clsVehicleFinalRates.Total_Fare);
        for (var i = 0; i < this.amenitiesDetails2.length; i++) {
            //var v = this.cal[i];
            console.log(this.amenitiesDetails2[i].selectAmenityAmt);
            //if(this.amenitiesDetails[i].selectAmenityAmt >0){
            total2 = total2 + Number(this.amenitiesDetails2[i].selectAmenityAmt);
            //}
        }
        var Total_Fare2 = 0;
        Total_Fare2 = this.carData2.clsVehicleFinalRates.Total_Fare + total2;
        var saletaxValue2 = this.carData2.clsVehicleFinalRates.Sales_tax_value;
        var SaleTaxAmount2 = 0;
        if (saletaxValue2 > 0) {
            SaleTaxAmount2 = ((Number(Total_Fare2) + Number(this.airport_parking2) + Number(this.tolls2)) * Number(saletaxValue2) / 100);
        }
        console.log(SaleTaxAmount2);
        this.carData2.clsVehicleFinalRates.Sales_tax = SaleTaxAmount2;
        this.finalAmount2 = Number((Total_Fare2 + SaleTaxAmount2 + this.data.CongestionSurchargeValue)).toFixed(2);
        console.log(Number(SaleTaxAmount2).toFixed(2));
        this.salevalue2 = SaleTaxAmount2;
        console.log(this.salevalue2);
        if (this.salevalue2 == 0) {
            this.sale2 = null;
        }
        else {
            this.sale2 = Number(SaleTaxAmount2).toFixed(2);
        }
        console.log(this.sale2);
        localStorage.setItem("salesTax2", JSON.stringify(this.sale2));
        localStorage.setItem("final_rate2", JSON.stringify(this.finalAmount2));
        console.log(total2);
        console.log(this.sum);
        this.data.AmenityId = amid;
        this.data.vehicleId = this.carData2.VehicleId;
        console.log(this.data.vehicleId);
        this.data.Qty = e.detail.value.Value;
    };
    SelectReturnvehiclePage.prototype.stateChange = function (ev) {
        // this.amenitiesDetails = this.carData.clsVehicleAmenityDetails;
        this.theSate1 = ev.detail.checked;
        console.log(this.theSate1);
        if (this.theSate1 == true) {
            var check = this.amenitiesDetails2.findIndex(function (x) { return x.FK_AmenityID == 6; });
            console.log(check);
            if (check != -1) {
                this.amenitiesDetails2[check].selectAmenityAmt = Number(6 * this.amenitiesDetails2[check].AmenityPrice).toFixed(2);
                this.amenitiesDetails2[check].selectAmenityQty = 1;
            }
            console.log(this.amenitiesDetails2);
            localStorage.setItem('amenityData2', JSON.stringify(this.amenitiesDetails2));
        }
        else if (this.theSate1 == false) {
            var check = this.amenitiesDetails2.findIndex(function (x) { return x.FK_AmenityID == 6; });
            console.log(check);
            if (check != -1) {
                this.amenitiesDetails2[check].selectAmenityAmt = 0;
                this.amenitiesDetails2[check].selectAmenityQty = 0;
            }
            console.log(this.amenitiesDetails2);
            localStorage.setItem('amenityData2', JSON.stringify(this.amenitiesDetails2));
        }
    };
    SelectReturnvehiclePage.prototype.presentModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _farecalculationsreturn_farecalculationsreturn_page__WEBPACK_IMPORTED_MODULE_6__["FarecalculationsreturnPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SelectReturnvehiclePage.prototype.presentLoading = function () {
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
    SelectReturnvehiclePage.prototype.goToPayment = function () {
        var _this = this;
        this.presentLoading().then(function (a) {
            _this.router.navigate(['/filldetails']);
            _this.loadingController.dismiss();
        });
    };
    SelectReturnvehiclePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
    ]; };
    SelectReturnvehiclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-returnvehicle',
            template: __webpack_require__(/*! raw-loader!./select-returnvehicle.page.html */ "./node_modules/raw-loader/index.js!./src/app/select-returnvehicle/select-returnvehicle.page.html"),
            styles: [__webpack_require__(/*! ./select-returnvehicle.page.scss */ "./src/app/select-returnvehicle/select-returnvehicle.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], SelectReturnvehiclePage);
    return SelectReturnvehiclePage;
}());



/***/ })

}]);
//# sourceMappingURL=select-returnvehicle-select-returnvehicle-module-es5.js.map