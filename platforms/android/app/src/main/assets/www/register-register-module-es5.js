(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"--background: transparent;\">\n  <ion-toolbar class=\"transparent-toolbar\" style=\"--border-width: 0; border-bottom: none;--background: transparent;\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"b1\">\n  <div style=\"display: table;position: absolute;left: 0;top: 0;height: 100%;width: 100%;\">\n    <div style=\"display: table-cell;vertical-align: middle;\">\n      <form [formGroup]=\"form1\" class=\"login-form\" (ngSubmit)=\"registration(form1.value)\">\n        <ion-card class=\"card-css\">\n          <ion-card-header>\n            <ion-img src=\"assets/nyclogo.png\" class=\"img-nyclogo\"></ion-img>\n          </ion-card-header>\n          <ion-card-content>\n    \n            <div class=\"input-border\">\n              <ion-label position=\"stacked\">Firstname</ion-label>\n              <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n            </div>\n    \n            <div lines=\"none\" *ngIf=\"(form1.get('firstName').hasError('required') ) && form1.get('firstName').touched\">\n              <div class=\"error\" *ngIf=\"form1.get('firstName').hasError('required') && form1.get('firstName').touched\">\n                Please Enter FirstName\n              </div>\n            </div>\n    \n            <div class=\"input-border\">\n              <ion-label position=\"stacked\">Lastname</ion-label>\n              <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n            </div>\n    \n            <div lines=\"none\" *ngIf=\"(form1.get('lastName').hasError('required') ) && form1.get('lastName').touched\">\n              <div class=\"error\" *ngIf=\"form1.get('lastName').hasError('required') && form1.get('lastName').touched\">\n                Please Enter LastName\n              </div>\n            </div>\n    \n            <div class=\"input-border\">\n              <ion-label position=\"stacked\">Email</ion-label>\n              <ion-input type=\"text\" class=\"input-css\" formControlName=\"email\"></ion-input>\n            </div>\n            <div lines=\"none\" *ngIf=\"(form1.get('email').hasError('required') ) && form1.get('email').touched\">\n              <div class=\"error\" *ngIf=\"form1.get('email').hasError('required') && form1.get('email').touched\">\n                Please Enter valid Email\n              </div>\n            </div>\n    \n            <div class=\"input-border\">\n              <ion-label position=\"stacked\">Password</ion-label>\n              <ion-input type=\"password\" class=\"input-css\" formControlName=\"password\"></ion-input>\n            </div>\n            <div lines=\"none\" *ngIf=\"(form1.get('password').hasError('required') ) && form1.get('password').touched\">\n              <div class=\"error\" *ngIf=\"form1.get('password').hasError('required') && form1.get('password').touched\">\n                Please Enter Password\n              </div>\n            </div>\n    \n            <div class=\"input-border\">\n              <ion-label position=\"stacked\">Repeat Password</ion-label>\n              <ion-input type=\"password\" class=\"input-css\" formControlName=\"rePassword\"></ion-input>\n            </div>\n            <div lines=\"none\" *ngIf=\"(form1.get('rePassword').hasError('required') ) && form1.get('rePassword').touched\">\n              <div class=\"error\" *ngIf=\"form1.get('rePassword').hasError('required') && form1.get('rePassword').touched\">\n                Please Enter Repeat Password\n              </div>\n            </div>\n            <ion-button type=\"submit\" class=\"login-button\" [disabled]=\"!form1.valid\"> Register</ion-button>\n          </ion-card-content>\n        </ion-card>\n      </form>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-buttons ion-back-button {\n  color: #fff;\n  opacity: 0.7;\n}\n\nion-card ion-card-header {\n  margin: 0;\n  padding: 0 !important;\n}\n\nion-card-content ion-item ion-label {\n  font-size: 14px;\n  color: #000;\n  margin: 0;\n  padding-bottom: 5px;\n}\n\nion-content.b1 {\n  position: absolute;\n  --background: linear-gradient(to bottom, #00000080, #04040424, #000000a6, #000),\n  url('login-background.png') no-repeat center center / cover;\n}\n\n.img-nyclogo {\n  width: 100px;\n  margin: auto;\n  margin-top: 10px;\n}\n\n.card-css {\n  border-radius: 0px;\n  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.12);\n}\n\n.card-css ion-card-content {\n  padding-bottom: 5px;\n}\n\n.card-css ion-card-content .input-border {\n  border-bottom: 1px solid #ddd;\n}\n\n.card-css ion-card-content .input-border ion-input {\n  font-size: 13px;\n  color: #000;\n  letter-spacing: 0.5px;\n  --padding-bottom: 4px;\n  --padding-top: 10px;\n  --padding-start: 0;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 900;\n}\n\n.card-css ion-card-content .input-border ion-label {\n  position: relative;\n  top: 0.5rem;\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.5px;\n}\n\n.card-css ion-card-content .login-button {\n  --background: var(--ion-color-primary);\n  --background: #fdc600;\n  color: black;\n  text-transform: capitalize;\n  width: 100%;\n  margin-top: 13px;\n  --border-radius: 0px;\n  font-size: 20px;\n  height: 40px;\n}\n\n.card-css ion-card-content .error {\n  font-size: 12px;\n  color: red;\n  padding: 5px 0px;\n}\n\n.header-md:after {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBUjs7QURNSTtFQUNJLFNBQUE7RUFDQSxxQkFBQTtBQ0hSOztBRFFRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNMWjs7QURVQTtFQUNJLGtCQUFBO0VBQ0E7NkRBQUE7QUNOSjs7QURTSztFQUNHLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNOUjs7QURRSztFQUNHLGtCQUFBO0VBQ0EseUNBQUE7QUNMUjs7QURNUTtFQUNJLG1CQUFBO0FDSlo7O0FES1k7RUFDSSw2QkFBQTtBQ0hoQjs7QURJZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0ZwQjs7QURJZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FDRnBCOztBREtZO0VBQ0ksc0NBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNIaEI7O0FES2E7RUFDRyxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDSGhCOztBRE9LO0VBQ0ksaUNBQUE7QUNKVCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b25zIHtcclxuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3BhY2l0eTogLjc7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LmIxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMDAwMDgwLCAjMDQwNDA0MjQsICMwMDAwMDBhNiwgIzAwMCksIFxyXG4gICAgdXJsKCcuLi8uLi9hc3NldHMvbG9naW4tYmFja2dyb3VuZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcbiAgICAgLmltZy1ueWNsb2dve1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICB9XHJcbiAgICAgLmNhcmQtY3NzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwcHggMXB4IHJnYmEoMCwwLDAsLjEyKTtcclxuICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgLmlucHV0LWJvcmRlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyxzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9naW4tYnV0dG9uICB7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZkYzYwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgLmhlYWRlci1tZDphZnRlciB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICB9IiwiaW9uLWJ1dHRvbnMgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG5pb24tY29udGVudC5iMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwODAsICMwNDA0MDQyNCwgIzAwMDAwMGE2LCAjMDAwKSxcbiAgdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luLWJhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbi5pbWctbnljbG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2FyZC1jc3Mge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmNhcmQtY3NzIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmNhcmQtY3NzIGlvbi1jYXJkLWNvbnRlbnQgLmlucHV0LWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuLmNhcmQtY3NzIGlvbi1jYXJkLWNvbnRlbnQgLmlucHV0LWJvcmRlciBpb24taW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5jYXJkLWNzcyBpb24tY2FyZC1jb250ZW50IC5pbnB1dC1ib3JkZXIgaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbi5jYXJkLWNzcyBpb24tY2FyZC1jb250ZW50IC5sb2dpbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmRjNjAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmNhcmQtY3NzIGlvbi1jYXJkLWNvbnRlbnQgLmVycm9yIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(envservice, _FB, loadingController, router) {
        this.envservice = envservice;
        this._FB = _FB;
        this.loadingController = loadingController;
        this.router = router;
        this.formData = { "FirstName": "", "LastName": "", "EmailId": "", "Password": "" };
        this.form1 = this._FB.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rePassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
        localStorage.removeItem('forgot_password');
    };
    RegisterPage.prototype.registration = function () {
        var _this = this;
        if (this.form1.get('rePassword').value == this.form1.get('password').value) {
            this.presentLoading().then(function (a) {
                _this.formData.FirstName = _this.form1.get('firstName').value;
                _this.formData.LastName = _this.form1.get('lastName').value;
                _this.formData.EmailId = _this.form1.get('email').value;
                _this.formData.Password = _this.form1.get('password').value;
                _this.envservice.register(_this.formData).subscribe(function (data) {
                    localStorage.setItem("loginData", JSON.stringify(data.Data.Data));
                    localStorage.setItem("user_id", data.Data.Data.Userid);
                    localStorage.setItem("username", data.Data.Data.Email);
                    localStorage.setItem("loginData", JSON.stringify(data.Data.Data));
                    if (data.Data.Data.Msg == 'Registration Sucess') {
                        var navigationExtras = {
                            queryParams: {
                                special: JSON.stringify(_this.formData.EmailId)
                            }
                        };
                        _this.router.navigate(['/otp-confirmation'], navigationExtras);
                        _this.loadingController.dismiss();
                        // this.router.navigate(['/otp-confirmation']);
                        // this.loadingController.dismiss();
                    }
                }, function (error) {
                    alert(error.error.Message);
                    _this.loadingController.dismiss();
                });
            });
        }
        else {
            alert('Password Mismatch!!');
        }
    };
    RegisterPage.prototype.presentLoading = function () {
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
    RegisterPage.ctorParameters = function () { return [
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map