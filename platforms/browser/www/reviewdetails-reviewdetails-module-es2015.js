(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reviewdetails-reviewdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reviewdetails/reviewdetails.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reviewdetails/reviewdetails.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/filldetails\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"page-title\" *ngIf=\"serviceName == 'Round Trip'\"><small>Review Details</small></ion-title>\n        <ion-title class=\"vehicle-title\" *ngIf=\"serviceName != 'Round Trip'\">\n            <b> {{locationstart}} </b>\n            <b> <small>to</small> {{locationend}}</b>\n        </ion-title>\n        <div class=\"tab-button\" slot=\"end\">\n            <ion-button *ngIf=\"serviceName == 'Round Trip'\" class=\"nyc-button-inside\" size=\"small\"\n            (click)=\"ScrollToOrigin()\">Origin Trip</ion-button>\n        <ion-button *ngIf=\"serviceName == 'Round Trip'\" class=\"nyc-button-inside\" size=\"small\"\n            (click)=\"ScrollToReturn()\">Return Trip</ion-button>\n        </div>\n       \n    </ion-toolbar>\n</ion-header>\n\n<ion-toolbar class=\"home-page\" *ngIf=\"serviceName != 'Round Trip'\">\n    <div class=\"calculator-card\">\n        <ion-item class=\"date-time-row\">\n            <ion-col size=\"6\" class=\"padding-0\">\n                <ion-item class=\"no__padding\" lines=\"none\">\n                    <ion-label position=\"stacked\"> DATE </ion-label>\n                    <div>\n                        <span class=\"date\">{{selectDate}}</span>\n                        <span class=\"month\">{{selectMonthYear}}</span>\n                        <span class=\"month-year\">{{selectDay}}</span>\n                    </div>\n                </ion-item>\n            </ion-col>\n\n\n            <ion-col size=\"6\" class=\"padding-0\">\n                <ion-item class=\"no__padding\" lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'A'\"> FLIGHT\n                        ARRIVAL TIME </ion-label>\n                    <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'B'\"> PICKUP\n                        TIME </ion-label>\n                    <div>\n                        <span class=\"date\"> {{fulltime}}</span>\n                        <span class=\"month-year\"> {{halftime}}</span>\n                    </div>\n                </ion-item>\n            </ion-col>\n        </ion-item>\n    </div>\n</ion-toolbar>\n<ion-toolbar *ngIf=\"serviceName != 'Round Trip'\">\n    <ion-item lines=\"none\">\n        <ion-text class=\"car_name\">{{carName}}</ion-text>\n        <div class=\"capacity\" slot=\"end\" style=\"margin-top:5px\">\n            <ion-col class=\"icons-row\">\n                <ion-img src={{carInside}} class=\"\"></ion-img>\n            </ion-col>\n        </div>\n    </ion-item>\n</ion-toolbar>\n\n<ion-content [scrollEvents]=\"true\">\n    <div id=\"origintrip\" bg *ngIf=\"serviceName == 'Round Trip'\">\n        <ion-label>Step 1 of 2 - Origin Trip</ion-label>\n    </div>\n    <ion-toolbar class=\"date-time-row\" *ngIf=\"serviceName == 'Round Trip'\">\n        <ion-item lines=\"none\">\n            <div class=\"roundtrip--from-to-location\">\n                <b> {{locationstart}} </b>\n                <b> <small>to</small> {{locationend}}</b>\n            </div>\n        </ion-item>\n    </ion-toolbar>\n    <ion-toolbar class=\"home-page\" *ngIf=\"serviceName == 'Round Trip'\">\n        <div class=\"calculator-card\">\n            <ion-item lines=\"none\" class=\"date-time-row\">\n                <ion-col size=\"6\" class=\"padding-0\">\n                    <ion-item class=\"no__padding\" lines=\"none\">\n                        <ion-label position=\"stacked\"> DATE </ion-label>\n                        <div>\n                            <span class=\"date\">{{selectDate}}</span>\n                            <span class=\"month\">{{selectMonthYear}}</span>\n                            <span class=\"month-year\">{{selectDay}}</span>\n                        </div>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"padding-0\">\n                    <ion-item class=\"no__padding\" lines=\"none\">\n                        <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'A'\">\n                            FLIGHT ARRIVAL TIME </ion-label>\n                        <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'B'\">\n                            PICKUP TIME </ion-label>\n                        <div>\n                            <span class=\"date\"> {{fulltime}}</span>\n                            <span class=\"month-year\"> {{halftime}}</span>\n                        </div>\n                    </ion-item>\n                </ion-col>\n            </ion-item>\n        </div>\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"serviceName == 'Round Trip'\">\n        <ion-item lines=\"none\">\n            <ion-text class=\"car_name\">{{carName}}</ion-text>\n            <div class=\"capacity\" slot=\"end\" style=\"margin-top:5px\">\n                <ion-col class=\"icons-row\">\n                    <ion-img src={{carInside}} class=\"\"></ion-img>\n                </ion-col>\n            </div>\n        </ion-item>\n    </ion-toolbar>\n\n\n\n    <form [formGroup]=\"form1\" (ngSubmit)=\"nextButton(form1.value)\">\n        <ion-card>\n            <ion-card-header class=\"ion-card-headers--accordian\" (click)=\"toggleGroup(1)\" [ngClass]=\"{active: isGroupShown(1)}\">\n                <ion-label>Pick UP Details</ion-label>\n                <ion-icon [name]=\"isGroupShown(1) ? 'ios-arrow-up' : 'ios-arrow-down'\"></ion-icon>\n            </ion-card-header>\n\n            <ion-card-content *ngIf=\"isGroupShown(1)\" nopadding>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">From</ion-label>\n                    <ion-text>{{locationstart}} </ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"locationType == 'A'\">\n                    <ion-label position=\"stacked\">Airline Name</ion-label>\n                    <ion-text>{{formvalues.AirlineName}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"locationType == 'A'\">\n                    <ion-label position=\"stacked\">Flight Number</ion-label>\n                    <ion-text>{{formvalues.FlightNo}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"locationType == 'A' && formvalues.start_Terminalno != ''\">\n                    <ion-label position=\"stacked\">Terminal</ion-label>\n                    <ion-text>{{formvalues.start_Terminalno}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"locationType == 'A'\">\n                    <ion-label position=\"stacked\">Origin Airport</ion-label>\n                    <ion-text>{{formvalues.FlightDepAirport}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"locationType == 'A'\">\n                    <ion-label position=\"stacked\">Type Of Flight</ion-label>\n                    <ion-text>{{formvalues.FlightType}}</ion-text>\n                </div>\n            </ion-card-content>\n            \n            <ion-card-header class=\"ion-card-headers--accordian\" (click)=\"toggleGroup(2)\" [ngClass]=\"{active: isGroupShown(2)}\">\n                <ion-label>Drop Off Details</ion-label>\n                <ion-icon [name]=\"isGroupShown(2) ? 'ios-arrow-up' : 'ios-arrow-down'\"></ion-icon>\n            </ion-card-header>\n            <ion-card-content nopadding *ngIf=\"isGroupShown(2)\">\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">To</ion-label>\n                    <ion-text>{{locationend}}</ion-text>\n                </div>\n            </ion-card-content>\n            <ion-card-header class=\"ion-card-headers--accordian\" (click)=\"toggleGroup(3)\" [ngClass]=\"{active: isGroupShown(3)}\">\n                <ion-label>Passenger Details</ion-label>\n                <ion-icon [name]=\"isGroupShown(3) ? 'ios-arrow-up' : 'ios-arrow-down'\"></ion-icon>\n            </ion-card-header>\n            <ion-card-content nopadding *ngIf=\"isGroupShown(3)\">\n                <div class=\"form-section\" *ngIf=\"formvalues.NoPassenger != '0'\">\n                    <ion-label position=\"stacked\">No. Of Passengers</ion-label>\n                    <ion-text slot=\"end\">{{formvalues.NoPassenger}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"formvalues.NoSuitcase != '0'\">\n                    <ion-label position=\"stacked\">No. Of Suitcases</ion-label>\n                    <ion-text slot=\"end\">{{formvalues.NoSuitcase}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"formvalues.specialIns != ''\">\n                    <ion-label position=\"stacked\">Special Instructions</ion-label>\n                    <ion-text>{{formvalues.specialIns}}</ion-text>\n                </div>\n            </ion-card-content>\n        </ion-card>\n        <!-- //------------------------Roundtrip------------------------------------------------------------>\n        <div id=\"returntrip\" bg *ngIf=\"serviceName == 'Round Trip'\">\n            <ion-label>Step 2 of 2 - Return Trip</ion-label>\n        </div>\n        <ion-toolbar class=\"date-time-row\" *ngIf=\"serviceName == 'Round Trip'\">\n            <ion-item lines=\"none\">\n                <div class=\"roundtrip--from-to-location\">\n                    <b> {{locationend}} </b>\n                    <b> <small>to</small> {{locationstart}}</b>\n                </div>\n            </ion-item>\n        </ion-toolbar>\n        <ion-toolbar class=\"home-page\" *ngIf=\"serviceName == 'Round Trip'\">\n            <div class=\"calculator-card\">\n                <ion-item class=\"date-time-row\" lines=\"none\">\n                        <ion-col size=\"6\" class=\"padding-0\">\n                            <ion-item lines=\"none\" class=\"no__padding\">\n                                <ion-label position=\"stacked\">RETURN DATE </ion-label>\n                                <div>\n                                    <span class=\"date\">{{selectDate2}}</span>\n                                    <span class=\"month\">{{selectMonthYear2}}</span>\n                                    <span class=\"month-year\">{{selectDay2}}</span>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n    \n                        <ion-col size=\"6\" class=\"padding-0\">\n                            <ion-item class=\"no__padding\" lines=\"none\">\n                                <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'A'\"> FLIGHT ARRIVAL TIME </ion-label>\n                                <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'B'\"> RETURN PICKUP TIME </ion-label>\n                                <div>\n                                    <span class=\"date\"> {{fulltime2}}</span>\n                                    <span class=\"month-year\"> {{halftime2}}</span>\n\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                </ion-item>\n            </div>\n        </ion-toolbar>\n        <ion-toolbar *ngIf=\"serviceName == 'Round Trip'\">\n            <ion-item lines=\"none\">\n                <ion-text class=\"car_name\">{{carName2}}</ion-text>\n                <div class=\"capacity\" slot=\"end\" style=\"margin-top:5px\">\n                    <ion-col class=\"icons-row\">\n                        <ion-img src={{carInside2}} class=\"\"></ion-img>\n                    </ion-col>\n                </div>\n            </ion-item>\n        </ion-toolbar>\n\n\n\n\n        <ion-card *ngIf=\"serviceName == 'Round Trip'\">\n\n            <ion-card-header class=\"ion-card-headers--accordian\" (click)=\"toggleGroup(6)\" [ngClass]=\"{active: isGroupShown(6)}\"\n                *ngIf=\"serviceName == 'Round Trip'\">\n                <ion-label>Pick UP Details</ion-label>\n                <ion-icon [name]=\"isGroupShown(6) ? 'ios-arrow-up' : 'ios-arrow-down'\"></ion-icon>\n            </ion-card-header>\n            <ion-card-content *ngIf=\"isGroupShown(6)\" nopadding>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">From</ion-label>\n                    <ion-text>{{locationend}} </ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"locationTypeR == 'A'\">\n                    <ion-label position=\"stacked\">Airline Name</ion-label>\n                    <ion-text>{{formvalues2.AirlineNameReturn}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"locationTypeR == 'A'\">\n                    <ion-label position=\"stacked\">Flight Number</ion-label>\n                    <ion-text>{{formvalues2.FlightNoReturn}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"locationTypeR == 'A' && formvalues2.start_TerminalnoReturn != ''\">\n                    <ion-label position=\"stacked\">Terminal</ion-label>\n                    <ion-text>{{formvalues2.start_TerminalnoReturn}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"locationTypeR == 'A'\">\n                    <ion-label position=\"stacked\">Origin Airport</ion-label>\n                    <ion-text>{{formvalues2.FlightDepAirportReturn}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"locationTypeR == 'A'\">\n                    <ion-label position=\"stacked\">Type Of Flight</ion-label>\n                    <ion-text>{{formvalues2.FlightTypeReturn}}</ion-text>\n                </div>\n                \n            </ion-card-content>\n\n            <ion-card-header class=\"ion-card-headers--accordian\" (click)=\"toggleGroup(7)\" [ngClass]=\"{active: isGroupShown(7)}\"\n                *ngIf=\"serviceName == 'Round Trip'\">\n                <ion-label>Drop Off Details</ion-label>\n                <ion-icon [name]=\"isGroupShown(7) ? 'ios-arrow-up' : 'ios-arrow-down'\"></ion-icon>\n            </ion-card-header>\n            <ion-card-content nopadding *ngIf=\"isGroupShown(7)\">\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">TO</ion-label>\n                    <ion-text>{{locationstart}}</ion-text>\n                </div>\n            </ion-card-content>\n\n            <ion-card-header class=\"ion-card-headers--accordian\" (click)=\"toggleGroup(8)\" [ngClass]=\"{active: isGroupShown(8)}\"\n                *ngIf=\"serviceName == 'Round Trip'\">\n                <ion-label>Passenger Details</ion-label>\n                <ion-icon [name]=\"isGroupShown(8) ? 'ios-arrow-up' : 'ios-arrow-down'\"></ion-icon>\n            </ion-card-header>\n            <ion-card-content nopadding *ngIf=\"isGroupShown(8)\">\n                <div class=\"form-section\" *ngIf=\"formvalues2.NoPassengerReturn != '0'\">\n                    <ion-label position=\"stacked\">No. Of Passengers</ion-label>\n                    <ion-text slot=\"end\">{{formvalues2.NoPassengerReturn}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"formvalues2.NoSuitcaseReturn != '0'\">\n                    <ion-label position=\"stacked\">No. Of Suitcases</ion-label>\n                    <ion-text slot=\"end\">{{formvalues2.NoSuitcaseReturn}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"formvalues2.specialInsReturn != ''\">\n                    <ion-label position=\"stacked\">SPECIAL INSTRUCTIONS</ion-label>\n                    <ion-text>{{formvalues2.specialInsReturn}}</ion-text>\n                </div>\n            </ion-card-content>\n        </ion-card>\n\n        <div bg *ngIf=\"serviceName == 'Round Trip'\"></div>\n\n        <ion-card>\n            <!-- //------------------------Roundtrip-------------------------------------------------------->\n\n            <ion-card-header class=\"ion-card-headers--accordian\" (click)=\"toggleGroup(4)\" [ngClass]=\"{active: isGroupShown(4)}\">\n                <ion-label>Contact Details</ion-label>\n                <ion-icon [name]=\"isGroupShown(4) ? 'ios-arrow-up' : 'ios-arrow-down'\"></ion-icon>\n            </ion-card-header>\n            <ion-card-content nopadding *ngIf=\"isGroupShown(4)\">\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">Email</ion-label>\n                    <ion-text>{{formvalues.BEmail}}</ion-text>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">First Name</ion-label>\n                    <ion-text>{{formvalues.BFirstName}}</ion-text>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">CellPhone Number</ion-label>\n                    <ion-text>{{formvalues.BMobileNo}}</ion-text>\n                </div>\n                <div class=\"form-section\" *ngIf=\"formvalues.BTelePhoneNo != ''\">\n                    <ion-label position=\"stacked\">TelePhone Number</ion-label>\n                    <ion-text>{{formvalues.BTelePhoneNo}}</ion-text>\n                </div>\n            </ion-card-content>\n            <ion-card-header class=\"ion-card-headers--accordian\" (click)=\"toggleGroup(5)\" [ngClass]=\"{active: isGroupShown(5)}\">\n                <ion-label>Payment Details</ion-label>\n                <ion-icon [name]=\"isGroupShown(5) ? 'ios-arrow-up' : 'ios-arrow-down'\"></ion-icon>\n            </ion-card-header>\n            <ion-card-content nopadding *ngIf=\"isGroupShown(5)\">\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">Credit Card Type</ion-label>\n                    <ion-text>{{formvalues.CreditCardType}}</ion-text>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">Credit Card No.</ion-label>\n                    <ion-text>{{formvalues.CreditCardNo}}</ion-text>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">Exp Month</ion-label>\n                    <ion-text>{{formvalues.CreditCardExpMonth}}</ion-text>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">Exp Year</ion-label>\n                    <ion-text>{{formvalues.CreditCardExpYear}}</ion-text>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">Cvv</ion-label>\n                    <ion-text>{{formvalues.CreditCardCVV}}</ion-text>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">CardHolder's Name</ion-label>\n                    <ion-text>{{formvalues.CreditCardFirstLastName}}</ion-text>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">Address</ion-label>\n                    <ion-text>{{formvalues.Address1}}</ion-text>\n                </div>\n            </ion-card-content>\n        </ion-card>\n        <ion-item lines=\"none\" class=\"accept-agree\" (click)=\"serviceAgreementModal()\">\n            <ion-checkbox shape=\"square\" color=\"warning\" formControlName=\"Checked\"></ion-checkbox>\n            <ion-label> &nbsp;ACCEPT <span (click)=\"serviceAgreementModal()\"> SERVICE AGREEMENT </span></ion-label>\n        </ion-item>\n    </form>\n</ion-content>\n\n<ion-footer>\n    <ion-item lines=\"none\">\n        <ion-label *ngIf=\"final_Price !== null && serviceName !== 'Round Trip'\">$ {{final_Price}} <ion-icon\n                name=\"information-circle-outline\" (click)=\"presentModal()\"></ion-icon>\n        </ion-label>\n        <ion-label *ngIf=\"serviceName == 'Round Trip' && total != null\">$ {{total}} <ion-icon\n                name=\"information-circle-outline\" (click)=\"presentModal()\"></ion-icon>\n                <small>Grand Total</small>\n        </ion-label>\n        <ion-button class=\"main-button main-button--next-page\" slot=\"end\" [disabled]=\"!form1.valid\" routerDirection=\"forward\"\n            (click)=\"nextButton()\"> <span> Place Order\n            </span>\n        </ion-button>\n    </ion-item>\n</ion-footer>"

/***/ }),

/***/ "./src/app/reviewdetails/reviewdetails.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/reviewdetails/reviewdetails.module.ts ***!
  \*******************************************************/
/*! exports provided: ReviewdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewdetailsPageModule", function() { return ReviewdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reviewdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviewdetails.page */ "./src/app/reviewdetails/reviewdetails.page.ts");







const routes = [
    {
        path: '',
        component: _reviewdetails_page__WEBPACK_IMPORTED_MODULE_6__["ReviewdetailsPage"]
    }
];
let ReviewdetailsPageModule = class ReviewdetailsPageModule {
};
ReviewdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_reviewdetails_page__WEBPACK_IMPORTED_MODULE_6__["ReviewdetailsPage"]]
    })
], ReviewdetailsPageModule);



/***/ }),

/***/ "./src/app/reviewdetails/reviewdetails.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/reviewdetails/reviewdetails.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accept-agree ion-checkbox {\n  --border-radius: 5px;\n  width: 20px;\n  height: 20px;\n}\n.accept-agree ion-label {\n  font-weight: 600;\n  font-size: medium;\n  color: #000;\n}\n.accept-agree ion-label span {\n  color: #fdc600;\n}\n.icons-row {\n  display: -webkit-box;\n  display: flex;\n  font-size: 20px;\n  padding: 5px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL3Jldmlld2RldGFpbHMvcmV2aWV3ZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jldmlld2RldGFpbHMvcmV2aWV3ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUY7QURFQztFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQUY7QURDRTtFQUNDLGNBQUE7QUNDSDtBRElBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREQiLCJmaWxlIjoic3JjL2FwcC9yZXZpZXdkZXRhaWxzL3Jldmlld2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY2VwdC1hZ3JlZSB7XHJcblx0aW9uLWNoZWNrYm94IHtcclxuXHRcdC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0fVxyXG5cdGlvbi1sYWJlbCB7XHJcblx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0Zm9udC1zaXplOiBtZWRpdW07XHJcblx0XHRjb2xvcjogIzAwMDtcclxuXHRcdHNwYW4ge1xyXG5cdFx0XHRjb2xvcjogI2ZkYzYwMDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5pY29ucy1yb3cge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuXHJcblxyXG4iLCIuYWNjZXB0LWFncmVlIGlvbi1jaGVja2JveCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmFjY2VwdC1hZ3JlZSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgY29sb3I6ICMwMDA7XG59XG4uYWNjZXB0LWFncmVlIGlvbi1sYWJlbCBzcGFuIHtcbiAgY29sb3I6ICNmZGM2MDA7XG59XG5cbi5pY29ucy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/reviewdetails/reviewdetails.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/reviewdetails/reviewdetails.page.ts ***!
  \*****************************************************/
/*! exports provided: ReviewdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewdetailsPage", function() { return ReviewdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _farecalculations_farecalculations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../farecalculations/farecalculations.page */ "./src/app/farecalculations/farecalculations.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modalpage_modalpage_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modalpage/modalpage.page */ "./src/app/modalpage/modalpage.page.ts");









let ReviewdetailsPage = class ReviewdetailsPage {
    constructor(router, envservice, _FB, modalController, loadingController, toastCtrl) {
        this.router = router;
        this.envservice = envservice;
        this._FB = _FB;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.shownGroup = null;
        this.formData1 = { "pEmail": "", "P_Prefix": "", "pFirstName": "", "pLastName": "", "pTelePhoneNo": "", "pMobileNo": "",
            "NoPassenger": "", "NoSuitcase": "", "specialIns": "", "IsPassenger": "", "BEmail": "", "B_Prefix": "",
            "BFirstName": "", "BLastName": "", "BTelePhoneNo": "", "BMobileNo": "", "PaymentType": "", "CreditCardType": "", "CreditCardNo": "",
            "CreditCardExpMonth": "", "CreditCardExpYear": "", "CreditCardCVV": "", "CreditCardFirstLastName": "", "Address1": "", "Address2": "",
            "City": "", "State": "", "ZipCode": "", "Country": "", "AirlineName": "", "FlightNo": "", "FlightDepAirport": "",
            "FlightType": "", "FlightScheduleHourMin": "", "FlightDelaypickup": "", "FlightMeetingPoint": "", "start_Terminalno": "",
            "end_Terminalno": "", "end_placeName": "", "start_placeName": "", "end_Airline": "", "end_FlightNo": "", "end_Flight_DepartureTime": "",
            "end_Destination": "", "EndFlightScheduleHourMin": "", "IsAirlineFreeText": "", "MinHours": "", "MinDiscountHours": "", "IsSaveCardInfo": "",
            "liPassengerMaster1": "", "FK_ProjectId": "" };
        // formData2 = {"pEmail":"", "P_Prefix":"", "pFirstName":"", "pLastName":"", "pTelePhoneNo":"", "pMobileNo":"",
        // "NoPassenger":"", "NoSuitcase":"", "specialIns":"", "IsPassenger":"", "BEmail":"", "B_Prefix":"", 
        // "BFirstName":"", "BLastName":"", "BTelePhoneNo":"", "BMobileNo":"", "PaymentType":"", "CreditCardType":"", "CreditCardNo":"",
        //  "CreditCardExpMonth":"", "CreditCardExpYear":"", "CreditCardCVV":"", "CreditCardFirstLastName":"", "Address1":"","Address2":"",
        // "City":"", "State":"", "ZipCode":"","Country":"","AirlineName":"","FlightNo":"","FlightDepAirport":"",
        // "FlightType":"","FlightScheduleHourMin":"","FlightDelaypickup":"", "FlightMeetingPoint":"","start_Terminalno":"", 
        // "end_Terminalno":"", "end_placeName":"","start_placeName":"","end_Airline":"", "end_FlightNo":"","end_Flight_DepartureTime":"",
        // "end_Destination":"", "EndFlightScheduleHourMin":"","IsAirlineFreeText":"","MinHours":"", "MinDiscountHours":"","IsSaveCardInfo":"",
        // "liPassengerMaster1":"","FK_ProjectId":""};
        this.formData2 = { "specialInsReturn": "", "AirlineNameReturn": "", "FlightNoReturn": "", "FlightDepAirportReturn": "", "FlightTypeReturn": "", "FlightScheduleHourMinReturn": "",
            "FlightDelaypickupReturn": "", "FlightMeetingPointReturn": "", "start_TerminalnoReturn": "", "end_TerminalnoReturn": "", "end_placeNameReturn": "", "start_placeNameReturn": "",
            "end_AirlineReturn": "", "end_FlightNoReturn": "", "end_Flight_DepartureTimeReturn": "", "end_DestinationReturn": "", "EndFlightScheduleHourMinReturn": "", "IsAirlineFreeTextReturn": "",
            "NoPassengerReturn": "", "NoSuitcaseReturn": ""
        };
        this.details = localStorage.getItem('all_detail');
        this.data = JSON.parse(this.details);
        console.log(this.data);
        this.locationType = this.data.FromLocationDetail.Location_Type;
        this.tolocationType = this.data.ToLocationDetail.Location_Type;
        this.locationAddress = this.data.FromLocationDetail.Location_Address;
        this.tolocationAddress = this.data.ToLocationDetail.Location_Address;
        this.locationType = this.data.FromLocationDetail.Location_Type;
        const value1 = localStorage.getItem('fromLocation');
        this.locationstart = value1;
        const value2 = localStorage.getItem('toLocation');
        this.locationend = value2;
        this.selectDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('DD');
        this.selectMonthYear = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('MMM YYYY');
        this.selectDay = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('dddd');
        this.fulltime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('H:mm');
        this.halftime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('h:mm A');
        const data = localStorage.getItem('car_detail');
        this.carData = JSON.parse(data);
        this.serviceName = this.data.TypeOfServiceName;
        this.totalPrice = this.carData.clsVehicleFinalRates.Inclusive_all_tax;
        this.carName = this.carData.Vehicle_Name;
        this.carInside = this.carData.Luggage_Image;
        var finalAmount = localStorage.getItem('final_rate');
        this.final_Price = JSON.parse(finalAmount);
        // -------------------------------Roundtrip---------------------------------------//
        if (localStorage.getItem('final_rate2')) {
            var finalAmount2 = localStorage.getItem('final_rate2');
            this.final_Price2 = JSON.parse(finalAmount2);
            console.log(this.final_Price);
            console.log(this.final_Price2);
            this.total = (Number(this.final_Price) + Number(this.final_Price2)).toFixed(2);
        }
        //-------------------for roundtrip--------------------//
        this.selectDate2 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('DD');
        this.selectMonthYear2 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('MMM YYYY');
        this.selectDay2 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('dddd');
        this.fulltime2 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateTime).format('H:mm');
        this.halftime2 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateTime).format('h:mm A');
        //-------------------for roundtrip--------------------//
        // -------------------------------Roundtrip---------------------------------------//
        if (localStorage.getItem('salesTax')) {
            const salesValue = localStorage.getItem('salesTax');
            this.sales = JSON.parse(salesValue);
            console.log(this.sales);
            this.Sales_tax_Span = Number(this.sales).toFixed(2);
            // this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_value;
        }
        var values = localStorage.getItem('form_values');
        this.formvalues = JSON.parse(values);
        console.log(this.formvalues);
        //-----------------for Roundtrip---------------------------//
        if (localStorage.getItem('car_detail2')) {
            const data2 = localStorage.getItem('car_detail2');
            this.carData2 = JSON.parse(data2);
            this.carName2 = this.carData2.Vehicle_Name;
            this.carInside2 = this.carData2.Luggage_Image;
            if (localStorage.getItem('form_values2')) {
                var values2 = localStorage.getItem('form_values2');
                this.formvalues2 = JSON.parse(values2);
                console.log(this.formvalues2);
            }
        }
        //-----------------for Roundtrip---------------------------//
        //  this.cardNo= this.formvalues.cardNo;
        //  console.log(this.cardNo);
        //  var n1 = this.cardNo.slice(13);
        //  console.log(n1);
        //  this.cardNo = n1;
        this.form1 = this._FB.group({
            Checked: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('true')]
        });
    }
    ngOnInit() {
        if (this.serviceName == "Round Trip") {
            this.locationTypeR = this.tolocationType;
            this.tolocationTypeR = this.locationType;
        }
        if (localStorage.getItem("user_id")) {
            var userId = localStorage.getItem('user_id');
            this.user_id = userId;
            console.log(this.user_id);
        }
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _farecalculations_farecalculations_page__WEBPACK_IMPORTED_MODULE_6__["FarecalculationsPage"]
            });
            return yield modal.present();
        });
    }
    toggleGroup(group) {
        console.log(group);
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    }
    ;
    isGroupShown(group) {
        return this.shownGroup === group;
    }
    nextButton() {
        if (this.serviceName == "Round Trip") {
            this.roundtrip();
        }
        else {
            this.presentLoading().then(a => {
                this.data.Userid = this.user_id;
                this.data.clsSelectVehicelDetails = this.carData;
                this.data.clsSelectVehicelDetails.clsPaymentDetail = this.formvalues;
                this.data.vehicleId = this.carData.VehicleId;
                this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewInclusivealltax = this.final_Price;
                if (localStorage.getItem('amenityData')) {
                    var amenities_data = localStorage.getItem('amenityData');
                    this.amenities_fare = JSON.parse(amenities_data);
                    console.log(this.amenities_fare);
                    this.data.clsSelectVehicelDetails.clsVehicleAmenityDetails = this.amenities_fare;
                }
                // this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhDisc
                // this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhDiscFare
                // this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewSalestax = this.Sales_tax_Span;
                if (this.serviceName == "One way") {
                    this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhsubTotal = this.carData.clsVehicleFinalRates.Rate;
                    this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewSalestax = this.Sales_tax_Span;
                    this.data.clsSelectVehicelDetails.clsVehicleFinalRates.Newhtotalfare = this.carData.clsVehicleFinalRates.Total_Fare;
                    this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewTolls = this.carData.clsVehicleFinalRates.Tolls;
                    this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewAirport_Parking = this.carData.clsVehicleFinalRates.Airport_Parking;
                }
                if (this.serviceName == "Hourly") {
                    if (localStorage.getItem('numberofHours')) {
                        var newHourly = localStorage.getItem('numberofHours');
                        this.newhourlyrate = newHourly;
                        console.log(this.newhourlyrate);
                        this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewHNoMinHour = this.newhourlyrate;
                    }
                    else {
                        this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewHNoMinHour = this.data.clsSelectVehicelDetails.clsVehicleFinalRates.Hourly_min_hours;
                    }
                    if (localStorage.getItem('subtotal')) {
                        var subTotal = localStorage.getItem('subtotal');
                        this.newSubtotal = subTotal;
                        console.log(this.newSubtotal);
                        this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhsubTotal = this.newSubtotal;
                    }
                    else {
                        // this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhsubTotal = this.data.clsSelectVehicelDetails.clsVehicleFinalRates.SubTotal;
                    }
                    // this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhsubTotal = this.data.clsSelectVehicelDetails.clsVehicleFinalRates.Rate;
                }
                if (localStorage.getItem('extracharges')) {
                    var extraCharge = localStorage.getItem('extracharges');
                    this.extraCharge = JSON.parse(extraCharge);
                    this.data.clsSelectVehicelDetails.clsVehicleExtraCharges = this.extraCharge;
                }
                console.log(this.data);
                this.envservice.getConfirmation(this.data)
                    .then((data) => {
                    console.log(data.data);
                    this.response = JSON.parse(data.data);
                    localStorage.setItem("final_confirmation", JSON.stringify(this.response));
                    this.router.navigate(['/thankyou']);
                    this.loadingController.dismiss();
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
                ;
            });
        }
    }
    roundtrip() {
        this.presentLoading().then(a => {
            this.data.Userid = this.user_id;
            this.data.clsSelectVehicelDetails = this.carData;
            this.data.clsSelectVehicelDetails.clsPaymentDetail = this.formvalues;
            this.data.vehicleId = this.carData.VehicleId;
            this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewInclusivealltax = this.final_Price;
            if (localStorage.getItem('amenityData')) {
                var amenities_data = localStorage.getItem('amenityData');
                this.amenities_fare = JSON.parse(amenities_data);
                console.log(this.amenities_fare);
                this.data.clsSelectVehicelDetails.clsVehicleAmenityDetails = this.amenities_fare;
            }
            if (localStorage.getItem('extracharges')) {
                var extraCharge = localStorage.getItem('extracharges');
                this.extraCharge = JSON.parse(extraCharge);
                this.data.clsSelectVehicelDetails.clsVehicleExtraCharges = this.extraCharge;
            }
            this.data.clsSelectReturnVehicelDetails = this.carData2;
            this.data.clsSelectReturnVehicelDetails.clsPaymentDetail = this.formvalues2;
            this.data.PickupSelectedVehicle = this.carData2.VehicleId;
            this.data.clsSelectReturnVehicelDetails.clsVehicleFinalRates.NewInclusivealltax = this.final_Price2;
            this.envservice.getReturnConfirmation(this.data).subscribe((data) => {
                console.log(data);
                localStorage.setItem("final_confirmation", JSON.stringify(data));
                this.router.navigate(['/thankyou']);
                this.loadingController.dismiss();
            }, (error) => {
                this.message = error.error.Message;
                this.presentToast();
                this.loadingController.dismiss();
            });
        });
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
    serviceAgreementModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modalpage_modalpage_page__WEBPACK_IMPORTED_MODULE_8__["ModalpagePage"],
            });
            return yield modal.present();
        });
    }
    ScrollToOrigin() {
        let O = document.getElementById('origintrip').offsetTop;
        this.content.scrollToPoint(0, O, 1500);
    }
    ScrollToReturn() {
        let R = document.getElementById('returntrip').offsetTop;
        this.content.scrollToPoint(0, R, 1500);
    }
};
ReviewdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"])
], ReviewdetailsPage.prototype, "content", void 0);
ReviewdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviewdetails',
        template: __webpack_require__(/*! raw-loader!./reviewdetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/reviewdetails/reviewdetails.page.html"),
        styles: [__webpack_require__(/*! ./reviewdetails.page.scss */ "./src/app/reviewdetails/reviewdetails.page.scss")]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])
], ReviewdetailsPage);



/***/ })

}]);
//# sourceMappingURL=reviewdetails-reviewdetails-module-es2015.js.map