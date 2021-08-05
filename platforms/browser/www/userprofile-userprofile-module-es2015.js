(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userprofile-userprofile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/userprofile/userprofile.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/userprofile/userprofile.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"updateProfile(form.value)\">\n    <ion-row>\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">First Name</ion-label>\n        <ion-input type=\"text\" formControlName=\"Firstname\">{{firstname}}</ion-input>\n      </div>\n\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Last Name</ion-label>\n        <ion-input type=\"text\" formControlName=\"Lastname\">{{lastname}}</ion-input>\n      </div>\n\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input disabled formControlName=\"email\">{{email}}</ion-input>\n      </div>\n\n\n      <div class=\"input-border\">\n        <ion-label position=\"stacked\">Phone Number</ion-label>\n        <ion-input type=\"number\" formControlName=\"telephone\" placeholder=\"Enter Number\"></ion-input>\n      </div>\n\n      <ion-button type=\"submit\" style=\"width:100%\" class=\"main-button\" block full [disabled]=\"!form.valid\">Save changes\n      </ion-button>\n    </ion-row>\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/userprofile/userprofile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.module.ts ***!
  \***************************************************/
/*! exports provided: UserprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePageModule", function() { return UserprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userprofile.page */ "./src/app/userprofile/userprofile.page.ts");







const routes = [
    {
        path: '',
        component: _userprofile_page__WEBPACK_IMPORTED_MODULE_6__["UserprofilePage"]
    }
];
let UserprofilePageModule = class UserprofilePageModule {
};
UserprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_userprofile_page__WEBPACK_IMPORTED_MODULE_6__["UserprofilePage"]]
    })
], UserprofilePageModule);



/***/ }),

/***/ "./src/app/userprofile/userprofile.page.scss":
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 800;\n  color: #000;\n}\n\nform {\n  background: #fff;\n  height: -webkit-fill-available;\n}\n\nform .input-border {\n  border-bottom: 1px solid #ddd;\n  width: 100%;\n  padding: 5px 15px;\n}\n\nform .input-border ion-input {\n  font-size: 13px;\n  color: #000;\n  letter-spacing: 0.5px;\n  --padding-bottom: 4px;\n  --padding-top: 10px;\n  --padding-start: 0;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 900;\n}\n\nform .input-border ion-label {\n  position: relative;\n  top: 0.5rem;\n  font-family: \"Nunito\", sans-serif;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRO0VBQ0ksaUNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNGWjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7QUNISjs7QURJSTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRlI7O0FER1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0RaOztBREdRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyxzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgLmlucHV0LWJvcmRlciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJyxzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbmZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5mb3JtIC5pbnB1dC1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuZm9ybSAuaW5wdXQtYm9yZGVyIGlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuZm9ybSAuaW5wdXQtYm9yZGVyIGlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/userprofile/userprofile.page.ts":
/*!*************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.ts ***!
  \*************************************************/
/*! exports provided: UserprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePage", function() { return UserprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");






let UserprofilePage = class UserprofilePage {
    constructor(envservice, _FB, loadingController, appcomp) {
        this.envservice = envservice;
        this._FB = _FB;
        this.loadingController = loadingController;
        this.appcomp = appcomp;
        this.form = this._FB.group({
            Firstname: [''],
            Lastname: [''],
            email: [''],
            dob: [''],
            telephone: ['']
        });
        const value = localStorage.getItem('loginData');
        this.profile = JSON.parse(value);
        console.log(this.profile);
        this.email = this.profile.Email;
        this.firstname = this.profile.FirstName;
        this.lastname = this.profile.LastName;
    }
    ngOnInit() {
        if (localStorage.getItem("user_id")) {
            this.appcomp.isLoggedin = localStorage.isLoggedin;
            this.appcomp.isLoggedOut = false;
        }
    }
    updateProfile() {
        // this.password= this.form.get('dob').value;\
        this.presentLoading().then(a => {
            this.telephone = this.form.get('telephone').value;
            this.envservice.updateProfile(this.firstname, this.lastname, this.telephone, this.email, this.email).subscribe((data) => {
                if (data.Message == 'success') {
                    alert(data.Data);
                    this.loadingController.dismiss();
                }
            });
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
};
UserprofilePage.ctorParameters = () => [
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] }
];
UserprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__(/*! raw-loader!./userprofile.page.html */ "./node_modules/raw-loader/index.js!./src/app/userprofile/userprofile.page.html"),
        styles: [__webpack_require__(/*! ./userprofile.page.scss */ "./src/app/userprofile/userprofile.page.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
], UserprofilePage);



/***/ })

}]);
//# sourceMappingURL=userprofile-userprofile-module-es2015.js.map