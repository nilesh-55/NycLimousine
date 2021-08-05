(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytrips-mytrips-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mytrips/mytrips.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mytrips/mytrips.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Trip</ion-title>\n    <!-- <ion-select class=\"all-select-button\" slot=\"end\">\n      <ion-select-option selected><span>All</span></ion-select-option>\n      <ion-select-option><span>Dates</span></ion-select-option>\n      </ion-select> -->\n      <ion-select class=\"all-select-button\" slot=\"end\" (ionChange)=\"openDates($event)\">\n        <ion-select-option selected><span>All</span></ion-select-option>\n        <ion-select-option><span>Select Dates</span></ion-select-option>\n            </ion-select>\n  </ion-toolbar>\n</ion-header >\n\n\n<ion-content class=\"fondologin\">\n  <ion-card style=\"margin: 6px;\" *ngFor = \"let items of myTrips\">\n      \n    \n      <ion-card-content style=\"padding: 7px;\">\n          <h5 class=\"select-css2\">{{items.Confirmation_No}}</h5>\n\n          <ion-row style=\"margin-top: -5px;\">\n              <ion-col size=\"8\">\n                <span style=\"font-size: 25px;color: black;font-weight: 700;\">{{items.Pickup_Date | date: 'dd' }}</span> \n                <span style=\"font-size: 8px; color: grey;font-weight: bold;margin-left: 5px;\">WednesDay</span>\n                <span style=\"font-size: 8px; color:black;font-weight: 900;margin-left: -46px;position: absolute;margin-top: 6px;\">\n                  {{items.Pickup_Date | date:'MMM-yyyy'}}</span>\n                  <span style=\"font-size: 23px;color: black;font-weight: 700;margin-left: 2px;\">{{items.Pickup_Date | date:'H:mm'}}</span> \n                <span style=\"font-size: 8px; color: grey;font-weight: bold;margin-left: 1px;\">{{items.Pickup_Time}}</span>\n              </ion-col>\n              \n              \n          <ion-col size=\"4\" style=\"text-align: right;\">\n            <h5  style=\"font-size: 22px;color: #f0e130;font-weight: 700;margin-top: 7px;\">$ {{items.FinalFare}}</h5>\n            </ion-col>\n           \n       \n            </ion-row><!--date end-->\n            <hr class=\"select-css5\">\n            <ion-row>\n              <ion-col size=\"4\">\n                <ion-img src=\"assets/icon/visa_PNG14.png\" style=\"width:100px; height: 50px;\"></ion-img>\n                <p class=\"select-css3\"></p>   <p class=\"select-css4\">{{items.Vehicle_Name}}</p>\n            </ion-col>\n\n            <ion-col size=\"8\">\n              \n                <div class=\"location-details\">\n                    <span class=\"location-point start-location\">{{items.From_Location}}</span>\n                   \n                    <!--\n                        <div>\n                          <p class=\"select-css9\" style=\"margin-top:-26px\"></p>\n                          <p class=\"select-css7\" style=\"margin-top:-28px\">2 Stops</p>\n                        </div>\n                    -->\n                    <span class=\"location-point midpoint\"></span>\n\n                    <span class=\"location-point end-location\">{{items.To_Location}}</span>\n                </div>\n\n              </ion-col>\n                \n              </ion-row>\n           \n      </ion-card-content>\n      \n    </ion-card>\n   \n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/mytrips/mytrips.module.ts":
/*!*******************************************!*\
  !*** ./src/app/mytrips/mytrips.module.ts ***!
  \*******************************************/
/*! exports provided: MytripsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripsPageModule", function() { return MytripsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mytrips_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytrips.page */ "./src/app/mytrips/mytrips.page.ts");







var routes = [
    {
        path: '',
        component: _mytrips_page__WEBPACK_IMPORTED_MODULE_6__["MytripsPage"]
    }
];
var MytripsPageModule = /** @class */ (function () {
    function MytripsPageModule() {
    }
    MytripsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mytrips_page__WEBPACK_IMPORTED_MODULE_6__["MytripsPage"]]
        })
    ], MytripsPageModule);
    return MytripsPageModule;
}());



/***/ }),

/***/ "./src/app/mytrips/mytrips.page.scss":
/*!*******************************************!*\
  !*** ./src/app/mytrips/mytrips.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-css1 {\n  height: 29px;\n  float: right;\n  border: 1px solid yellow;\n  border-radius: 13px;\n}\n\nion-title {\n  font-family: \"Nunito\", sans-serif;\n  font-weight: bold;\n  color: #000;\n}\n\n.select-css2 {\n  border: 1px solid red;\n  width: 73px;\n  border-radius: 12px;\n  padding-left: 7px;\n  background: red;\n  color: white;\n  font-weight: bold;\n}\n\n.select-css3 {\n  float: left;\n  width: 4px;\n  height: 11px;\n  background: #f0e130;\n}\n\nspan.location-point {\n  display: block;\n  position: relative;\n  padding-left: 15px;\n  margin-bottom: 10px;\n  font-size: 11px;\n}\n\nspan.location-point:before {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 6px;\n}\n\nspan.location-point:after {\n  content: \"\";\n  position: absolute;\n  left: 1px;\n  top: 22px;\n  width: 6px;\n  background: #a1a1a1;\n  height: 6px;\n  border-radius: 50%;\n}\n\nspan.location-point.start-location:before {\n  background: green;\n}\n\nspan.location-point.end-location:before {\n  background: red;\n}\n\nspan.location-point.end-location:after {\n  top: -6px;\n}\n\nspan.location-point.midpoint:after {\n  display: none;\n}\n\nspan.location-point.midpoint:after {\n  top: -18px;\n  margin: 0;\n}\n\n.all-select-button {\n  --background: #fdc600;\n  background: #fdc600;\n  border-radius: 20px;\n  margin-right: 10px;\n  color: black;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL215dHJpcHMvbXl0cmlwcy5wYWdlLnNjc3MiLCJzcmMvYXBwL215dHJpcHMvbXl0cmlwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxZQUFBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFFSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBRUksV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDREo7O0FER0k7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0RSOztBREdJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FER0E7RUFDSSxTQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL215dHJpcHMvbXl0cmlwcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWNzczFcclxue1xyXG5oZWlnaHQ6IDI5cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgXHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uc2VsZWN0LWNzczJcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgd2lkdGg6IDczcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNlbGVjdC1jc3MzXHJcbntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogMTFweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMGUxMzA7XHJcbn1cclxuXHJcbnNwYW4ubG9jYXRpb24tcG9pbnR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgXHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxcHg7XHJcbiAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ExYTFhMTtcclxuICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbnNwYW4ubG9jYXRpb24tcG9pbnQuc3RhcnQtbG9jYXRpb246YmVmb3Jle1xyXG4gICAgYmFja2dyb3VuZDpncmVlbjtcclxufVxyXG5zcGFuLmxvY2F0aW9uLXBvaW50LmVuZC1sb2NhdGlvbjpiZWZvcmV7XHJcbiAgICBiYWNrZ3JvdW5kOnJlZDtcclxufVxyXG5zcGFuLmxvY2F0aW9uLXBvaW50LmVuZC1sb2NhdGlvbjphZnRlcntcclxuICAgIHRvcDotNnB4O1xyXG59XHJcbnNwYW4ubG9jYXRpb24tcG9pbnQubWlkcG9pbnQ6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbnNwYW4ubG9jYXRpb24tcG9pbnQubWlkcG9pbnQ6YWZ0ZXIge1xyXG4gICAgdG9wOiAtMThweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFsbC1zZWxlY3QtYnV0dG9uICB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZGM2MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRjNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59IiwiLnNlbGVjdC1jc3MxIHtcbiAgaGVpZ2h0OiAyOXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnNlbGVjdC1jc3MyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB3aWR0aDogNzNweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlbGVjdC1jc3MzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTFweDtcbiAgYmFja2dyb3VuZDogI2YwZTEzMDtcbn1cblxuc3Bhbi5sb2NhdGlvbi1wb2ludCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuc3Bhbi5sb2NhdGlvbi1wb2ludDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA2cHg7XG59XG5zcGFuLmxvY2F0aW9uLXBvaW50OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcHg7XG4gIHRvcDogMjJweDtcbiAgd2lkdGg6IDZweDtcbiAgYmFja2dyb3VuZDogI2ExYTFhMTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuc3Bhbi5sb2NhdGlvbi1wb2ludC5zdGFydC1sb2NhdGlvbjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbn1cblxuc3Bhbi5sb2NhdGlvbi1wb2ludC5lbmQtbG9jYXRpb246YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG5zcGFuLmxvY2F0aW9uLXBvaW50LmVuZC1sb2NhdGlvbjphZnRlciB7XG4gIHRvcDogLTZweDtcbn1cblxuc3Bhbi5sb2NhdGlvbi1wb2ludC5taWRwb2ludDphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnNwYW4ubG9jYXRpb24tcG9pbnQubWlkcG9pbnQ6YWZ0ZXIge1xuICB0b3A6IC0xOHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5hbGwtc2VsZWN0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZkYzYwMDtcbiAgYmFja2dyb3VuZDogI2ZkYzYwMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mytrips/mytrips.page.ts":
/*!*****************************************!*\
  !*** ./src/app/mytrips/mytrips.page.ts ***!
  \*****************************************/
/*! exports provided: MytripsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripsPage", function() { return MytripsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trip_dates_trip_dates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../trip-dates/trip-dates.page */ "./src/app/trip-dates/trip-dates.page.ts");







var MytripsPage = /** @class */ (function () {
    function MytripsPage(envservice, appcomp, loadingController, modalController) {
        this.envservice = envservice;
        this.appcomp = appcomp;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.formData = { "dfltWhere": "", "IsActive": "", "iColumns": "", "iDisplayLength": "", "UserID": "" };
        if (localStorage.getItem("user_id")) {
            this.appcomp.isLoggedin = localStorage.isLoggedin;
            this.appcomp.isLoggedOut = false;
        }
    }
    MytripsPage.prototype.ngOnInit = function () {
        this.tripList();
        //   this.isLoggedin=localStorage.isLoggedin;
        // this.isLoggedOut=localStorage.isLoggedOut;
    };
    MytripsPage.prototype.tripList = function () {
        var _this = this;
        var id = localStorage.getItem("user_id");
        this.userId = id;
        this.presentLoading().then(function (a) {
            _this.formData.dfltWhere = "All";
            _this.formData.IsActive = "true";
            _this.formData.iColumns = "10";
            _this.formData.iDisplayLength = "10";
            _this.formData.UserID = _this.userId;
            _this.envservice.getTripList(_this.formData).then(function (data) {
                _this.response = JSON.parse(data.data);
                console.log(_this.response);
                // console.log(data.Data.Data.aaData);
                _this.myTrips = _this.response.Data.Data.aaData;
                var date = _this.response.Data.Data.aaData.Pickup_Date;
                var monthYear = moment__WEBPACK_IMPORTED_MODULE_3__(date).add(0, 'year').format('MMM YYYY');
                var datttt = moment__WEBPACK_IMPORTED_MODULE_3__(date).format('DD');
                var day = moment__WEBPACK_IMPORTED_MODULE_3__(date).format('dddd');
                _this.selectMonthYear = monthYear;
                _this.selectDay = datttt;
                _this.selectDate = day;
                _this.loadingController.dismiss();
            }).catch(function (error) {
                _this.errorResponse = JSON.parse(error.error);
                console.log("error", error.status);
                console.log(_this.errorResponse); // error message as string
                console.log(error.headers);
                _this.loadingController.dismiss();
            });
        });
    };
    MytripsPage.prototype.openDates = function (ev) {
        console.log(ev);
        if (ev.detail.value == "Select Dates") {
            console.log("dsd");
            this.openDatesModal();
        }
    };
    MytripsPage.prototype.openDatesModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _trip_dates_trip_dates_page__WEBPACK_IMPORTED_MODULE_6__["TripDatesPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            // this.getPassengerDetails();
                            console.log(data);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MytripsPage.prototype.presentLoading = function () {
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
    MytripsPage.ctorParameters = function () { return [
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    MytripsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mytrips',
            template: __webpack_require__(/*! raw-loader!./mytrips.page.html */ "./node_modules/raw-loader/index.js!./src/app/mytrips/mytrips.page.html"),
            styles: [__webpack_require__(/*! ./mytrips.page.scss */ "./src/app/mytrips/mytrips.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], MytripsPage);
    return MytripsPage;
}());



/***/ })

}]);
//# sourceMappingURL=mytrips-mytrips-module-es5.js.map