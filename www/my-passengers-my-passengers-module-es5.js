(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-passengers-my-passengers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-passengers/my-passengers.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-passengers/my-passengers.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page--title\">My Passengers</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let items of passenger\">\n    <ion-card-header style=\"padding: 15px 15px 0;\">\n      <ion-card-title style=\"font-size: 16px;\">\n        <ion-icon name=\"person\"></ion-icon> {{items.Passenger_Prefix}} {{items.FirstName}} {{items.LastName}}\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-header style=\"padding: 15px 15px 0;\">\n      <ion-card-title style=\"font-size: 16px;\">\n        <ion-icon name=\"call\"></ion-icon> {{items.Cellno}}\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-header style=\"padding: 15px 15px 0;\">\n      <ion-card-title style=\"font-size: 16px;\">\n        <ion-icon name=\"call\"></ion-icon> {{items.TeleNo}}\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-header style=\"padding: 15px 15px 15px;\">\n      <ion-card-title style=\"font-size: 16px;\">\n        <ion-icon name=\"pin\"></ion-icon> {{items.Address}}\n      </ion-card-title>\n    </ion-card-header>\n    <ion-item>\n    <ion-icon name=\"trash\" slot=\"end\" class=\"payment-css2\" (click)=\"deletePassenger(items)\"></ion-icon>\n    <ion-icon name=\"create\" slot=\"end\" (click)=\"editPassenger(items)\" class=\"payment-css3\"></ion-icon>\n  </ion-item>\n  </ion-card>\n\n  <div padding>\n    <ion-button class=\"nyc-button\" (click)=\"addPassenger()\">Add Passenger</ion-button>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/my-passengers/my-passengers.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/my-passengers/my-passengers.module.ts ***!
  \*******************************************************/
/*! exports provided: MyPassengersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPassengersPageModule", function() { return MyPassengersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_passengers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-passengers.page */ "./src/app/my-passengers/my-passengers.page.ts");







var routes = [
    {
        path: '',
        component: _my_passengers_page__WEBPACK_IMPORTED_MODULE_6__["MyPassengersPage"]
    }
];
var MyPassengersPageModule = /** @class */ (function () {
    function MyPassengersPageModule() {
    }
    MyPassengersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_passengers_page__WEBPACK_IMPORTED_MODULE_6__["MyPassengersPage"]]
        })
    ], MyPassengersPageModule);
    return MyPassengersPageModule;
}());



/***/ }),

/***/ "./src/app/my-passengers/my-passengers.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/my-passengers/my-passengers.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".payment-css1 {\n  margin-left: -19px;\n  color: black;\n  font-weight: bold;\n  float: left;\n  margin-top: 10px;\n}\n\n.payment-css2 {\n  float: right;\n  font-size: 26px;\n  color: red;\n  margin-left: 10px;\n}\n\n.payment-css3 {\n  float: right;\n  font-size: 26px;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL215LXBhc3NlbmdlcnMvbXktcGFzc2VuZ2Vycy5wYWdlLnNjc3MiLCJzcmMvYXBwL215LXBhc3NlbmdlcnMvbXktcGFzc2VuZ2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbXktcGFzc2VuZ2Vycy9teS1wYXNzZW5nZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LWNzczF7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE5cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBheW1lbnQtY3NzMiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wYXltZW50LWNzczMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn0iLCIucGF5bWVudC1jc3MxIHtcbiAgbWFyZ2luLWxlZnQ6IC0xOXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBheW1lbnQtY3NzMiB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnBheW1lbnQtY3NzMyB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogZ3JleTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-passengers/my-passengers.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/my-passengers/my-passengers.page.ts ***!
  \*****************************************************/
/*! exports provided: MyPassengersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPassengersPage", function() { return MyPassengersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_passenger_add_passenger_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-passenger/add-passenger.page */ "./src/app/add-passenger/add-passenger.page.ts");






var MyPassengersPage = /** @class */ (function () {
    function MyPassengersPage(envservice, loadingController, appcomp, modalController, alertController, toastCtrl) {
        this.envservice = envservice;
        this.loadingController = loadingController;
        this.appcomp = appcomp;
        this.modalController = modalController;
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.formData = { "dfltWhere": "", "IsActive": "", "iColumns": "", "iDisplayLength": "", "UserID": "" };
    }
    MyPassengersPage.prototype.ngOnInit = function () {
        this.getPassengerDetails();
        if (localStorage.getItem("user_id")) {
            this.appcomp.isLoggedin = localStorage.isLoggedin;
            this.appcomp.isLoggedOut = false;
        }
        var user_name = localStorage.getItem('username');
        this.username = user_name;
    };
    MyPassengersPage.prototype.getPassengerDetails = function () {
        var _this = this;
        var id = localStorage.getItem("user_id");
        this.userId = id;
        this.presentLoading().then(function (a) {
            _this.formData.dfltWhere = "All";
            _this.formData.IsActive = "true";
            _this.formData.iColumns = "10";
            _this.formData.iDisplayLength = "10";
            _this.formData.UserID = _this.userId;
            _this.envservice.getPassengerList(_this.formData).then(function (data) {
                _this.response = JSON.parse(data.data);
                console.log(_this.response);
                _this.passenger = _this.response.Data.Data.aaData;
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
        });
    };
    MyPassengersPage.prototype.presentLoading = function () {
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
    MyPassengersPage.prototype.addPassenger = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.removeItem('addPassengers');
                        return [4 /*yield*/, this.modalController.create({
                                component: _add_passenger_add_passenger_page__WEBPACK_IMPORTED_MODULE_5__["AddPassengerPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.getPassengerDetails();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MyPassengersPage.prototype.editPassenger = function (value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.setItem("addPassengers", JSON.stringify(value));
                        return [4 /*yield*/, this.modalController.create({
                                component: _add_passenger_add_passenger_page__WEBPACK_IMPORTED_MODULE_5__["AddPassengerPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.getPassengerDetails();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MyPassengersPage.prototype.deletePassenger = function (values) {
        localStorage.setItem("addPayments", JSON.stringify(values));
        if (localStorage.getItem('addPayments')) {
            var paymentDetails = localStorage.getItem('addPayments');
            this.passengerInfo = JSON.parse(paymentDetails);
            console.log(this.passengerInfo);
        }
        this.presentAlertConfirm();
    };
    MyPassengersPage.prototype.presentAlertConfirm = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Are you sure want to Delete ?',
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
                                            _this.envservice.deletePassenger(_this.passengerInfo.PassengerId, _this.userId, _this.username).then(function (data) {
                                                _this.response = JSON.parse(data.data);
                                                console.log(_this.response);
                                                if (_this.response.Message == 'success') {
                                                    _this.presentToast(_this.response.Data);
                                                    _this.loadingController.dismiss();
                                                    _this.getPassengerDetails();
                                                }
                                            })
                                                .catch(function (error) {
                                                _this.errorResponse = JSON.parse(error.error);
                                                console.log("error", error.status);
                                                console.log(_this.errorResponse); // error message as string
                                                console.log(error.headers);
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
    MyPassengersPage.prototype.presentToast = function (info) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: info,
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
    MyPassengersPage.ctorParameters = function () { return [
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    MyPassengersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-passengers',
            template: __webpack_require__(/*! raw-loader!./my-passengers.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-passengers/my-passengers.page.html"),
            styles: [__webpack_require__(/*! ./my-passengers.page.scss */ "./src/app/my-passengers/my-passengers.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], MyPassengersPage);
    return MyPassengersPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-passengers-my-passengers-module-es5.js.map