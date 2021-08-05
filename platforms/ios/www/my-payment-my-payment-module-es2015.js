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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-payment.page */ "./src/app/my-payment/my-payment.page.ts");







const routes = [
    {
        path: '',
        component: _my_payment_page__WEBPACK_IMPORTED_MODULE_6__["MyPaymentPage"]
    }
];
let MyPaymentPageModule = class MyPaymentPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_modal_payment_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../payment-modal/payment-modal.page */ "./src/app/payment-modal/payment-modal.page.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");







let MyPaymentPage = class MyPaymentPage {
    constructor(router, envservice, modalController, loadingController, appcomp, alertController) {
        this.router = router;
        this.envservice = envservice;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.appcomp = appcomp;
        this.alertController = alertController;
        this.formData = { "dfltWhere": "", "IsActive": "", "iColumns": "", "iDisplayLength": "", "UserID": "" };
    }
    ngOnInit() {
        // this.getPaymentDetails();
        if (localStorage.getItem("user_id")) {
            this.appcomp.isLoggedin = localStorage.isLoggedin;
            this.appcomp.isLoggedOut = false;
        }
        var user_name = localStorage.getItem('username');
        this.username = user_name;
    }
    ionViewWillEnter() {
        this.getPaymentDetails();
    }
    addPayment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.removeItem('addPayments');
            const modal = yield this.modalController.create({
                component: _payment_modal_payment_modal_page__WEBPACK_IMPORTED_MODULE_5__["PaymentModalPage"]
            });
            modal.onDidDismiss()
                .then((data) => {
                this.getPaymentDetails();
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
    getPaymentDetails() {
        var id = localStorage.getItem("user_id");
        this.userId = id;
        this.presentLoading().then(a => {
            this.formData.dfltWhere = "All";
            this.formData.IsActive = "true";
            this.formData.iColumns = "10";
            this.formData.iDisplayLength = "10";
            this.formData.UserID = this.userId;
            this.envservice.getPaymentList(this.formData).then((data) => {
                this.response = JSON.parse(data.data);
                console.log(this.response);
                this.payments = this.response.Data.Data.aaData;
                this.loadingController.dismiss();
            });
        });
    }
    presentModal(values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(values);
            localStorage.setItem("addPayments", JSON.stringify(values));
            const modal = yield this.modalController.create({
                component: _payment_modal_payment_modal_page__WEBPACK_IMPORTED_MODULE_5__["PaymentModalPage"]
            });
            return yield modal.present();
        });
    }
    deletePayment(values) {
        localStorage.setItem("addPayments", JSON.stringify(values));
        if (localStorage.getItem('addPayments')) {
            var paymentDetails = localStorage.getItem('addPayments');
            this.paymentInfo = JSON.parse(paymentDetails);
            console.log(this.paymentInfo);
        }
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Are you sure want to Delete ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.presentLoading().then(a => {
                                this.envservice.deletePayment(this.paymentInfo.CCInfoId, this.username, this.userId).subscribe((data) => {
                                    console.log(data);
                                    if (data.Message == 'success') {
                                        this.alertInfo();
                                        this.getPaymentDetails();
                                    }
                                });
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    alertInfo() {
        alert('Card Info deleted Successfully..!!');
        this.loadingController.dismiss();
    }
};
MyPaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
MyPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-payment',
        template: __webpack_require__(/*! raw-loader!./my-payment.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-payment/my-payment.page.html"),
        styles: [__webpack_require__(/*! ./my-payment.page.scss */ "./src/app/my-payment/my-payment.page.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], MyPaymentPage);



/***/ })

}]);
//# sourceMappingURL=my-payment-my-payment-module-es2015.js.map