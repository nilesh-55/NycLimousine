(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-payment-my-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-payment/my-payment.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-payment/my-payment.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title class=\"page--title\">My Payments</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div padding>\n        <h5 style=\"font-size: 14px;color: grey;\">\n            Payment Methods\n        </h5>\n    </div>\n\n    <ion-list style=\"padding:0\">\n        <ion-item *ngFor=\"let items of payments\">\n            <ion-img slot=\"start\" src=\"assets/icon/payment-method-visa-512.png\" style=\"width:50px;\"></ion-img>\n            {{items.CardNumber}}\n            <ion-icon name=\"trash\" slot=\"end\" class=\"payment-css2\" (click)=\"deletePayment(items)\"></ion-icon>\n            <ion-icon name=\"create\" slot=\"end\" (click)=\"presentModal(items)\" class=\"payment-css3\"></ion-icon>\n        </ion-item>\n\n    </ion-list>\n\n    <div padding>\n        <ion-button class=\"nyc-button\" (click)=\"addPayment()\">Add Payment</ion-button>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/my-payment/my-payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-payment/my-payment.module.ts ***!
  \*************************************************/
/*! exports provided: MyPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPaymentPageModule", function() { return MyPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-payment.page */ "./src/app/my-payment/my-payment.page.ts");







var routes = [
    {
        path: '',
        component: _my_payment_page__WEBPACK_IMPORTED_MODULE_6__["MyPaymentPage"]
    }
];
var MyPaymentPageModule = /** @class */ (function () {
    function MyPaymentPageModule() {
    }
    MyPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_payment_page__WEBPACK_IMPORTED_MODULE_6__["MyPaymentPage"]]
        })
    ], MyPaymentPageModule);
    return MyPaymentPageModule;
}());



/***/ }),

/***/ "./src/app/my-payment/my-payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-payment/my-payment.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".payment-css1 {\n  color: black;\n  font-weight: bold;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.payment-css2 {\n  float: right;\n  font-size: 26px;\n  color: red;\n  margin-left: 10px;\n}\n\n.payment-css3 {\n  float: right;\n  font-size: 26px;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL215LXBheW1lbnQvbXktcGF5bWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL215LXBheW1lbnQvbXktcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbXktcGF5bWVudC9teS1wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LWNzczEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnBheW1lbnQtY3NzMntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnBheW1lbnQtY3NzM3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59IiwiLnBheW1lbnQtY3NzMSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ucGF5bWVudC1jc3MyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucGF5bWVudC1jc3MzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiBncmV5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/my-payment/my-payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-payment/my-payment.page.ts ***!
  \***********************************************/
/*! exports provided: MyPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPaymentPage", function() { return MyPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_modal_payment_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../payment-modal/payment-modal.page */ "./src/app/payment-modal/payment-modal.page.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");







var MyPaymentPage = /** @class */ (function () {
    function MyPaymentPage(router, envservice, modalController, loadingController, appcomp, alertController) {
        this.router = router;
        this.envservice = envservice;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.appcomp = appcomp;
        this.alertController = alertController;
        this.formData = { "dfltWhere": "", "IsActive": "", "iColumns": "", "iDisplayLength": "", "UserID": "" };
    }
    MyPaymentPage.prototype.ngOnInit = function () {
        // this.getPaymentDetails();
        if (localStorage.getItem("user_id")) {
            this.appcomp.isLoggedin = localStorage.isLoggedin;
            this.appcomp.isLoggedOut = false;
        }
        var user_name = localStorage.getItem('username');
        this.username = user_name;
    };
    MyPaymentPage.prototype.ionViewWillEnter = function () {
        this.getPaymentDetails();
    };
    MyPaymentPage.prototype.addPayment = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.removeItem('addPayments');
                        return [4 /*yield*/, this.modalController.create({
                                component: _payment_modal_payment_modal_page__WEBPACK_IMPORTED_MODULE_5__["PaymentModalPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.getPaymentDetails();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MyPaymentPage.prototype.presentLoading = function () {
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
    MyPaymentPage.prototype.getPaymentDetails = function () {
        var _this = this;
        var id = localStorage.getItem("user_id");
        this.userId = id;
        this.presentLoading().then(function (a) {
            _this.formData.dfltWhere = "All";
            _this.formData.IsActive = "true";
            _this.formData.iColumns = "10";
            _this.formData.iDisplayLength = "10";
            _this.formData.UserID = _this.userId;
            _this.envservice.getPaymentList(_this.formData).then(function (data) {
                _this.response = JSON.parse(data.data);
                console.log(_this.response);
                _this.payments = _this.response.Data.Data.aaData;
                _this.loadingController.dismiss();
            });
        });
    };
    MyPaymentPage.prototype.presentModal = function (values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(values);
                        localStorage.setItem("addPayments", JSON.stringify(values));
                        return [4 /*yield*/, this.modalController.create({
                                component: _payment_modal_payment_modal_page__WEBPACK_IMPORTED_MODULE_5__["PaymentModalPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MyPaymentPage.prototype.deletePayment = function (values) {
        localStorage.setItem("addPayments", JSON.stringify(values));
        if (localStorage.getItem('addPayments')) {
            var paymentDetails = localStorage.getItem('addPayments');
            this.paymentInfo = JSON.parse(paymentDetails);
            console.log(this.paymentInfo);
        }
        this.presentAlertConfirm();
    };
    MyPaymentPage.prototype.presentAlertConfirm = function () {
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
                                            _this.envservice.deletePayment(_this.paymentInfo.CCInfoId, _this.username, _this.userId).subscribe(function (data) {
                                                console.log(data);
                                                if (data.Message == 'success') {
                                                    _this.alertInfo();
                                                    _this.getPaymentDetails();
                                                }
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
    MyPaymentPage.prototype.alertInfo = function () {
        alert('Card Info deleted Successfully..!!');
        this.loadingController.dismiss();
    };
    MyPaymentPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    MyPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-payment',
            template: __webpack_require__(/*! raw-loader!./my-payment.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-payment/my-payment.page.html"),
            styles: [__webpack_require__(/*! ./my-payment.page.scss */ "./src/app/my-payment/my-payment.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], MyPaymentPage);
    return MyPaymentPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-payment-my-payment-module-es5.js.map