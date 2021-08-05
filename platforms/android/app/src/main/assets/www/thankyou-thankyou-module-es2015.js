(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thankyou-thankyou-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/thankyou/thankyou.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/thankyou/thankyou.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #000;\" defaultHref=\"/home\" (click)=\"homepage()\"></ion-back-button>\n    </ion-buttons>\n    <ion-label text-center><b>Thank You!</b></ion-label>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-text>\n            Thank you for booking your reservation with NYC Limousine.We are deligted to have you as a customer.Please\n            check the information below,if\n            you find errors or discrepancies please contact our office immediately.Our customer service agents are\n            available 24 hours a day 7 days a week.\n          </ion-text>\n        </ion-col>\n        <ion-row class=\"button\">\n          <ion-col size=\"6\">\n            <ion-button shape=\"round\" class=\"round\" (click)=\"toCall()\"><span>CALL US</span></ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button shape=\"round\" class=\"round\" (click)=\"writeTous()\"><span>WRITE TO US</span></ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card style=\"margin: 0px;margin-top: 3px;\">\n    <ion-card-content style=\"padding: 0px;\">\n      <div bg *ngIf=\"serviceName == 'Round Trip'\">\n        <ion-label>Origin Trip</ion-label>\n      </div>\n      <ion-row class=\"confirmation-section\">\n        <ion-col size=\"6\">\n          <span> Confirmation No. </span>\n        </ion-col>\n        <ion-col size=\"6\" slot=\"end\">\n          <span class=\"span span--number\"> {{confirmatioNo}} </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"image\">\n        <ion-img src={{vehicleImage}}></ion-img>\n\n        <ion-text>{{vehicleName}}</ion-text>\n      </ion-row>\n\n      <div class=\"form-section\">\n        <h6>Passenger</h6>\n        <ion-text>{{passegerName}}</ion-text>\n      </div>\n      <div class=\"form-section\">\n        <h6>From</h6>\n        <ion-text>{{locationstart}} - {{locationFrom}}</ion-text>\n      </div>\n      <div class=\"form-section\">\n        <h6>To</h6>\n        <ion-text>{{locationend}} - {{locationTo}}</ion-text>\n      </div>\n\n      <ion-toolbar class=\"home-page\">\n        <div class=\"calculator-card\">\n          <ion-item class=\"date-time-row\" lines=\"none\"\n            style=\"--padding-start: 0; margin-left: 8px;border-bottom: none;\">\n            <ion-col size=\"6\" class=\"padding-0\">\n              <ion-item class=\"no__padding\" lines=\"none\">\n                <ion-label position=\"stacked\">PICK UP DATE</ion-label>\n                <div>\n                  <span class=\"date\">{{selectDate}}</span>\n                  <span class=\"month\">{{selectMonthYear}}</span>\n                  <span class=\"month-year\">{{selectDay}}</span>\n\n                </div>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\" class=\"padding-0\">\n              <ion-item class=\"no__padding\" lines=\"none\">\n                <ion-label position=\"stacked\" class=\"label label--arrival-time\">\n                  PICK UP TIME </ion-label>\n                <div>\n                  <span class=\"date\"> {{fulltime}}</span>\n                  <span class=\"month-year\"> {{halftime}}</span>\n                </div>\n              </ion-item>\n            </ion-col>\n          </ion-item>\n        </div>\n      </ion-toolbar>\n\n      <!-- //-----------------------Roundtrip----------------------------// -->\n      <div bg *ngIf=\"serviceName == 'Round Trip'\">\n        <ion-label>Return Trip</ion-label>\n      </div>\n      <ion-row class=\"confirmation-section\" *ngIf=\"serviceName == 'Round Trip'\">\n        <ion-col size=\"6\">\n          <span> Confirmation No. </span>\n        </ion-col>\n        <ion-col size=\"6\" slot=\"end\">\n          <span class=\"span span--number\"> </span>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"image\" *ngIf=\"serviceName == 'Round Trip'\">\n        <ion-img src={{vehicleImage2}}></ion-img>\n        <ion-text>{{vehicleName2}}</ion-text>\n      </ion-row>\n      <ion-row *ngIf=\"serviceName == 'Round Trip'\">\n        <div class=\"form-section\">\n          <h6>From</h6>\n          <ion-text>{{ locationend}} - {{locationTo}}</ion-text>\n        </div>\n        <div class=\"form-section\">\n          <h6>To</h6>\n          <ion-text>{{locationstart}} - {{locationFrom}}</ion-text>\n        </div>\n\n        <ion-toolbar class=\"home-page\">\n          <div class=\"calculator-card\">\n            <ion-item class=\"date-time-row\" lines=\"none\"\n              style=\"--padding-start: 0; margin-left: 8px;border-bottom: none;\">\n              <ion-col size=\"6\" class=\"padding-0\">\n                <ion-item class=\"no__padding\" lines=\"none\">\n                  <ion-label position=\"stacked\">RETURN DATE</ion-label>\n                  <div>\n                    <span class=\"date\">{{selectDate2}}</span>\n                    <span class=\"month\">{{selectMonthYear2}}</span>\n                    <span class=\"month-year\">{{selectDay2}}</span>\n\n                  </div>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\" class=\"padding-0\">\n                <ion-item class=\"no__padding\" lines=\"none\">\n                  <ion-label position=\"stacked\" class=\"label label--arrival-time\">\n                    RETURN PICKUP TIME </ion-label>\n                  <div>\n                    <span class=\"date\"> {{fulltime2}}</span>\n                    <span class=\"month-year\"> {{halftime2}}</span>\n                  </div>\n                </ion-item>\n              </ion-col>\n            </ion-item>\n          </div>\n        </ion-toolbar>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <!-- //-----------------------Roundtrip----------------------------// -->\n\n\n  <ion-card style=\"margin: 0px;margin-top: 6px;\">\n\n    <ion-card-content style=\"padding: 2px;\">\n      <ion-row class=\"confirmation-section\">\n        <div class=\"payment\">\n          <ion-col size=\"6\">\n            <span class=\"span span--payment\"> Payment. </span>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"final_Price == null\">\n            <span class=\"span span--total\"> $ {{totalPrice}} </span>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"final_Price != null\">\n            <span class=\"span span--total\"> $ {{final_Price}} </span>\n          </ion-col>\n        </div>\n\n        <h5>Visa*111</h5>\n        <p>Your credit card will not be charged in advance.A few days before your\n          travel date,an authorization hold will be placed for the estimated cost\n          of your reservation.This hold is not a charged; it is a test to confirm that your\n          credit card is valid and has funds available to accommodate that cost of your\n          reservation.If you pay by cash or cancle your reservation your credit card\n          will not be charged and the authorization hold will be cancelled by your\n          bank thus renedring your balance available again.\n        </p>\n\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/thankyou/thankyou.module.ts":
/*!*********************************************!*\
  !*** ./src/app/thankyou/thankyou.module.ts ***!
  \*********************************************/
/*! exports provided: ThankyouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thankyou.page */ "./src/app/thankyou/thankyou.page.ts");







const routes = [
    {
        path: '',
        component: _thankyou_page__WEBPACK_IMPORTED_MODULE_6__["ThankyouPage"]
    }
];
let ThankyouPageModule = class ThankyouPageModule {
};
ThankyouPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_thankyou_page__WEBPACK_IMPORTED_MODULE_6__["ThankyouPage"]]
    })
], ThankyouPageModule);



/***/ }),

/***/ "./src/app/thankyou/thankyou.page.scss":
/*!*********************************************!*\
  !*** ./src/app/thankyou/thankyou.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  padding-bottom: 0;\n  --background: #fdc600 !important;\n  border: 0;\n}\nion-header ion-toolbar ion-label {\n  margin: 0 auto;\n  display: block;\n  margin-left: -30px;\n  font-weight: bold;\n  color: #000;\n  font-size: 18px;\n}\nion-header ion-toolbar ion-grid ion-row ion-text {\n  color: #000;\n  font-size: 15px;\n  text-align: center;\n  font-weight: 500;\n  display: block;\n  margin: 0 15px 0 15px;\n}\nion-header ion-toolbar ion-grid ion-row .button {\n  margin: 0 auto;\n  display: block;\n}\nion-header ion-toolbar ion-grid ion-row .button ion-col {\n  display: inline-grid;\n}\nion-header ion-toolbar ion-grid ion-row .button ion-col ion-button span {\n  font-weight: 900;\n  font-size: 15px;\n}\nion-header ion-toolbar ion-grid ion-row .button ion-col .round {\n  --background: white;\n  width: 125px;\n  --box-shadow: none;\n  color: #000;\n}\n.new-background-color {\n  --background: #fdc600;\n}\n.confirmation-section {\n  border-bottom: 1px solid #ddd;\n  margin-top: 3px;\n  margin-bottom: 5px;\n}\n.confirmation-section ion-col span {\n  font-weight: 800;\n  font-size: 13px;\n  color: #000;\n}\n.confirmation-section ion-col span--number {\n  color: red;\n  float: right;\n}\n.confirmation-section ion-col span--total {\n  color: #fdc600;\n  float: right;\n  margin-right: 10px;\n}\n.confirmation-section .payment {\n  border-bottom: 1px solid #ddd;\n  line-height: 2;\n  width: 100%;\n}\n.confirmation-section p {\n  text-align: justify;\n  margin: 2px 10px 10px 10px;\n  color: #000;\n  font-size: 12px;\n}\n.confirmation-section h5 {\n  width: 100%;\n  margin-left: 0.5rem;\n  color: #000;\n  font-weight: 700;\n  font-family: \"Nunito\", sans-serif;\n}\nion-row ion-col div ion-text {\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  margin-left: 0.4rem;\n}\nion-row ion-col div h6 {\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 800;\n  color: #9b9b9b;\n  margin-left: 0.4rem;\n}\nion-row ion-col div ion-row ion-label {\n  font-weight: 600;\n}\nion-row ion-col div ion-row div {\n  line-height: 1;\n}\n.image {\n  display: block;\n}\n.image ion-img {\n  width: 150px;\n  margin-left: 0.4rem;\n}\n.image ion-text {\n  font-family: \"Nunito\", sans-serif;\n  padding: 5px 0px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL3RoYW5reW91L3RoYW5reW91LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGhhbmt5b3UvdGhhbmt5b3UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUNBRjtBRENFO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSDtBREdJO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDREw7QURHSTtFQUNDLGNBQUE7RUFDQSxjQUFBO0FDREw7QURFSztFQUNDLG9CQUFBO0FDQU47QURFTztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQ0FSO0FER007RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNEUDtBRFNBO0VBQ0MscUJBQUE7QUNORDtBRFNBO0VBQ0MsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNORDtBRFFFO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ05IO0FET0c7RUFDQyxVQUFBO0VBQ0EsWUFBQTtBQ0xKO0FET0c7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTEo7QURTQztFQUNJLDZCQUFBO0VBQ0gsY0FBQTtFQUNBLFdBQUE7QUNQRjtBRFNDO0VBQ0ksbUJBQUE7RUFDSCwwQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUEY7QURTQztFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDUEY7QURhRztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ1ZKO0FEWUc7RUFDQyxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVko7QURhSTtFQUNDLGdCQUFBO0FDWEw7QURhSTtFQUNDLGNBQUE7QUNYTDtBRGtCQTtFQUNDLGNBQUE7QUNmRDtBRGdCQztFQUNDLFlBQUE7RUFDQSxtQkFBQTtBQ2RGO0FEZ0JDO0VBQ0MsaUNBQUE7RUFDQSx5QkFBQTtBQ2RGIiwiZmlsZSI6InNyYy9hcHAvdGhhbmt5b3UvdGhhbmt5b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcblx0aW9uLXRvb2xiYXIge1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDA7XHJcblx0XHQtLWJhY2tncm91bmQ6ICNmZGM2MDAgIWltcG9ydGFudDtcclxuXHRcdGJvcmRlcjogMDtcclxuXHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdH1cclxuXHRcdGlvbi1ncmlkIHtcclxuXHRcdFx0aW9uLXJvdyB7XHJcblx0XHRcdFx0aW9uLXRleHQge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRtYXJnaW46IDAgMTVweCAwIDE1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5idXR0b24ge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdGlvbi1jb2wge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuXHRcdFx0XHRcdFx0aW9uLWJ1dHRvbiB7XHJcblx0XHRcdFx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogOTAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQucm91bmQge1xyXG5cdFx0XHRcdFx0XHRcdC0tYmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEyNXB4O1xyXG5cdFx0XHRcdFx0XHRcdC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xyXG5cdC0tYmFja2dyb3VuZDogI2ZkYzYwMDtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1zZWN0aW9uIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHRtYXJnaW4tdG9wOiAzcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdGlvbi1jb2wge1xyXG5cdFx0c3BhbiB7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA4MDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdCYtLW51bWJlciB7XHJcblx0XHRcdFx0Y29sb3I6IHJlZDtcclxuXHRcdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji0tdG90YWwge1xyXG5cdFx0XHRcdGNvbG9yOiAjZmRjNjAwO1xyXG5cdFx0XHRcdGZsb2F0OiByaWdodDtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LnBheW1lbnQge1xyXG5cdCAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdHAge1xyXG5cdCAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cdFx0bWFyZ2luOiAycHggMTBweCAxMHB4IDEwcHg7XHJcblx0XHRjb2xvcjogIzAwMDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcblx0aDUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tbGVmdDogMC41cmVtO1xyXG5cdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdOdW5pdG8nLHNhbnMtc2VyaWY7XHJcblx0fVxyXG59XHJcbmlvbi1yb3cge1xyXG5cdGlvbi1jb2wge1xyXG5cdFx0ZGl2IHtcclxuXHRcdFx0aW9uLXRleHQge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMC40cmVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdGg2IHtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRcdFx0XHRjb2xvcjogIzliOWI5YjtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMC40cmVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi1yb3cge1xyXG5cdFx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRkaXYge1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGlvbi1pbWcge1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDAuNHJlbTtcclxuXHR9XHJcblx0aW9uLXRleHQge1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdOdW5pdG8nLHNhbnMtc2VyaWY7XHJcblx0XHRwYWRkaW5nOiA1cHggMHB4IDBweCAxMHB4O1xyXG5cdH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRjNjAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tZ3JpZCBpb24tcm93IGlvbi10ZXh0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDE1cHggMCAxNXB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tZ3JpZCBpb24tcm93IC5idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1ncmlkIGlvbi1yb3cgLmJ1dHRvbiBpb24tY29sIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1ncmlkIGlvbi1yb3cgLmJ1dHRvbiBpb24tY29sIGlvbi1idXR0b24gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWdyaWQgaW9uLXJvdyAuYnV0dG9uIGlvbi1jb2wgLnJvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEyNXB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xuICAtLWJhY2tncm91bmQ6ICNmZGM2MDA7XG59XG5cbi5jb25maXJtYXRpb24tc2VjdGlvbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jb25maXJtYXRpb24tc2VjdGlvbiBpb24tY29sIHNwYW4ge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmNvbmZpcm1hdGlvbi1zZWN0aW9uIGlvbi1jb2wgc3Bhbi0tbnVtYmVyIHtcbiAgY29sb3I6IHJlZDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNvbmZpcm1hdGlvbi1zZWN0aW9uIGlvbi1jb2wgc3Bhbi0tdG90YWwge1xuICBjb2xvcjogI2ZkYzYwMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29uZmlybWF0aW9uLXNlY3Rpb24gLnBheW1lbnQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbmZpcm1hdGlvbi1zZWN0aW9uIHAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW46IDJweCAxMHB4IDEwcHggMTBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb25maXJtYXRpb24tc2VjdGlvbiBoNSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1yb3cgaW9uLWNvbCBkaXYgaW9uLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcbn1cbmlvbi1yb3cgaW9uLWNvbCBkaXYgaDYge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICM5YjliOWI7XG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XG59XG5pb24tcm93IGlvbi1jb2wgZGl2IGlvbi1yb3cgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1yb3cgaW9uLWNvbCBkaXYgaW9uLXJvdyBkaXYge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaW1hZ2UgaW9uLWltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcbn1cbi5pbWFnZSBpb24tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiA1cHggMHB4IDBweCAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/thankyou/thankyou.page.ts":
/*!*******************************************!*\
  !*** ./src/app/thankyou/thankyou.page.ts ***!
  \*******************************************/
/*! exports provided: ThankyouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPage", function() { return ThankyouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _feedback_modal_feedback_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feedback-modal/feedback-modal.page */ "./src/app/feedback-modal/feedback-modal.page.ts");







let ThankyouPage = class ThankyouPage {
    constructor(platform, router, callNumber, modalController) {
        this.platform = platform;
        this.router = router;
        this.callNumber = callNumber;
        this.modalController = modalController;
        let fullname = "123456789000";
        let names = fullname.split("9", -3);
        // let firstName = names[0];
        // console.log(firstName)
        let lastName = [(names.length - 1)];
        console.log(names);
        var str = "12654567890123";
        var n1 = str.slice(11);
        console.log(n1);
        var finalData = localStorage.getItem('final_confirmation');
        this.confirmation = JSON.parse(finalData);
        console.log(this.confirmation.Data);
        this.confirmatioNo = this.confirmation.Data.confirmationNo;
        this.vehicleImage = this.confirmation.Data.clsSelectVehicelDetails.Vehicle_Image;
        this.vehicleName = this.confirmation.Data.clsSelectVehicelDetails.Vehicle_Name;
        this.passegerName = this.confirmation.Data.clsSelectVehicelDetails.clsPaymentDetail.BFirstName;
        const value1 = localStorage.getItem('fromLocation');
        this.locationstart = value1;
        const value2 = localStorage.getItem('toLocation');
        this.locationend = value2;
        this.locationFrom = this.confirmation.Data.FromLocationDetail.Location_City;
        this.locationTo = this.confirmation.Data.ToLocationDetail.Location_City;
        this.selectDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.confirmation.Data.PickUpDateDisp).format('DD');
        this.selectMonthYear = moment__WEBPACK_IMPORTED_MODULE_2__(this.confirmation.Data.PickUpDateDisp).format('MMM YYYY');
        this.selectDay = moment__WEBPACK_IMPORTED_MODULE_2__(this.confirmation.Data.PickUpDateDisp).format('dddd');
        this.fulltime = moment__WEBPACK_IMPORTED_MODULE_2__(this.confirmation.Data.PickupDateTime).format('H:mm');
        this.halftime = moment__WEBPACK_IMPORTED_MODULE_2__(this.confirmation.Data.PickupDateTime).format('h:mm A');
        this.totalPrice = this.confirmation.Data.clsSelectVehicelDetails.clsVehicleFinalRates.NewInclusivealltax;
        // var finalAmount = this.confirmation.Data
        // localStorage.getItem('Final_rate');
        // this.final_Price = finalAmount;
        //--------------------------------Roundtrip------------------------//        
        this.serviceName = this.confirmation.Data.TypeOfServiceName;
        if (this.serviceName == "Round Trip") {
            this.vehicleImage2 = this.confirmation.Data.clsSelectReturnVehicelDetails.Vehicle_Image;
            this.vehicleName2 = this.confirmation.Data.clsSelectReturnVehicelDetails.Vehicle_Name;
            this.passegerName2 = this.confirmation.Data.clsSelectReturnVehicelDetails.clsPaymentDetail.BFirstName;
            this.selectDate2 = moment__WEBPACK_IMPORTED_MODULE_2__(this.confirmation.Data.ReturnDateDisp).format('DD');
            this.selectMonthYear2 = moment__WEBPACK_IMPORTED_MODULE_2__(this.confirmation.Data.ReturnDateDisp).format('MMM YYYY');
            this.selectDay2 = moment__WEBPACK_IMPORTED_MODULE_2__(this.confirmation.Data.ReturnDateDisp).format('dddd');
            this.fulltime2 = moment__WEBPACK_IMPORTED_MODULE_2__(this.confirmation.Data.ReturnDateTime).format('H:mm');
            this.halftime2 = moment__WEBPACK_IMPORTED_MODULE_2__(this.confirmation.Data.ReturnDateTime).format('h:mm A');
            this.final_Price = (Number(this.confirmation.Data.clsSelectVehicelDetails.clsVehicleFinalRates.NewInclusivealltax) +
                Number(this.confirmation.Data.clsSelectReturnVehicelDetails.clsVehicleFinalRates.NewInclusivealltax)).toFixed(2);
        }
        //--------------------------------Roundtrip------------------------//
    }
    ngOnInit() {
    }
    homepage() {
        localStorage.removeItem('salesTax');
        localStorage.removeItem('amenityData');
        localStorage.removeItem('salesTax2');
        localStorage.removeItem('amenityData2');
        localStorage.removeItem('car_detail2');
        localStorage.removeItem('car_detail');
        localStorage.removeItem('all_detail');
        this.router.navigate(['/home']);
    }
    ionViewDidEnter() {
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    toCall() {
        this.callNumber.callNumber("+12123666600", true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    // ngOnDestroy() {
    //   this.backButtonSubscription.unsubscribe();
    // }
    writeTous() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _feedback_modal_feedback_modal_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackModalPage"],
            });
            return yield modal.present();
        });
    }
};
ThankyouPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
ThankyouPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thankyou',
        template: __webpack_require__(/*! raw-loader!./thankyou.page.html */ "./node_modules/raw-loader/index.js!./src/app/thankyou/thankyou.page.html"),
        styles: [__webpack_require__(/*! ./thankyou.page.scss */ "./src/app/thankyou/thankyou.page.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], ThankyouPage);



/***/ })

}]);
//# sourceMappingURL=thankyou-thankyou-module-es2015.js.map