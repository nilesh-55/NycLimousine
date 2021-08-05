(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"transparent-toolbar\" style=\"background: #ffffff;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"assets/nyclogo.png\" class=\"app-logo\"></ion-img>\r\n    <a href=\"tel:+12123666600\" ion-button slot=\"end\" style=\"font-size: 1.8rem;padding: 12px 10px 0;color: #000;\">\r\n      <ion-icon name=\"call\"></ion-icon>\r\n    </a>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"home-page\">\r\n  <ion-slides [options]=\"slideOptsOne\">\r\n    <ion-slide>\r\n      <ion-img src=\"assets/slider/slider-1.png\"></ion-img>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <ion-img src=\"assets/slider/slider-2.png\"></ion-img>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <ion-img src=\"assets/slider/slider-3.png\"></ion-img>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <ion-img src=\"assets/slider/slider-4.png\"></ion-img>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <ion-row class=\"calculator-card\">\r\n    <form [formGroup]=\"form1\" (ngSubmit)=\"onSubmit(form1.value)\">\r\n      <ion-card-header>\r\n        <ion-segment>\r\n          <ion-radio-group name=\"screens\" formControlName=\"TypeOfService\" [(ngModel)]=\"segment\">\r\n            <div>\r\n              <ion-radio slot=\"start\" value=\"0\" (ionSelect)=\"radioChecked(0)\" checked></ion-radio>\r\n              <ion-label>ONE WAY</ion-label>\r\n            </div>\r\n            <div>\r\n              <ion-radio slot=\"start\" (ionSelect)=\"radioChecked(1)\" value=\"2\"></ion-radio>\r\n              <ion-label>ROUNDTRIP</ion-label>\r\n            </div>\r\n            <div>\r\n              <ion-radio slot=\"start\" (ionSelect)=\"radioChecked(2)\" value=\"1\"></ion-radio>\r\n              <ion-label>HOURLY</ion-label>\r\n            </div>\r\n            <div>\r\n              <ion-radio slot=\"start\" (ionSelect)=\"radioChecked(3)\" value=\"3\"></ion-radio>\r\n              <ion-label>WAIT & RETURN</ion-label>\r\n            </div>\r\n          </ion-radio-group>\r\n        </ion-segment>\r\n      </ion-card-header>\r\n\r\n      <div class=\"full-width\" style=\"padding-top: 2rem\">\r\n        <ion-label> FROM </ion-label>\r\n        <ion-searchbar  (click)=\"presentmodal1()\" placeholder=\"Address or Airport\" type=\"text\" debounce=\"500\" formControlName=\"FromLocationName\"\r\n      (ionChange)=\"getItems($event)\"></ion-searchbar>\r\n      </div>\r\n\r\n      <div style=\"padding: 3px 0px 0 24px;\" *ngIf=\"(form1.get('FromLocationName').hasError('required') ) && form1.get('FromLocationName').touched\">\r\n        <div class=\"error\"\r\n          *ngIf=\"form1.get('FromLocationName').hasError('required') && form1.get('FromLocationName').touched\">\r\n          Please enter Location\r\n        </div>\r\n      </div>\r\n\r\n      <ion-row class=\"nopadding\" formArrayName=\"objLiclsResStops\" [ngSwitch]=\"segment\">\r\n        <ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled=\"false\" *ngSwitchCase=\"'0'\">\r\n          <section [formGroupName]=\"i\" *ngFor=\"let tech of form1.controls.objLiclsResStops.controls; let i = index\">\r\n            <ion-row class=\"section-border\">\r\n              <ion-item lines=\"none\">\r\n                <ion-reorder slot=\"end\"></ion-reorder>\r\n                <ion-col size=\"6\" class=\"other-location-section\">\r\n                  <ion-item lines=\"none\" class=\"item item--stop-section\">\r\n                    <ion-label position=\"stacked\"> STOP {{i+1}}</ion-label>\r\n                    <ion-input placeholder=\"Address or Airport\" (click)=\"stopModal(i)\" type=\"text\" debounce=\"500\"\r\n                      formControlName=\"StopLocation\" (ionChange)=\"getItems($event)\">\r\n                    </ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n\r\n                <ion-col col-6 class=\"other-location-section\">\r\n                  <ion-item lines=\"none\" class=\"item item--stop-section\" >\r\n                    <ion-label position=\"stacked\"> WAITING TIME </ion-label>\r\n                    <ion-select placeholder=\"Select Time\" formControlName=\"StopWatingTime\" value=\"10\">\r\n                      <ion-select-option value=\"1\">Will Decide later</ion-select-option>\r\n                      <ion-select-option value=\"10\">10 mins free</ion-select-option>\r\n                      <ion-select-option value=\"15\">15 minutes</ion-select-option>\r\n                      <ion-select-option value=\"30\">30 minutes</ion-select-option>\r\n                      <ion-select-option value=\"45\">45 minutes</ion-select-option>\r\n                      <ion-select-option value=\"60\">60 minutes</ion-select-option>\r\n                      <ion-select-option value=\"75\">75 minutes</ion-select-option>\r\n                      <ion-select-option value=\"90\">90 minutes</ion-select-option>\r\n                      <ion-select-option value=\"120\">2 hours</ion-select-option>\r\n                      <ion-select-option value=\"180\">3 hours</ion-select-option>\r\n                      <ion-select-option value=\"240\">4 hours</ion-select-option>\r\n                      <ion-select-option value=\"300\">5 hours</ion-select-option>\r\n                      <ion-select-option value=\"360\">6 hours</ion-select-option>\r\n                      <ion-select-option value=\"420\">7 hours</ion-select-option>\r\n                      <ion-select-option value=\"480\">8 hours</ion-select-option>\r\n                      <ion-select-option value=\"540\">9 hours</ion-select-option>\r\n                      <ion-select-option value=\"600\">10 hours</ion-select-option>\r\n                      <ion-select-option value=\"660\">11 hours</ion-select-option>\r\n                      <ion-select-option value=\"720\">12 hours</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-item>\r\n              <section class=\"remove-button\">\r\n                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeInputField(i)\">\r\n                  <ion-icon name=\"close\"></ion-icon>\r\n                </button>\r\n              </section>\r\n            </ion-row>\r\n          </section>\r\n        </ion-reorder-group>\r\n\r\n        <ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled=\"false\" *ngSwitchCase=\"'1'\">\r\n          <section [formGroupName]=\"i\" *ngFor=\"let tech of form1.controls.objLiclsResStops.controls; let i = index\">\r\n            <ion-row class=\"section-border\">\r\n              <ion-item lines=\"none\">\r\n                <ion-reorder slot=\"end\"></ion-reorder>\r\n                <ion-col size=\"6\" class=\"other-location-section\">\r\n                  <ion-item lines=\"none\" class=\"item item--stop-section\">\r\n                    <ion-label position=\"stacked\"> STOP {{i+1}}</ion-label>\r\n                    <ion-input placeholder=\"Address or Airport\" (click)=\"stopModal(i)\" type=\"text\" debounce=\"500\"\r\n                      formControlName=\"StopLocation\" (ionChange)=\"getItems($event)\">\r\n                    </ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n\r\n              </ion-item>\r\n              <section class=\"remove-button\">\r\n                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeInputField(i)\">\r\n                  <ion-icon name=\"close\"></ion-icon>\r\n                </button>\r\n              </section>\r\n            </ion-row>\r\n          </section>\r\n        </ion-reorder-group>\r\n      </ion-row>\r\n\r\n      <div class=\"full-width\">\r\n        <ion-label> TO </ion-label>\r\n        <ion-searchbar (click)=\"presentModal()\" placeholder=\"Address or Airport\" type=\"text\" debounce=\"500\" formControlName=\"ToLocationName\"\r\n          (ionChange)=\"getItem($event)\">\r\n        </ion-searchbar>\r\n      </div>\r\n\r\n      <div style=\"padding: 3px 0px 0 24px;\" *ngIf=\"(form1.get('ToLocationName').hasError('required') ) && form1.get('ToLocationName').touched\">\r\n        <div class=\"error\"\r\n          *ngIf=\"form1.get('ToLocationName').hasError('required') && form1.get('ToLocationName').touched\">\r\n          Please enter Location\r\n        </div>\r\n      </div>\r\n\r\n      <ion-row class=\"add-stop\" [ngSwitch]=\"segment\">\r\n        <ion-label (click)=\"addNewInputField()\" *ngSwitchCase=\"'0'\">\r\n          <ion-icon name=\"add\" type=\"button\"></ion-icon> ADD STOP\r\n        </ion-label>\r\n      \r\n        <ion-label (click)=\"addNewInputField()\" *ngSwitchCase=\"'1'\">\r\n          <ion-icon name=\"add\" type=\"button\"></ion-icon> ADD STOP\r\n        </ion-label>\r\n      </ion-row>\r\n\r\n      <ion-item lines=\"none\" class=\"date-time-row\">\r\n        <ion-col size=\"6\">\r\n          <ion-item lines=\"none\" class=\"no__padding\" *ngIf=\"dateShow\">\r\n            <ion-label position=\"stacked\"> DATE </ion-label>\r\n            <ion-datetime display-format=\"DD-MMM-YYYY\" [min]=\"minDate\" [max]=\"maxData\" required\r\n              placeholder=\"Select Date\" formControlName=\"PickUpDate\" (ionChange)=\"changeDate()\"></ion-datetime>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" class=\"no__padding\" *ngIf=\"!dateShow\">\r\n            <ion-label position=\"stacked\"> DATE </ion-label>\r\n            <div>\r\n              <span class=\"date\">{{selectDay}}</span>\r\n              <span class=\"month\">{{selectMonthYear}}</span>\r\n              <span class=\"month-year\">{{selectDate}}</span>\r\n            </div>\r\n            <ion-icon name=\"close\" (click)=\"dateicon()\"></ion-icon>\r\n          </ion-item>\r\n        </ion-col>\r\n        \r\n        <ion-col size=\"6\">\r\n          <ion-item lines=\"none\" class=\"no__padding\" *ngIf=\"timeShow\">\r\n            <ion-label position=\"stacked\"> TIME </ion-label>\r\n            <ion-datetime display-format=\"hh:mm A\" placeholder=\"Select Time\" formControlName=\"PickupTime24H\"\r\n              (ionChange)=\"changeTime()\"></ion-datetime>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" class=\"no__padding\" *ngIf=\"!timeShow\">\r\n            <ion-label position=\"stacked\"> TIME </ion-label>\r\n            <div>\r\n              <span class=\"date\">{{fulltime}}</span>\r\n              <span class=\"month-year\">{{halftime}}</span>\r\n            </div>\r\n            <ion-icon name=\"close\" (click)=\"timeicon()\"></ion-icon>\r\n          </ion-item>\r\n        \r\n        </ion-col>\r\n      </ion-item>\r\n      <ion-col size=\"6\">\r\n        <div style=\"padding: 5px 0px 0 20px;\" *ngIf=\"(form1.get('PickUpDate').hasError('required') ) && form1.get('PickUpDate').touched\">\r\n          <div class=\"error\" *ngIf=\"form1.get('PickUpDate').hasError('required') && form1.get('PickUpDate').touched\">\r\n            Please Enter Date\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <div style=\"padding: 5px 0px 0 10px;\" *ngIf=\"(form1.get('PickupTime24H').hasError('required') ) && form1.get('PickupTime24H').touched\">\r\n          <div class=\"error\" *ngIf=\"form1.get('PickupTime24H').hasError('required') && form1.get('PickupTime24H').touched\">\r\n            Please Enter Time\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n     \r\n      <div [ngSwitch]=\"segment\" style=\"width: 100%;\">\r\n        <ion-row *ngSwitchCase=\"'0'\">\r\n        </ion-row>\r\n\r\n        <ion-item lines=\"none\" class=\"return-date-time-row\" *ngSwitchCase=\"'2'\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"no__padding\" *ngIf=\"dateShow1\">\r\n              <ion-label position=\"stacked\"> RETURN DATE </ion-label>\r\n              <ion-datetime display-format=\"DD-MMM-YYYY\" [min]=\"minDate\" [max]=\"maxData\" placeholder=\"Select Date\"\r\n                formControlName=\"ReturnDate\" (ionChange)=\"changeRoundtripDate()\"></ion-datetime>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"no__padding\" *ngIf=\"!dateShow1\">\r\n              <ion-label position=\"stacked\"> RETURN DATE </ion-label>\r\n              <div>\r\n                <span class=\"date\">{{selectReturnDay}}</span>\r\n                <span class=\"month\">{{selectReturnMonthYear}}</span>\r\n                <span class=\"month-year\">{{selectReturnDate}}</span>\r\n              </div>\r\n              <ion-icon name=\"close\" (click)=\"dateRoundtripicon()\"></ion-icon>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"no__padding\" *ngIf=\"timeShow1\">\r\n              <ion-label class=\"pickup-time-label\" position=\"stacked\"> RETURN PICKUP TIME </ion-label>\r\n              <ion-datetime display-format=\"hh:mm A\" placeholder=\"Select Time\" (ionChange)=\"changetRoundtripTime()\"\r\n                formControlName=\"ReturnTime24H\"></ion-datetime>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"no__padding\" *ngIf=\"!timeShow1\">\r\n              <ion-label class=\"pickup-time-label\" position=\"stacked\"> RETURN PICKUP TIME </ion-label>\r\n              <div>\r\n                <span class=\"date\">{{fullRoundtriptime}}</span>\r\n                <span class=\"month-year\">{{halfRoundtriptime}}</span>\r\n              </div>\r\n              <ion-icon name=\"close\" (click)=\"timeRoundtripicon()\"></ion-icon>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-item>\r\n\r\n        <ion-item *ngSwitchCase=\"'1'\" class=\"type-of-service-row\" lines=\"none\">\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"no__padding\">\r\n              <ion-label class=\"pickup-time-label\" position=\"stacked\"> TYPE OF SERVICE </ion-label>\r\n              <ion-select placeholder=\"Select Service\" formControlName=\"Event\">\r\n                <ion-select-option *ngFor=\"let item of noOfService\" [value]=\"item.EventId\">{{item.EventName}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item lines=\"none\"\r\n              *ngIf=\"(form1.get('TypeOfService').hasError('required') ) && form1.get('TypeOfService').touched\">\r\n              <div class=\"error\"\r\n                *ngIf=\"form1.get('TypeOfService').hasError('required') && form1.get('TypeOfService').touched\">\r\n                Please enter Service type\r\n              </div>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item lines=\"none\" class=\"no__padding\">\r\n              <ion-label class=\"pickup-time-label\" position=\"stacked\"> NUMBER OF HOURS </ion-label>\r\n              <ion-select placeholder=\"Select Time\" formControlName=\"HourlyTime\" (ionChange)=\"getHours($event)\">\r\n                <ion-select-option *ngFor=\"let item of noOfHours\" [value]=\"item.Value\">{{item.Text}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" *ngSwitchCase=\"'3'\" class=\"type-of-service-row\" style=\"padding-left: 0.5rem;\">\r\n          <ion-label position=\"stacked\"> Estimated Waiting Time </ion-label>\r\n          <ion-select placeholder=\"Select Time\" formControlName=\"WaitingTime\">\r\n            <ion-select-option *ngFor=\"let item of waitingTime\" [value]=\"item.Value\">{{item.Text}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </div>\r\n      <ion-button (click)=\"onSubmit()\" [disabled]=\"!form1.valid\" class=\"main-button\"> CALCULATE MY RIDE </ion-button>\r\n    </form>\r\n  </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*---------- Header-Start --------*/\nion-header .transparent-toolbar {\n  position: absolute;\n  background-color: #fff;\n}\nion-header .transparent-toolbar .app-logo {\n  height: 40px;\n  margin-top: 0.5rem;\n}\nion-header .transparent-toolbar ion-buttons {\n  color: #000;\n  height: 40px;\n  width: 40px;\n  margin-left: 2px;\n}\nion-col {\n  padding: 0px 0px 0px 5px;\n}\n/*-------- Header End ---------*/\n/*-------- Ion-content-start---------*/\n.home-page ion-slides ion-slide ion-img {\n  width: 100%;\n  position: relative;\n  z-index: -111;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  height: 220px;\n  margin-top: 3.8rem;\n}\n.home-page .calculator-card {\n  margin: 0;\n  position: absolute;\n  overflow: visible;\n  width: 100%;\n  border-radius: 0;\n  background: #fff;\n}\n.home-page .calculator-card ion-card-header {\n  padding-bottom: 0.1rem;\n  width: 100%;\n  background: transparent;\n  position: absolute;\n}\n.home-page .calculator-card ion-card-header ion-segment ion-radio-group {\n  box-shadow: 0px 2px 2px 0px #00000094;\n  display: table;\n  background: #fff;\n  padding: 6px;\n  border-radius: 30px;\n  margin-top: -2rem;\n  width: 100%;\n  z-index: 9999;\n}\n.home-page .calculator-card ion-card-header ion-segment ion-radio-group div {\n  display: table-cell;\n  position: relative;\n}\n.home-page .calculator-card ion-card-header ion-segment ion-radio-group div ion-radio {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  z-index: 1;\n}\n.home-page .calculator-card ion-card-header ion-segment ion-radio-group div ion-radio.radio-checked ~ ion-label {\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #f7b104), to(#ffcb00)) !important;\n  background: linear-gradient(to top, #f7b104 0, #ffcb00 100%) !important;\n  color: #000;\n}\n.home-page .calculator-card ion-card-header ion-segment ion-radio-group div ion-label {\n  display: table;\n  width: 100%;\n  padding: 0.5rem 0.42rem;\n  border-radius: 3rem;\n  font-weight: 700;\n  font-size: 0.6rem;\n  --color: #000 !important;\n}\n.home-page .calculator-card .nopadding {\n  padding: 0 !important;\n  max-height: calc(60vh - 28px);\n  overflow: scroll;\n}\n.home-page .calculator-card .nopadding ion-reorder-group section .section-border {\n  border-bottom: 1px solid #ddd;\n}\n.home-page .calculator-card .nopadding ion-reorder-group section .section-border .other-location-section {\n  padding: 0;\n}\n.home-page .calculator-card .nopadding ion-reorder-group section .section-border .other-location-section .item--stop-section {\n  margin-left: -8px;\n}\n.home-page .calculator-card .nopadding ion-reorder-group section .section-border .other-location-section .item ion-input {\n  font-size: 15px;\n}\n.home-page .calculator-card .nopadding ion-reorder-group section .section-border ion-reorder {\n  margin-right: 0;\n  padding-top: 1.5rem;\n}\n.home-page .calculator-card .nopadding ion-reorder-group section .section-border .remove-button {\n  padding-top: 0.5rem;\n  position: absolute;\n  right: 9px;\n  top: bottom;\n  z-index: 9999;\n}\n.home-page .calculator-card .nopadding ion-reorder-group section .section-border .remove-button .btn {\n  background-color: transparent;\n}\n.home-page .calculator-card .nopadding ion-reorder-group section .section-border .remove-button .btn ion-icon {\n  background: #fdc600;\n  padding: 1px 1px;\n  border-radius: 50px;\n  font-size: 15px;\n}\n.home-page .calculator-card .add-stop {\n  width: 100%;\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n}\n.home-page .calculator-card .add-stop ion-label {\n  margin: 5px 0 5px 20px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 14px;\n  font-family: \"Nunito\", sans-serif;\n  color: #696262;\n}\n.home-page .calculator-card .add-stop ion-label ion-icon {\n  background: #f9b802;\n  color: #000;\n  border-radius: 50px;\n  padding: 2px 2px;\n  position: relative;\n  top: 3px;\n}\nform {\n  display: inherit;\n}\n.error {\n  font-size: 12px;\n  color: #f13c1d;\n}\n@media only screen and (min-width: 320px) and (max-width: 350px) {\n  ion-input {\n    font-size: 12px !important;\n  }\n\n  .home-page .calculator-card ion-card-header ion-radio-group div ion-label {\n    font-size: 0.5rem !important;\n  }\n\n  .date-time-row .no__padding ion-label,\n.return-date-time-row .no__padding ion-label,\n.type-of-service-row .no__padding ion-label {\n    font-size: 12px;\n  }\n}\n@media only screen and (min-width: 320px) and (max-width: 350px) {\n  .full-width ion-input {\n    -webkit-padding-start: 8px !important;\n            padding-inline-start: 8px !important;\n  }\n}\n@media only screen and (min-width: 370px) and (max-width: 380px) {\n  .full-width ion-input {\n    -webkit-padding-start: 8px !important;\n            padding-inline-start: 8px !important;\n  }\n}\n@media only screen and (min-width: 360px) and (max-width: 370px) {\n  .nopadding .section-border ion-reorder {\n    margin-left: 0;\n    padding-top: 1.5rem;\n    position: relative;\n    left: 8px;\n  }\n}\n@media only screen and (min-width: 400px) and (max-width: 411px) {\n  .nopadding .section-border ion-reorder {\n    padding-top: 0rem;\n    position: relative;\n    left: -30px !important;\n  }\n  .nopadding .section-border .other-location-section .item--select-section {\n    margin-left: 0px !important;\n  }\n  .nopadding .remove-button {\n    padding-top: 1rem !important;\n    position: absolute;\n    right: 9px;\n    top: bottom;\n    z-index: 9999;\n  }\n}\n@media only screen and (min-width: 412px) and (max-width: 415px) {\n  .nopadding .section-border {\n    min-width: 412px !important;\n  }\n  .nopadding .section-border ion-reorder {\n    padding-top: 0 !important;\n  }\n  .nopadding .remove-button {\n    padding-top: 1.5rem !important;\n  }\n\n  .full-width ion-input {\n    --padding-start: 8px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQUE7QUFHQztFQUNDLGtCQUFBO0VBQ0Esc0JBQUE7QUNERjtBREVFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FDQUg7QURFRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUg7QURLQTtFQUNJLHdCQUFBO0FDRko7QURNQSxnQ0FBQTtBQUdBLHNDQUFBO0FBS0c7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRGFDO0VBQ0MsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1hGO0FEWUU7RUFDQyxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDVkg7QURZSTtFQUNDLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1ZMO0FEV0s7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0FDVE47QURVTTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ1JQO0FEVU07RUFDQywyR0FBQTtFQUFBLHVFQUFBO0VBQ0EsV0FBQTtBQ1JQO0FEVU07RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNSUDtBRGNFO0VBQ0MscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDWkg7QURlSztFQUNDLDZCQUFBO0FDYk47QURjTTtFQUNDLFVBQUE7QUNaUDtBRGNRO0VBQ0MsaUJBQUE7QUNaVDtBRGNRO0VBQ0MsZUFBQTtBQ1pUO0FEZ0JNO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0FDZFA7QURnQk07RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDZFA7QURlTztFQUNDLDZCQUFBO0FDYlI7QURjUTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNaVDtBRG9CRTtFQUNDLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUNsQkg7QURtQkc7RUFDQyxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNqQko7QURrQkk7RUFDQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDaEJMO0FEdUJBO0VBQ0MsZ0JBQUE7QUNwQkQ7QUR3QkE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtBQ3JCRDtBRHdCQTtFQUNDO0lBQ0MsMEJBQUE7RUNyQkE7O0VENEJJO0lBQ0MsNEJBQUE7RUN6Qkw7O0VEb0NDOzs7SUFDQyxlQUFBO0VDL0JGO0FBQ0Y7QURvQ0E7RUFFRTtJQUNDLHFDQUFBO1lBQUEsb0NBQUE7RUNuQ0Q7QUFDRjtBRHVDQTtFQUVFO0lBQ0MscUNBQUE7WUFBQSxvQ0FBQTtFQ3RDRDtBQUNGO0FEMENBO0VBR0c7SUFDQyxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7RUMxQ0Y7QUFDRjtBRCtDQTtFQUdHO0lBQ0MsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0VDL0NGO0VEbURHO0lBQ0MsMkJBQUE7RUNqREo7RURzREE7SUFDQyw0QkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0VDcEREO0FBQ0Y7QUR3REE7RUFFRTtJQUNDLDJCQUFBO0VDdkREO0VEd0RDO0lBQ0MseUJBQUE7RUN0REY7RUR5REE7SUFDQyw4QkFBQTtFQ3ZERDs7RUQyREE7SUFDQywrQkFBQTtFQ3hERDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLSBIZWFkZXItU3RhcnQgLS0tLS0tLS0qL1xuXG5pb24taGVhZGVyIHtcblx0LnRyYW5zcGFyZW50LXRvb2xiYXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdC5hcHAtbG9nbyB7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRtYXJnaW4tdG9wOiAwLjVyZW07XG5cdFx0fVxuXHRcdGlvbi1idXR0b25zIHtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRtYXJnaW4tbGVmdDogMnB4O1xuXHRcdH1cblx0fVxufVxuXG5pb24tY29sIHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA1cHg7XG59XG5cblxuLyotLS0tLS0tLSBIZWFkZXIgRW5kIC0tLS0tLS0tLSovXG5cblxuLyotLS0tLS0tLSBJb24tY29udGVudC1zdGFydC0tLS0tLS0tLSovXG5cbi5ob21lLXBhZ2Uge1xuXHRpb24tc2xpZGVzIHtcblx0XHRpb24tc2xpZGUge1xuXHRcdFx0aW9uLWltZyB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHotaW5kZXg6IC0xMTE7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcblx0XHRcdFx0aGVpZ2h0OiAyMjBweDtcblx0XHRcdFx0bWFyZ2luLXRvcDogMy44cmVtO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuY2FsY3VsYXRvci1jYXJkIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdG92ZXJmbG93OiB2aXNpYmxlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDA7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRpb24tY2FyZC1oZWFkZXIge1xuXHRcdFx0cGFkZGluZy1ib3R0b206IDAuMXJlbTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRpb24tc2VnbWVudCB7XG5cdFx0XHRcdGlvbi1yYWRpby1ncm91cCB7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDJweCAycHggMHB4ICMwMDAwMDA5NDtcblx0XHRcdFx0XHRkaXNwbGF5OiB0YWJsZTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDZweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzMHB4O1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IC0yLjByZW07XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0ei1pbmRleDogOTk5OTtcblx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdGlvbi1yYWRpbyB7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpb24tcmFkaW8ucmFkaW8tY2hlY2tlZH5pb24tbGFiZWwge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZjdiMTA0IDAsICNmZmNiMDAgMTAwJSkgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpb24tbGFiZWwge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiB0YWJsZTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNTByZW0gMC40MnJlbTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3JlbTtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjYwcmVtO1xuXHRcdFx0XHRcdFx0XHQtLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5ub3BhZGRpbmcge1xuXHRcdFx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHRcdFx0bWF4LWhlaWdodDogY2FsYyg2MHZoIC0gMjhweCk7XG5cdFx0XHRvdmVyZmxvdzogc2Nyb2xsO1xuXHRcdFx0aW9uLXJlb3JkZXItZ3JvdXAge1xuXHRcdFx0XHRzZWN0aW9uIHtcblx0XHRcdFx0XHQuc2VjdGlvbi1ib3JkZXIge1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG5cdFx0XHRcdFx0XHQub3RoZXItbG9jYXRpb24tc2VjdGlvbiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHRcdC5pdGVtIHtcblx0XHRcdFx0XHRcdFx0XHQmLS1zdG9wLXNlY3Rpb24ge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC04cHg7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGlvbi1pbnB1dCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpb24tcmVvcmRlciB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDEuNXJlbTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5yZW1vdmUtYnV0dG9uIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDAuNXJlbTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRyaWdodDogOXB4O1xuXHRcdFx0XHRcdFx0XHR0b3A6IGJvdHRvbTtcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogOTk5OTtcblx0XHRcdFx0XHRcdFx0LmJ0biB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZkYzYwMDtcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDFweCAxcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQuYWRkLXN0b3Age1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG5cdFx0XHRpb24tbGFiZWwge1xuXHRcdFx0XHRtYXJnaW46IDVweCAwIDVweCAyMHB4O1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRjb2xvcjogIzY5NjI2Mjtcblx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOWI4MDI7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAycHggMnB4O1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR0b3A6IDNweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mb3JtIHtcblx0ZGlzcGxheTogaW5oZXJpdDtcbn1cblxuXG4uZXJyb3Ige1xuXHRmb250LXNpemU6IDEycHg7XG5cdGNvbG9yOiAjZjEzYzFkO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MzIwcHgpIGFuZCAobWF4LXdpZHRoOjM1MHB4KSB7XG5cdGlvbi1pbnB1dCB7XG5cdFx0Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0LmhvbWUtcGFnZSB7XG5cdFx0LmNhbGN1bGF0b3ItY2FyZCB7XG5cdFx0XHRpb24tY2FyZC1oZWFkZXIge1xuXHRcdFx0XHRpb24tcmFkaW8tZ3JvdXAge1xuXHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHRpb24tbGFiZWwge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuNTByZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmRhdGUtdGltZS1yb3csXG5cdC5yZXR1cm4tZGF0ZS10aW1lLXJvdyxcblx0LnR5cGUtb2Ytc2VydmljZS1yb3cge1xuXHRcdC5ub19fcGFkZGluZyB7XG5cdFx0XHRpb24tbGFiZWwge1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuXHQuZnVsbC13aWR0aCB7XG5cdFx0aW9uLWlucHV0IHtcblx0XHRcdHBhZGRpbmctaW5saW5lLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcblx0XHR9XG5cdH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzBweCkgYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XG5cdC5mdWxsLXdpZHRoIHtcblx0XHRpb24taW5wdXQge1xuXHRcdFx0cGFkZGluZy1pbmxpbmUtc3RhcnQ6IDhweCAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcblx0Lm5vcGFkZGluZyB7XG5cdFx0LnNlY3Rpb24tYm9yZGVyIHtcblx0XHRcdGlvbi1yZW9yZGVyIHtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0XHRcdHBhZGRpbmctdG9wOiAxLjVyZW07XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0bGVmdDogOHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcblx0Lm5vcGFkZGluZyB7XG5cdFx0LnNlY3Rpb24tYm9yZGVyIHtcblx0XHRcdGlvbi1yZW9yZGVyIHtcblx0XHRcdFx0cGFkZGluZy10b3A6IDByZW07XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0bGVmdDogLTMwcHggIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdC5vdGhlci1sb2NhdGlvbi1zZWN0aW9uIHtcblx0XHRcdFx0Lml0ZW0ge1xuXHRcdFx0XHRcdCYtLXNlbGVjdC1zZWN0aW9uIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LnJlbW92ZS1idXR0b24ge1xuXHRcdFx0cGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHJpZ2h0OiA5cHg7XG5cdFx0XHR0b3A6IGJvdHRvbTtcblx0XHRcdHotaW5kZXg6IDk5OTk7XG5cdFx0fVxuXHR9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDEycHgpIGFuZCAobWF4LXdpZHRoOiA0MTVweCkge1xuXHQubm9wYWRkaW5nIHtcblx0XHQuc2VjdGlvbi1ib3JkZXIge1xuXHRcdFx0bWluLXdpZHRoOiA0MTJweCAhaW1wb3J0YW50O1xuXHRcdFx0aW9uLXJlb3JkZXIge1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQucmVtb3ZlLWJ1dHRvbiB7XG5cdFx0XHRwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG5cdC5mdWxsLXdpZHRoIHtcblx0XHRpb24taW5wdXQge1xuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcblx0XHR9XG5cdH1cbn0iLCIvKi0tLS0tLS0tLS0gSGVhZGVyLVN0YXJ0IC0tLS0tLS0tKi9cbmlvbi1oZWFkZXIgLnRyYW5zcGFyZW50LXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5pb24taGVhZGVyIC50cmFuc3BhcmVudC10b29sYmFyIC5hcHAtbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuaW9uLWhlYWRlciAudHJhbnNwYXJlbnQtdG9vbGJhciBpb24tYnV0dG9ucyB7XG4gIGNvbG9yOiAjMDAwO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggNXB4O1xufVxuXG4vKi0tLS0tLS0tIEhlYWRlciBFbmQgLS0tLS0tLS0tKi9cbi8qLS0tLS0tLS0gSW9uLWNvbnRlbnQtc3RhcnQtLS0tLS0tLS0qL1xuLmhvbWUtcGFnZSBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTExMTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBtYXJnaW4tdG9wOiAzLjhyZW07XG59XG4uaG9tZS1wYWdlIC5jYWxjdWxhdG9yLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmhvbWUtcGFnZSAuY2FsY3VsYXRvci1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmhvbWUtcGFnZSAuY2FsY3VsYXRvci1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tc2VnbWVudCBpb24tcmFkaW8tZ3JvdXAge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggIzAwMDAwMDk0O1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4uaG9tZS1wYWdlIC5jYWxjdWxhdG9yLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1zZWdtZW50IGlvbi1yYWRpby1ncm91cCBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9tZS1wYWdlIC5jYWxjdWxhdG9yLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1zZWdtZW50IGlvbi1yYWRpby1ncm91cCBkaXYgaW9uLXJhZGlvIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cbi5ob21lLXBhZ2UgLmNhbGN1bGF0b3ItY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLXNlZ21lbnQgaW9uLXJhZGlvLWdyb3VwIGRpdiBpb24tcmFkaW8ucmFkaW8tY2hlY2tlZCB+IGlvbi1sYWJlbCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmN2IxMDQgMCwgI2ZmY2IwMCAxMDAlKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMDtcbn1cbi5ob21lLXBhZ2UgLmNhbGN1bGF0b3ItY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLXNlZ21lbnQgaW9uLXJhZGlvLWdyb3VwIGRpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjQycmVtO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgLS1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLmhvbWUtcGFnZSAuY2FsY3VsYXRvci1jYXJkIC5ub3BhZGRpbmcge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IGNhbGMoNjB2aCAtIDI4cHgpO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLmhvbWUtcGFnZSAuY2FsY3VsYXRvci1jYXJkIC5ub3BhZGRpbmcgaW9uLXJlb3JkZXItZ3JvdXAgc2VjdGlvbiAuc2VjdGlvbi1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbi5ob21lLXBhZ2UgLmNhbGN1bGF0b3ItY2FyZCAubm9wYWRkaW5nIGlvbi1yZW9yZGVyLWdyb3VwIHNlY3Rpb24gLnNlY3Rpb24tYm9yZGVyIC5vdGhlci1sb2NhdGlvbi1zZWN0aW9uIHtcbiAgcGFkZGluZzogMDtcbn1cbi5ob21lLXBhZ2UgLmNhbGN1bGF0b3ItY2FyZCAubm9wYWRkaW5nIGlvbi1yZW9yZGVyLWdyb3VwIHNlY3Rpb24gLnNlY3Rpb24tYm9yZGVyIC5vdGhlci1sb2NhdGlvbi1zZWN0aW9uIC5pdGVtLS1zdG9wLXNlY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cbi5ob21lLXBhZ2UgLmNhbGN1bGF0b3ItY2FyZCAubm9wYWRkaW5nIGlvbi1yZW9yZGVyLWdyb3VwIHNlY3Rpb24gLnNlY3Rpb24tYm9yZGVyIC5vdGhlci1sb2NhdGlvbi1zZWN0aW9uIC5pdGVtIGlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5ob21lLXBhZ2UgLmNhbGN1bGF0b3ItY2FyZCAubm9wYWRkaW5nIGlvbi1yZW9yZGVyLWdyb3VwIHNlY3Rpb24gLnNlY3Rpb24tYm9yZGVyIGlvbi1yZW9yZGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xufVxuLmhvbWUtcGFnZSAuY2FsY3VsYXRvci1jYXJkIC5ub3BhZGRpbmcgaW9uLXJlb3JkZXItZ3JvdXAgc2VjdGlvbiAuc2VjdGlvbi1ib3JkZXIgLnJlbW92ZS1idXR0b24ge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG4gIHRvcDogYm90dG9tO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLmhvbWUtcGFnZSAuY2FsY3VsYXRvci1jYXJkIC5ub3BhZGRpbmcgaW9uLXJlb3JkZXItZ3JvdXAgc2VjdGlvbiAuc2VjdGlvbi1ib3JkZXIgLnJlbW92ZS1idXR0b24gLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmhvbWUtcGFnZSAuY2FsY3VsYXRvci1jYXJkIC5ub3BhZGRpbmcgaW9uLXJlb3JkZXItZ3JvdXAgc2VjdGlvbiAuc2VjdGlvbi1ib3JkZXIgLnJlbW92ZS1idXR0b24gLmJ0biBpb24taWNvbiB7XG4gIGJhY2tncm91bmQ6ICNmZGM2MDA7XG4gIHBhZGRpbmc6IDFweCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5ob21lLXBhZ2UgLmNhbGN1bGF0b3ItY2FyZCAuYWRkLXN0b3Age1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG4uaG9tZS1wYWdlIC5jYWxjdWxhdG9yLWNhcmQgLmFkZC1zdG9wIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogNXB4IDAgNXB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2OTYyNjI7XG59XG4uaG9tZS1wYWdlIC5jYWxjdWxhdG9yLWNhcmQgLmFkZC1zdG9wIGlvbi1sYWJlbCBpb24taWNvbiB7XG4gIGJhY2tncm91bmQ6ICNmOWI4MDI7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAycHggMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cblxuLmVycm9yIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2YxM2MxZDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIGlvbi1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaG9tZS1wYWdlIC5jYWxjdWxhdG9yLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1yYWRpby1ncm91cCBkaXYgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRhdGUtdGltZS1yb3cgLm5vX19wYWRkaW5nIGlvbi1sYWJlbCxcbi5yZXR1cm4tZGF0ZS10aW1lLXJvdyAubm9fX3BhZGRpbmcgaW9uLWxhYmVsLFxuLnR5cGUtb2Ytc2VydmljZS1yb3cgLm5vX19wYWRkaW5nIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgLmZ1bGwtd2lkdGggaW9uLWlucHV0IHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzcwcHgpIGFuZCAobWF4LXdpZHRoOiAzODBweCkge1xuICAuZnVsbC13aWR0aCBpb24taW5wdXQge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA4cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC5ub3BhZGRpbmcgLnNlY3Rpb24tYm9yZGVyIGlvbi1yZW9yZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA4cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTFweCkge1xuICAubm9wYWRkaW5nIC5zZWN0aW9uLWJvcmRlciBpb24tcmVvcmRlciB7XG4gICAgcGFkZGluZy10b3A6IDByZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0zMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5vcGFkZGluZyAuc2VjdGlvbi1ib3JkZXIgLm90aGVyLWxvY2F0aW9uLXNlY3Rpb24gLml0ZW0tLXNlbGVjdC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5vcGFkZGluZyAucmVtb3ZlLWJ1dHRvbiB7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDlweDtcbiAgICB0b3A6IGJvdHRvbTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgLm5vcGFkZGluZyAuc2VjdGlvbi1ib3JkZXIge1xuICAgIG1pbi13aWR0aDogNDEycHggIWltcG9ydGFudDtcbiAgfVxuICAubm9wYWRkaW5nIC5zZWN0aW9uLWJvcmRlciBpb24tcmVvcmRlciB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubm9wYWRkaW5nIC5yZW1vdmUtYnV0dG9uIHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZnVsbC13aWR0aCBpb24taW5wdXQge1xuICAgIC0tcGFkZGluZy1zdGFydDogOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modelfrom_modelfrom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modelfrom/modelfrom.component */ "./src/app/modelfrom/modelfrom.component.ts");
/* harmony import */ var _modelto_modelto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modelto/modelto.component */ "./src/app/modelto/modelto.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stops_location_stops_location_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../stops-location/stops-location.page */ "./src/app/stops-location/stops-location.page.ts");














let HomePage = class HomePage {
    constructor(_FB, router, envservice, modalController, toastCtrl, loadingController, platform, appcomp) {
        this._FB = _FB;
        this.router = router;
        this.envservice = envservice;
        this.modalController = modalController;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.platform = platform;
        this.appcomp = appcomp;
        this.addresses = [];
        this.currentLocation = {
            lat: 0,
            lng: 0
        };
        this.data = {};
        this.input = '';
        this.countries = [];
        this.dateShow = true;
        this.timeShow = true;
        this.dateShow1 = true;
        this.timeShow1 = true;
        this.formData1 = {
            "Startlocation": "", "Endlocation": "", "Servicetype": "", "PickUpDate": "", "PickupTime": "", "screenType": "m",
            "eventValue": "", "hourlyType": "", "waitingTime": "", "ReturnDate": "", "returnPickuptime": ""
        };
        this.formData = {
            "Event": "",
            "FromLocationName": "John F. Kennedy International Airport (JFK)",
            "HourlyTime": "",
            "PickUpDate": "07/01/2021",
            "PickupTime24H": "11:57 PM",
            "ReturnDate": "Invalid date",
            "ReturnTime24H": "",
            "Servicetype": "",
            "ToLocationName": "Teterboro Airport (TEB)",
            "TypeOfService": "0",
            "WaitingTime": ""
        };
        this.isItemAvailable = false;
        this.isItemAvailable1 = false;
        this.d = new Date();
        this.minDate = new Date().toISOString();
        this.maxData = (new Date()).getFullYear() + 10;
        this.formDatas = {};
        this.objLiclsResStops = [];
        this.date = new Date().toISOString();
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.form1 = this._FB.group({
            FromLocationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ToLocationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Servicetype: [''],
            PickUpDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PickupTime24H: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ReturnDate: [''],
            ReturnTime24H: [''],
            TypeOfService: [''],
            Event: [''],
            HourlyTime: [''],
            WaitingTime: [''],
            objLiclsResStops: this._FB.array([])
        });
        this.segment = "0";
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        this.data.name = '';
        this.data.id = '';
        console.log(localStorage);
    }
    ngOnInit() {
        this.serviceList();
        this.hourlyType();
        this.waitTime();
        if (localStorage.getItem("user_id")) {
            this.appcomp.isLoggedin = localStorage.isLoggedin;
            this.appcomp.isLoggedOut = false;
        }
    }
    ionViewWillEnter() {
        this.presentLoading().then(a => {
            localStorage.removeItem('salesTax');
            localStorage.removeItem('amenityData');
            localStorage.removeItem('salesTax2');
            localStorage.removeItem('amenityData2');
            localStorage.removeItem('car_detail2');
            localStorage.removeItem('car_detail');
            localStorage.removeItem('all_detail');
            localStorage.removeItem('extracharges');
            localStorage.removeItem('extracharges2');
            localStorage.removeItem('extracharges2');
            localStorage.removeItem('form_values');
            localStorage.removeItem('form_values2');
            localStorage.removeItem('final_confirmation');
            localStorage.removeItem('final_rate');
            localStorage.removeItem('final_rate2');
            localStorage.removeItem('noofHours');
            localStorage.removeItem('numberofHours');
            this.loadingController.dismiss();
        });
    }
    serviceList() {
        this.envservice.getServiceList()
            .subscribe((data) => {
            this.noOfService = data.Data;
        });
    }
    hourlyType() {
        this.envservice.getHourlyType()
            .subscribe((data) => {
            this.noOfHours = data.Data;
        });
    }
    getHours(value) {
        console.log(value.detail.value);
        localStorage.setItem("noofHours", value.detail.value);
    }
    waitTime() {
        this.envservice.getWaitingTime()
            .subscribe((data) => {
            this.waitingTime = data.Data;
        });
    }
    stopFields() {
        return this._FB.group({
            StopLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            StopWatingTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    addNewInputField() {
        const control = this.form1.controls.objLiclsResStops;
        control.push(this.stopFields());
        console.log(control.value);
    }
    removeInputField(i) {
        const control = this.form1.controls.objLiclsResStops;
        control.removeAt(i);
    }
    stopModal(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _stops_location_stops_location_page__WEBPACK_IMPORTED_MODULE_10__["StopsLocationPage"]
            });
            modal.onDidDismiss()
                .then((data) => {
                const val = data.data;
                const control = this.form1.controls.objLiclsResStops;
                control.at(i).setValue({
                    StopLocation: val.Location_Name + val.Location_Address,
                    StopWatingTime: ''
                });
            });
            return yield modal.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: '<ion-img src="/assets/icon/loader.gif"></ion-img><span>Please wait while we calculate your ride..</span>',
                cssClass: 'custom-loader',
                spinner: null
            });
            return yield loading.present();
        });
    }
    ionViewDidEnter() {
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    radioChecked(e) {
        // this.form1.controls['screenType'].setValue(e);
    }
    presentmodal1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // let O = document.getElementById('origintrip').offsetTop;
            // this.content.scrollToPoint(0,O,2500);
            const modal = yield this.modalController.create({
                component: _modelfrom_modelfrom_component__WEBPACK_IMPORTED_MODULE_5__["ModelfromComponent"]
            });
            modal.onDidDismiss()
                .then((data) => {
                const val = data.data;
                this.locationType = data.data.Location_Type;
                this.locationName = data.data.Location_Name;
                if (this.locationName == '') {
                    this.form1.controls['FromLocationName'].setValue(val.Location_Address);
                    localStorage.setItem("fromLocation", val.Location_Address);
                }
                else if (this.locationType == 'A') {
                    this.form1.controls['FromLocationName'].setValue(val.Location_Name);
                    localStorage.setItem("fromLocation", val.Location_Name);
                }
                else {
                    this.form1.controls['FromLocationName'].setValue(val.Location_Name + val.Location_Address);
                    localStorage.setItem("fromLocation", val.Location_Name);
                }
            });
            return yield modal.present();
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modelto_modelto_component__WEBPACK_IMPORTED_MODULE_6__["ModeltoComponent"]
            });
            modal.onDidDismiss()
                .then((data) => {
                const val = data.data;
                this.locationType = data.data.Location_Type;
                this.locationName = data.data.Location_Name;
                this.locationType = data.data.Location_Type;
                if (this.locationName == '') {
                    this.form1.controls['ToLocationName'].setValue(val.Location_Address);
                    localStorage.setItem("toLocation", val.Location_Address);
                }
                else if (this.locationType == 'A') {
                    this.form1.controls['ToLocationName'].setValue(val.Location_Name);
                    localStorage.setItem("toLocation", val.Location_Name);
                }
                else {
                    this.form1.controls['ToLocationName'].setValue(val.Location_Name + val.Location_Address);
                    localStorage.setItem("toLocation", val.Location_Name);
                }
            });
            return yield modal.present();
        });
    }
    changeDate() {
        let date = this.form1.get('PickUpDate').value;
        let monthYear = moment__WEBPACK_IMPORTED_MODULE_8__(date).add(0, 'year').format('MMM YYYY');
        let datttt = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('DD');
        let day = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('dddd');
        let old = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('DD/MM/YYYY');
        let curr_time = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('hh:mm');
        this.selectMonthYear = monthYear;
        this.selectDay = datttt;
        this.selectDate = day;
        this.dateShow = false;
    }
    addMinutes(times, minsToAdd) {
        function D(J) { return (J < 10 ? '0' : '') + J; }
        ;
        var piece = times.split(':');
        var mins = piece[0] * 60 + +piece[1] + +minsToAdd;
        return D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
    }
    //// Time section
    changeTime() {
        let time = this.form1.get('PickupTime24H').value;
        let full = moment__WEBPACK_IMPORTED_MODULE_8__(time).format('H:mm');
        let half = moment__WEBPACK_IMPORTED_MODULE_8__(time).format('hh:mm A');
        this.fulltime = full;
        this.halftime = half;
        this.timeShow = false;
    }
    timeicon() {
        this.timeShow = true;
        this.form1.controls['PickupTime24H'].setValue('');
    }
    dateicon() {
        this.dateShow = true;
        this.form1.controls['PickUpDate'].setValue('');
    }
    changeRoundtripDate() {
        let date = this.form1.get('ReturnDate').value;
        let monthYear1 = moment__WEBPACK_IMPORTED_MODULE_8__(date).add(0, 'year').format('MMM YYYY');
        let datttt1 = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('DD');
        let day1 = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('dddd');
        let old = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('DD/MM/YYYY');
        let curr_time = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('hh:mm');
        this.selectReturnMonthYear = monthYear1;
        this.selectReturnDay = datttt1;
        this.selectReturnDate = day1;
        this.dateShow1 = false;
    }
    changetRoundtripTime() {
        let time = this.form1.get('ReturnTime24H').value;
        let full1 = moment__WEBPACK_IMPORTED_MODULE_8__(time).format('H:mm');
        let half1 = moment__WEBPACK_IMPORTED_MODULE_8__(time).format('hh:mm A');
        this.fullRoundtriptime = full1;
        this.halfRoundtriptime = half1;
        this.timeShow1 = false;
    }
    timeRoundtripicon() {
        this.timeShow1 = true;
        this.form1.controls['ReturnTime24H'].setValue('');
    }
    dateRoundtripicon() {
        this.dateShow1 = true;
        this.form1.controls['ReturnDate'].setValue('');
    }
    doReorder(ev) {
        this.oldid = ev.detail.from;
        this.newid = ev.detail.to;
        // this.addresses[ev.detail.from] = this.newid;
        // this.addresses[ev.detail.to] = this.oldid;
        // this.addresses[ev.detail.from] = this.oldid;
        // this.addresses[ev.detail.to] = this.newid;
        ev.detail.complete();
        console.log(ev);
        console.log("old", this.oldid);
        console.log("new", this.newid);
        // console.log(this.addresses[ev.detail.from]);
        // console.log(this.addresses[ev.detail.to]);
        const control = this.form1.controls.objLiclsResStops;
        let newIndex = this.oldid + this.newid;
        if (newIndex === -1) {
            newIndex = control.length - 1;
            console.log(newIndex);
        }
        else if (newIndex == control.length) {
            newIndex = 0;
            console.log(newIndex);
        }
        const currentGroup = control.at(this.oldid);
        control.removeAt(this.oldid);
        control.insert(newIndex, currentGroup);
        console.log(control.controls);
    }
    toggleReorderGroup() {
        this.reorderGroup.disabled = !this.reorderGroup.disabled;
    }
    getItems(ev) {
        const val = ev.target.value;
        if (val.length > 0) {
            if (val && val.trim() != '') {
                this.envservice.suggetionlist(val)
                    .subscribe((user) => {
                    this.isItemAvailable = true;
                    this.response = user;
                    this.items = this.response.Data;
                }, (error) => {
                    this.message = error.error.Message;
                    // this.presentToast();
                });
            }
        }
        else {
            this.items = [];
        }
    }
    getItem(ev) {
        const vals = ev.target.value;
        if (vals.length > 0) {
            if (vals && vals.trim() != '') {
                this.envservice.suggetionlist(vals)
                    .subscribe((user) => {
                    this.isItemAvailable1 = true;
                    this.response = user;
                    this.rows = this.response.Data;
                }, (error) => {
                    this.message = error.error.Message;
                    //   this.presentToast();
                    //   this.loadingController.dismiss();
                });
            }
        }
        else {
            this.isItemAvailable1 = false;
            this.rows = [];
        }
    }
    // checkGeoLocation() {
    //   console.log('checkGeoLocation is called!!');
    //   this.geolocation.getCurrentPosition().then((resp) => {
    //     console.log(resp);
    //     this.userLat = resp.coords.latitude
    //     this.userLong = resp.coords.longitude
    //     console.log(this.userLat, this.userLong);
    //     this.loadMap();
    //   }, (error) => {
    //     console.log('Error getting location', error);
    //   });
    // }
    onSubmit() {
        let date = this.form1.get('PickUpDate').value;
        let selectedDate = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('DD/MM/YYYY');
        let selectedMonth = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('MM');
        let selectedonlyDate = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('DD');
        let returndate = this.form1.get('ReturnDate').value;
        let selectedReturnDate = moment__WEBPACK_IMPORTED_MODULE_8__(returndate).format('DD/MM/YYYY');
        let selectedReturnMonth = moment__WEBPACK_IMPORTED_MODULE_8__(returndate).format('MM');
        let selectedonlyReturnDate = moment__WEBPACK_IMPORTED_MODULE_8__(returndate).format('DD');
        let time = this.form1.get('PickupTime24H').value;
        let selctedTime = moment__WEBPACK_IMPORTED_MODULE_8__(time).format('H:mm');
        let returntime = this.form1.get('ReturnTime24H').value;
        let selectedReturnTime = moment__WEBPACK_IMPORTED_MODULE_8__(returntime).format('H:mm');
        var timeNow = new Date().getTime();
        var oneHourIntoFuture = new Date(timeNow + 1000 * 60 * 60 * 1);
        let time24 = moment__WEBPACK_IMPORTED_MODULE_8__(oneHourIntoFuture).format('H:mm');
        let currentDate = moment__WEBPACK_IMPORTED_MODULE_8__(timeNow).format('DD/MM/YYYY');
        if (selectedDate == currentDate) {
            if (selctedTime < time24) {
                this.message = "Time: start date time must be greater than 1 hours from current date time";
                this.presentToast();
            }
            else if (this.segment == "2" && selectedReturnDate < selectedDate) {
                this.message = "Return date must be greater or equal than pickup date";
                this.presentToast();
            }
            else if (this.segment == "2" && selectedReturnTime < time24) {
                this.message = "Time: return date time must be greater than 1 hours from pickup date time";
                this.presentToast();
            }
            else {
                this.afterValidations();
            }
        }
        else if (this.segment == "2" && selectedReturnMonth < selectedMonth) {
            this.message = "Return date must be greater or equal than pickup date";
            this.presentToast();
        }
        else if (this.segment == "2" && selectedReturnDate == selectedDate) {
            if (selectedReturnTime < time24) {
                this.message = "Time: return date time must be greater than 1 hours from pickup date time";
                this.presentToast();
            }
            else {
                this.afterValidations();
            }
        }
        else if (this.segment == "2" && selectedReturnMonth == selectedMonth && selectedonlyReturnDate < selectedonlyDate) {
            this.message = "Return date must be greater or equal than pickup date";
            this.presentToast();
        }
        else {
            this.afterValidations();
        }
    }
    afterValidations() {
        this.formData1.Startlocation = this.form1.get('FromLocationName').value;
        this.formData1.Endlocation = this.form1.get('ToLocationName').value;
        this.formData1.PickUpDate = moment__WEBPACK_IMPORTED_MODULE_8__(this.form1.get('PickUpDate').value).format('MM/DD/YYYY');
        this.form1.controls['PickUpDate'].setValue(moment__WEBPACK_IMPORTED_MODULE_8__(this.form1.get('PickUpDate').value).format('MM/DD/YYYY'));
        this.formData1.PickupTime = moment__WEBPACK_IMPORTED_MODULE_8__(this.form1.get('PickupTime24H').value).format('hh:mm A');
        this.formData1.Servicetype = this.form1.get('TypeOfService').value;
        if (this.formData1.PickupTime == 'Invalid date') {
        }
        else
            this.form1.controls['PickupTime24H'].setValue(moment__WEBPACK_IMPORTED_MODULE_8__(this.form1.get('PickupTime24H').value).format('hh:mm A'));
        //for hourly
        this.formData1.eventValue = this.form1.get('Event').value;
        this.formData1.hourlyType = this.form1.get('HourlyTime').value;
        //for Wait & Return
        this.formData1.waitingTime = this.form1.get('WaitingTime').value;
        //for RoundTrip
        this.formData1.returnPickuptime = moment__WEBPACK_IMPORTED_MODULE_8__(this.form1.get('ReturnTime24H').value).format('hh:mm A');
        this.formData1.ReturnDate = moment__WEBPACK_IMPORTED_MODULE_8__(this.form1.get('ReturnDate').value).format('MM/DD/YYYY');
        this.form1.controls['ReturnDate'].setValue(moment__WEBPACK_IMPORTED_MODULE_8__(this.form1.get('ReturnDate').value).format('MM/DD/YYYY'));
        if (this.formData1.returnPickuptime == 'Invalid date') {
        }
        else
            this.form1.controls['ReturnTime24H'].setValue(moment__WEBPACK_IMPORTED_MODULE_8__(this.form1.get('ReturnTime24H').value).format('hh:mm A'));
        if (this.segment != "1" && this.formData1.Startlocation == this.formData1.Endlocation) {
            this.message = 'Please select hourly event type.';
            this.presentToast();
            this.segment = "1";
        }
        else if (this.segment == "1" && this.formData1.eventValue == '') {
            this.message = "Please Select Event.";
            this.presentToast();
        }
        else {
            this.presentLoading().then(a => {
                this.vehiclesList();
            });
        }
    }
    vehiclesList() {
        console.log(this.form1.value);
        this.envservice.submitAllData(this.form1.value)
            .then(data => {
            console.log(data.data);
            this.response = JSON.parse(data.data);
            console.log("data", data.status);
            console.log(this.response); // data received by server
            console.log(data.headers);
            let resMsg = this.response.Message;
            if (resMsg === "success") {
                let resData = this.response.Data;
                localStorage.setItem('all_detail', JSON.stringify(resData));
                this.router.navigate(['/vehicles']);
                this.loadingController.dismiss();
            }
        }).catch(error => {
            this.errorResponse = JSON.parse(error.error);
            console.log("error", error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            console.log("error", error);
            this.message = this.errorResponse.Message;
            this.presentToast();
            this.loadingController.dismiss();
        });
        // (error: HttpErrorResponse) => {
        //   this.message = error;
        //   console.log(this.message)
        //   this.presentToast();
        //   this.loadingController.dismiss();
        // }
        // );
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: this.message,
                duration: 2000
            });
            toast.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonReorderGroup"], { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonReorderGroup"])
], HomePage.prototype, "reorderGroup", void 0);
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map