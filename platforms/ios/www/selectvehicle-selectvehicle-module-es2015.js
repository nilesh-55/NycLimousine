(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selectvehicle-selectvehicle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/selectvehicle/selectvehicle.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selectvehicle/selectvehicle.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"vehicle-title\">\n      <b>{{locationstart}}</b>\n      <b><small>to</small>{{locationend}}</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-toolbar class=\"home-page\">\n  <div class=\"calculator-card\">\n    <ion-item lines=\"none\" class=\"date-time-row\" style=\"border-bottom: none !important;\">\n        <ion-col size=\"6\" class=\"padding-0\">\n          <ion-item lines=\"none\" class=\"no__padding\">\n            <ion-label position=\"stacked\" class=\"label label--pick-date\"> PICKUP DATE </ion-label>\n            <div>\n              <span class=\"date\">{{selectDate}}</span>\n              <span class=\"month\">{{selectMonthYear}}</span>\n              <span class=\"month-year\">{{selectDay}}</span>\n            </div>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"6\" class=\"padding-0\">\n          <ion-item lines=\"none\" class=\"no__padding\">\n            <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'A'\"> FLIGHT ARRIVAL TIME </ion-label>\n            <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'B'\"> PICKUP TIME </ion-label>\n            <div>\n              <span class=\"date\"> {{fulltime}}</span>\n              <span class=\"month-year\"> {{halftime}}</span>\n            </div>\n          </ion-item>\n        </ion-col>\n    </ion-item>\n  </div>\n</ion-toolbar>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header style=\"padding:0;border-bottom: 1px solid #ddd;\">\n      <ion-item lines=\"none\">\n        <ion-thumbnail class=\"vehicle-thumbnail\" slot=\"start\">\n          <img src={{carImage}}>\n        </ion-thumbnail>\n        <ion-row class=\"icon-section\" slot=\"end\">\n          <ion-col class=\"icons-row\">\n            <ion-img src={{carInside}} class=\"user-briefcase-img\"></ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label><b>{{carName}}</b></ion-label>\n        <div class=\"vehicle-amount\" slot=\"end\">\n          $ {{carPrice}}\n        </div>\n      </ion-item>\n    </ion-card-header>\n    <p class=\"discount-rate\" *ngIf =\"discount_description != null\">*{{discount_description}}</p>\n    <ion-card-content style=\"padding:0\">\n      \n      <ion-list>\n        <ion-list-header>\n          <ion-label>AMENITIES</ion-label>\n        </ion-list-header>\n\n        <ion-item class=\"amenities--select-section\" lines=\"none\" *ngFor= \"let items of amenitiesDetails\">\n\n            <ion-col size=\"5\" *ngIf=\" items.AmenityName!='Free WiFi '\">\n              <ion-label>\n                {{items.AmenityName}}\n              </ion-label>\n            </ion-col>\n\n            <ion-col size=\"3\" *ngIf=\" items.AmenityName!='Free WiFi '\">\n              <ion-label class=\"text-center\"><b>$ {{items.AmenityPrice}}</b></ion-label>\n            </ion-col>\n\n            <ion-col size=\"4\" *ngIf=\" items.AmenityName!='Free WiFi '\">\n              <ion-select position=\"stacked\" placeholder=\"Select One\" (ionChange)=\"getAmenityCalculations($event,items.FK_AmenityID,items.AmenityPrice)\">\n                  <ion-select-option *ngFor=\"let q of items.Qtylist\" [value]=\"q\" >{{q.Text}}</ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col size=\"5\" *ngIf=\" items.AmenityName=='Free WiFi '\">\n              <ion-label>\n                {{items.AmenityName}}\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"3\" *ngIf=\" items.AmenityName=='Free WiFi '\">\n              <ion-label class=\"text-center\"><b>$ {{items.AmenityPrice}}</b></ion-label>\n            </ion-col>\n            <ion-col size=\"4\" text-right *ngIf=\" items.AmenityName=='Free WiFi '\">\n              <ion-toggle color=\"primary\" [ngModel]=\"theSate\" (ionChange)=\"stateChange($event)\"></ion-toggle>\n            </ion-col>\n        </ion-item>\n        <!-- <ion-row class=\"amenities--select-section\">\n        <ion-col size=\"4\">\n        <p>\n        {{amenityName}}\n        </p>\n      </ion-col>\n      <ion-col size=\"8\" text-right>\n          <ion-toggle color=\"primary\" [ngModel]=\"theSate\" (ionChange)=\"stateChange($event)\"></ion-toggle>\n        </ion-col>\n    </ion-row> -->\n       </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-item lines=\"none\">\n    <ion-label (click)=\"presentModal()\">$ {{finalAmount}} <ion-icon name=\"information-circle-outline\" (click)=\"presentModal()\"></ion-icon>\n    </ion-label>\n    <ion-button class=\"main-button main-button--next-page\" slot=\"end\" routerDirection=\"forward\" (click)=\"goToPayment()\">Select Vehicle\n    </ion-button>\n  </ion-item>\n</ion-footer>"

/***/ }),

/***/ "./src/app/selectvehicle/selectvehicle.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/selectvehicle/selectvehicle.module.ts ***!
  \*******************************************************/
/*! exports provided: SelectvehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectvehiclePageModule", function() { return SelectvehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selectvehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectvehicle.page */ "./src/app/selectvehicle/selectvehicle.page.ts");







const routes = [
    {
        path: '',
        component: _selectvehicle_page__WEBPACK_IMPORTED_MODULE_6__["SelectvehiclePage"]
    }
];
let SelectvehiclePageModule = class SelectvehiclePageModule {
};
SelectvehiclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_selectvehicle_page__WEBPACK_IMPORTED_MODULE_6__["SelectvehiclePage"]]
    })
], SelectvehiclePageModule);



/***/ }),

/***/ "./src/app/selectvehicle/selectvehicle.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/selectvehicle/selectvehicle.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vehicle-thumbnail {\n  width: 40%;\n  height: auto;\n  margin: 5px 0 0 0;\n}\n\n.icons-row {\n  display: -webkit-box;\n  display: flex;\n  font-size: 20px;\n  padding: 5px 0px;\n}\n\nion-list-header ion-label {\n  font-weight: 700;\n}\n\nb,\nsmall {\n  color: #000;\n}\n\n.text-center {\n  padding-top: 5px;\n}\n\n.text-center b {\n  font-size: 13px;\n  margin: 6px auto;\n  margin-left: 1.5rem;\n  display: block;\n  text-align: center;\n}\n\n.amenities--select-section ion-label {\n  font-size: 11px;\n}\n\n.amenities--select-section ion-select {\n  min-width: 80px;\n  color: #000;\n  font-size: 12px;\n  position: absolute;\n  bottom: -15px;\n  right: -5px;\n  font-weight: 700;\n}\n\n.amenities--select-section p {\n  padding: 0.7rem 0 0 1rem;\n  font-size: 12px;\n}\n\n.discount-rate {\n  text-align: center;\n  color: #000;\n  font-weight: 600;\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL3NlbGVjdHZlaGljbGUvc2VsZWN0dmVoaWNsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlbGVjdHZlaGljbGUvc2VsZWN0dmVoaWNsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURHQztFQUNDLGdCQUFBO0FDQUY7O0FESUE7O0VBRUMsV0FBQTtBQ0REOztBRElBO0VBQ0MsZ0JBQUE7QUNERDs7QURFQztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FES0M7RUFDQyxlQUFBO0FDRkY7O0FESUM7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURJSTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBREtBO0VBQ0Msa0JBQUE7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0dmVoaWNsZS9zZWxlY3R2ZWhpY2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZWhpY2xlLXRodW1ibmFpbCB7XHJcblx0d2lkdGg6IDQwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0bWFyZ2luOiA1cHggMCAwIDA7XHJcbn1cclxuXHJcbi5pY29ucy1yb3cge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcblx0aW9uLWxhYmVsIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0fVxyXG59XHJcblxyXG5iLFxyXG5zbWFsbCB7XHJcblx0Y29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcblx0cGFkZGluZy10b3A6IDVweDtcclxuXHRiIHtcclxuXHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdG1hcmdpbjogNnB4IGF1dG87XHJcblx0XHRtYXJnaW4tbGVmdDogMS41cmVtO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG59XHJcblxyXG4uYW1lbml0aWVzLS1zZWxlY3Qtc2VjdGlvbiB7XHJcblx0aW9uLWxhYmVsIHtcclxuXHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHR9XHJcblx0aW9uLXNlbGVjdCB7XHJcblx0XHRtaW4td2lkdGg6IDgwcHg7XHJcblx0XHRjb2xvcjogIzAwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogLTE1cHg7XHJcblx0XHRyaWdodDogLTVweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMCAwIDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbi5kaXNjb3VudC1yYXRle1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcbiIsIi52ZWhpY2xlLXRodW1ibmFpbCB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiA1cHggMCAwIDA7XG59XG5cbi5pY29ucy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5iLFxuc21hbGwge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi50ZXh0LWNlbnRlciBiIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDZweCBhdXRvO1xuICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYW1lbml0aWVzLS1zZWxlY3Qtc2VjdGlvbiBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDExcHg7XG59XG4uYW1lbml0aWVzLS1zZWxlY3Qtc2VjdGlvbiBpb24tc2VsZWN0IHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTE1cHg7XG4gIHJpZ2h0OiAtNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmFtZW5pdGllcy0tc2VsZWN0LXNlY3Rpb24gcCB7XG4gIHBhZGRpbmc6IDAuN3JlbSAwIDAgMXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZGlzY291bnQtcmF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/selectvehicle/selectvehicle.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/selectvehicle/selectvehicle.page.ts ***!
  \*****************************************************/
/*! exports provided: SelectvehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectvehiclePage", function() { return SelectvehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _farecalculations_farecalculations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../farecalculations/farecalculations.page */ "./src/app/farecalculations/farecalculations.page.ts");







// import { timingSafeEqual } from 'crypto';
let SelectvehiclePage = class SelectvehiclePage {
    constructor(activatedRoute, envservice, modalController, router, loadingController) {
        this.activatedRoute = activatedRoute;
        this.envservice = envservice;
        this.modalController = modalController;
        this.router = router;
        this.loadingController = loadingController;
        this.sum = 0;
        this.details = localStorage.getItem('all_detail');
        this.data = JSON.parse(this.details);
        console.log(this.data);
        this.locationType = this.data.FromLocationDetail.Location_Type;
        const value1 = localStorage.getItem('fromLocation');
        this.locationstart = value1;
        const value2 = localStorage.getItem('toLocation');
        this.locationend = value2;
        this.selectDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('DD');
        this.selectMonthYear = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('MMM YYYY');
        this.selectDay = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('dddd');
        this.fulltime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('H:mm');
        this.halftime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('h:mm A');
        const data = localStorage.getItem('car_detail');
        this.carData = JSON.parse(data);
        console.log(this.carData);
        this.carName = this.carData.Vehicle_Name;
        this.carPrice = this.carData.clsVehicleFinalRates.Rate;
        console.log(this.carData.clsVehicleFinalRates.Rate);
        console.log(this.carData.clsVehicleFinalRates.Inclusive_all_tax);
        this.carImage = this.carData.Vehicle_Image;
        this.carInside = this.carData.Luggage_Image;
        this.amenitiesDetails = this.carData.clsVehicleAmenityDetails;
        localStorage.setItem('amenityData', JSON.stringify(this.amenitiesDetails));
        this.hours = this.carData.clsVehicleFinalRates.minHorly;
        this.airport_parking = Number(this.carData.clsVehicleFinalRates.Airport_Parking);
        this.tolls = Number(this.carData.clsVehicleFinalRates.Tolls);
        this.discount_description = this.carData.clsVehicleFinalRates.Discount_Descripion;
        let SalesValues = this.carData.clsVehicleFinalRates.Sales_tax;
        localStorage.setItem("salesTax", JSON.stringify(SalesValues));
        let congestion = this.data.CongestionSurchargeValue;
        let CongestionValue = 0;
        if (congestion > 0) {
            CongestionValue = (Number(this.carData.clsVehicleFinalRates.Inclusive_all_tax) + Number(congestion));
            this.finalAmount = CongestionValue;
        }
        else {
            this.finalAmount = this.carData.clsVehicleFinalRates.Inclusive_all_tax;
        }
        localStorage.setItem("final_rate", JSON.stringify(this.finalAmount));
        console.log(this.data.CongestionSurchargeValue);
        var value = localStorage.getItem('finalValue');
        console.log(value);
        this.vehicleStopRates = this.carData.clsLiVehicleStopRates;
    }
    ngOnInit() {
        var a = this.amenitiesDetails.length;
        // this.amenitiesDetails.splice(a-1);
    }
    ionViewWillEnter() {
        //  const amount = localStorage.getItem("final_rate");
        //  this.finalAmount = JSON.parse(amount);
        localStorage.removeItem("car_detail2");
    }
    getAmenityCalculations(e, amid, price) {
        console.log(price);
        console.log(e.detail.value.Value, amid);
        this.amenitiesDetails = this.carData.clsVehicleAmenityDetails;
        var check = this.amenitiesDetails.findIndex(x => x.FK_AmenityID == amid);
        console.log(check);
        if (check != -1) {
            this.amenitiesDetails[check].selectAmenityAmt = Number(e.detail.value.Value * this.amenitiesDetails[check].AmenityPrice).toFixed(2);
            this.amenitiesDetails[check].selectAmenityQty = e.detail.value.Value;
        }
        console.log('amenity details', this.amenitiesDetails);
        localStorage.setItem('amenityData', JSON.stringify(this.amenitiesDetails));
        let calculation = Number(e.detail.value.Value) * Number(price);
        this.cal = calculation;
        console.log(calculation);
        let total = 0;
        console.log(this.carData.clsVehicleFinalRates.Total_Fare);
        for (var i = 0; i < this.amenitiesDetails.length; i++) {
            //var v = this.cal[i];
            console.log(this.amenitiesDetails[i].selectAmenityAmt);
            //if(this.amenitiesDetails[i].selectAmenityAmt >0){
            total = total + Number(this.amenitiesDetails[i].selectAmenityAmt);
            //}
        }
        let Total_Fare = 0;
        Total_Fare = this.carData.clsVehicleFinalRates.Total_Fare + total;
        let saletaxValue = this.carData.clsVehicleFinalRates.Sales_tax_value;
        let SaleTaxAmount = 0;
        if (saletaxValue > 0) {
            SaleTaxAmount = ((Number(Total_Fare) + Number(this.airport_parking) + Number(this.tolls)) * Number(saletaxValue) / 100);
        }
        console.log(SaleTaxAmount);
        this.carData.clsVehicleFinalRates.Sales_tax = SaleTaxAmount;
        this.finalAmount = Number((Total_Fare + SaleTaxAmount + this.data.CongestionSurchargeValue)).toFixed(2);
        console.log(Number(SaleTaxAmount).toFixed(2));
        this.salevalue = SaleTaxAmount;
        console.log(this.salevalue);
        if (this.salevalue == 0) {
            this.sale = null;
        }
        else {
            this.sale = Number(SaleTaxAmount).toFixed(2);
        }
        console.log(this.sale);
        localStorage.setItem("salesTax", JSON.stringify(this.sale));
        localStorage.setItem("final_rate", JSON.stringify(this.finalAmount));
        console.log(total);
        console.log(this.sum);
        this.data.AmenityId = amid;
        this.data.vehicleId = this.carData.VehicleId;
        console.log(this.data.vehicleId);
        this.data.Qty = e.detail.value.Value;
    }
    stateChange(ev) {
        // this.amenitiesDetails = this.carData.clsVehicleAmenityDetails;
        this.theSate1 = ev.detail.checked;
        console.log(this.theSate1);
        if (this.theSate1 == true) {
            var check = this.amenitiesDetails.findIndex(x => x.FK_AmenityID == 6);
            console.log(check);
            if (check != -1) {
                this.amenitiesDetails[check].selectAmenityAmt = Number(6 * this.amenitiesDetails[check].AmenityPrice).toFixed(2);
                this.amenitiesDetails[check].selectAmenityQty = 1;
            }
            console.log(this.amenitiesDetails);
            localStorage.setItem('amenityData', JSON.stringify(this.amenitiesDetails));
        }
        else if (this.theSate1 == false) {
            var check = this.amenitiesDetails.findIndex(x => x.FK_AmenityID == 6);
            console.log(check);
            if (check != -1) {
                this.amenitiesDetails[check].selectAmenityAmt = 0;
                this.amenitiesDetails[check].selectAmenityQty = 0;
            }
            console.log(this.amenitiesDetails);
            localStorage.setItem('amenityData', JSON.stringify(this.amenitiesDetails));
        }
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _farecalculations_farecalculations_page__WEBPACK_IMPORTED_MODULE_6__["FarecalculationsPage"]
            });
            modal.onDidDismiss()
                .then((data) => {
                const val = data.data;
                console.log(val);
                this.finalAmount = val;
                localStorage.setItem("final_rate", JSON.stringify(this.finalAmount));
            });
            return yield modal.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
                cssClass: 'custom-loader',
                spinner: null
            });
            return yield loading.present();
        });
    }
    goToPayment() {
        this.presentLoading().then(a => {
            if (this.data.TypeOfServiceName == 'Round Trip') {
                this.router.navigate(['/vehicles-return-page']);
            }
            else if (this.data.TypeOfServiceName == 'Hourly') {
                this.router.navigate(['/filldetails']);
            }
            else if (this.data.TypeOfServiceName == 'One way') {
                this.router.navigate(['/filldetails']);
            }
            else if (this.data.TypeOfServiceName == 'Wait and Return') {
                this.router.navigate(['/filldetails']);
            }
            this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
};
SelectvehiclePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
SelectvehiclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectvehicle',
        template: __webpack_require__(/*! raw-loader!./selectvehicle.page.html */ "./node_modules/raw-loader/index.js!./src/app/selectvehicle/selectvehicle.page.html"),
        styles: [__webpack_require__(/*! ./selectvehicle.page.scss */ "./src/app/selectvehicle/selectvehicle.page.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], SelectvehiclePage);



/***/ })

}]);
//# sourceMappingURL=selectvehicle-selectvehicle-module-es2015.js.map