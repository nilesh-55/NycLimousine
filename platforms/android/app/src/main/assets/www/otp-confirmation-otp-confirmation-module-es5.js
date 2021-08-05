(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-confirmation-otp-confirmation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/otp-confirmation/otp-confirmation.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/otp-confirmation/otp-confirmation.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-buttons slot=\"start\">\n  <ion-back-button defaultHref=\"/\"></ion-back-button>\n</ion-buttons>\n\n<ion-content class=\"b1\">\n\n  <ion-card class=\"card-css\">\n    <ion-card-header>\n      <ion-img src=\"assets/nyclogo.png\" class=\"img-nyclogo\"></ion-img>\n    </ion-card-header>\n    <ion-card-content>\n\n\n      <div *ngIf=\"otpVerification\">\n        <div class=\"input-border\">\n          <ion-label position=\"stacked\">Please Enter your OTP for <br>{{email}}</ion-label>\n          <ion-input placeholder=\"Enter-otp\" [(ngModel)]=\"otp\"></ion-input>\n        </div>\n\n        <ion-button type=\"submit\" class=\"login-button\" (click)=\"enterOtp()\"> Submit</ion-button>\n      </div>\n\n      <div *ngIf=\"newPasssword\">\n\n        <div class=\"input-border\">\n          <ion-input type=\"password\" placeholder=\"password\" [(ngModel)]=\"newEnterPassword\"></ion-input>\n        </div>\n        <div class=\"input-border\">\n          <ion-input type=\"password\" placeholder=\"Repeat Password\" [(ngModel)]=\"re_enterPassword\"></ion-input>\n        </div>\n\n        <ion-button type=\"submit\" class=\"login-button\" (click)=\"getnewPassword()\">Submit</ion-button>\n\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/otp-confirmation/otp-confirmation.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/otp-confirmation/otp-confirmation.module.ts ***!
  \*************************************************************/
/*! exports provided: OtpConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpConfirmationPageModule", function() { return OtpConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otp_confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp-confirmation.page */ "./src/app/otp-confirmation/otp-confirmation.page.ts");







var routes = [
    {
        path: '',
        component: _otp_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["OtpConfirmationPage"]
    }
];
var OtpConfirmationPageModule = /** @class */ (function () {
    function OtpConfirmationPageModule() {
    }
    OtpConfirmationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_otp_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["OtpConfirmationPage"]]
        })
    ], OtpConfirmationPageModule);
    return OtpConfirmationPageModule;
}());



/***/ }),

/***/ "./src/app/otp-confirmation/otp-confirmation.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/otp-confirmation/otp-confirmation.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-buttons ion-back-button {\n  color: #fff;\n  opacity: 0.7;\n}\n\nion-card ion-card-header {\n  margin: 0;\n  padding: 0 !important;\n}\n\nion-card-content ion-item ion-label {\n  font-size: 14px;\n  color: #000;\n  margin: 0;\n  padding-bottom: 5px;\n}\n\nion-content.b1 {\n  position: absolute;\n  --background: linear-gradient(to bottom, #00000080, #04040424, #000000a6, #000),\n  url('login-background.png') no-repeat center center / cover;\n}\n\n.img-nyclogo {\n  width: 100px;\n  margin: auto;\n  margin-top: 10px;\n}\n\n.card-css {\n  margin-top: 5.5rem !important;\n  border-radius: 0px;\n  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.12);\n}\n\n.card-css ion-card-content {\n  padding-bottom: 5px;\n}\n\n.card-css ion-card-content .input-border {\n  border-bottom: 1px solid #ddd;\n  padding-top: 1.5rem;\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.card-css ion-card-content .input-border ion-input {\n  font-size: 13px;\n  color: #000;\n  letter-spacing: 0.5px;\n  --padding-bottom: 4px;\n  --padding-top: 10px;\n  --padding-start: 0;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 900;\n  text-align: initial;\n  margin-top: 1rem;\n}\n\n.card-css ion-card-content .input-border ion-label {\n  color: #000;\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.5px;\n  font-weight: 800;\n}\n\n.card-css ion-card-content .login-button {\n  --background: var(--ion-color-primary);\n  --background: #fdc600;\n  color: black;\n  text-transform: capitalize;\n  width: 100%;\n  margin-top: 13px;\n  --border-radius: 0px;\n  font-size: 20px;\n  height: 40px;\n}\n\n.card-css ion-card-content .error {\n  font-size: 12px;\n  color: red;\n  padding: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL290cC1jb25maXJtYXRpb24vb3RwLWNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL290cC1jb25maXJtYXRpb24vb3RwLWNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FSOztBRElJO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0FDRFI7O0FETVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ0haOztBRFFBO0VBQ0ksa0JBQUE7RUFDQTs2REFBQTtBQ0pKOztBRE9LO0VBQ0csWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0pSOztBRE1LO0VBQ0csNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FDSFI7O0FESVE7RUFDSSxtQkFBQTtBQ0ZaOztBREdZO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNEaEI7O0FERWdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQXBCOztBREVnQjtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNBcEI7O0FER1k7RUFDSSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0RoQjs7QURHYTtFQUNHLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9vdHAtY29uZmlybWF0aW9uL290cC1jb25maXJtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbnMge1xyXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAuNztcclxuICAgIH1cclxufVxyXG5pb24tY2FyZCB7XHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQuYjEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwODAsICMwNDA0MDQyNCwgIzAwMDAwMGE2LCAjMDAwKSwgXHJcbiAgICB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi1iYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuICAgICAuaW1nLW55Y2xvZ297XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgIH1cclxuICAgICAuY2FyZC1jc3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDBweCAxcHggcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAuaW5wdXQtYm9yZGVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9naW4tYnV0dG9uICB7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZkYzYwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICB9IiwiaW9uLWJ1dHRvbnMgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG5pb24tY29udGVudC5iMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwODAsICMwNDA0MDQyNCwgIzAwMDAwMGE2LCAjMDAwKSxcbiAgdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luLWJhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbi5pbWctbnljbG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2FyZC1jc3Mge1xuICBtYXJnaW4tdG9wOiA1LjVyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwIDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jYXJkLWNzcyBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5jYXJkLWNzcyBpb24tY2FyZC1jb250ZW50IC5pbnB1dC1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZC1jc3MgaW9uLWNhcmQtY29udGVudCAuaW5wdXQtYm9yZGVyIGlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmNhcmQtY3NzIGlvbi1jYXJkLWNvbnRlbnQgLmlucHV0LWJvcmRlciBpb24tbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5jYXJkLWNzcyBpb24tY2FyZC1jb250ZW50IC5sb2dpbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRjNjAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmNhcmQtY3NzIGlvbi1jYXJkLWNvbnRlbnQgLmVycm9yIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nOiA1cHggMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/otp-confirmation/otp-confirmation.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/otp-confirmation/otp-confirmation.page.ts ***!
  \***********************************************************/
/*! exports provided: OtpConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpConfirmationPage", function() { return OtpConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var OtpConfirmationPage = /** @class */ (function () {
    function OtpConfirmationPage(router, route, envservice, loadingController) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.envservice = envservice;
        this.loadingController = loadingController;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.special) {
                _this.email = JSON.parse(params.special);
            }
        });
        var value = localStorage.getItem("forgot_password");
        this.forgotPasswordvalue = value;
        console.log(this.forgotPasswordvalue);
        this.otpVerification = true;
        this.newPasssword = false;
    }
    OtpConfirmationPage.prototype.ngOnInit = function () {
    };
    OtpConfirmationPage.prototype.enterOtp = function () {
        var _this = this;
        this.presentLoading().then(function (a) {
            _this.envservice.confirmOtp(_this.email, _this.otp).subscribe(function (data) {
                if (data.Data == 'OTP Match') {
                    var navigationExtras = {
                        queryParams: {
                            special: JSON.stringify(_this.email)
                        }
                    };
                    if (_this.forgotPasswordvalue == '1') {
                        _this.otpVerification = false;
                        _this.newPasssword = true;
                        //  this.getnewPassword();
                    }
                    else {
                        _this.router.navigate(['/mytrips'], navigationExtras);
                        _this.loadingController.dismiss();
                    }
                }
                console.log(data);
            }, function (error) {
                return alert(error.error.Message);
            });
            _this.loadingController.dismiss();
        });
    };
    OtpConfirmationPage.prototype.getnewPassword = function () {
        var _this = this;
        this.presentLoading().then(function (a) {
            var navigationExtras = {
                queryParams: {
                    special: JSON.stringify(_this.email)
                }
            };
            if (_this.newEnterPassword == _this.re_enterPassword) {
                _this.envservice.getNewPassword(_this.re_enterPassword, _this.email).subscribe(function (data) {
                    if (data.Data == 'password Reset') {
                        _this.router.navigate(['/login'], navigationExtras);
                        // this.loadingController.dismiss();
                    }
                }, function (error) {
                    return alert(error.error.Message);
                });
                _this.loadingController.dismiss();
            }
            else {
                alert('Password Mismatch!!');
                _this.loadingController.dismiss();
            }
        });
    };
    OtpConfirmationPage.prototype.presentLoading = function () {
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
    OtpConfirmationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    OtpConfirmationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp-confirmation',
            template: __webpack_require__(/*! raw-loader!./otp-confirmation.page.html */ "./node_modules/raw-loader/index.js!./src/app/otp-confirmation/otp-confirmation.page.html"),
            styles: [__webpack_require__(/*! ./otp-confirmation.page.scss */ "./src/app/otp-confirmation/otp-confirmation.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], OtpConfirmationPage);
    return OtpConfirmationPage;
}());



/***/ })

}]);
//# sourceMappingURL=otp-confirmation-otp-confirmation-module-es5.js.map