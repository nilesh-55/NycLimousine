(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filldetails-filldetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/filldetails/filldetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/filldetails/filldetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title class=\"page-title\" *ngIf=\"serviceName == 'Round Trip'\"><small>Enter Details</small></ion-title>\n        <ion-title class=\"vehicle-title\" *ngIf=\"serviceName != 'Round Trip'\">\n            <b>{{locationstart}}</b>\n            <b><small>to</small>{{locationend}}</b>\n        </ion-title>\n        <div class=\"tab-button\" slot=\"end\">\n            <ion-button *ngIf=\"serviceName == 'Round Trip'\" class=\"nyc-button-inside\" size=\"small\"\n                (click)=\"ScrollToOrigin()\">Origin Trip</ion-button>\n            <ion-button *ngIf=\"serviceName == 'Round Trip'\" class=\"nyc-button-inside\" size=\"small\"\n                (click)=\"ScrollToReturn()\">Return Trip</ion-button>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-toolbar class=\"home-page\" *ngIf=\"serviceName != 'Round Trip'\">\n    <div class=\"calculator-card\">\n        <ion-item lines=\"none\" class=\"date-time-row\">\n            <ion-col size=\"6\" class=\"padding-0\">\n                <ion-item lines=\"none\" class=\"no__padding\">\n                    <ion-label position=\"stacked\"> DATE </ion-label>\n                    <div>\n                        <span class=\"date\">{{selectDate}}</span>\n                        <span class=\"month\">{{selectMonthYear}}</span>\n                        <span class=\"month-year\">{{selectDay}}</span>\n                    </div>\n                </ion-item>\n            </ion-col>\n\n\n            <ion-col size=\"6\" class=\"padding-0\">\n                <ion-item class=\"no__padding\" lines=\"none\">\n                    <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'A'\"> FLIGHT\n                        ARRIVAL TIME </ion-label>\n                    <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'B'\"> PICKUP\n                        TIME </ion-label>\n                    <div>\n                        <span class=\"date\"> {{fulltime}}</span>\n                        <span class=\"month-year\"> {{halftime}}</span>\n                    </div>\n                </ion-item>\n\n            </ion-col>\n        </ion-item>\n    </div>\n</ion-toolbar>\n<ion-toolbar *ngIf=\"serviceName != 'Round Trip'\">\n    <ion-item lines=\"none\">\n        <ion-text class=\"car_name\">{{carName}}</ion-text>\n        <div class=\"capacity\" slot=\"end\" style=\"margin-top:5px\">\n            <ion-col class=\"icons-row\">\n                <ion-img src={{carInside}} class=\"\"></ion-img>\n            </ion-col>\n        </div>\n    </ion-item>\n</ion-toolbar>\n\n<ion-content [scrollEvents]=\"true\">\n    <div id=\"origintrip\" bg *ngIf=\"serviceName == 'Round Trip'\">\n        <ion-label>Step 1 of 2 - Origin Trip</ion-label>\n    </div>\n    <ion-toolbar class=\"date-time-row\" *ngIf=\"serviceName == 'Round Trip'\">\n        <ion-item lines=\"none\">\n            <div class=\"roundtrip--from-to-location\">\n                <b> {{locationstart}} </b>\n                <b> <small>to</small> {{locationend}}</b>\n            </div>\n        </ion-item>\n    </ion-toolbar>\n    <ion-toolbar class=\"home-page\" *ngIf=\"serviceName == 'Round Trip'\">\n        <div class=\"calculator-card\">\n            <ion-item lines=\"none\" class=\"date-time-row\">\n                <ion-col size=\"6\" class=\"padding-0\">\n                    <ion-item class=\"no__padding\" lines=\"none\">\n                        <ion-label position=\"stacked\"> DATE </ion-label>\n                        <div>\n                            <span class=\"date\">{{selectDate}}</span>\n                            <span class=\"month\">{{selectMonthYear}}</span>\n                            <span class=\"month-year\">{{selectDay}}</span>\n                        </div>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col size=\"6\" class=\"padding-0\">\n                    <ion-item class=\"no__padding\" lines=\"none\">\n                        <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'A'\">\n                            FLIGHT ARRIVAL TIME </ion-label>\n                        <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'B'\">\n                            PICKUP TIME </ion-label>\n                        <div>\n                            <span class=\"date\"> {{fulltime}}</span>\n                            <span class=\"month-year\"> {{halftime}}</span>\n                        </div>\n                    </ion-item>\n                </ion-col>\n            </ion-item>\n        </div>\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"serviceName == 'Round Trip'\">\n        <ion-item lines=\"none\">\n            <ion-text class=\"car_name\">{{carName}}</ion-text>\n            <div class=\"capacity\" slot=\"end\" style=\"margin-top:5px\">\n                <ion-col class=\"icons-row\">\n                    <ion-img src={{carInside}} class=\"\"></ion-img>\n                </ion-col>\n            </div>\n        </ion-item>\n    </ion-toolbar>\n\n    <form [formGroup]=\"form1\" (ngSubmit)=\"onSubmit(form1.value)\">\n        <ion-card>\n            <ion-card-header class=\"ion-card-headers\">\n                <ion-label> Pick-up details </ion-label>\n            </ion-card-header>\n            <ion-card-content nopadding>\n                <div FROM-AIRPORT *ngIf=\"locationType == 'A'\">\n                    <div class=\"form-section\">\n                        <ion-label class=\"to-location\" position=\"stacked\">From</ion-label>\n                        <ion-text>{{locationstart}}</ion-text>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Airline Name </ion-label>\n                        <ion-input type=\"text\" debounce=\"500\" formControlName=\"AirlineName\"\n                            (ionInput)=\"getItems($event)\">\n                        </ion-input>\n                    </div>\n                    <ion-list *ngIf=\"isItemAvailable\">\n                        <ng-container *ngFor=\"let item of items\">\n                            <div class=\"list\" *ngIf=\"item.AirCode\" (click)=\"putvalue(item)\">\n                                {{ item.AirCode }}\n                            </div>\n                        </ng-container>\n                    </ion-list>\n                    <div *ngIf=\"(form1.get('AirlineName').hasError('required') ) && form1.get('AirlineName').touched\">\n                        <div class=\"error\"\n                            *ngIf=\"form1.get('AirlineName').hasError('required') && form1.get('AirlineName').touched\">\n                            Please select Airline Name\n                        </div>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span>Flight Number</ion-label>\n                        <ion-input type=\"text\" formControlName=\"FlightNumber\"></ion-input>\n                    </div>\n                    <div *ngIf=\"(form1.get('FlightNumber').hasError('required') ) && form1.get('FlightNumber').touched\">\n                        <div class=\"error\"\n                            *ngIf=\"form1.get('FlightNumber').hasError('required') && form1.get('FlightNumber').touched\">\n                            Please select Flight Number\n                        </div>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Terminal</ion-label>\n                        <ion-select placeholder=\"--\" formControlName=\"Terminal\" *ngIf=\"terminalNumber != 0\">\n                            <ion-select-option *ngFor=\"let item of terminalNumber\" [value]=\"item.Value\">{{item.Text}}\n                            </ion-select-option>\n                        </ion-select>\n                        <ion-input type=\"text\" formControlName=\"Terminal\" *ngIf=\"terminalNumber == 0\"></ion-input>\n                    </div>\n\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span>Origin Airport</ion-label>\n                        <ion-input type=\"text\" debounce=\"500\" formControlName=\"OriginAirport\"\n                            (ionInput)=\"getorigin($event)\"></ion-input>\n                    </div>\n                    <ion-list *ngIf=\"isItemAvailable2\">\n                        <ng-container *ngFor=\"let item of list\">\n                            <div class=\"list\" *ngIf=\"item.AirportName\" (click)=\"putvalue2(item)\">\n                                {{ item.AirportName }}\n                            </div>\n                        </ng-container>\n                    </ion-list>\n                    <div\n                        *ngIf=\"(form1.get('OriginAirport').hasError('required') ) && form1.get('OriginAirport').touched\">\n                        <div class=\"error\"\n                            *ngIf=\"form1.get('OriginAirport').hasError('required') && form1.get('OriginAirport').touched\">\n                            Please select Origin Airport\n                        </div>\n                    </div>\n\n                    <div class=\"form-section form-section--type_of_flight\">\n                        <ion-label class=\"type_of_flight\" position=\"stacked\"> <span class=\"mendatary\"> * </span> Type Of\n                            Flight</ion-label>\n                    </div>\n                    <ion-row class=\"radio-section\">\n                        <ion-col size=\"12\">\n                            <ion-radio-group formControlName=\"FlightType\">\n                                <ion-col size=\"6\">\n                                    <ion-list>\n                                        <ion-radio class=\"second-radio\" slot=\"start\" (click)=\"onButtonClick()\"\n                                            value=\"INTERNATIONAL FLIGHT\">\n                                        </ion-radio>\n                                        <ion-label>International Flight</ion-label>\n                                    </ion-list>\n                                </ion-col>\n\n                                <ion-col size=\"6\">\n                                    <ion-list>\n                                        <ion-radio slot=\"start\" (click)=\"onButtonClick1()\" value=\"DOMESTIC FLIGHT\">\n                                        </ion-radio>\n                                        <ion-label>Domestic Flight</ion-label>\n                                    </ion-list>\n                                </ion-col>\n                            </ion-radio-group>\n                        </ion-col>\n                    </ion-row>\n                    <ion-card INTERNATIONAL-FLIGHT *ngIf=\"buttonClickedFirst\">\n                        <ion-row>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Flight Arrival\n                                    Time</ion-label>\n\n                                <ion-datetime #picker displayFormat='hh:mm A'\n                                    (ionChange)='onChangeTime($event.target.value)' pickerFormat='hh:mm A'\n                                    formControlName=\"flight_arrival_time\"></ion-datetime>\n                            </div>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> Delayed PickUp\n                                </ion-label>\n                                <ion-select (ionChange)=\"optionsFn($event.target.value)\" placeholder=\"No\"\n                                    formControlName=\"DelayedPickup\">\n                                    <ion-select-option value=\"0\"> No </ion-select-option>\n                                    <ion-select-option value=\"15\"> 15 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"30\"> 30 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"45\"> 45 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"60\"> 60 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"75\"> 75 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"90\"> 90 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"105\"> 105 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"120\"> 120 Minutes\n                                    </ion-select-option>\n                                </ion-select>\n                            </div>\n\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> Driver On Location Time\n                                </ion-label>\n                                <ion-text> {{DriverLocation}} </ion-text>\n                            </div>\n\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> Free Waiting Time\n                                </ion-label>\n                                <ion-text> 45 Minutes </ion-text>\n                            </div>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> PickUp Time\n                                </ion-label>\n                                <ion-text> {{addminute}} </ion-text>\n                            </div>\n                        </ion-row>\n                        <div class=\"form-section\">\n                            <ion-label style=\"color: #000;font-weight: bolder;\" position=\"stacked\">\n                                Airport Waiting Time\n                            </ion-label>\n\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange == 0\">\n                                Your rate includes 45 minutes free waiting time at the airport to allow you to pass\n                                immigration, gather your luggage and go through customs. If your flight is delayed your\n                                45 minutes will not start until the flight has landed.\n                            </ion-text>\n\n                            <ion-text *ngIf=\"TimeChange == 15\">\n                                Your transfer will be booked for 15 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 60 minutes in total (from your\n                                flight arrival). If your flight is delayed your 60 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 30\">\n                                Your transfer will be booked for 30 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 75 minutes in total (from your\n                                flight arrival). If your flight is delayed your 75 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 45\">\n                                Your transfer will be booked for 45 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 90 minutes in total (from your\n                                flight arrival). If your flight is delayed your 90 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 60\">\n                                Your transfer will be booked for 60 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 105 minutes in total (from your\n                                flight arrival). If your flight is delayed your 105 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 75\">\n                                Your transfer will be booked for 75 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 120 minutes in total (from your\n                                flight arrival). If your flight is delayed your 120 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 90\">\n                                Your transfer will be booked for 90 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 135 minutes in total (from your\n                                flight arrival). If your flight is delayed your 135 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 105\">\n                                Your transfer will be booked for 105 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 150 minutes in total (from your\n                                flight arrival). If your flight is delayed your 150 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 120\">\n                                Your transfer will be booked for 120 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 165 minutes in total (from your\n                                flight arrival). If your flight is delayed your 165 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                        </div>\n                        <div class=\"form-section\" *ngIf=\"hide\">\n                            <ion-label class=\"type_of_flight\" position=\"stacked\"> <span class=\"mendatary\"> * </span>\n                                Meeting Point</ion-label>\n                        </div>\n                        <ion-row *ngIf=\"hide1\" class=\"radio-section\">\n                            <ion-col size=\"12\">\n                                <ion-radio-group style=\"display: block;\" formControlName=\"MeetingPoint\">\n                                    <ion-list>\n                                        <ion-radio (click)=\"onButtonClick2()\" slot=\"start\" checked\n                                            value=\"Inside the terminal at baggage claim area\"></ion-radio>\n                                        <ion-label>Inside the terminal at baggage claim area</ion-label>\n                                    </ion-list>\n                                    <ion-list style=\"padding: 0; display: flex;\">\n                                        <ion-radio (click)=\"onButtonClick3()\" class=\"second-radio second-radio--second\" slot=\"start\"\n                                            value=\"Outside the terminal at the passenger pick-up area\">\n                                        </ion-radio>\n                                        <ion-label>Outside the terminal at the passenger pick-up area</ion-label>\n                                    </ion-list>\n                                </ion-radio-group>\n                            </ion-col>\n                        </ion-row>\n\n                        <ion-item inside *ngIf=\"buttonClickedThird\">\n                            <p>\n                                <ion-text position=\"stacked\">Instructions for inside the terminal meet and greet for\n                                    domestic flights\n                                    arrival:</ion-text>\n                                Your chauffeur will wait for you inside the terminal at the baggage claim area or beyond\n                                the security checkpoint with nameboard.\n                            </p>\n                        </ion-item>\n\n                        <ion-item outside *ngIf=\"buttonClickedFourth\">\n                            <p>\n                                <ion-text position=\"stacked\">Instructions for outside the terminal pickup (Curbside\n                                    collection):</ion-text>\n                                Our vehicle will be at the airport, standing by. Once you have gathered your luggage and\n                                are ready to walk outside, please call our office to let us know that you are ready to\n                                go. Our dispatcher will find\n                                out where you are and advise you which vehicle is there for you, and will also ask the\n                                chauffeur to pull up to the terminal to pick you up.\n                            </p>\n                        </ion-item>\n\n                    </ion-card>\n                    <ion-card DOMESTIC-FLIGHT *ngIf=\"buttonClickedSecond\">\n\n                        <ion-row>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Flight Arrival Time\n                                </ion-label>\n\n                                <ion-datetime #picker displayFormat='hh:mm A'\n                                    (ionChange)='onChangeTime1($event.target.value)' pickerFormat='hh:mm A'\n                                    formControlName=\"flight_arrival_time1\"></ion-datetime>\n                            </div>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Delayed PickUp\n                                </ion-label>\n                                <ion-select (ionChange)=\"optionsFn1($event.target.value)\" placeholder=\"30 Minutes\">\n                                    <ion-select-option value=\"0\">No</ion-select-option>\n                                    <ion-select-option value=\"15\">15 Minutes</ion-select-option>\n                                    <ion-select-option value=\"30\">30 Minutes</ion-select-option>\n                                    <ion-select-option value=\"45\">45 Minutes</ion-select-option>\n                                    <ion-select-option value=\"60\">60 Minutes</ion-select-option>\n                                    <ion-select-option value=\"90\">90 Minutes</ion-select-option>\n                                    <ion-select-option value=\"105\">105 Minutes</ion-select-option>\n                                    <ion-select-option value=\"120\">120 Minutes</ion-select-option>\n                                </ion-select>\n                            </div>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Driver On Location\n                                    Time\n                                </ion-label>\n                                <ion-text> {{DriverLocation1}} </ion-text>\n                            </div>\n\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Free Waiting Time\n                                </ion-label>\n                                <ion-text> 30 Minutes </ion-text>\n                            </div>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> PickUp Time\n                                </ion-label>\n                                <ion-text> {{addminute1}} </ion-text>\n                            </div>\n\n                        </ion-row>\n                        <div class=\"form-section\">\n                            <ion-label style=\"color: #000;font-weight: bolder;\" position=\"stacked\">Airport Waiting Time\n                            </ion-label>\n\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 0\">\n                                Your rate includes 30 minutes free waiting time at the airport to allow you to gather\n                                your luggage. If your flight is delayed your 30 minutes will not start until the flight\n                                has landed.\n                            </ion-text>\n\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 15\">\n                                Your transfer will be booked for 15 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 45 minutes in total (from your flight arrival). If your flight is\n                                delayed your 45 minutes will not start until the flight has landed.\n                            </ion-text>\n\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 30\">\n                                Your transfer will be booked for 30 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 60 minutes in total (from your flight arrival). If your flight is\n                                delayed your 60 minutes will not start until the flight has landed.\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 45\">\n                                Your transfer will be booked for 45 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 75 minutes in total (from your flight arrival). If your flight is\n                                delayed your 75 minutes will not start until the flight has landed.\n\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 60\">\n                                Your transfer will be booked for 60 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 90 minutes in total (from your flight arrival). If your flight is\n                                delayed your 90 minutes will not start until the flight has landed.\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 75\">\n                                Your transfer will be booked for 75 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 105 minutes in total (from your flight arrival). If your flight is\n                                delayed your 105 minutes will not start until the flight has landed.\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 90\">\n                                Your transfer will be booked for 90 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 120 minutes in total (from your flight arrival). If your flight is\n                                delayed your 120 minutes will not start until the flight has landed.\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 105\">\n                                Your transfer will be booked for 105 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 135 minutes in total (from your flight arrival). If your flight is\n                                delayed your 135 minutes will not start until the flight has landed.\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 120\">\n\n                                Your transfer will be booked for 120 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 150 minutes in total (from your flight arrival). If your flight is\n                                delayed your 150 minutes will not start until the flight has landed.\n                            </ion-text>\n                        </div>\n                        <div class=\"form-section\">\n                            <ion-label class=\"type_of_flight\" position=\"stacked\">Meeting Point</ion-label>\n                        </div>\n                        <ion-row class=\"radio-section\">\n                            <ion-col size=\"12\">\n                                <ion-radio-group style=\"display: block;\" formControlName=\"MeetingPoint\">\n                                    <ion-list>\n                                        <ion-radio (click)=\"onButtonClick2()\" slot=\"start\" checked\n                                            value=\"Inside the terminal at baggage claim area\"></ion-radio>\n                                        <ion-label>Inside the terminal at baggage claim area</ion-label>\n                                    </ion-list>\n                                    <ion-list style=\"padding: 0; display: flex;\">\n                                        <ion-radio (click)=\"onButtonClick3()\" class=\"second-radio second-radio--second\" slot=\"start\"\n                                            value=\"Outside the terminal at the passenger pick-up area\"></ion-radio>\n                                        <ion-label>Outside the terminal at the passenger pick-up area</ion-label>\n                                    </ion-list>\n                                </ion-radio-group>\n                            </ion-col>\n                        </ion-row>\n\n                        <ion-item inside *ngIf=\"buttonClickedThird\">\n                            <p>\n                                <ion-text>Instructions for inside the terminal meet and greet for domestic flights\n                                    arrival:</ion-text>\n                                Your chauffeur will wait for you inside the terminal at the baggage claim area or beyond\n                                the security checkpoint with nameboard.\n                            </p>\n                        </ion-item>\n\n                        <ion-item outside *ngIf=\"buttonClickedFourth\">\n                            <p>\n                                <ion-text>Instructions for outside the terminal pickup (Curbside collection):</ion-text>\n                                Our vehicle will be at the airport, standing by. Once you have gathered your luggage and\n                                are ready to walk outside,\n                                please call our office to let us know that you are ready to go. Our dispatcher will find\n                                out where you are and advise you which vehicle is there for you, and will also ask the\n                                chauffeur to pull up to the terminal to pick you up.\n                            </p>\n                        </ion-item>\n\n                    </ion-card>\n                </div>\n                <div FROM-PLACNAME *ngIf=\"locationType == 'B'\">\n\n                    <div class=\"form-section\">\n                        <ion-label class=\"to-location\" position=\"stacked\"> From </ion-label>\n                        <ion-text>{{locationAddress}}</ion-text>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Name of Place</ion-label>\n                        <ion-input type=\"text\" debounce=\"500\">{{locationstart}}</ion-input>\n                    </div>\n                </div>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header class=\"ion-card-headers\">\n                <ion-label> Drop-off details </ion-label>\n            </ion-card-header>\n            <ion-card-content nopadding>\n\n\n                <div TO-AIRPORT *ngIf=\"tolocationType == 'A'\">\n                    <div class=\"form-section\">\n                        <ion-label class=\"to-location\" position=\"stacked\"> To </ion-label>\n                        <ion-text> {{locationend}} </ion-text>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Airline Name</ion-label>\n                        <ion-input type=\"text\" debounce=\"500\" formControlName=\"AirlineName2\"\n                            (ionInput)=\"getItems($event)\"></ion-input>\n                    </div>\n                    <ion-list *ngIf=\"isItemAvailable\">\n                        <ng-container *ngFor=\"let item of items\">\n                            <div class=\"list\" *ngIf=\"item.AirCode\" (click)=\"putvalue3(item)\">\n                                {{ item.AirCode }}\n                            </div>\n                        </ng-container>\n                    </ion-list>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Flight Number</ion-label>\n                        <ion-input type=\"text\" formControlName=\"FlightNumber2\"></ion-input>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Departure Time</ion-label>\n                        <ion-datetime display-format=\"hh:mm A\" formControlName=\"DepartureTime\"\n                            placeholder=\"Select Departure Time\"></ion-datetime>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Terminal</ion-label>\n                        <ion-input type=\"text\" formControlName=\"Terminal2\"></ion-input>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Destination Airport</ion-label>\n                        <ion-input type=\"text\" formControlName=\"DestinationAirport\"></ion-input>\n                    </div>\n                </div>\n\n                <div TO-PLACNAME *ngIf=\"tolocationType == 'B'\">\n\n                    <div class=\"form-section\">\n                        <ion-label class=\"to-location\" position=\"stacked\"> To </ion-label>\n                        <ion-text>{{tolocationAddress}}</ion-text>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Name of Place</ion-label>\n                        <ion-input type=\"text\" debounce=\"500\">{{locationend}}</ion-input>\n                    </div>\n                </div>\n\n            </ion-card-content>\n        </ion-card>\n\n\n\n        <ion-card>\n            <ion-card-header class=\"ion-card-headers\">\n                <ion-label> Passenger details </ion-label>\n            </ion-card-header>\n            <ion-card-content nopadding>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> No. Of Passengers </ion-label>\n                    <ion-select placeholder=\"0\" interface=\"popover\" formControlName=\"Passengers\">\n                        <ion-select-option *ngFor=\"let item of PassangerListCount\" [value]=\"item\">{{item}}\n                        </ion-select-option>\n                    </ion-select>\n                </div>\n                <div *ngIf=\"(form1.get('Passengers').hasError('required') ) && form1.get('Passengers').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('Passengers').hasError('required') && form1.get('Passengers').touched\">\n                        Please select Passengers\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> No. Of Suitcases </ion-label>\n                    <ion-select placeholder=\"0\" interface=\"popover\" formControlName=\"Suitcases\">\n                        <ion-select-option *ngFor=\"let item of listofSuitcases\" [value]=\"item\">{{item}}\n                        </ion-select-option>\n                    </ion-select>\n                </div>\n                <div *ngIf=\"(form1.get('Suitcases').hasError('required') ) && form1.get('Suitcases').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('Suitcases').hasError('required') && form1.get('Suitcases').touched\">\n                        Please select Suitcases\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> Special Instructions</ion-label>\n                    <ion-textarea style=\"height: 40px;\" type=\"text\" formControlName=\"SpecialInstruction\"></ion-textarea>\n                </div>\n            </ion-card-content>\n        </ion-card>\n\n        <!-- //---------------------Roundtrip-------------------------->\n\n        <div id=\"returntrip\" bg *ngIf=\"serviceName == 'Round Trip'\">\n            <ion-label>Step 2 of 2 - Return Trip</ion-label>\n        </div>\n\n        <ion-toolbar class=\"date-time-row\" *ngIf=\"serviceName == 'Round Trip'\">\n            <ion-item lines=\"none\">\n                <div class=\"roundtrip--from-to-location\">\n                    <b> {{locationend}} </b>\n                    <b> <small>to</small> {{locationstart}}</b>\n                </div>\n            </ion-item>\n        </ion-toolbar>\n        <ion-toolbar class=\"home-page\" *ngIf=\"serviceName == 'Round Trip'\">\n            <div class=\"calculator-card\">\n                <ion-item class=\"date-time-row\" lines=\"none\">\n                    <ion-col size=\"6\" class=\"padding-0\">\n                        <ion-item class=\"no__padding\" lines=\"none\">\n                            <ion-label position=\"stacked\">RETURN DATE </ion-label>\n                            <div>\n                                <span class=\"date\">{{selectDate2}}</span>\n                                <span class=\"month\">{{selectMonthYear2}}</span>\n                                <span class=\"month-year\">{{selectDay2}}</span>\n\n                            </div>\n                        </ion-item>\n                    </ion-col>\n\n\n                    <ion-col size=\"6\" class=\"padding-0\">\n                        <ion-item class=\"no__padding\" lines=\"none\">\n                            <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'A'\">\n                                FLIGHT ARRIVAL TIME </ion-label>\n                            <ion-label position=\"stacked\" class=\"label label--arrival-time\" *ngIf=\"locationType == 'B'\">\n                                RETURN PICKUP TIME </ion-label>\n                            <div>\n                                <span class=\"date\"> {{fulltime2}}</span>\n                                <span class=\"month-year\"> {{halftime2}}</span>\n                            </div>\n                        </ion-item>\n                    </ion-col>\n                </ion-item>\n            </div>\n        </ion-toolbar>\n        <ion-toolbar *ngIf=\"serviceName == 'Round Trip'\">\n            <ion-item lines=\"none\">\n                <ion-text class=\"car_name\">{{carName2}}</ion-text>\n                <div class=\"capacity\" slot=\"end\" style=\"margin-top:5px\">\n                    <ion-col class=\"icons-row\">\n                        <ion-img src={{carInside2}} class=\"\"></ion-img>\n                    </ion-col>\n                </div>\n            </ion-item>\n        </ion-toolbar>\n\n        <ion-card *ngIf=\"serviceName == 'Round Trip' && total != null\">\n            <ion-card-header class=\"ion-card-headers\">\n                <ion-label> Pick-up details </ion-label>\n            </ion-card-header>\n            <ion-card-content nopadding>\n                <div FROM-AIRPORT *ngIf=\"locationTypeR == 'A'\">\n                    <div class=\"form-section\">\n                        <ion-label class=\"to-location\" position=\"stacked\">From</ion-label>\n                        <ion-text>{{locationend}}</ion-text>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Airline Name </ion-label>\n                        <ion-input type=\"text\" debounce=\"500\" formControlName=\"AirlineNameR\"\n                            (ionInput)=\"getItems($event)\">\n                        </ion-input>\n                    </div>\n                    <ion-list *ngIf=\"isItemAvailable\">\n                        <ng-container *ngFor=\"let item of items\">\n                            <div class=\"list\" *ngIf=\"item.AirCode\" (click)=\"putAirlineRoundtrip(item)\">\n                                {{ item.AirCode }}\n                            </div>\n                        </ng-container>\n                    </ion-list>\n                    <div *ngIf=\"(form1.get('AirlineNameR').hasError('required') ) && form1.get('AirlineNameR').touched\">\n                        <div class=\"error\"\n                            *ngIf=\"form1.get('AirlineNameR').hasError('required') && form1.get('AirlineNameR').touched\">\n                            Please select Airline Name\n                        </div>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span>Flight Number</ion-label>\n                        <ion-input type=\"text\" formControlName=\"FlightNumberR\"></ion-input>\n                    </div>\n                    <div\n                        *ngIf=\"(form1.get('FlightNumberR').hasError('required') ) && form1.get('FlightNumberR').touched\">\n                        <div class=\"error\"\n                            *ngIf=\"form1.get('FlightNumberR').hasError('required') && form1.get('FlightNumberR').touched\">\n                            Please select Flight Number\n                        </div>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Terminal</ion-label>\n                        <ion-select placeholder=\"--\" formControlName=\"TerminalR\" *ngIf=\"terminalNumber2 != 0\">\n                            <ion-select-option *ngFor=\"let item of terminalNumber2\" [value]=\"item.Value\">{{item.Text}}\n                            </ion-select-option>\n                        </ion-select>\n                        <ion-input type=\"text\" formControlName=\"TerminalR\" *ngIf=\"terminalNumber2 == 0\"></ion-input>\n                    </div>\n\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span>Origin Airport</ion-label>\n                        <ion-input type=\"text\" debounce=\"500\" formControlName=\"OriginAirportR\"\n                            (ionInput)=\"getorigin($event)\"></ion-input>\n                    </div>\n                    <ion-list *ngIf=\"isItemAvailable2\">\n                        <ng-container *ngFor=\"let item of list\">\n                            <div class=\"list\" *ngIf=\"item.AirportName\" (click)=\"putOriginAirport(item)\">\n                                {{ item.AirportName }}\n                            </div>\n                        </ng-container>\n                    </ion-list>\n                    <div\n                        *ngIf=\"(form1.get('OriginAirportR').hasError('required') ) && form1.get('OriginAirportR').touched\">\n                        <div class=\"error\"\n                            *ngIf=\"form1.get('OriginAirportR').hasError('required') && form1.get('OriginAirportR').touched\">\n                            Please select Origin Airport\n                        </div>\n                    </div>\n\n                    <div class=\"form-section\">\n                        <ion-label class=\"type_of_flight\" position=\"stacked\"> <span class=\"mendatary\"> * </span> Type Of\n                            Flight </ion-label>\n                    </div>\n                    <ion-row class=\"radio-section\">\n                        <ion-col size=\"12\">\n                            <ion-radio-group formControlName=\"FlightTypeR\">\n                                <ion-col size=\"6\">\n                                    <ion-list>\n                                        <ion-radio class=\"second-radio\" slot=\"start\" (click)=\"onButtonClickR()\"\n                                            value=\"INTERNATIONAL FLIGHT\">\n                                        </ion-radio>\n                                        <ion-label>International Flight</ion-label>\n                                    </ion-list>\n                                </ion-col>\n\n                                <ion-col size=\"6\">\n                                    <ion-list>\n                                        <ion-radio slot=\"start\" (click)=\"onButtonClick1R()\" value=\"DOMESTIC FLIGHT\">\n                                        </ion-radio>\n                                        <ion-label>Domestic Flight</ion-label>\n                                    </ion-list>\n                                </ion-col>\n                            </ion-radio-group>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-card INTERNATIONAL-FLIGHT *ngIf=\"buttonClickedFirst\">\n                        <ion-row>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Flight Arrival Time\n                                </ion-label>\n\n                                <ion-datetime #picker displayFormat='hh:mm A'\n                                    (ionChange)='onChangeTime($event.target.value)' pickerFormat='hh:mm A'\n                                    formControlName=\"flight_arrival_timeR\"></ion-datetime>\n                            </div>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> Delayed PickUp\n                                </ion-label>\n                                <ion-select (ionChange)=\"optionsFn($event.target.value)\" placeholder=\"No\"\n                                    formControlName=\"DelayedPickupR\">\n                                    <ion-select-option value=\"0\"> No </ion-select-option>\n                                    <ion-select-option value=\"15\"> 15 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"30\"> 30 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"45\"> 45 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"60\"> 60 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"75\"> 75 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"90\"> 90 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"105\"> 105 Minutes\n                                    </ion-select-option>\n                                    <ion-select-option value=\"120\"> 120 Minutes\n                                    </ion-select-option>\n                                </ion-select>\n                            </div>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> Driver On Location Time\n                                </ion-label>\n                                <ion-text> {{DriverLocation}} </ion-text>\n                            </div>\n\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> Free Waiting Time\n                                </ion-label>\n                                <ion-text> 45 Minutes </ion-text>\n                            </div>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> PickUp Time\n                                </ion-label>\n                                <ion-text> {{addminute}} </ion-text>\n                            </div>\n                        </ion-row>\n                        <div class=\"form-section\">\n                            <ion-label style=\"color: #000;font-weight: bolder;\" position=\"stacked\">Airport Waiting Time\n                            </ion-label>\n\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange == 0\">\n                                Your rate includes 45 minutes free waiting time at the airport to allow you to pass\n                                immigration, gather your luggage and go through customs. If your flight is delayed your\n                                45 minutes will not start until the flight has landed.\n                            </ion-text>\n\n                            <ion-text *ngIf=\"TimeChange == 15\">\n                                Your transfer will be booked for 15 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 60 minutes in total (from your\n                                flight arrival). If your flight is delayed your 60 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 30\">\n                                Your transfer will be booked for 30 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 75 minutes in total (from your\n                                flight arrival). If your flight is delayed your 75 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 45\">\n                                Your transfer will be booked for 45 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 90 minutes in total (from your\n                                flight arrival). If your flight is delayed your 90 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 60\">\n                                Your transfer will be booked for 60 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 105 minutes in total (from your\n                                flight arrival). If your flight is delayed your 105 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 75\">\n                                Your transfer will be booked for 75 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 120 minutes in total (from your\n                                flight arrival). If your flight is delayed your 120 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 90\">\n                                Your transfer will be booked for 90 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 135 minutes in total (from your\n                                flight arrival). If your flight is delayed your 135 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 105\">\n                                Your transfer will be booked for 105 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 150 minutes in total (from your\n                                flight arrival). If your flight is delayed your 150 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                            <ion-text *ngIf=\"TimeChange == 120\">\n                                Your transfer will be booked for 120 minutes after your flight arrival time to allow you\n                                to pass immigration,gather your luggage and go through customs. You then have a further\n                                45 minutes waiting time included in the price giving you 165 minutes in total (from your\n                                flight arrival). If your flight is delayed your 165 minutes will not start until the\n                                flight has landed.\n                            </ion-text>\n                        </div>\n                        <div class=\"form-section\" *ngIf=\"hide\">\n                            <ion-label class=\"type_of_flight\" position=\"stacked\"> <span class=\"mendatary\"> * </span>\n                                Meeting Point</ion-label>\n                        </div>\n                        <ion-row *ngIf=\"hide1\" class=\"radio-section\">\n                            <ion-col size=\"12\">\n                                <ion-radio-group style=\"display: block;\" formControlName=\"MeetingPointR\">\n                                    <ion-list>\n                                        <ion-radio (click)=\"onButtonClick2()\" slot=\"start\" checked\n                                            value=\"Inside the terminal at baggage claim area\"></ion-radio>\n                                        <ion-label>Inside the terminal at baggage claim area</ion-label>\n                                    </ion-list>\n                                    <ion-list style=\"padding: 0; display: flex;\">\n                                        <ion-radio (click)=\"onButtonClick3()\" class=\"second-radio second-radio--second\" slot=\"start\"\n                                            value=\"Outside the terminal at the passenger pick-up area\">\n                                        </ion-radio>\n                                        <ion-label>Outside the terminal at the passenger pick-up area</ion-label>\n                                    </ion-list>\n                                </ion-radio-group>\n                            </ion-col>\n                        </ion-row>\n\n                        <ion-item inside *ngIf=\"buttonClickedThird\">\n                            <p>\n                                <ion-text position=\"stacked\">Instructions for inside the terminal meet and greet for\n                                    domestic flights\n                                    arrival:</ion-text>\n                                Your chauffeur will wait for you inside the terminal at the baggage claim area or beyond\n                                the security checkpoint with nameboard.\n                            </p>\n                        </ion-item>\n\n                        <ion-item outside *ngIf=\"buttonClickedFourth\">\n                            <p>\n                                <ion-text position=\"stacked\">Instructions for outside the terminal pickup (Curbside\n                                    collection):</ion-text>\n                                Our vehicle will be at the airport, standing by. Once you have gathered your luggage and\n                                are ready to walk outside, please call our office to let us know that you are ready to\n                                go. Our dispatcher will find\n                                out where you are and advise you which vehicle is there for you, and will also ask the\n                                chauffeur to pull up to the terminal to pick you up.\n                            </p>\n                        </ion-item>\n\n                    </ion-card>\n                    <ion-card DOMESTIC-FLIGHT *ngIf=\"buttonClickedSecond\">\n\n                        <ion-row>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Flight Arrival Time\n                                </ion-label>\n\n                                <ion-datetime #picker displayFormat='hh:mm A'\n                                    (ionChange)='onChangeTime1($event.target.value)' pickerFormat='hh:mm A'\n                                    formControlName=\"flight_arrival_time1R\"></ion-datetime>\n                            </div>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Delayed PickUp\n                                </ion-label>\n                                <ion-select (ionChange)=\"optionsFn1($event.target.value)\" placeholder=\"30 Minutes\">\n                                    <ion-select-option value=\"0\">No</ion-select-option>\n                                    <ion-select-option value=\"15\">15 Minutes</ion-select-option>\n                                    <ion-select-option value=\"30\">30 Minutes</ion-select-option>\n                                    <ion-select-option value=\"45\">45 Minutes</ion-select-option>\n                                    <ion-select-option value=\"60\">60 Minutes</ion-select-option>\n                                    <ion-select-option value=\"90\">90 Minutes</ion-select-option>\n                                    <ion-select-option value=\"105\">105 Minutes</ion-select-option>\n                                    <ion-select-option value=\"120\">120 Minutes</ion-select-option>\n                                </ion-select>\n                            </div>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Driver On Location\n                                    Time\n                                </ion-label>\n                                <ion-text> {{DriverLocation1}} </ion-text>\n                            </div>\n\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Free Waiting Time\n                                </ion-label>\n                                <ion-text> 30 Minutes </ion-text>\n                            </div>\n                            <div class=\"form-section\">\n                                <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> PickUp Time\n                                </ion-label>\n                                <ion-text> {{addminute1}} </ion-text>\n                            </div>\n                        </ion-row>\n                        <div class=\"form-section\">\n                            <ion-label style=\"color: #000;font-weight: bolder;\" position=\"stacked\">Airport Waiting Time\n                            </ion-label>\n\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 0\">\n                                Your rate includes 30 minutes free waiting time at the airport to allow you to gather\n                                your luggage. If your flight is delayed your 30 minutes will not start until the flight\n                                has landed.\n                            </ion-text>\n\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 15\">\n                                Your transfer will be booked for 15 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 45 minutes in total (from your flight arrival). If your flight is\n                                delayed your 45 minutes will not start until the flight has landed.\n                            </ion-text>\n\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 30\">\n                                Your transfer will be booked for 30 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 60 minutes in total (from your flight arrival). If your flight is\n                                delayed your 60 minutes will not start until the flight has landed.\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 45\">\n                                Your transfer will be booked for 45 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 75 minutes in total (from your flight arrival). If your flight is\n                                delayed your 75 minutes will not start until the flight has landed.\n\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 60\">\n                                Your transfer will be booked for 60 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 90 minutes in total (from your flight arrival). If your flight is\n                                delayed your 90 minutes will not start until the flight has landed.\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 75\">\n                                Your transfer will be booked for 75 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 105 minutes in total (from your flight arrival). If your flight is\n                                delayed your 105 minutes will not start until the flight has landed.\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 90\">\n                                Your transfer will be booked for 90 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 120 minutes in total (from your flight arrival). If your flight is\n                                delayed your 120 minutes will not start until the flight has landed.\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 105\">\n                                Your transfer will be booked for 105 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 135 minutes in total (from your flight arrival). If your flight is\n                                delayed your 135 minutes will not start until the flight has landed.\n                            </ion-text>\n                            <ion-text style=\"font-weight: 500;margin-bottom: 0.5rem;\" *ngIf=\"TimeChange1 == 120\">\n\n                                Your transfer will be booked for 120 minutes after your flight arrival time to allow you\n                                to gather your luggage. You then have a further 30 minutes waiting time included in the\n                                price giving you 150 minutes in total (from your flight arrival). If your flight is\n                                delayed your 150 minutes will not start until the flight has landed.\n                            </ion-text>\n                        </div>\n                        <div class=\"form-section\">\n                            <ion-label class=\"type_of_flight\" position=\"stacked\">Meeting Point</ion-label>\n                        </div>\n                        <ion-row class=\"radio-section\">\n                            <ion-col size=\"12\">\n                                <ion-radio-group style=\"display: block;\" formControlName=\"MeetingPointR\">\n                                    <ion-list>\n                                        <ion-radio (click)=\"onButtonClick2()\" slot=\"start\" checked\n                                            value=\"Inside the terminal at baggage claim area\"></ion-radio>\n                                        <ion-label>Inside the terminal at baggage claim area</ion-label>\n                                    </ion-list>\n                                    <ion-list style=\"padding: 0; display: flex;\">\n                                        <ion-radio (click)=\"onButtonClick3()\" class=\"second-radio second-radio--second\" slot=\"start\"\n                                            value=\"Outside the terminal at the passenger pick-up area\"></ion-radio>\n                                        <ion-label>Outside the terminal at the passenger pick-up area</ion-label>\n                                    </ion-list>\n                                </ion-radio-group>\n                            </ion-col>\n                        </ion-row>\n\n                        <ion-item inside *ngIf=\"buttonClickedThird\">\n                            <p>\n                                <ion-text>Instructions for inside the terminal meet and greet for domestic flights\n                                    arrival:</ion-text>\n                                Your chauffeur will wait for you inside the terminal at the baggage claim area or beyond\n                                the security checkpoint with nameboard.\n                            </p>\n                        </ion-item>\n\n                        <ion-item outside *ngIf=\"buttonClickedFourth\">\n                            <p>\n                                <ion-text>Instructions for outside the terminal pickup (Curbside collection):</ion-text>\n                                Our vehicle will be at the airport, standing by. Once you have gathered your luggage and\n                                are ready to walk outside,\n                                please call our office to let us know that you are ready to go. Our dispatcher will find\n                                out where you are and advise you which vehicle is there for you, and will also ask the\n                                chauffeur to pull up to the terminal to pick you up.\n                            </p>\n                        </ion-item>\n\n                    </ion-card>\n\n                </div>\n                <div FROM-PLACNAME *ngIf=\"locationTypeR == 'B'\">\n\n                    <div class=\"form-section\">\n                        <ion-label class=\"to-location\" position=\"stacked\"> From</ion-label>\n                        <ion-text>{{tolocationAddress}}</ion-text>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Name of Place</ion-label>\n                        <ion-input type=\"text\" debounce=\"500\">{{locationend}}</ion-input>\n                    </div>\n                </div>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card *ngIf=\"serviceName == 'Round Trip' && total != null\">\n            <ion-card-header class=\"ion-card-headers\">\n                <ion-label> Drop-off details </ion-label>\n            </ion-card-header>\n            <ion-card-content nopadding>\n                <div TO-AIRPORT *ngIf=\"tolocationTypeR == 'A'\">\n                    <div class=\"form-section\">\n                        <ion-label class=\"to-location\" position=\"stacked\"> To </ion-label>\n                        <ion-text> {{locationstart}} </ion-text>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Airline Name</ion-label>\n                        <ion-input type=\"text\" debounce=\"500\" formControlName=\"AirlineName2R\"\n                            (ionInput)=\"getItems($event)\"></ion-input>\n                    </div>\n                    <ion-list *ngIf=\"isItemAvailable\">\n                        <ng-container *ngFor=\"let item of items\">\n                            <div class=\"list\" *ngIf=\"item.AirCode\" (click)=\"putAirline2Roundtrip(item)\">\n                                {{ item.AirCode }}\n                            </div>\n                        </ng-container>\n                    </ion-list>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Flight Number</ion-label>\n                        <ion-input type=\"text\" formControlName=\"FlightNumber2R\"></ion-input>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Departure Time</ion-label>\n                        <ion-datetime display-format=\"hh:mm A\" formControlName=\"DepartureTimeR\"\n                            placeholder=\"Select Departure Time\"></ion-datetime>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Terminal</ion-label>\n                        <ion-input type=\"text\" formControlName=\"Terminal2R\"></ion-input>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Destination Airport</ion-label>\n                        <ion-input type=\"text\" formControlName=\"DestinationAirportR\"></ion-input>\n                    </div>\n                </div>\n\n                <div TO-PLACNAME *ngIf=\"tolocationTypeR == 'B'\">\n\n                    <div class=\"form-section\">\n                        <ion-label class=\"from\" position=\"stacked\"> To </ion-label>\n                        <ion-text>{{locationAddress}}</ion-text>\n                    </div>\n                    <div class=\"form-section\">\n                        <ion-label position=\"stacked\">Name of Place</ion-label>\n                        <ion-input type=\"text\" debounce=\"500\">{{locationstart}}</ion-input>\n                    </div>\n                </div>\n\n            </ion-card-content>\n        </ion-card>\n\n\n\n        <ion-card *ngIf=\"serviceName == 'Round Trip' && total != null\">\n            <ion-card-header class=\"ion-card-headers\">\n                <ion-label> Passenger details </ion-label>\n            </ion-card-header>\n            <ion-card-content nopadding>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> No. Of Passengers </ion-label>\n                    <ion-select placeholder=\"0\" interface=\"popover\" formControlName=\"Passengers2\">\n                        <ion-select-option *ngFor=\"let item of PassangerListCount2\" [value]=\"item\">{{item}}\n                        </ion-select-option>\n                    </ion-select>\n                </div>\n                <div *ngIf=\"(form1.get('Passengers2').hasError('required') ) && form1.get('Passengers2').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('Passengers2').hasError('required') && form1.get('Passengers2').touched\">\n                        Please select Passengers\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> No. Of Suitcases </ion-label>\n                    <ion-select placeholder=\"0\" interface=\"popover\" formControlName=\"Suitcases2\">\n                        <ion-select-option *ngFor=\"let item of listofSuitcases2\" [value]=\"item\">{{item}}\n                        </ion-select-option>\n                    </ion-select>\n                </div>\n                <div *ngIf=\"(form1.get('Suitcases2').hasError('required') ) && form1.get('Suitcases2').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('Suitcases2').hasError('required') && form1.get('Suitcases2').touched\">\n                        Please select Suitcases\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> Special Instructions</ion-label>\n                    <ion-textarea style=\"height: 40px;\" type=\"text\" formControlName=\"SpecialInstruction2\">\n                    </ion-textarea>\n                </div>\n            </ion-card-content>\n        </ion-card>\n\n        <!-- //---------------------Roundtrip-------------------------->\n\n        <div bg *ngIf=\"serviceName == 'Round Trip'\"></div>\n\n        <ion-card>\n            <ion-card-header class=\"ion-card-headers\">\n                <ion-label> Contact details </ion-label>\n            </ion-card-header>\n            <ion-card-content nopadding>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Email </ion-label>\n                    <ion-input type=\"text\" formControlName=\"Email\"></ion-input>\n                </div>\n                <div *ngIf=\"(form1.get('Email').hasError('pattern') ) && form1.get('Email').touched\">\n                    <div class=\"error\" *ngIf=\"form1.get('Email').hasError('pattern') && form1.get('Email').touched\">\n                        Please Enter valid Email id\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> First Name </ion-label>\n                    <ion-input type=\"text\" formControlName=\"FirstName\"></ion-input>\n                </div>\n                <div *ngIf=\"(form1.get('FirstName').hasError('required') ) && form1.get('FirstName').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('FirstName').hasError('required') && form1.get('FirstName').touched\">\n                        Please Enter First Name\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Last Name </ion-label>\n                    <ion-input type=\"text\" formControlName=\"LastName\"></ion-input>\n                </div>\n                <div *ngIf=\"(form1.get('LastName').hasError('required') ) && form1.get('LastName').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('LastName').hasError('required') && form1.get('LastName').touched\">\n                        Please Enter Last Name\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> CellPhone Number </ion-label>\n                    <ion-input type=\"number\" formControlName=\"PhoneNumber\"></ion-input>\n                </div>\n                <div *ngIf=\"(form1.get('PhoneNumber').hasError('required') ) && form1.get('PhoneNumber').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('PhoneNumber').hasError('required') && form1.get('PhoneNumber').touched\">\n                        Please Enter Cellphone Number\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> TelePhone Number </ion-label>\n                    <ion-input type=\"number\" formControlName=\"TelephoneNumber\"></ion-input>\n                </div>\n\n                <ion-row class=\"radio-section\">\n                    <ion-col size=\"12\">\n                        <ion-label class=\"confirm_text\">Are you booking this reservation for someone else?</ion-label>\n                        <ion-radio-group style=\"margin-left: 0px;\" formControlName=\"BookingFor\">\n                            <ion-list>\n                                <ion-radio slot=\"start\" value=\"NO\" (click)=\"onButtonClickNo()\" checked></ion-radio>\n                                <ion-label> NO </ion-label>\n                            </ion-list>\n                            <ion-list>\n                                <ion-radio class=\"second-radio\" (click)=\"onButtonClickYes()\" slot=\"start\" value=\"YES\">\n                                </ion-radio>\n                                <ion-label> YES </ion-label>\n                            </ion-list>\n                        </ion-radio-group>\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card DOMESTIC *ngIf=\"buttonClickedYes\">\n            <ion-card-content nopadding>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Passenger's First Name\n                    </ion-label>\n                    <ion-input type=\"text\" formControlName=\"Passengerfirstname\"></ion-input>\n                </div>\n                <ion-item lines=\"none\"\n                    *ngIf=\"(form1.get('Passengerfirstname').hasError('required') ) && form1.get('Passengerfirstname').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('Passengerfirstname').hasError('required') && form1.get('Passengerfirstname').touched\">\n                        Please Enter First Name\n                    </div>\n                </ion-item>\n\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> Passenger's Last Name </ion-label>\n                    <ion-input type=\"text\" formControlName=\"Passengerlastname\"></ion-input>\n                </div>\n\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> Passenger's CellPhone Number\n                    </ion-label>\n                    <ion-input type=\"text\" formControlName=\"Passengercellphone\"></ion-input>\n                </div>\n\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> Passenger's TelePhone Number\n                    </ion-label>\n                    <ion-input type=\"number\" formControlName=\"Passengertelephone\"></ion-input>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> Passenger's Email </ion-label>\n                    <ion-input type=\"text\" formControlName=\"Passengeremail\"></ion-input>\n                </div>\n            </ion-card-content>\n        </ion-card>\n        <ion-card style=\"display: none;\" INTERNATIONAL *ngIf=\"buttonClickedNo\">\n        </ion-card>\n\n\n        <ion-card>\n            <ion-card-header class=\"ion-card-headers\">\n                <ion-label> Payment details </ion-label>\n            </ion-card-header>\n            <ion-card-content nopadding>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Credit Card Type </ion-label>\n                    <ion-select placeholder=\"\" interface=\"popover\" formControlName=\"CardType\">\n                        <ion-select-option value=\"VISA\">Visa</ion-select-option>\n                        <ion-select-option value=\"MASTER\">Master</ion-select-option>\n                        <ion-select-option value=\"DESERVE PRO\">Deserve Pro</ion-select-option>\n                        <ion-select-option value=\"DESERVE EDU\">Deserve Edu</ion-select-option>\n                    </ion-select>\n                </div>\n                <div *ngIf=\"(form1.get('CardType').hasError('required') ) && form1.get('CardType').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('CardType').hasError('required') && form1.get('CardType').touched\">\n                        Please Select Credit Card Type\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Credit Card No. </ion-label>\n                    <ion-input type=\"tel\" formControlName=\"CardNumber\" minlength=\"16\" maxlength=\"16\"></ion-input>\n                </div>\n                <div *ngIf=\"(form1.get('CardNumber').hasError('required') ) && form1.get('CardNumber').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('CardNumber').hasError('required') && form1.get('CardNumber').touched\">\n                        Please Select Credit Card Number\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Exp Month </ion-label>\n                    <ion-select placeholder=\"\" interface=\"popover\" formControlName=\"ExpMonth\"\n                        (ionChange)=\"getCardYear($event,value)\">\n                        <ion-select-option value=\"01\">January</ion-select-option>\n                        <ion-select-option value=\"02\">February</ion-select-option>\n                        <ion-select-option value=\"03\">March</ion-select-option>\n                        <ion-select-option value=\"04\">April</ion-select-option>\n                        <ion-select-option value=\"05\">May</ion-select-option>\n                        <ion-select-option value=\"06\">June</ion-select-option>\n                        <ion-select-option value=\"07\">July</ion-select-option>\n                        <ion-select-option value=\"08\">Augest</ion-select-option>\n                        <ion-select-option value=\"09\">September</ion-select-option>\n                        <ion-select-option value=\"10\">October</ion-select-option>\n                        <ion-select-option value=\"11\">November</ion-select-option>\n                        <ion-select-option value=\"12\">December</ion-select-option>\n                    </ion-select>\n                </div>\n                <div *ngIf=\"(form1.get('ExpMonth').hasError('required') ) && form1.get('ExpMonth').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('ExpMonth').hasError('required') && form1.get('ExpMonth').touched\">\n                        Please Select Expiry Month\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Exp Year </ion-label>\n                    <ion-select placeholder=\"\" interface=\"popover\" formControlName=\"ExpYear\">\n                        <ion-select-option *ngFor=\"let item of cardYear\">{{item.Text}}</ion-select-option>\n                    </ion-select>\n                </div>\n                <div *ngIf=\"(form1.get('ExpYear').hasError('required') ) && form1.get('ExpYear').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('ExpYear').hasError('required') && form1.get('ExpYear').touched\">\n                        Please Select Expiry Year\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Cvv </ion-label>\n                    <ion-input type=\"tel\" formControlName=\"CVV\" maxlength=\"3\"></ion-input>\n                </div>\n                <div *ngIf=\"(form1.get('CVV').hasError('required') ) && form1.get('CVV').touched\">\n                    <div class=\"error\" *ngIf=\"form1.get('CVV').hasError('required') && form1.get('CVV').touched\">\n                        Please Enter CVV\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Card Holder's Name </ion-label>\n                    <ion-input type=\"text\" formControlName=\"CardHolder\"></ion-input>\n                </div>\n                <div *ngIf=\"(form1.get('CardHolder').hasError('required') ) && form1.get('CardHolder').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('CardHolder').hasError('required') && form1.get('CardHolder').touched\">\n                        Please Enter Card Holder's Name\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Address 1 </ion-label>\n                    <ion-input placeholder=\"\" type=\"text\" formControlName=\"Address1\"></ion-input>\n                </div>\n                <div *ngIf=\"(form1.get('Address1').hasError('required') ) && form1.get('Address1').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('Address1').hasError('required') && form1.get('Address1').touched\">\n                        Please Enter Address\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\">Address 2</ion-label>\n                    <ion-input placeholder=\"\" type=\"text\" formControlName=\"Address2\"></ion-input>\n                </div>\n\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> City </ion-label>\n                    <ion-input placeholder=\"\" type=\"text\" formControlName=\"City\"></ion-input>\n                </div>\n                <div *ngIf=\"(form1.get('City').hasError('required') ) && form1.get('City').touched\">\n                    <div class=\"error\" *ngIf=\"form1.get('City').hasError('required') && form1.get('City').touched\">\n                        Please Enter City\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> State </ion-label>\n                    <ion-input placeholder=\"\" type=\"text\" formControlName=\"State\"></ion-input>\n                </div>\n                <div *ngIf=\"(form1.get('State').hasError('required') ) && form1.get('State').touched\">\n                    <div class=\"error\" *ngIf=\"form1.get('State').hasError('required') && form1.get('State').touched\">\n                        Please Enter State\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Zipcode </ion-label>\n                    <ion-input placeholder=\"\" type=\"number\" formControlName=\"ZipCode\"></ion-input>\n                </div>\n                <div *ngIf=\"(form1.get('ZipCode').hasError('required') ) && form1.get('ZipCode').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('ZipCode').hasError('required') && form1.get('ZipCode').touched\">\n                        Please Enter ZipCode\n                    </div>\n                </div>\n                <div class=\"form-section\">\n                    <ion-label position=\"stacked\"> <span class=\"mendatary\"> * </span> Country </ion-label>\n                    <ion-select formControlName=\"Country\">\n                        <ion-select-option value=\"0\">---</ion-select-option>\n                        <ion-select-option value=\"AF\">Afghanistan</ion-select-option>\n                        <ion-select-option value=\"AL\">Albania</ion-select-option>\n                        <ion-select-option value=\"AX\">Åland Islands</ion-select-option>\n                        <ion-select-option value=\"AO\">Angola</ion-select-option>\n                        <ion-select-option value=\"DZ\">Algeria</ion-select-option>\n                        <ion-select-option value=\"AS\">American Samoa</ion-select-option>\n                        <ion-select-option value=\"AD\">Andorra</ion-select-option>\n                        <ion-select-option value=\"AI\">Anguilla</ion-select-option>\n                        <ion-select-option value=\"AQ\">Antarctica</ion-select-option>\n                        <ion-select-option value=\"AG\">Antigua And Barbuda</ion-select-option>\n                        <ion-select-option value=\"AR\">Argentina</ion-select-option>\n                        <ion-select-option value=\"AM\">Armenia</ion-select-option>\n                        <ion-select-option value=\"AW\">Aruba</ion-select-option>\n                        <ion-select-option value=\"AU\">Australia</ion-select-option>\n                        <ion-select-option value=\"AT\">Austria</ion-select-option>\n                        <ion-select-option value=\"AZ\">Azerbaijan</ion-select-option>\n                        <ion-select-option value=\"BS\">Bahamas</ion-select-option>\n                        <ion-select-option value=\"BH\">Bahrain</ion-select-option>\n                        <ion-select-option value=\"BD\">Bangladesh</ion-select-option>\n                        <ion-select-option value=\"BB\">Barbados</ion-select-option>\n                        <ion-select-option value=\"BY\">Belarus</ion-select-option>\n                        <ion-select-option value=\"BE\">Belgium</ion-select-option>\n                        <ion-select-option value=\"BZ\">Belize</ion-select-option>\n                        <ion-select-option value=\"BJ\">Benin</ion-select-option>\n                        <ion-select-option value=\"BM\">Bermuda</ion-select-option>\n                        <ion-select-option value=\"BT\">Bhutan</ion-select-option>\n                        <ion-select-option value=\"BO\">Bolivia</ion-select-option>\n                        <ion-select-option value=\"BA\">Bosnia and Herzegovina</ion-select-option>\n                        <ion-select-option value=\"BW\">Botswana</ion-select-option>\n                        <ion-select-option value=\"BV\">Bouvet Island</ion-select-option>\n                        <ion-select-option value=\"BR\">Brazil</ion-select-option>\n                        <ion-select-option value=\"IO\">British Indian Ocean Territory</ion-select-option>\n                        <ion-select-option value=\"BN\">Brunei Darussalam</ion-select-option>\n                        <ion-select-option value=\"BG\">Bulgaria</ion-select-option>\n                        <ion-select-option value=\"BF\">Burkina Faso</ion-select-option>\n                        <ion-select-option value=\"BI\">Burundi</ion-select-option>\n                        <ion-select-option value=\"KH\">Cambodia</ion-select-option>\n                        <ion-select-option value=\"CM\">Cameroon</ion-select-option>\n                        <ion-select-option value=\"CA\">Canada</ion-select-option>\n                        <ion-select-option value=\"CV\">Cape Verde</ion-select-option>\n                        <ion-select-option value=\"KY\">Cayman Islands</ion-select-option>\n                        <ion-select-option value=\"CF\">Central African Republic</ion-select-option>\n                        <ion-select-option value=\"TD\">Chad</ion-select-option>\n                        <ion-select-option value=\"CL\">Chile</ion-select-option>\n                        <ion-select-option value=\"CN\">China</ion-select-option>\n                        <ion-select-option value=\"CX\">Christmas Island</ion-select-option>\n                        <ion-select-option value=\"CC\">Cocos (Keeling) Islands</ion-select-option>\n                        <ion-select-option value=\"CO\">Colombia</ion-select-option>\n                        <ion-select-option value=\"KM\">Comoros</ion-select-option>\n                        <ion-select-option value=\"CG\">Congo</ion-select-option>\n                        <ion-select-option value=\"CD\">Congo, the Democratic Republic of the</ion-select-option>\n                        <ion-select-option value=\"CK\">Cook Islands</ion-select-option>\n                        <ion-select-option value=\"CR\">Costa Rica</ion-select-option>\n                        <ion-select-option value=\"CI\">Cote d'Ivoire</ion-select-option>\n                        <ion-select-option value=\"HR\">Croatia</ion-select-option>\n                        <ion-select-option value=\"CY\">Cyprus</ion-select-option>\n                        <ion-select-option value=\"CZ\">Czech Republic</ion-select-option>\n                        <ion-select-option value=\"DK\">Denmark</ion-select-option>\n                        <ion-select-option value=\"DJ\">Djibouti</ion-select-option>\n                        <ion-select-option value=\"DM\">Dominica</ion-select-option>\n                        <ion-select-option value=\"DO\">Dominican Republic</ion-select-option>\n                        <ion-select-option value=\"TP\">East Timor</ion-select-option>\n                        <ion-select-option value=\"EC\">Ecuador</ion-select-option>\n                        <ion-select-option value=\"EG\">Egypt</ion-select-option>\n                        <ion-select-option value=\"SV\">El Salvador</ion-select-option>\n                        <ion-select-option value=\"GQ\">Equatorial Guinea</ion-select-option>\n                        <ion-select-option value=\"ER\">Eritrea</ion-select-option>\n                        <ion-select-option value=\"EE\">Estonia</ion-select-option>\n                        <ion-select-option value=\"ET\">Ethiopia</ion-select-option>\n                        <ion-select-option value=\"FK\">Falkland Islands</ion-select-option>\n                        <ion-select-option value=\"FO\">Faroe Islands</ion-select-option>\n                        <ion-select-option value=\"FJ\">Fiji</ion-select-option>\n                        <ion-select-option value=\"FI\">Finland</ion-select-option>\n                        <ion-select-option value=\"FR\">France</ion-select-option>\n                        <ion-select-option value=\"GF\">French Guiana</ion-select-option>\n                        <ion-select-option value=\"PF\">French Polynesia</ion-select-option>\n                        <ion-select-option value=\"TF\">French Southern Territories</ion-select-option>\n                        <ion-select-option value=\"GA\">Gabon</ion-select-option>\n                        <ion-select-option value=\"GM\">Gambia</ion-select-option>\n                        <ion-select-option value=\"GE\">Georgia</ion-select-option>\n                        <ion-select-option value=\"DE\">Germany</ion-select-option>\n                        <ion-select-option value=\"GH\">Ghana</ion-select-option>\n                        <ion-select-option value=\"GI\">Gibraltar</ion-select-option>\n                        <ion-select-option value=\"GR\">Greece</ion-select-option>\n                        <ion-select-option value=\"GL\">Greenland</ion-select-option>\n                        <ion-select-option value=\"GD\">Grenada</ion-select-option>\n                        <ion-select-option value=\"GP\">Guadeloupe</ion-select-option>\n                        <ion-select-option value=\"GU\">Guam</ion-select-option>\n                        <ion-select-option value=\"GT\">Guatemala</ion-select-option>\n                        <ion-select-option value=\"GG\">Guernsey</ion-select-option>\n                        <ion-select-option value=\"GN\">Guinea</ion-select-option>\n                        <ion-select-option value=\"GW\">Guinea-Bissau</ion-select-option>\n                        <ion-select-option value=\"GY\">Guyana</ion-select-option>\n                        <ion-select-option value=\"HT\">Haiti</ion-select-option>\n                        <ion-select-option value=\"HM\">Heard and Mc Donald Islands</ion-select-option>\n                        <ion-select-option value=\"HN\">Honduras</ion-select-option>\n                        <ion-select-option value=\"HK\">Hong Kong</ion-select-option>\n                        <ion-select-option value=\"HU\">Hungary</ion-select-option>\n                        <ion-select-option value=\"IS\">Iceland</ion-select-option>\n                        <ion-select-option value=\"IN\">India</ion-select-option>\n                        <ion-select-option value=\"ID\">Indonesia</ion-select-option>\n                        <ion-select-option value=\"IQ\">Iraq</ion-select-option>\n                        <ion-select-option value=\"IE\">Ireland</ion-select-option>\n                        <ion-select-option value=\"IM\">Isle of Man</ion-select-option>\n                        <ion-select-option value=\"IL\">Israel</ion-select-option>\n                        <ion-select-option value=\"IT\">Italy</ion-select-option>\n                        <ion-select-option value=\"JM\">Jamaica</ion-select-option>\n                        <ion-select-option value=\"JP\">Japan</ion-select-option>\n                        <ion-select-option value=\"JE\">Jersey</ion-select-option>\n                        <ion-select-option value=\"JO\">Jordan</ion-select-option>\n                        <ion-select-option value=\"KZ\">Kazakhstan</ion-select-option>\n                        <ion-select-option value=\"KE\">Kenya</ion-select-option>\n                        <ion-select-option value=\"KI\">Kiribati</ion-select-option>\n                        <ion-select-option value=\"KR\">Korea, Republic of</ion-select-option>\n                        <ion-select-option value=\"KW\">Kuwait</ion-select-option>\n                        <ion-select-option value=\"KG\">Kyrgyzstan</ion-select-option>\n                        <ion-select-option value=\"LA\">Lao People's Democratic Republic</ion-select-option>\n                        <ion-select-option value=\"LV\">Latvia</ion-select-option>\n                        <ion-select-option value=\"LB\">Lebanon</ion-select-option>\n                        <ion-select-option value=\"LS\">Lesotho</ion-select-option>\n                        <ion-select-option value=\"LR\">Liberia</ion-select-option>\n                        <ion-select-option value=\"LY\">Libya</ion-select-option>\n                        <ion-select-option value=\"LI\">Liechtenstein</ion-select-option>\n                        <ion-select-option value=\"LT\">Lithuania</ion-select-option>\n                        <ion-select-option value=\"LU\">Luxembourg</ion-select-option>\n                        <ion-select-option value=\"MO\">Macau</ion-select-option>\n                        <ion-select-option value=\"MK\">Macedonia</ion-select-option>\n                        <ion-select-option value=\"MG\">Madagascar</ion-select-option>\n                        <ion-select-option value=\"MW\">Malawi</ion-select-option>\n                        <ion-select-option value=\"MY\">Malaysia</ion-select-option>\n                        <ion-select-option value=\"MV\">Maldives</ion-select-option>\n                        <ion-select-option value=\"ML\">Mali</ion-select-option>\n                        <ion-select-option value=\"MT\">Malta</ion-select-option>\n                        <ion-select-option value=\"MH\">Marshall Islands</ion-select-option>\n                        <ion-select-option value=\"MQ\">Martinique</ion-select-option>\n                        <ion-select-option value=\"MR\">Mauritania</ion-select-option>\n                        <ion-select-option value=\"MU\">Mauritius</ion-select-option>\n                        <ion-select-option value=\"YT\">Mayotte</ion-select-option>\n                        <ion-select-option value=\"MX\">Mexico</ion-select-option>\n                        <ion-select-option value=\"FM\">Micronesia, Federated States of</ion-select-option>\n                        <ion-select-option value=\"MD\">Moldova, Republic of</ion-select-option>\n                        <ion-select-option value=\"MC\">Monaco</ion-select-option>\n                        <ion-select-option value=\"MN\">Mongolia</ion-select-option>\n                        <ion-select-option value=\"ME\">Montenegro</ion-select-option>\n                        <ion-select-option value=\"MS\">Montserrat</ion-select-option>\n                        <ion-select-option value=\"MA\">Morocco</ion-select-option>\n                        <ion-select-option value=\"MZ\">Mozambique</ion-select-option>\n                        <ion-select-option value=\"MM\">Myanmar</ion-select-option>\n                        <ion-select-option value=\"NA\">Namibia</ion-select-option>\n                        <ion-select-option value=\"NR\">Nauru</ion-select-option>\n                        <ion-select-option value=\"NP\">Nepal</ion-select-option>\n                        <ion-select-option value=\"NL\">Netherlands</ion-select-option>\n                        <ion-select-option value=\"AN\">Netherlands Antilles</ion-select-option>\n                        <ion-select-option value=\"NC\">New Caledonia</ion-select-option>\n                        <ion-select-option value=\"NZ\">New Zealand</ion-select-option>\n                        <ion-select-option value=\"NI\">Nicaragua</ion-select-option>\n                        <ion-select-option value=\"NE\">Niger</ion-select-option>\n                        <ion-select-option value=\"NG\">Nigeria</ion-select-option>\n                        <ion-select-option value=\"NU\">Niue</ion-select-option>\n                        <ion-select-option value=\"NF\">Norfolk Island</ion-select-option>\n                        <ion-select-option value=\"MP\">Northern Mariana Islands</ion-select-option>\n                        <ion-select-option value=\"NO\">Norway</ion-select-option>\n                        <ion-select-option value=\"OM\">Oman</ion-select-option>\n                        <ion-select-option value=\"PK\">Pakistan</ion-select-option>\n                        <ion-select-option value=\"PW\">Palau</ion-select-option>\n                        <ion-select-option value=\"PS\">Palestinian Territories</ion-select-option>\n                        <ion-select-option value=\"PA\">Panama</ion-select-option>\n                        <ion-select-option value=\"PG\">Papua New Guinea</ion-select-option>\n                        <ion-select-option value=\"PY\">Paraguay</ion-select-option>\n                        <ion-select-option value=\"PE\">Peru</ion-select-option>\n                        <ion-select-option value=\"PH\">Philippines</ion-select-option>\n                        <ion-select-option value=\"PN\">Pitcairn</ion-select-option>\n                        <ion-select-option value=\"PL\">Poland</ion-select-option>\n                        <ion-select-option value=\"PT\">Portugal</ion-select-option>\n                        <ion-select-option value=\"PR\">Puerto Rico</ion-select-option>\n                        <ion-select-option value=\"QA\">Qatar</ion-select-option>\n                        <ion-select-option value=\"RE\">Reunion</ion-select-option>\n                        <ion-select-option value=\"RO\">Romania</ion-select-option>\n                        <ion-select-option value=\"RU\">Russian Federation</ion-select-option>\n                        <ion-select-option value=\"RW\">Rwanda</ion-select-option>\n                        <ion-select-option value=\"BL\">Saint Barthélemy</ion-select-option>\n                        <ion-select-option value=\"KN\">Saint Kitts and Nevis</ion-select-option>\n                        <ion-select-option value=\"LC\">Saint Lucia</ion-select-option>\n                        <ion-select-option value=\"MF\">Saint Martin</ion-select-option>\n                        <ion-select-option value=\"VC\">Saint Vincent and the Grenadines</ion-select-option>\n                        <ion-select-option value=\"WS\">Samoa (Independent)</ion-select-option>\n                        <ion-select-option value=\"SM\">San Marino</ion-select-option>\n                        <ion-select-option value=\"ST\">Sao Tome and Principe</ion-select-option>\n                        <ion-select-option value=\"SA\">Saudi Arabia</ion-select-option>\n                        <ion-select-option value=\"SN\">Senegal</ion-select-option>\n                        <ion-select-option value=\"RS\">Serbia</ion-select-option>\n                        <ion-select-option value=\"SC\">Seychelles</ion-select-option>\n                        <ion-select-option value=\"SL\">Sierra Leone</ion-select-option>\n                        <ion-select-option value=\"SG\">Singapore</ion-select-option>\n                        <ion-select-option value=\"SK\">Slovakia</ion-select-option>\n                        <ion-select-option value=\"SI\">Slovenia</ion-select-option>\n                        <ion-select-option value=\"SB\">Solomon Islands</ion-select-option>\n                        <ion-select-option value=\"SO\">Somalia</ion-select-option>\n                        <ion-select-option value=\"ZA\">South Africa</ion-select-option>\n                        <ion-select-option value=\"GS\">South Georgia and the South Sandwich Islands</ion-select-option>\n                        <ion-select-option value=\"ES\">Spain</ion-select-option>\n                        <ion-select-option value=\"LK\">Sri Lanka</ion-select-option>\n                        <ion-select-option value=\"SH\">St. Helena</ion-select-option>\n                        <ion-select-option value=\"PM\">St. Pierre and Miquelon</ion-select-option>\n                        <ion-select-option value=\"SR\">Suriname</ion-select-option>\n                        <ion-select-option value=\"SJ\">Svalbard and Jan Mayen Islands</ion-select-option>\n                        <ion-select-option value=\"SZ\">Swaziland</ion-select-option>\n                        <ion-select-option value=\"SE\">Sweden</ion-select-option>\n                        <ion-select-option value=\"CH\">Switzerland</ion-select-option>\n                        <ion-select-option value=\"TW\">Taiwan</ion-select-option>\n                        <ion-select-option value=\"TJ\">Tajikistan</ion-select-option>\n                        <ion-select-option value=\"TZ\">Tanzania</ion-select-option>\n                        <ion-select-option value=\"TH\">Thailand</ion-select-option>\n                        <ion-select-option value=\"TG\">Togo</ion-select-option>\n                        <ion-select-option value=\"TK\">Tokelau</ion-select-option>\n                        <ion-select-option value=\"TO\">Tonga</ion-select-option>\n                        <ion-select-option value=\"TT\">Trinidad and Tobago</ion-select-option>\n                        <ion-select-option value=\"TN\">Tunisia</ion-select-option>\n                        <ion-select-option value=\"TR\">Turkey</ion-select-option>\n                        <ion-select-option value=\"TM\">Turkmenistan</ion-select-option>\n                        <ion-select-option value=\"TC\">Turks and Caicos Islands</ion-select-option>\n                        <ion-select-option value=\"TV\">Tuvalu</ion-select-option>\n                        <ion-select-option value=\"UG\">Uganda</ion-select-option>\n                        <ion-select-option value=\"UA\">Ukraine</ion-select-option>\n                        <ion-select-option value=\"AE\">United Arab Emirates</ion-select-option>\n                        <ion-select-option value=\"GB\">United Kingdom</ion-select-option>\n                        <ion-select-option value=\"US\" selected=\"selected\">United States</ion-select-option>\n                        <ion-select-option value=\"UM\">United States Minor Outlying Islands</ion-select-option>\n                        <ion-select-option value=\"UY\">Uruguay</ion-select-option>\n                        <ion-select-option value=\"UZ\">Uzbekistan</ion-select-option>\n                        <ion-select-option value=\"VU\">Vanuatu</ion-select-option>\n                        <ion-select-option value=\"VA\">Vatican City State (Holy See)</ion-select-option>\n                        <ion-select-option value=\"VE\">Venezuela</ion-select-option>\n                        <ion-select-option value=\"VN\">Viet Nam</ion-select-option>\n                        <ion-select-option value=\"VG\">Virgin Islands (British)</ion-select-option>\n                        <ion-select-option value=\"VI\">Virgin Islands (U.S.)</ion-select-option>\n                        <ion-select-option value=\"WF\">Wallis and Futuna Islands</ion-select-option>\n                        <ion-select-option value=\"EH\">Western Sahara</ion-select-option>\n                        <ion-select-option value=\"YE\">Yemen</ion-select-option>\n                        <ion-select-option value=\"ZM\">Zambia</ion-select-option>\n                        <ion-select-option value=\"ZW\">Zimbabwe</ion-select-option>\n                    </ion-select>\n                </div>\n                <div *ngIf=\"(form1.get('Country').hasError('required') ) && form1.get('Country').touched\">\n                    <div class=\"error\"\n                        *ngIf=\"form1.get('Country').hasError('required') && form1.get('Country').touched\">\n                        Please Enter Country\n                    </div>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </form>\n</ion-content>\n\n\n<ion-footer>\n\n    <ion-item lines=\"none\">\n        <ion-label *ngIf=\"final_Price !== null && serviceName !== 'Round Trip'\" (click)=\"presentModal()\">$ {{final_Price}} <ion-icon\n                name=\"information-circle-outline\" (click)=\"presentModal()\"></ion-icon>\n        </ion-label>\n        <ion-label *ngIf=\"serviceName == 'Round Trip' && total != null\" (click)=\"presentModal()\">$ {{total}} <ion-icon\n                name=\"information-circle-outline\" (click)=\"presentModal()\"></ion-icon><br>\n            <small style=\"color: #ffcb00;\">Grand Total</small>\n        </ion-label>\n        <ion-button class=\"main-button main-button--next-page\" [disabled]=\"!form1.valid\" slot=\"end\"\n            (click)=\"onSubmit()\">Review Order\n        </ion-button>\n    </ion-item>\n\n</ion-footer>"

/***/ }),

/***/ "./src/app/filldetails/filldetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/filldetails/filldetails.module.ts ***!
  \***************************************************/
/*! exports provided: FilldetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilldetailsPageModule", function() { return FilldetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filldetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filldetails.page */ "./src/app/filldetails/filldetails.page.ts");







var routes = [
    {
        path: '',
        component: _filldetails_page__WEBPACK_IMPORTED_MODULE_6__["FilldetailsPage"]
    }
];
var FilldetailsPageModule = /** @class */ (function () {
    function FilldetailsPageModule() {
    }
    FilldetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_filldetails_page__WEBPACK_IMPORTED_MODULE_6__["FilldetailsPage"]]
        })
    ], FilldetailsPageModule);
    return FilldetailsPageModule;
}());



/***/ }),

/***/ "./src/app/filldetails/filldetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/filldetails/filldetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".airport-waiting-time {\n  font-weight: 800 !important;\n  color: #000;\n}\n\n.error {\n  color: red;\n  font-size: 13px;\n  padding: 4px 15px;\n  padding-bottom: 0px;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.to-location {\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\nion-toolbar ion-text {\n  color: #000;\n}\n\n.icons-row {\n  display: -webkit-box;\n  display: flex;\n  font-size: 20px;\n  padding: 5px 0px;\n}\n\nion-card ion-card-content .from {\n  margin-top: -10px;\n}\n\nion-card ion-card-content ion-text {\n  display: block;\n}\n\nion-card ion-card-content ion-row {\n  position: relative;\n}\n\nion-card ion-card-content ion-row .type_of_flight {\n  margin: -4px 0 15px 15px;\n}\n\nion-card ion-card-content ion-row ion-select {\n  font-weight: 800;\n  padding-top: 0.6rem;\n  padding-left: 0.4rem;\n  color: #000 !important;\n  opacity: 1;\n}\n\nion-card ion-card-content ion-row ion-item ion-datetime {\n  font-weight: 800;\n  padding-top: 0.6rem;\n  padding-left: 0.4rem;\n}\n\nion-card ion-card-content ion-row ion-item ion-text {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  margin-left: 0.5rem;\n}\n\nion-card ion-card-content p {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #000;\n}\n\nion-card ion-card-content b {\n  font-size: 15px !important;\n}\n\nion-card ion-card-content .radio-section ion-radio-group {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-card ion-card-content .radio-section ion-radio-group ion-radio {\n  margin-left: 5px;\n  position: relative;\n  top: 5px;\n  margin-right: 5px;\n}\n\nion-card ion-card-content .radio-section .confirm_text {\n  font-size: 12.5px;\n  margin: 0 0 0 11px;\n  letter-spacing: 0.5px;\n  display: block;\n}\n\n.mendatary {\n  color: red;\n  font-size: 15px;\n}\n\n@media only screen and (min-width: 320px) and (max-width: 340px) {\n  ion-card-content .radio-section ion-radio-group {\n    display: -webkit-box;\n    display: flex;\n  }\n  ion-card-content .radio-section ion-radio-group ion-radio {\n    margin-left: 8px;\n    position: relative;\n    top: 5px;\n  }\n  ion-card-content .radio-section ion-radio-group ion-label {\n    font-size: 12px !important;\n    color: #000;\n  }\n  ion-card-content .radio-section ion-radio-group .second-radio {\n    margin-left: 5px !important;\n  }\n  ion-card-content .radio-section .confirm_text {\n    position: relative !important;\n    left: 10px !important;\n    margin: 0 !important;\n  }\n\n  ion-toolbar ion-label {\n    font-size: 12px !important;\n  }\n}\n\n.list {\n  font-weight: 700;\n  font-family: \"Nunito\", sans-serif;\n  color: #000;\n  padding: 8px 15px;\n  font-size: 14px;\n  border-bottom: 1px solid #ddd;\n}\n\n@media only screen and (min-width: 365px) and (max-width: 415px) {\n  .to-location {\n    margin-top: 0px !important;\n  }\n\n  ion-card-content .radio-section ion-radio-group ion-label {\n    font-size: 14px !important;\n  }\n}\n\n@media only screen and (min-width: 355px) and (max-width: 365px) {\n  ion-radio.second-radio.second-radio--second {\n    width: 7.8% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRGVza3RvcC9ueWMgZ2l0L055Y0xpbW91c2luZS9zcmMvYXBwL2ZpbGxkZXRhaWxzL2ZpbGxkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlsbGRldGFpbHMvZmlsbGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdJO0VBQ0ksV0FBQTtBQ0FSOztBRElBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FETVE7RUFDSSxpQkFBQTtBQ0haOztBREtRO0VBQ0ksY0FBQTtBQ0haOztBREtRO0VBQ0ksa0JBQUE7QUNIWjs7QURLWTtFQUNLLHdCQUFBO0FDSGpCOztBREtZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDSGhCOztBRFFnQjtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ05wQjs7QURRZ0I7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNOcEI7O0FEVVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDUlo7O0FEVVk7RUFDSSwwQkFBQTtBQ1JoQjs7QURhWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ1hoQjs7QURZZ0I7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FDVnBCOztBRGFZO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ1hoQjs7QURrQkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ2ZKOztBRGlCQTtFQUdZO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0VDaEJkO0VEaUJjO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7RUNmbEI7RURpQmM7SUFDSSwwQkFBQTtJQUNBLFdBQUE7RUNmbEI7RURpQmM7SUFDSSwyQkFBQTtFQ2ZsQjtFRGtCVTtJQUNJLDZCQUFBO0lBQ0EscUJBQUE7SUFDQSxvQkFBQTtFQ2hCZDs7RURxQk07SUFDSSwwQkFBQTtFQ2xCVjtBQUNGOztBRHVCQTtFQUNJLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNyQko7O0FEd0JBO0VBQ0k7SUFDSSwwQkFBQTtFQ3JCTjs7RUQwQmM7SUFDSSwwQkFBQTtFQ3ZCbEI7QUFDRjs7QUQ2QkE7RUFDSTtJQUNJLHNCQUFBO0VDM0JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9maWxsZGV0YWlscy9maWxsZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWlycG9ydC13YWl0aW5nLXRpbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRvLWxvY2F0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxufVxyXG5cclxuLmljb25zLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgLmZyb20ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLnR5cGVfb2ZfZmxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICBtYXJnaW46IC00cHggMCAxNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGlvbi1kYXRldGltZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC5yYWRpby1zZWN0aW9uIHtcclxuICAgICAgICAgICAgaW9uLXJhZGlvLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4OyAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgLmNvbmZpcm1fdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEyLjVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTFweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLm1lbmRhdGFyeSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAgKG1heC13aWR0aDogMzQwcHgpIHtcclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIC5yYWRpby1zZWN0aW9uIHtcclxuICAgICAgICAgICAgaW9uLXJhZGlvLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNXB4OyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2Vjb25kLXJhZGlvIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAuY29uZmlybV90ZXh0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5saXN0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNjVweCkgYW5kIChtYXgtd2lkdGg6IDQxNXB4KSB7XHJcbiAgICAudG8tbG9jYXRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgLnJhZGlvLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBpb24tcmFkaW8tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM1NXB4KSBhbmQgKG1heC13aWR0aDogMzY1cHgpIHtcclxuICAgIGlvbi1yYWRpby5zZWNvbmQtcmFkaW8uc2Vjb25kLXJhZGlvLS1zZWNvbmQge1xyXG4gICAgICAgIHdpZHRoOiA3LjglICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi5haXJwb3J0LXdhaXRpbmctdGltZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogNHB4IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50by1sb2NhdGlvbiB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLXRleHQge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmljb25zLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuZnJvbSB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tcm93IC50eXBlX29mX2ZsaWdodCB7XG4gIG1hcmdpbjogLTRweCAwIDE1cHggMTVweDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLXJvdyBpb24tc2VsZWN0IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZy10b3A6IDAuNnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDE7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1yb3cgaW9uLWl0ZW0gaW9uLWRhdGV0aW1lIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZy10b3A6IDAuNnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1yb3cgaW9uLWl0ZW0gaW9uLXRleHQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGNvbG9yOiAjMDAwO1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBiIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5yYWRpby1zZWN0aW9uIGlvbi1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5yYWRpby1zZWN0aW9uIGlvbi1yYWRpby1ncm91cCBpb24tcmFkaW8ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLnJhZGlvLXNlY3Rpb24gLmNvbmZpcm1fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xuICBtYXJnaW46IDAgMCAwIDExcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tZW5kYXRhcnkge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xuICBpb24tY2FyZC1jb250ZW50IC5yYWRpby1zZWN0aW9uIGlvbi1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBpb24tY2FyZC1jb250ZW50IC5yYWRpby1zZWN0aW9uIGlvbi1yYWRpby1ncm91cCBpb24tcmFkaW8ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xuICB9XG4gIGlvbi1jYXJkLWNvbnRlbnQgLnJhZGlvLXNlY3Rpb24gaW9uLXJhZGlvLWdyb3VwIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgaW9uLWNhcmQtY29udGVudCAucmFkaW8tc2VjdGlvbiBpb24tcmFkaW8tZ3JvdXAgLnNlY29uZC1yYWRpbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1jYXJkLWNvbnRlbnQgLnJhZGlvLXNlY3Rpb24gLmNvbmZpcm1fdGV4dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXRvb2xiYXIgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxufVxuLmxpc3Qge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM2NXB4KSBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgLnRvLWxvY2F0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1jYXJkLWNvbnRlbnQgLnJhZGlvLXNlY3Rpb24gaW9uLXJhZGlvLWdyb3VwIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzU1cHgpIGFuZCAobWF4LXdpZHRoOiAzNjVweCkge1xuICBpb24tcmFkaW8uc2Vjb25kLXJhZGlvLnNlY29uZC1yYWRpby0tc2Vjb25kIHtcbiAgICB3aWR0aDogNy44JSAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/filldetails/filldetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/filldetails/filldetails.page.ts ***!
  \*************************************************/
/*! exports provided: FilldetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilldetailsPage", function() { return FilldetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _farecalculations_farecalculations_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../farecalculations/farecalculations.page */ "./src/app/farecalculations/farecalculations.page.ts");








var FilldetailsPage = /** @class */ (function () {
    function FilldetailsPage(router, envservice, _FB, modalController, loadingController) {
        var _this = this;
        this.router = router;
        this.envservice = envservice;
        this._FB = _FB;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.isItemAvailable = false;
        this.isItemAvailable2 = false;
        this.showLoaderImg = false;
        this.PassangerListCount = [];
        this.TimeChange = 0;
        this.TimeChange1 = 0;
        this.buttonClickedFirst = false;
        this.buttonClickedSecond = false;
        this.buttonClickedYes = false;
        this.buttonClickedNo = false;
        this.hide = false;
        this.hide1 = false;
        this.formData1 = {
            "pEmail": "", "P_Prefix": "", "pFirstName": "", "pLastName": "", "pTelePhoneNo": "", "pMobileNo": "",
            "NoPassenger": "", "NoSuitcase": "", "specialIns": "", "IsPassenger": "", "BEmail": "", "B_Prefix": "",
            "BFirstName": "", "BLastName": "", "BTelePhoneNo": "", "BMobileNo": "", "PaymentType": "", "CreditCardType": "", "CreditCardNo": "",
            "CreditCardExpMonth": "", "CreditCardExpYear": "", "CreditCardCVV": "", "CreditCardFirstLastName": "", "Address1": "", "Address2": "",
            "City": "", "State": "", "ZipCode": "", "Country": "", "AirlineName": "", "FlightNo": "", "FlightDepAirport": "",
            "FlightType": "", "FlightScheduleHourMin": "", "FlightDelaypickup": "", "FlightMeetingPoint": "", "start_Terminalno": "",
            "end_Terminalno": "", "end_placeName": "", "start_placeName": "", "end_Airline": "", "end_FlightNo": "", "end_Flight_DepartureTime": "",
            "end_Destination": "", "EndFlightScheduleHourMin": "", "IsAirlineFreeText": "", "MinHours": "", "MinDiscountHours": "", "IsSaveCardInfo": "",
            "liPassengerMaster1": "", "FK_ProjectId": ""
        };
        this.formData2 = {
            "specialInsReturn": "", "AirlineNameReturn": "", "FlightNoReturn": "", "FlightDepAirportReturn": "", "FlightTypeReturn": "", "FlightScheduleHourMinReturn": "",
            "FlightDelaypickupReturn": "", "FlightMeetingPointReturn": "", "start_TerminalnoReturn": "", "end_TerminalnoReturn": "", "end_placeNameReturn": "", "start_placeNameReturn": "",
            "end_AirlineReturn": "", "end_FlightNoReturn": "", "end_Flight_DepartureTimeReturn": "", "end_DestinationReturn": "", "EndFlightScheduleHourMinReturn": "", "IsAirlineFreeTextReturn": "",
            "NoPassengerReturn": "", "NoSuitcaseReturn": ""
        };
        this.listofSuitcases = [];
        this.PassangerListCount2 = [];
        this.listofSuitcases2 = [];
        this.details = localStorage.getItem('all_detail');
        this.data = JSON.parse(this.details);
        console.log(this.data);
        var allData = this.data.FromLocationDetail;
        this.locationType = allData.Location_Type;
        this.tolocationType = this.data.ToLocationDetail.Location_Type;
        this.locationAddress = this.data.FromLocationDetail.Location_Address;
        this.tolocationAddress = this.data.ToLocationDetail.Location_Address;
        // this.locationType = this.data.FromLocationDetail.Location_Type;
        var value1 = localStorage.getItem('fromLocation');
        this.locationstart = value1;
        var value2 = localStorage.getItem('toLocation');
        this.locationend = value2;
        this.selectDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('DD');
        this.selectMonthYear = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('MMM YYYY');
        this.selectDay = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickUpDateDisp).format('dddd');
        this.fulltime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('H:mm');
        this.halftime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('h:mm A');
        //-------------------for roundtrip--------------------//
        this.selectDate2 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('DD');
        this.selectMonthYear2 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('MMM YYYY');
        this.selectDay2 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateDisp).format('dddd');
        this.fulltime2 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateTime).format('H:mm');
        this.halftime2 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.ReturnDateTime).format('h:mm A');
        //-------------------for roundtrip--------------------//
        this.envservice.getTerminal(this.locationstart)
            .subscribe(function (data) {
            _this.terminalNumber = data.Data;
            console.log(data.Data);
        });
        //-------------------for roundtrip--------------------//
        this.envservice.getTerminal(this.locationend)
            .subscribe(function (data) {
            _this.terminalNumber2 = data.Data;
            console.log(data.Data);
        });
        //-------------------for roundtrip--------------------//
        var data = localStorage.getItem('car_detail');
        this.carData = JSON.parse(data);
        this.carName = this.carData.Vehicle_Name;
        this.carInside = this.carData.Luggage_Image;
        this.totalPrice = this.carData.clsVehicleFinalRates.Inclusive_all_tax;
        //-----------------for roundtrip---------------------//
        if (localStorage.getItem('car_detail2')) {
            var data2 = localStorage.getItem('car_detail2');
            this.carData2 = JSON.parse(data2);
            console.log(this.carData2);
            this.carName2 = this.carData2.Vehicle_Name;
            this.carInside2 = this.carData2.Luggage_Image;
        }
        //-----------------for roundtrip---------------------//
        var finalAmount = localStorage.getItem('final_rate');
        this.final_Price = JSON.parse(finalAmount);
        if (localStorage.getItem('final_rate2')) {
            var finalAmount2 = localStorage.getItem('final_rate2');
            this.final_Price2 = JSON.parse(finalAmount2);
            this.total = (Number(this.final_Price) + Number(this.final_Price2)).toFixed(2);
        }
        this.serviceName = this.data.TypeOfServiceName;
        if (this.serviceName == "Round Trip") {
            this.locationTypeR = this.tolocationType;
            this.tolocationTypeR = this.locationType;
        }
        this.halftime = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('h:mm A');
        this.halftime1 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('h:mm A');
        this.myUpdateTime = this.dateModify(this.data.PickupDateTime, 45);
        this.addminute = (this.fulltime, this.addMinutes(this.fulltime, '45'));
        this.addminute1 = (this.fulltime, this.addMinutes1(this.fulltime, '30'));
        this.DriverLocation = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('h:mm A');
        this.DriverLocation1 = moment__WEBPACK_IMPORTED_MODULE_3__(this.data.PickupDateTime).format('h:mm A');
        this.pLists = this.carData.Passenger_capacity;
        for (var i = 0; i <= this.pLists; i++) {
            this.PassangerListCount.push(i);
        }
        this.suitcaseLists = this.carData.Luggage_capacity;
        for (var i = 0; i <= this.suitcaseLists; i++) {
            this.listofSuitcases.push(i);
        }
        // -----------------------------------------RoundTrip-------------------------------------
        this.serviceName = this.data.TypeOfServiceName;
        if (this.serviceName == "Round Trip") {
            this.pLists2 = this.carData2.Passenger_capacity;
            for (var i = 0; i <= this.pLists2; i++) {
                this.PassangerListCount2.push(i);
            }
            this.suitcaseLists2 = this.carData2.Luggage_capacity;
            for (var i = 0; i <= this.suitcaseLists2; i++) {
                this.listofSuitcases2.push(i);
            }
        }
        // -----------------------------------------RoundTrip-------------------------------------
        if (this.locationType == 'A' && this.serviceName != "Round Trip") {
            this.form1 = this._FB.group({
                AirlineName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                FlightNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Terminal: [''],
                OriginAirport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                FlightType: [''],
                flight_arrival_time: [''],
                DelayedPickup: [''],
                DriverLocationTime: [''],
                FreeWaitingTime: [''],
                PickupTime: [''],
                AirlineName2: [''],
                FlightNumber2: [''],
                DepartureTime: [''],
                Terminal2: [''],
                DestinationAirport: [''],
                Passengers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Suitcases: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                SpecialInstruction: [''],
                Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])],
                FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                PhoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                TelephoneNumber: [''],
                BookingFor: [''],
                CardType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CVV: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardHolder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                flight_arrival_time1: [''],
                Address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Address2: [''],
                City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                State: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ZipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Passengerfirstname: [''],
                Passengerlastname: [''],
                Passengercellphone: [''],
                Passengertelephone: [''],
                Passengeremail: [''],
                MeetingPoint: ['']
            });
        }
        else if (this.tolocationType == 'A' && this.serviceName != "Round Trip") {
            this.form1 = this._FB.group({
                AirlineName2: [''],
                FlightNumber2: [''],
                DepartureTime: [''],
                Terminal2: [''],
                DestinationAirport: [''],
                Passengers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Suitcases: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                SpecialInstruction: [''],
                Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])],
                FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                PhoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                TelephoneNumber: [''],
                BookingFor: [''],
                CardType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CVV: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardHolder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                flight_arrival_time1: [''],
                Address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Address2: [''],
                City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                State: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ZipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Passengerfirstname: [''],
                Passengerlastname: [''],
                Passengercellphone: [''],
                Passengertelephone: [''],
                Passengeremail: [''],
                MeetingPoint: ['']
            });
        }
        else if (this.serviceName == "Round Trip" && this.locationType == 'A' && this.locationTypeR == 'A') {
            this.form1 = this._FB.group({
                AirlineName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                FlightNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Terminal: [''],
                OriginAirport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                FlightType: [''],
                flight_arrival_time: [''],
                DelayedPickup: [''],
                DriverLocationTime: [''],
                FreeWaitingTime: [''],
                PickupTime: [''],
                AirlineName2: [''],
                FlightNumber2: [''],
                DepartureTime: [''],
                Terminal2: [''],
                DestinationAirport: [''],
                AirlineNameR: [''],
                FlightNumberR: [''],
                OriginAirportR: [''],
                FlightTypeR: [''],
                TerminalR: [''],
                MeetingPoint: [''],
                flight_arrival_timeR: [''],
                DelayedPickupR: [''],
                AirlineName2R: [''],
                FlightNumber2R: [''],
                DepartureTimeR: [''],
                Terminal2R: [''],
                DestinationAirportR: [''],
                flight_arrival_time1R: [''],
                Passengers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Suitcases: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                SpecialInstruction: [''],
                Passengers2: [''],
                Suitcases2: [''],
                SpecialInstruction2: [''],
                Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])],
                FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                PhoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                TelephoneNumber: [''],
                BookingFor: [''],
                CardType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CVV: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardHolder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                flight_arrival_time1: [''],
                Address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Address2: [''],
                City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                State: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ZipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Passengerfirstname: [''],
                Passengerlastname: [''],
                Passengercellphone: [''],
                Passengertelephone: [''],
                Passengeremail: [''],
                MeetingPointR: ['']
            });
        }
        else if (this.serviceName == "Round Trip" && this.locationType == 'B' && this.locationTypeR == 'B') {
            this.form1 = this._FB.group({
                Passengers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Suitcases: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                SpecialInstruction: [''],
                Passengers2: [''],
                Suitcases2: [''],
                SpecialInstruction2: [''],
                Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])],
                FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                PhoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                TelephoneNumber: [''],
                BookingFor: [''],
                CardType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CVV: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardHolder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Address2: [''],
                City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                State: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ZipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Passengerfirstname: [''],
                Passengerlastname: [''],
                Passengercellphone: [''],
                Passengertelephone: [''],
                Passengeremail: ['']
            });
        }
        else if (this.serviceName == "Round Trip" && this.locationType == 'A' && this.locationTypeR == 'B' &&
            this.tolocationType == 'B' && this.tolocationTypeR == 'A') {
            this.form1 = this._FB.group({
                AirlineName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                FlightNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Terminal: [''],
                OriginAirport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                FlightType: [''],
                flight_arrival_time: [''],
                DelayedPickup: [''],
                DriverLocationTime: [''],
                FreeWaitingTime: [''],
                PickupTime: [''],
                AirlineName2: [''],
                FlightNumber2: [''],
                DepartureTime: [''],
                Terminal2: [''],
                DestinationAirport: [''],
                AirlineNameR: [''],
                FlightNumberR: [''],
                OriginAirportR: [''],
                FlightTypeR: [''],
                TerminalR: [''],
                MeetingPoint: [''],
                flight_arrival_timeR: [''],
                DelayedPickupR: [''],
                AirlineName2R: [''],
                FlightNumber2R: [''],
                DepartureTimeR: [''],
                Terminal2R: [''],
                DestinationAirportR: [''],
                Passengers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Suitcases: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                SpecialInstruction: [''],
                Passengers2: [''],
                Suitcases2: [''],
                SpecialInstruction2: [''],
                Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])],
                FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                PhoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                TelephoneNumber: [''],
                BookingFor: [''],
                CardType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CVV: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardHolder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                flight_arrival_time1: [''],
                Address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Address2: [''],
                City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                State: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ZipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Passengerfirstname: [''],
                Passengerlastname: [''],
                Passengercellphone: [''],
                Passengertelephone: [''],
                Passengeremail: [''],
                MeetingPointR: ['']
            });
        }
        else if (this.serviceName == "Round Trip" && this.tolocationType == 'A' && this.locationType == 'B' &&
            this.tolocationTypeR == 'B' && this.locationTypeR == 'A') {
            this.form1 = this._FB.group({
                AirlineName2: [''],
                FlightNumber2: [''],
                DepartureTime: [''],
                Terminal2: [''],
                DestinationAirport: [''],
                FlightNumberR: [''],
                AirlineNameR: [''],
                FlightNumber2R: [''],
                DepartureTimeR: [''],
                Terminal2R: [''],
                DestinationAirportR: [''],
                AirlineName: [''],
                FlightNumber: [''],
                Terminal: [''],
                OriginAirport: [''],
                flight_arrival_time1R: [''],
                FlightType: [''],
                flight_arrival_time: [''],
                DelayedPickup: [''],
                DriverLocationTime: [''],
                FreeWaitingTime: [''],
                PickupTime: [''],
                OriginAirportR: [''],
                FlightTypeR: [''],
                TerminalR: [''],
                MeetingPointR: [''],
                flight_arrival_timeR: [''],
                DelayedPickupR: [''],
                AirlineName2R: [''],
                Passengers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Suitcases: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                SpecialInstruction: [''],
                Passengers2: [''],
                Suitcases2: [''],
                SpecialInstruction2: [''],
                Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])],
                FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                PhoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                TelephoneNumber: [''],
                BookingFor: [''],
                CardType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CVV: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardHolder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                flight_arrival_time1: [''],
                Address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Address2: [''],
                City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                State: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ZipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Passengerfirstname: [''],
                Passengerlastname: [''],
                Passengercellphone: [''],
                Passengertelephone: [''],
                Passengeremail: [''],
                MeetingPoint: ['']
            });
        }
        else {
            this.form1 = this._FB.group({
                Passengers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Suitcases: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                SpecialInstruction: [''],
                Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    ])],
                FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                PhoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                TelephoneNumber: [''],
                BookingFor: [''],
                CardType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ExpYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CVV: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                CardHolder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Address2: [''],
                City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                State: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                ZipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                Passengerfirstname: [''],
                Passengerlastname: [''],
                Passengercellphone: [''],
                Passengertelephone: [''],
                Passengeremail: ['']
            });
        }
        this.paymentType = 'Pre-arranged payment';
    }
    FilldetailsPage.prototype.ngOnInit = function () {
        this.form1.controls['BookingFor'].setValue('NO');
        this.form1.controls['Country'].setValue('US');
        this.form1.controls['Passengers'].setValue("0");
        this.form1.controls['Suitcases'].setValue("0");
        if (this.serviceName == "Round Trip") {
            this.form1.controls['Passengers2'].setValue("0");
            this.form1.controls['Suitcases2'].setValue("0");
        }
    };
    FilldetailsPage.prototype.presentModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _farecalculations_farecalculations_page__WEBPACK_IMPORTED_MODULE_7__["FarecalculationsPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FilldetailsPage.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val.length > 0) {
            if (val && val.trim() != '') {
                this.envservice.airlineNames(val)
                    .subscribe(function (user) {
                    _this.isItemAvailable = true;
                    _this.response = user;
                    _this.items = _this.response.Data.Data.list;
                    console.log(_this.items);
                    (function (error) {
                        console.log(error);
                    });
                });
            }
        }
        else {
            this.items = [];
        }
    };
    FilldetailsPage.prototype.onButtonClick = function () {
        this.hide = true;
        this.hide1 = true;
        this.buttonClickedThird = true;
        this.buttonClickedFirst = true;
        this.buttonClickedSecond = false;
        this.form1.controls['flight_arrival_time'].setValue(this.data.PickupDateTime);
        this.form1.controls['MeetingPoint'].setValue("Inside the terminal at baggage claim area");
    };
    FilldetailsPage.prototype.onButtonClick1 = function () {
        this.hide = false;
        this.hide1 = false;
        this.buttonClickedThird = true;
        this.buttonClickedFirst = false;
        this.buttonClickedSecond = true;
        this.form1.controls['flight_arrival_time1'].setValue(this.data.PickupDateTime);
        this.form1.controls['MeetingPoint'].setValue("Inside the terminal at baggage claim area");
    };
    // -----------------------------------------Roundtrip-------------------------------------------
    FilldetailsPage.prototype.onButtonClickR = function () {
        this.hide = true;
        this.hide1 = true;
        this.buttonClickedThird = true;
        this.buttonClickedFirst = true;
        this.buttonClickedSecond = false;
        this.form1.controls['flight_arrival_timeR'].setValue(this.data.ReturnDateTime);
        this.form1.controls['MeetingPointR'].setValue("Inside the terminal at baggage claim area");
    };
    FilldetailsPage.prototype.onButtonClick1R = function () {
        this.hide = false;
        this.hide1 = false;
        this.buttonClickedThird = true;
        this.buttonClickedFirst = false;
        this.buttonClickedSecond = true;
        this.form1.controls['flight_arrival_time1R'].setValue(this.data.ReturnDateTime);
        this.form1.controls['MeetingPointR'].setValue("Inside the terminal at baggage claim area");
    };
    // -----------------------------------------Roundtrip-------------------------------------------
    FilldetailsPage.prototype.onButtonClick2 = function () {
        this.buttonClickedThird = true;
        this.buttonClickedFourth = false;
    };
    FilldetailsPage.prototype.onButtonClick3 = function () {
        this.buttonClickedThird = false;
        this.buttonClickedFourth = true;
    };
    FilldetailsPage.prototype.onButtonClickYes = function () {
        this.buttonClickedYes = true;
        this.buttonClickedNo = false;
    };
    FilldetailsPage.prototype.onButtonClickNo = function () {
        console.log(this.formData1);
        this.buttonClickedYes = false;
        this.buttonClickedNo = true;
        // this.formData1.Passengerfirstname = '';
    };
    FilldetailsPage.prototype.addMinutes1 = function (times, minsToAdd1) {
        console.log(times);
        function D(J) { return (J < 10 ? '0' : '') + J; }
        ;
        var piece = times.split(':');
        var mins = piece[0] * 60 + +piece[1] + +minsToAdd1;
        return D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
    };
    FilldetailsPage.prototype.optionsFn = function (value) {
        console.log(value);
        this.TimeChange = value;
        console.log(this.TimeChange);
        console.log(this.halftime);
        var cData = this.dateModify(this.halftime, 45);
        this.addminute = this.dateModify(cData, value);
        this.DriverLocation = this.dateModify(this.halftime, this.TimeChange);
    };
    FilldetailsPage.prototype.onChangeTime = function (value, minsToAdd) {
        if (minsToAdd === void 0) { minsToAdd = '45'; }
        this.CurrentTime = moment__WEBPACK_IMPORTED_MODULE_3__(value).format('h:mm A');
        this.halftime = this.CurrentTime;
        console.log(value);
        console.log(this.TimeChange);
        this.changeDate = this.dateModify(moment__WEBPACK_IMPORTED_MODULE_3__(value).format('h:mm A'), minsToAdd);
        function D(J) { return (J < 10 ? '0' : '') + J; }
        ;
        var piece = this.changeDate.split(':');
        var mins = parseInt(piece[0]) * 60 + +parseInt(piece[1]) + +this.TimeChange;
        var modify = D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
        this.DriverLocation = this.dateModify(this.CurrentTime, this.TimeChange);
        this.addminute = modify;
    };
    FilldetailsPage.prototype.formatAMPM = function (times, minsToAdd) {
        console.log(times);
        function D(J) { return (J < 10 ? '0' : '') + J; }
        ;
        var piece = times.split(':');
        var mins = piece[0] * 60 + +piece[1] + +minsToAdd;
        var hrs = D(mins % (24 * 60) / 60 | 0);
        var ampm = hrs >= 12 ? 'pm' : 'am';
        hrs = hrs % 12;
        hrs = hrs ? hrs : 12;
        return hrs + ':' + D(mins % 60) + ' ' + ampm;
    };
    FilldetailsPage.prototype.onChangeTime1 = function (value, minsToAdd) {
        if (minsToAdd === void 0) { minsToAdd = '30'; }
        this.CurrentTime1 = moment__WEBPACK_IMPORTED_MODULE_3__(value).format('h:mm A');
        this.halftime1 = this.CurrentTime1;
        console.log(value);
        console.log(this.TimeChange1);
        this.changeDate1 = this.dateModify1(moment__WEBPACK_IMPORTED_MODULE_3__(value).format('h:mm A'), minsToAdd);
        function D(J) { return (J < 10 ? '0' : '') + J; }
        ;
        var piece = this.changeDate1.split(':');
        var mins = parseInt(piece[0]) * 60 + +parseInt(piece[1]) + +this.TimeChange1;
        var modify1 = D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
        this.DriverLocation1 = this.dateModify1(this.CurrentTime1, this.TimeChange1);
        this.addminute1 = modify1;
    };
    FilldetailsPage.prototype.optionsFn1 = function (value1) {
        console.log(value1);
        this.TimeChange1 = value1;
        console.log(this.TimeChange1);
        console.log(this.halftime1);
        var cData1 = this.dateModify1(this.halftime1, 30);
        this.addminute1 = this.dateModify(cData1, value1);
        this.DriverLocation1 = this.dateModify1(this.halftime1, this.TimeChange1);
    };
    FilldetailsPage.prototype.dateModify = function (value, minsToAdd) {
        console.log(value, minsToAdd);
        function D(J) { return (J < 10 ? '0' : '') + J; }
        ;
        var piece = value.split(':');
        var mins = parseInt(piece[0]) * 60 + +parseInt(piece[1]) + +minsToAdd;
        var modify = D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
        return modify;
    };
    FilldetailsPage.prototype.dateModify1 = function (value1, minsToAdd1) {
        function D(J) { return (J < 10 ? '0' : '') + J; }
        ;
        var piece = value1.split(':');
        var mins = parseInt(piece[0]) * 60 + +parseInt(piece[1]) + +minsToAdd1;
        var modify1 = D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
        return modify1;
    };
    FilldetailsPage.prototype.addMinutes = function (times, minsToAdd) {
        console.log(times);
        function D(J) { return (J < 10 ? '0' : '') + J; }
        ;
        var piece = times.split(':');
        var mins = piece[0] * 60 + +piece[1] + +minsToAdd;
        return D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
    };
    FilldetailsPage.prototype.getorigin = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val.length > 0) {
            if (val && val.trim() != '') {
                this.envservice.internationalAirport(val)
                    .subscribe(function (user) {
                    _this.isItemAvailable2 = true;
                    _this.response = user;
                    _this.list = _this.response.Data.Data.list1;
                    console.log(_this.list);
                    (function (error) {
                        console.log(error);
                    });
                });
            }
        }
        else {
            this.list = [];
        }
    };
    FilldetailsPage.prototype.getCardYear = function (event, value) {
        var _this = this;
        this.envservice.getCardyear(this.form1.get('ExpMonth').value)
            .subscribe(function (data) {
            console.log(data);
            _this.cardYear = data.Data;
        });
    };
    FilldetailsPage.prototype.putvalue = function (row) {
        console.log(row);
        var val = row.AirCode;
        this.form1.controls['AirlineName'].setValue(val);
        this.isItemAvailable = false;
    };
    // -----------------------------------------Roundtrip---------------------------------------------
    FilldetailsPage.prototype.putAirlineRoundtrip = function (row) {
        console.log(row);
        var val = row.AirCode;
        this.form1.controls['AirlineNameR'].setValue(val);
        this.isItemAvailable = false;
    };
    // -----------------------------------------Roundtrip---------------------------------------------
    FilldetailsPage.prototype.putvalue2 = function (row) {
        console.log(row);
        var val = row.AirportName;
        this.form1.controls['OriginAirport'].setValue(val);
        this.isItemAvailable2 = false;
        this.formData1.FlightType = this.form1.get('FlightType').value;
        this.formData1.FlightType = row.LocationType == 'I' ? 'INTERNATIONAL FLIGHT' : 'DOMESTIC FLIGHT';
        console.log(this.formData1.FlightType);
        this.form1.controls['FlightType'].setValue(this.formData1.FlightType);
        if (row.LocationType == 'I') {
            this.onButtonClick();
        }
        else {
            this.onButtonClick1();
        }
    };
    // -----------------------------------------Roundtrip---------------------------------------------
    FilldetailsPage.prototype.putOriginAirport = function (row) {
        console.log(row);
        var val = row.AirportName;
        this.form1.controls['OriginAirportR'].setValue(val);
        this.isItemAvailable2 = false;
        this.formData2.FlightTypeReturn = this.form1.get('FlightTypeR').value;
        this.formData2.FlightTypeReturn = row.LocationType == 'I' ? 'INTERNATIONAL FLIGHT' : 'DOMESTIC FLIGHT';
        console.log(this.formData2.FlightTypeReturn);
        this.form1.controls['FlightTypeR'].setValue(this.formData2.FlightTypeReturn);
        if (row.LocationType == 'I') {
            this.onButtonClickR();
        }
        else {
            this.onButtonClick1R();
        }
    };
    FilldetailsPage.prototype.putAirline2Roundtrip = function (row) {
        console.log(row);
        var val = row.AirCode;
        this.form1.controls['AirlineName2R'].setValue(val);
        this.isItemAvailable = false;
    };
    // -----------------------------------------Roundtrip---------------------------------------------
    FilldetailsPage.prototype.putvalue3 = function (row) {
        console.log(row);
        var val = row.AirCode;
        this.form1.controls['AirlineName2'].setValue(val);
        this.isItemAvailable = false;
    };
    FilldetailsPage.prototype.onSubmit = function (item) {
        var _this = this;
        this.presentLoading().then(function (a) {
            if (_this.locationType == 'A') {
                // this.formData1.flight_arrival_time = this.halftime;
                // this.formData1.flight_arrival_time1 = this.halftime1;
                _this.formData1.AirlineName = _this.form1.get('AirlineName').value;
                _this.formData1.FlightNo = _this.form1.get('FlightNumber').value;
                _this.formData1.start_Terminalno = _this.form1.get('Terminal').value;
                _this.formData1.FlightDepAirport = _this.form1.get('OriginAirport').value;
                _this.formData1.FlightType = _this.form1.get('FlightType').value;
                _this.formData1.FlightScheduleHourMin = _this.halftime;
                _this.formData1.end_Airline = _this.form1.get('AirlineName2').value;
                _this.formData1.end_FlightNo = _this.form1.get('FlightNumber2').value;
                _this.formData1.end_Flight_DepartureTime = _this.form1.get('DepartureTime').value;
                _this.formData1.end_Terminalno = _this.form1.get('Terminal2').value;
                // this.formData1.end_Destination = this.form1.get('DestinationAirport').value;
                if (_this.form1.get('DestinationAirport').value == '') {
                    _this.formData1.end_Destination = _this.form1.get('OriginAirport').value;
                }
                else {
                    _this.formData1.end_Destination = _this.form1.get('DestinationAirport').value;
                }
                _this.formData1.NoPassenger = _this.form1.get('Passengers').value;
                _this.formData1.NoSuitcase = _this.form1.get('Suitcases').value;
                _this.formData1.specialIns = _this.form1.get('SpecialInstruction').value;
                _this.formData1.BEmail = _this.form1.get('Email').value;
                _this.formData1.BFirstName = _this.form1.get('FirstName').value;
                _this.formData1.BLastName = _this.form1.get('LastName').value;
                _this.formData1.BMobileNo = _this.form1.get('PhoneNumber').value;
                _this.formData1.BTelePhoneNo = _this.form1.get('TelephoneNumber').value;
                _this.formData1.IsPassenger = _this.form1.get('BookingFor').value;
                _this.formData1.CreditCardType = _this.form1.get('CardType').value;
                _this.formData1.CreditCardNo = _this.form1.get('CardNumber').value;
                _this.formData1.CreditCardExpMonth = _this.form1.get('ExpMonth').value;
                _this.formData1.CreditCardExpYear = _this.form1.get('ExpYear').value;
                _this.formData1.CreditCardCVV = _this.form1.get('CVV').value;
                _this.formData1.CreditCardFirstLastName = _this.form1.get('CardHolder').value;
                _this.formData1.Address1 = _this.form1.get('Address1').value;
                _this.formData1.Address2 = _this.form1.get('Address2').value;
                _this.formData1.City = _this.form1.get('City').value;
                _this.formData1.State = _this.form1.get('State').value;
                _this.formData1.ZipCode = _this.form1.get('ZipCode').value;
                _this.formData1.Country = _this.form1.get('Country').value;
                if (_this.formData1.IsPassenger = 'NO') {
                    _this.formData1.pFirstName = _this.form1.get('FirstName').value;
                    _this.formData1.pLastName = _this.form1.get('LastName').value;
                    _this.formData1.pMobileNo = _this.form1.get('PhoneNumber').value;
                    _this.formData1.pTelePhoneNo = _this.form1.get('TelephoneNumber').value;
                    _this.formData1.pEmail = _this.form1.get('Email').value;
                }
                else {
                    _this.formData1.pFirstName = _this.form1.get('Passengerfirstname').value;
                    _this.formData1.pLastName = _this.form1.get('Passengerlastname').value;
                    _this.formData1.pMobileNo = _this.form1.get('Passengercellphone').value;
                    _this.formData1.pTelePhoneNo = _this.form1.get('Passengertelephone').value;
                    _this.formData1.pEmail = _this.form1.get('Passengeremail').value;
                }
                _this.formData1.FlightMeetingPoint = _this.form1.get('MeetingPoint').value;
                _this.formData1.FlightDelaypickup = _this.form1.get('DelayedPickup').value;
                _this.formData1.PaymentType = _this.paymentType;
                if (_this.serviceName == "Round Trip") {
                    _this.formData2.AirlineNameReturn = _this.form1.get('AirlineNameR').value;
                    _this.formData2.FlightNoReturn = _this.form1.get('FlightNumberR').value;
                    _this.formData2.FlightDepAirportReturn = _this.form1.get('OriginAirportR').value;
                    _this.formData2.FlightTypeReturn = _this.form1.get('FlightTypeR').value;
                    _this.formData2.FlightScheduleHourMinReturn = _this.halftime2;
                    _this.formData2.FlightDelaypickupReturn = _this.form1.get('DelayedPickupR').value;
                    _this.formData2.FlightMeetingPointReturn = _this.form1.get('MeetingPointR').value;
                    _this.formData2.start_TerminalnoReturn = _this.form1.get('TerminalR').value;
                    _this.formData2.end_TerminalnoReturn = _this.form1.get('Terminal2R').value;
                    _this.formData2.end_AirlineReturn = _this.form1.get('AirlineName2R').value;
                    _this.formData2.end_FlightNoReturn = _this.form1.get('FlightNumberR').value;
                    _this.formData2.end_Flight_DepartureTimeReturn = _this.form1.get('DepartureTimeR').value;
                    _this.formData2.end_DestinationReturn = _this.form1.get('DestinationAirportR').value;
                    // this.formData2.EndFlightScheduleHourMinReturn
                    // this.formData2.IsAirlineFreeTextReturn
                    _this.formData2.NoPassengerReturn = _this.form1.get('Passengers2').value;
                    _this.formData2.NoSuitcaseReturn = _this.form1.get('Suitcases2').value;
                    _this.formData2.specialInsReturn = _this.form1.get('SpecialInstruction2').value;
                    _this.formData2.end_placeNameReturn = _this.locationstart;
                    _this.formData2.start_placeNameReturn = _this.locationend;
                }
            }
            else if (_this.tolocationType == 'A' && _this.serviceName == "Round Trip") {
                _this.formData1.AirlineName = _this.form1.get('AirlineName').value;
                _this.formData1.FlightNo = _this.form1.get('FlightNumber').value;
                _this.formData1.start_Terminalno = _this.form1.get('Terminal').value;
                _this.formData1.FlightDepAirport = _this.form1.get('OriginAirport').value;
                _this.formData1.FlightType = _this.form1.get('FlightType').value;
                _this.formData1.FlightScheduleHourMin = _this.halftime;
                _this.formData1.end_Airline = _this.form1.get('AirlineName2').value;
                _this.formData1.end_FlightNo = _this.form1.get('FlightNumber2').value;
                _this.formData1.end_Flight_DepartureTime = _this.form1.get('DepartureTime').value;
                _this.formData1.end_Terminalno = _this.form1.get('Terminal2').value;
                // this.formData1.end_Destination = this.form1.get('DestinationAirport').value;
                if (_this.form1.get('DestinationAirport').value == '') {
                    _this.formData1.end_Destination = _this.form1.get('OriginAirport').value;
                }
                else {
                    _this.formData1.end_Destination = _this.form1.get('DestinationAirport').value;
                }
                _this.formData1.NoPassenger = _this.form1.get('Passengers').value;
                _this.formData1.NoSuitcase = _this.form1.get('Suitcases').value;
                _this.formData1.specialIns = _this.form1.get('SpecialInstruction').value;
                _this.formData1.BEmail = _this.form1.get('Email').value;
                _this.formData1.BFirstName = _this.form1.get('FirstName').value;
                _this.formData1.BLastName = _this.form1.get('LastName').value;
                _this.formData1.BMobileNo = _this.form1.get('PhoneNumber').value;
                _this.formData1.BTelePhoneNo = _this.form1.get('TelephoneNumber').value;
                _this.formData1.IsPassenger = _this.form1.get('BookingFor').value;
                _this.formData1.CreditCardType = _this.form1.get('CardType').value;
                _this.formData1.CreditCardNo = _this.form1.get('CardNumber').value;
                _this.formData1.CreditCardExpMonth = _this.form1.get('ExpMonth').value;
                _this.formData1.CreditCardExpYear = _this.form1.get('ExpYear').value;
                _this.formData1.CreditCardCVV = _this.form1.get('CVV').value;
                _this.formData1.CreditCardFirstLastName = _this.form1.get('CardHolder').value;
                _this.formData1.Address1 = _this.form1.get('Address1').value;
                _this.formData1.Address2 = _this.form1.get('Address2').value;
                _this.formData1.City = _this.form1.get('City').value;
                _this.formData1.State = _this.form1.get('State').value;
                _this.formData1.ZipCode = _this.form1.get('ZipCode').value;
                _this.formData1.Country = _this.form1.get('Country').value;
                if (_this.formData1.IsPassenger = 'NO') {
                    _this.formData1.pFirstName = _this.form1.get('FirstName').value;
                    _this.formData1.pLastName = _this.form1.get('LastName').value;
                    _this.formData1.pMobileNo = _this.form1.get('PhoneNumber').value;
                    _this.formData1.pTelePhoneNo = _this.form1.get('TelephoneNumber').value;
                    _this.formData1.pEmail = _this.form1.get('Email').value;
                }
                else {
                    _this.formData1.pFirstName = _this.form1.get('Passengerfirstname').value;
                    _this.formData1.pLastName = _this.form1.get('Passengerlastname').value;
                    _this.formData1.pMobileNo = _this.form1.get('Passengercellphone').value;
                    _this.formData1.pTelePhoneNo = _this.form1.get('Passengertelephone').value;
                    _this.formData1.pEmail = _this.form1.get('Passengeremail').value;
                }
                _this.formData1.FlightMeetingPoint = _this.form1.get('MeetingPoint').value;
                _this.formData1.FlightDelaypickup = _this.form1.get('DelayedPickup').value;
                _this.formData1.PaymentType = _this.paymentType;
                if (_this.serviceName == "Round Trip") {
                    _this.formData2.AirlineNameReturn = _this.form1.get('AirlineNameR').value;
                    _this.formData2.FlightNoReturn = _this.form1.get('FlightNumberR').value;
                    _this.formData2.FlightDepAirportReturn = _this.form1.get('OriginAirportR').value;
                    _this.formData2.FlightTypeReturn = _this.form1.get('FlightTypeR').value;
                    _this.formData2.FlightScheduleHourMinReturn = _this.halftime2;
                    _this.formData2.FlightDelaypickupReturn = _this.form1.get('DelayedPickupR').value;
                    _this.formData2.FlightMeetingPointReturn = _this.form1.get('MeetingPointR').value;
                    _this.formData2.start_TerminalnoReturn = _this.form1.get('TerminalR').value;
                    _this.formData2.end_TerminalnoReturn = _this.form1.get('Terminal2R').value;
                    _this.formData2.end_AirlineReturn = _this.form1.get('AirlineName2R').value;
                    _this.formData2.end_FlightNoReturn = _this.form1.get('FlightNumberR').value;
                    _this.formData2.end_Flight_DepartureTimeReturn = _this.form1.get('DepartureTimeR').value;
                    _this.formData2.end_DestinationReturn = _this.form1.get('DestinationAirportR').value;
                    // this.formData2.EndFlightScheduleHourMinReturn
                    // this.formData2.IsAirlineFreeTextReturn
                    _this.formData2.NoPassengerReturn = _this.form1.get('Passengers2').value;
                    _this.formData2.NoSuitcaseReturn = _this.form1.get('Suitcases2').value;
                    _this.formData2.specialInsReturn = _this.form1.get('SpecialInstruction2').value;
                    _this.formData2.end_placeNameReturn = _this.locationstart;
                    _this.formData2.start_placeNameReturn = _this.locationend;
                }
            }
            else {
                _this.formData1.NoPassenger = _this.form1.get('Passengers').value;
                _this.formData1.NoSuitcase = _this.form1.get('Suitcases').value;
                _this.formData1.specialIns = _this.form1.get('SpecialInstruction').value;
                _this.formData1.BEmail = _this.form1.get('Email').value;
                _this.formData1.BFirstName = _this.form1.get('FirstName').value;
                _this.formData1.BLastName = _this.form1.get('LastName').value;
                _this.formData1.BMobileNo = _this.form1.get('PhoneNumber').value;
                _this.formData1.BTelePhoneNo = _this.form1.get('TelephoneNumber').value;
                _this.formData1.IsPassenger = _this.form1.get('BookingFor').value;
                _this.formData1.CreditCardType = _this.form1.get('CardType').value;
                _this.formData1.CreditCardNo = _this.form1.get('CardNumber').value;
                _this.formData1.CreditCardExpMonth = _this.form1.get('ExpMonth').value;
                _this.formData1.CreditCardExpYear = _this.form1.get('ExpYear').value;
                _this.formData1.CreditCardCVV = _this.form1.get('CVV').value;
                _this.formData1.CreditCardFirstLastName = _this.form1.get('CardHolder').value;
                _this.formData1.Address1 = _this.form1.get('Address1').value;
                _this.formData1.Address2 = _this.form1.get('Address2').value;
                _this.formData1.City = _this.form1.get('City').value;
                _this.formData1.State = _this.form1.get('State').value;
                _this.formData1.ZipCode = _this.form1.get('ZipCode').value;
                _this.formData1.Country = _this.form1.get('Country').value;
                if (_this.formData1.IsPassenger = 'NO') {
                    _this.formData1.pFirstName = _this.form1.get('FirstName').value;
                    _this.formData1.pLastName = _this.form1.get('LastName').value;
                    _this.formData1.pMobileNo = _this.form1.get('PhoneNumber').value;
                    _this.formData1.pTelePhoneNo = _this.form1.get('TelephoneNumber').value;
                    _this.formData1.pEmail = _this.form1.get('Email').value;
                }
                else {
                    _this.formData1.pFirstName = _this.form1.get('Passengerfirstname').value;
                    _this.formData1.pLastName = _this.form1.get('Passengerlastname').value;
                    _this.formData1.pMobileNo = _this.form1.get('Passengercellphone').value;
                    _this.formData1.pTelePhoneNo = _this.form1.get('Passengertelephone').value;
                    _this.formData1.pEmail = _this.form1.get('Passengeremail').value;
                }
                _this.formData1.PaymentType = _this.paymentType;
                if (_this.serviceName == "Round Trip") {
                    _this.formData2.NoPassengerReturn = _this.form1.get('Passengers2').value;
                    _this.formData2.NoSuitcaseReturn = _this.form1.get('Suitcases2').value;
                    _this.formData2.specialInsReturn = _this.form1.get('SpecialInstruction2').value;
                    _this.formData2.end_placeNameReturn = _this.locationstart;
                    _this.formData2.start_placeNameReturn = _this.locationend;
                }
            }
            if (_this.formData1.NoPassenger == '0' && _this.formData1.NoSuitcase == '0') {
                alert('Enter number of passengers or luggage.');
                _this.loadingController.dismiss().then(function () { return console.log('dismissed'); });
            }
            else if (_this.formData2.NoPassengerReturn == '0' && _this.formData2.NoSuitcaseReturn == '0' && _this.serviceName == "Round Trip") {
                alert('Enter number of passengers or luggage.');
                _this.loadingController.dismiss().then(function () { return console.log('dismissed'); });
            }
            else {
                localStorage.setItem("form_values", JSON.stringify(_this.formData1));
                localStorage.setItem("form_values2", JSON.stringify(_this.formData2));
                _this.router.navigate(['/reviewdetails']);
                _this.loadingController.dismiss().then(function () { return console.log('dismissed'); });
            }
        });
    };
    FilldetailsPage.prototype.presentLoading = function () {
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
    FilldetailsPage.prototype.ScrollToOrigin = function () {
        var O = document.getElementById('origintrip').offsetTop;
        this.content.scrollToPoint(0, O, 1500);
    };
    FilldetailsPage.prototype.ScrollToReturn = function () {
        var R = document.getElementById('returntrip').offsetTop;
        this.content.scrollToPoint(0, R, 1500);
    };
    FilldetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
    ], FilldetailsPage.prototype, "content", void 0);
    FilldetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-filldetails',
            template: __webpack_require__(/*! raw-loader!./filldetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/filldetails/filldetails.page.html"),
            styles: [__webpack_require__(/*! ./filldetails.page.scss */ "./src/app/filldetails/filldetails.page.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
    ], FilldetailsPage);
    return FilldetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=filldetails-filldetails-module-es5.js.map