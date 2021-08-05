(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-projects-my-projects-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-projects/my-projects.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-projects/my-projects.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page--title\">My Projects</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let items of projects\">\n    <ion-card-header style=\"padding: 15px 15px 0;\">\n      <ion-card-title>{{items.ProjectName}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      {{items.ProjectDescription}}\n    </ion-card-content>\n\n    <ion-card-header>\n      <ion-card-subtitle>Payment Details</ion-card-subtitle>\n      <ion-card-title>{{items.CardNumber}}</ion-card-title>\n    </ion-card-header>\n    <ion-item>\n    <ion-icon name=\"trash\" slot=\"end\" class=\"payment-css2\" (click)=\"deletePassenger(items)\"></ion-icon>\n    <ion-icon name=\"create\" slot=\"end\" (click)=\"editProject(items)\" class=\"payment-css3\"></ion-icon>\n  </ion-item>\n  </ion-card>\n\n  <div padding>\n    <ion-button class=\"nyc-button\" (click)=\"addProject()\">Add Project</ion-button>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/my-projects/my-projects.module.ts":
/*!***************************************************!*\
  !*** ./src/app/my-projects/my-projects.module.ts ***!
  \***************************************************/
/*! exports provided: MyProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsPageModule", function() { return MyProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-projects.page */ "./src/app/my-projects/my-projects.page.ts");







const routes = [
    {
        path: '',
        component: _my_projects_page__WEBPACK_IMPORTED_MODULE_6__["MyProjectsPage"]
    }
];
let MyProjectsPageModule = class MyProjectsPageModule {
};
MyProjectsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_my_projects_page__WEBPACK_IMPORTED_MODULE_6__["MyProjectsPage"]]
    })
], MyProjectsPageModule);



/***/ }),

/***/ "./src/app/my-projects/my-projects.page.scss":
/*!***************************************************!*\
  !*** ./src/app/my-projects/my-projects.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".payment-css1 {\n  color: black;\n  font-weight: bold;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.payment-css2 {\n  float: right;\n  font-size: 26px;\n  color: red;\n  margin-left: 10px;\n}\n\n.payment-css3 {\n  float: right;\n  font-size: 26px;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL215LXByb2plY3RzL215LXByb2plY3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktcHJvamVjdHMvbXktcHJvamVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL215LXByb2plY3RzL215LXByb2plY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LWNzczEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnBheW1lbnQtY3NzMiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wYXltZW50LWNzczMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn0iLCIucGF5bWVudC1jc3MxIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wYXltZW50LWNzczIge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wYXltZW50LWNzczMge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IGdyZXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/my-projects/my-projects.page.ts":
/*!*************************************************!*\
  !*** ./src/app/my-projects/my-projects.page.ts ***!
  \*************************************************/
/*! exports provided: MyProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsPage", function() { return MyProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_project_add_project_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-project/add-project.page */ "./src/app/add-project/add-project.page.ts");






let MyProjectsPage = class MyProjectsPage {
    constructor(envservice, loadingController, appcomp, modalController, alertController, toastCtrl) {
        this.envservice = envservice;
        this.loadingController = loadingController;
        this.appcomp = appcomp;
        this.modalController = modalController;
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.formData = { "dfltWhere": "", "IsActive": "", "iColumns": "", "iDisplayLength": "", "UserID": "" };
    }
    ngOnInit() {
        if (localStorage.getItem("user_id")) {
            this.appcomp.isLoggedin = localStorage.isLoggedin;
            this.appcomp.isLoggedOut = false;
        }
        var user_name = localStorage.getItem('username');
        this.username = user_name;
    }
    ionViewWillEnter() {
        this.getProjectDetails();
    }
    getProjectDetails() {
        var id = localStorage.getItem("user_id");
        this.userId = id;
        this.presentLoading().then(a => {
            this.formData.dfltWhere = "All";
            this.formData.IsActive = "true";
            this.formData.iColumns = "10";
            this.formData.iDisplayLength = "10";
            this.formData.UserID = this.userId;
            this.envservice.getProjectList(this.formData).then((data) => {
                this.response = JSON.parse(data.data);
                console.log(this.response);
                this.projects = this.response.Data.Data.aaData;
                console.log(this.projects);
                this.loadingController.dismiss();
            }).catch(error => {
                this.errorResponse = JSON.parse(error.error);
                console.log("error", error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                console.log("error", error);
                alert(this.errorResponse.Message);
                this.loadingController.dismiss();
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
    addProject() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.removeItem('project');
            const modal = yield this.modalController.create({
                component: _add_project_add_project_page__WEBPACK_IMPORTED_MODULE_5__["AddProjectPage"]
            });
            modal.onDidDismiss()
                .then((data) => {
                this.getProjectDetails();
            });
            return yield modal.present();
        });
    }
    editProject(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(value);
            localStorage.setItem("project", JSON.stringify(value));
            const modal = yield this.modalController.create({
                component: _add_project_add_project_page__WEBPACK_IMPORTED_MODULE_5__["AddProjectPage"]
            });
            modal.onDidDismiss()
                .then((data) => {
                this.getProjectDetails();
            });
            return yield modal.present();
        });
    }
    deletePassenger(values) {
        localStorage.setItem("project", JSON.stringify(values));
        if (localStorage.getItem('project')) {
            var projectDetails = localStorage.getItem('project');
            this.projectInfo = JSON.parse(projectDetails);
            console.log(this.projectInfo);
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
                                console.log(this.userId, this.username, this.projectInfo.ProjectId);
                                this.envservice.deleteProject(this.userId, this.username, this.projectInfo.ProjectId).then((data) => {
                                    this.response = JSON.parse(data.data);
                                    console.log(this.response);
                                    if (this.response.Message == 'success') {
                                        this.presentToast(this.response.Data);
                                        this.loadingController.dismiss();
                                        this.getProjectDetails();
                                    }
                                })
                                    .catch(error => {
                                    this.errorResponse = JSON.parse(error.error);
                                    console.log("error", error.status);
                                    console.log(this.errorResponse.Message); // error message as string
                                    console.log(error.headers);
                                    this.presentToast(this.errorResponse.Message);
                                    this.loadingController.dismiss();
                                });
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(info) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: info,
                duration: 2000
            });
            toast.present();
        });
    }
};
MyProjectsPage.ctorParameters = () => [
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
MyProjectsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-projects',
        template: __webpack_require__(/*! raw-loader!./my-projects.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-projects/my-projects.page.html"),
        styles: [__webpack_require__(/*! ./my-projects.page.scss */ "./src/app/my-projects/my-projects.page.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], MyProjectsPage);



/***/ })

}]);
//# sourceMappingURL=my-projects-my-projects-module-es2015.js.map