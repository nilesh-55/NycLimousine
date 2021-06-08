import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { EnvService } from '../services/env.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ModalController, LoadingController, IonContent  } from '@ionic/angular';
import { FarecalculationsPage } from '../farecalculations/farecalculations.page';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-filldetails',
  templateUrl: './filldetails.page.html',
  styleUrls: ['./filldetails.page.scss'],
})



export class FilldetailsPage implements OnInit { 
  @ViewChild(IonContent, {static: false}) content: IonContent;
  details: string;
  data: any;
  locationstart: any;
  locationend: any;
  selectDate: any;
  selectMonthYear: any;
  selectDay: any;
  fulltime: any;
  halftime: any;
  carData: any;
  final_Price: string;
  carName: any;
  carInside: any;
  isItemAvailable = false;
  isItemAvailable2 = false;
  showLoaderImg = false;
  PassangerListCount = [];

  changeDate: string;
  CurrentTime: string;
  CurrentTime1: string;
  changeDate1: string;


  TimeChange = 0;
  TimeChange1 = 0;

  response: any;
  items: any;
  list: any;
  form1: FormGroup;
  locationType: any;
  buttonClickedFirst: boolean = false;
  buttonClickedSecond: boolean = false;
  buttonClickedYes: boolean = false;
  buttonClickedNo: boolean = false
  hide: boolean = false;
  hide1: boolean = false;
  formData1 = {
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
  formData2 = {
    "specialInsReturn": "", "AirlineNameReturn": "", "FlightNoReturn": "", "FlightDepAirportReturn": "", "FlightTypeReturn": "", "FlightScheduleHourMinReturn": "",
    "FlightDelaypickupReturn": "", "FlightMeetingPointReturn": "", "start_TerminalnoReturn": "", "end_TerminalnoReturn": "", "end_placeNameReturn": "", "start_placeNameReturn": "",
    "end_AirlineReturn": "", "end_FlightNoReturn": "", "end_Flight_DepartureTimeReturn": "", "end_DestinationReturn": "", "EndFlightScheduleHourMinReturn": "", "IsAirlineFreeTextReturn": "",
    "NoPassengerReturn": "", "NoSuitcaseReturn": ""
  };

  DriverLocation: any;
  DriverLocation1: string;
  allLists: any;
  ListofDetails: string;
  passengerLists: any;
  listofSuitcases = [];
  cardYear: any;
  myUpdateTime: any;
  addminute: string;
  addminutee: string;
  AddMinute: any;
  buttonClickedThird: boolean;
  buttonClickedFourth: boolean;
  NewDate: string;
  addminute1: string;
  terminalLists: any;
  locationAddress: any;
  tolocationAddress: any;
  tolocationType: any;
  totalPrice: any;
  halftime1: string;
  paymentDetails: any;
  terminalNumber: any;
  fixValue: "45";
  sum: any;
  pLists: any;
  suitcaseLists: any;
  paymentType: string;
  serviceName: any;
  final_Price2: any;
  total: any;
  selectDate2: string;
  selectMonthYear2: string;
  selectDay2: string;
  fulltime2: string;
  halftime2: string;
  carData2: any;
  carName2: any;
  carInside2: any;
  pLists2: any;
  PassangerListCount2= [];
  listofSuitcases2= [];
  terminalNumber2: any;
  locationTypeR: any;
  tolocationTypeR: any;
  suitcaseLists2: any;

  
  constructor(private router: Router, private envservice: EnvService, private _FB: FormBuilder,
    public modalController: ModalController, private loadingController: LoadingController) {

    this.details = localStorage.getItem('all_detail');
    this.data = JSON.parse(this.details);
    console.log(this.data)
    var allData = this.data.FromLocationDetail;
   this.locationType = allData.Location_Type;
    this.tolocationType = this.data.ToLocationDetail.Location_Type;
    this.locationAddress = this.data.FromLocationDetail.Location_Address
    this.tolocationAddress = this.data.ToLocationDetail.Location_Address
   // this.locationType = this.data.FromLocationDetail.Location_Type;
    const value1 = localStorage.getItem('fromLocation');
    this.locationstart = value1;
    const value2 = localStorage.getItem('toLocation');
    this.locationend = value2;
    this.selectDate = moment(this.data.PickUpDateDisp).format('DD');
    this.selectMonthYear = moment(this.data.PickUpDateDisp).format('MMM YYYY');
    this.selectDay = moment(this.data.PickUpDateDisp).format('dddd');
    this.fulltime = moment(this.data.PickupDateTime).format('H:mm');
    this.halftime = moment(this.data.PickupDateTime).format('h:mm A');
    //-------------------for roundtrip--------------------//
    this.selectDate2 = moment(this.data.ReturnDateDisp).format('DD');
    this.selectMonthYear2 = moment(this.data.ReturnDateDisp).format('MMM YYYY');
    this.selectDay2 = moment(this.data.ReturnDateDisp).format('dddd');
    this.fulltime2 = moment(this.data.ReturnDateTime).format('H:mm');
    this.halftime2 = moment(this.data.ReturnDateTime).format('h:mm A');
    //-------------------for roundtrip--------------------//

    this.envservice.getTerminal(this.locationstart)
      .subscribe((data: any) => {
        this.terminalNumber = data.Data
        console.log(data.Data)
      });

      //-------------------for roundtrip--------------------//
      this.envservice.getTerminal(this.locationend)
      .subscribe((data: any) => {
        this.terminalNumber2 = data.Data
        console.log(data.Data)
      });
      //-------------------for roundtrip--------------------//

    const data = localStorage.getItem('car_detail');
    this.carData = JSON.parse(data);

    this.carName = this.carData.Vehicle_Name;
    this.carInside = this.carData.Luggage_Image;
    this.totalPrice = this.carData.clsVehicleFinalRates.Inclusive_all_tax;

    //-----------------for roundtrip---------------------//
    if (localStorage.getItem('car_detail2')) {
      const data2 = localStorage.getItem('car_detail2');
      this.carData2 = JSON.parse(data2);
      console.log(this.carData2)
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
    if(this.serviceName == "Round Trip"){
      this.locationTypeR = this.tolocationType;
      this.tolocationTypeR = this.locationType;
    }

    this.halftime = moment(this.data.PickupDateTime).format('h:mm A');
    this.halftime1 = moment(this.data.PickupDateTime).format('h:mm A');




    this.myUpdateTime = this.dateModify(this.data.PickupDateTime, 45);

    this.addminute = (this.fulltime, this.addMinutes(this.fulltime, '45'));
    this.addminute1 = (this.fulltime, this.addMinutes1(this.fulltime, '30'));

    this.DriverLocation = moment(this.data.PickupDateTime).format('h:mm A');
    this.DriverLocation1 = moment(this.data.PickupDateTime).format('h:mm A');


    this.pLists = this.carData.Passenger_capacity
    for (let i = 0; i <= this.pLists; i++) {
      this.PassangerListCount.push(i);
    }

    this.suitcaseLists = this.carData.Luggage_capacity
    for (let i = 0; i <= this.suitcaseLists; i++) {
      this.listofSuitcases.push(i);
    }
// -----------------------------------------RoundTrip-------------------------------------
this.serviceName = this.data.TypeOfServiceName;
    if(this.serviceName == "Round Trip"){
      this.pLists2 = this.carData2.Passenger_capacity
    for (let i = 0; i <= this.pLists2; i++) {
      this.PassangerListCount2.push(i);
    }

    this.suitcaseLists2 = this.carData2.Luggage_capacity
    for (let i = 0; i <= this.suitcaseLists2; i++) {
      this.listofSuitcases2.push(i);
    }
  }
// -----------------------------------------RoundTrip-------------------------------------
    if (this.locationType == 'A' && this.serviceName != "Round Trip") {
      this.form1 = this._FB.group({
        AirlineName: ['', Validators.required],
        FlightNumber: ['', Validators.required],
        Terminal: [''],
        OriginAirport: ['', Validators.required],
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

        Passengers: ['', Validators.required],
        Suitcases: ['', Validators.required],
        SpecialInstruction: [''],
        Email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        PhoneNumber: ['', Validators.required],
        TelephoneNumber: [''],
        BookingFor: [''],
        CardType: ['', Validators.required],
        CardNumber: ['', Validators.required],
        ExpMonth: ['', Validators.required],
        ExpYear: ['', Validators.required],
        CVV: ['', Validators.required],
        CardHolder: ['', Validators.required],
        flight_arrival_time1: [''],
        Address1: ['', Validators.required],
        Address2: [''],
        City: ['', Validators.required],
        State: ['', Validators.required],
        ZipCode: ['', Validators.required],
        Country: ['', Validators.required],
        Passengerfirstname: [''],
        Passengerlastname: [''],
        Passengercellphone: [''],
        Passengertelephone: [''],
        Passengeremail: [''],
        MeetingPoint: ['']
      })
    } else if (this.tolocationType == 'A' && this.serviceName != "Round Trip") {
      this.form1 = this._FB.group({
        AirlineName2: [''],
        FlightNumber2: [''],
        DepartureTime: [''],
        Terminal2: [''],
        DestinationAirport: [''],
        Passengers: ['', Validators.required],
        Suitcases: ['', Validators.required],
        SpecialInstruction: [''],
        Email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        PhoneNumber: ['', Validators.required],
        TelephoneNumber: [''],
        BookingFor: [''],
        CardType: ['', Validators.required],
        CardNumber: ['', Validators.required],
        ExpMonth: ['', Validators.required],
        ExpYear: ['', Validators.required],
        CVV: ['', Validators.required],
        CardHolder: ['', Validators.required],
        flight_arrival_time1: [''],
        Address1: ['', Validators.required],
        Address2: [''],
        City: ['', Validators.required],
        State: ['', Validators.required],
        ZipCode: ['', Validators.required],
        Country: ['', Validators.required],
        Passengerfirstname: [''],
        Passengerlastname: [''],
        Passengercellphone: [''],
        Passengertelephone: [''],
        Passengeremail: [''],
        MeetingPoint: ['']
      })
    } else if(this.serviceName == "Round Trip" && this.locationType == 'A' && this.locationTypeR == 'A'){
      this.form1 = this._FB.group({
        AirlineName: ['', Validators.required],
        FlightNumber: ['', Validators.required],
        Terminal: [''],
        OriginAirport: ['', Validators.required],
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
        FlightNumberR:[''],
        OriginAirportR:[''],
        FlightTypeR:[''],
        TerminalR:[''],
        MeetingPoint: [''],
        flight_arrival_timeR: [''],
        DelayedPickupR: [''],
        AirlineName2R: [''],
        FlightNumber2R: [''],
        DepartureTimeR: [''],
        Terminal2R: [''],
        DestinationAirportR: [''],
        flight_arrival_time1R:[''],
        Passengers: ['', Validators.required],
        Suitcases: ['', Validators.required],
        SpecialInstruction: [''],
        Passengers2: [''],
        Suitcases2: [''],
        SpecialInstruction2: [''],
        Email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        PhoneNumber: ['', Validators.required],
        TelephoneNumber: [''],
        BookingFor: [''],
        CardType: ['', Validators.required],
        CardNumber: ['', Validators.required],
        ExpMonth: ['', Validators.required],
        ExpYear: ['', Validators.required],
        CVV: ['', Validators.required],
        CardHolder: ['', Validators.required],
        flight_arrival_time1: [''],
        Address1: ['', Validators.required],
        Address2: [''],
        City: ['', Validators.required],
        State: ['', Validators.required],
        ZipCode: ['', Validators.required],
        Country: ['', Validators.required],
        Passengerfirstname: [''],
        Passengerlastname: [''],
        Passengercellphone: [''],
        Passengertelephone: [''],
        Passengeremail: [''],
        MeetingPointR: ['']
      })
    }
    else if(this.serviceName == "Round Trip" && this.locationType == 'B' && this.locationTypeR == 'B') {
      this.form1 = this._FB.group({
        Passengers: ['', Validators.required],
        Suitcases: ['', Validators.required],
        SpecialInstruction: [''],
        Passengers2: [''],
        Suitcases2: [''],
        SpecialInstruction2: [''],
        Email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        PhoneNumber: ['', Validators.required],
        TelephoneNumber: [''],
        BookingFor: [''],
        CardType: ['', Validators.required],
        CardNumber: ['', Validators.required],
        ExpMonth: ['', Validators.required],
        ExpYear: ['', Validators.required],
        CVV: ['', Validators.required],
        CardHolder: ['', Validators.required],
        Address1: ['', Validators.required],
        Address2: [''],
        City: ['', Validators.required],
        State: ['', Validators.required],
        ZipCode: ['', Validators.required],
        Country: ['', Validators.required],
        Passengerfirstname: [''],
        Passengerlastname: [''],
        Passengercellphone: [''],
        Passengertelephone: [''],
        Passengeremail: ['']
      })
    }
    else if(this.serviceName == "Round Trip" && this.locationType == 'A' && this.locationTypeR == 'B' &&
    this.tolocationType == 'B' && this.tolocationTypeR == 'A') {
      this.form1 = this._FB.group({
        AirlineName: ['', Validators.required],
        FlightNumber: ['', Validators.required],
        Terminal: [''],
        OriginAirport: ['', Validators.required],
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
        FlightNumberR:[''],
        OriginAirportR:[''],
        FlightTypeR:[''],
        TerminalR:[''],
        MeetingPoint: [''],
        flight_arrival_timeR: [''],
        DelayedPickupR: [''],
        AirlineName2R: [''],
        FlightNumber2R: [''],
        DepartureTimeR: [''],
        Terminal2R: [''],
        DestinationAirportR: [''],

        Passengers: ['', Validators.required],
        Suitcases: ['', Validators.required],
        SpecialInstruction: [''],
        Passengers2: [''],
        Suitcases2: [''],
        SpecialInstruction2: [''],
        Email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        PhoneNumber: ['', Validators.required],
        TelephoneNumber: [''],
        BookingFor: [''],
        CardType: ['', Validators.required],
        CardNumber: ['', Validators.required],
        ExpMonth: ['', Validators.required],
        ExpYear: ['', Validators.required],
        CVV: ['', Validators.required],
        CardHolder: ['', Validators.required],
        flight_arrival_time1: [''],
        Address1: ['', Validators.required],
        Address2: [''],
        City: ['', Validators.required],
        State: ['', Validators.required],
        ZipCode: ['', Validators.required],
        Country: ['', Validators.required],
        Passengerfirstname: [''],
        Passengerlastname: [''],
        Passengercellphone: [''],
        Passengertelephone: [''],
        Passengeremail: [''],
        MeetingPointR: ['']
      })
    }
    else if (this.serviceName == "Round Trip" && this.tolocationType == 'A' && this.locationType == 'B' &&
    this.tolocationTypeR == 'B' && this.locationTypeR == 'A') {
      this.form1 = this._FB.group({
        AirlineName2: [''],
        FlightNumber2: [''],
        DepartureTime: [''],
        Terminal2: [''],
        DestinationAirport: [''],
        FlightNumberR:[''],
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
        OriginAirportR:[''],
        FlightTypeR:[''],
        TerminalR:[''],
        MeetingPointR : [''],
        flight_arrival_timeR: [''],
        DelayedPickupR: [''],
        AirlineName2R: [''],
        Passengers: ['', Validators.required],
        Suitcases: ['', Validators.required],
        SpecialInstruction: [''],
        Passengers2: [''],
        Suitcases2: [''],
        SpecialInstruction2: [''],
        Email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        PhoneNumber: ['', Validators.required],
        TelephoneNumber: [''],
        BookingFor: [''],
        CardType: ['', Validators.required],
        CardNumber: ['', Validators.required],
        ExpMonth: ['', Validators.required],
        ExpYear: ['', Validators.required],
        CVV: ['', Validators.required],
        CardHolder: ['', Validators.required],
        flight_arrival_time1: [''],
        Address1: ['', Validators.required],
        Address2: [''],
        City: ['', Validators.required],
        State: ['', Validators.required],
        ZipCode: ['', Validators.required],
        Country: ['', Validators.required],
        Passengerfirstname: [''],
        Passengerlastname: [''],
        Passengercellphone: [''],
        Passengertelephone: [''],
        Passengeremail: [''],
        MeetingPoint: ['']
      })
    }else {
      this.form1 = this._FB.group({
        Passengers: ['', Validators.required],
        Suitcases: ['', Validators.required],
        SpecialInstruction: [''],
        Email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        PhoneNumber: ['', Validators.required],
        TelephoneNumber: [''],
        BookingFor: [''],
        CardType: ['', Validators.required],
        CardNumber: ['', Validators.required],
        ExpMonth: ['', Validators.required],
        ExpYear: ['', Validators.required],
        CVV: ['', Validators.required],
        CardHolder: ['', Validators.required],
        Address1: ['', Validators.required],
        Address2: [''],
        City: ['', Validators.required],
        State: ['', Validators.required],
        ZipCode: ['', Validators.required],
        Country: ['', Validators.required],
        Passengerfirstname: [''],
        Passengerlastname: [''],
        Passengercellphone: [''],
        Passengertelephone: [''],
        Passengeremail: ['']
      })
    }


    this.paymentType = 'Pre-arranged payment';
  }

  ngOnInit() {
    this.form1.controls['BookingFor'].setValue('NO');
    this.form1.controls['Country'].setValue('US');
    this.form1.controls['Passengers'].setValue("0");
    this.form1.controls['Suitcases'].setValue("0");
    if (this.serviceName == "Round Trip") {
      this.form1.controls['Passengers2'].setValue("0");
      this.form1.controls['Suitcases2'].setValue("0");
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FarecalculationsPage
    });
    return await modal.present();
  }

  getItems(ev: any) {
    const val = ev.target.value;
    if (val.length > 0) {
      if (val && val.trim() != '') {
        this.envservice.airlineNames(val)
          .subscribe((user) => {
            this.isItemAvailable = true;
            this.response = user;
            this.items = this.response.Data.Data.list;
            console.log(this.items)
            error => {
              console.log(error)
            }
          });
      }
    } else {
      this.items = [];
    }
  }

  public onButtonClick() {
    this.hide = true;
    this.hide1 = true;
    this.buttonClickedThird = true;
    this.buttonClickedFirst = true;
    this.buttonClickedSecond = false;
    this.form1.controls['flight_arrival_time'].setValue(this.data.PickupDateTime);
    this.form1.controls['MeetingPoint'].setValue("Inside the terminal at baggage claim area");
  }

  public onButtonClick1() {
    this.hide = false;
    this.hide1 = false;
    this.buttonClickedThird = true;
    this.buttonClickedFirst = false;
    this.buttonClickedSecond = true;
    this.form1.controls['flight_arrival_time1'].setValue(this.data.PickupDateTime);
   this.form1.controls['MeetingPoint'].setValue("Inside the terminal at baggage claim area");
  }

  // -----------------------------------------Roundtrip-------------------------------------------
  public onButtonClickR() {
    this.hide = true;
    this.hide1 = true;
    this.buttonClickedThird = true;
    this.buttonClickedFirst = true;
    this.buttonClickedSecond = false;
    this.form1.controls['flight_arrival_timeR'].setValue(this.data.ReturnDateTime);
    this.form1.controls['MeetingPointR'].setValue("Inside the terminal at baggage claim area");
  }

  public onButtonClick1R() {
    this.hide = false;
    this.hide1 = false;
    this.buttonClickedThird = true;
    this.buttonClickedFirst = false;
    this.buttonClickedSecond = true;
    this.form1.controls['flight_arrival_time1R'].setValue(this.data.ReturnDateTime);
    this.form1.controls['MeetingPointR'].setValue("Inside the terminal at baggage claim area");
  }
 // -----------------------------------------Roundtrip-------------------------------------------

  public onButtonClick2() {
    this.buttonClickedThird = true;
    this.buttonClickedFourth = false;
  }

  public onButtonClick3() {
    this.buttonClickedThird = false;
    this.buttonClickedFourth = true;
  }


  onButtonClickYes() {
    this.buttonClickedYes = true;
    this.buttonClickedNo = false;
  }

  onButtonClickNo() {
    console.log(this.formData1);
    this.buttonClickedYes = false;
    this.buttonClickedNo = true;
    // this.formData1.Passengerfirstname = '';
  }


  addMinutes1(times, minsToAdd1) {
    console.log(times);
    function D(J) { return (J < 10 ? '0' : '') + J; };
    var piece = times.split(':');
    var mins = piece[0] * 60 + +piece[1] + +minsToAdd1;
    return D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
  }

  optionsFn(value) {
    console.log(value)
    this.TimeChange = value;
    console.log(this.TimeChange);
    console.log(this.halftime);
    let cData = this.dateModify(this.halftime, 45);
    this.addminute = this.dateModify(cData, value);
    this.DriverLocation = this.dateModify(this.halftime, this.TimeChange);
  }

  onChangeTime(value, minsToAdd = '45') {
    this.CurrentTime = moment(value).format('h:mm A');
    this.halftime = this.CurrentTime;
    console.log(value);
    console.log(this.TimeChange);
    this.changeDate = this.dateModify(moment(value).format('h:mm A'), minsToAdd)
    function D(J) { return (J < 10 ? '0' : '') + J; };
    var piece = this.changeDate.split(':');
    var mins = parseInt(piece[0]) * 60 + +parseInt(piece[1]) + +this.TimeChange;
    var modify = D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
    this.DriverLocation = this.dateModify(this.CurrentTime, this.TimeChange);
    this.addminute = modify;
  }

  formatAMPM(times, minsToAdd) {
    console.log(times);
    function D(J) { return (J < 10 ? '0' : '') + J; };
    var piece = times.split(':');
    var mins = piece[0] * 60 + +piece[1] + +minsToAdd;
    let hrs: any = D(mins % (24 * 60) / 60 | 0);
    var ampm = hrs >= 12 ? 'pm' : 'am';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    return hrs + ':' + D(mins % 60) + ' ' + ampm;

  }

  onChangeTime1(value, minsToAdd = '30') {
    this.CurrentTime1 = moment(value).format('h:mm A');
    this.halftime1 = this.CurrentTime1;
    console.log(value);
    console.log(this.TimeChange1);
    this.changeDate1 = this.dateModify1(moment(value).format('h:mm A'), minsToAdd)
    function D(J) { return (J < 10 ? '0' : '') + J; };
    var piece = this.changeDate1.split(':');
    var mins = parseInt(piece[0]) * 60 + +parseInt(piece[1]) + +this.TimeChange1;
    var modify1 = D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
    this.DriverLocation1 = this.dateModify1(this.CurrentTime1, this.TimeChange1);
    this.addminute1 = modify1;
  }

  optionsFn1(value1) {
    console.log(value1)
    this.TimeChange1 = value1;
    console.log(this.TimeChange1);
    console.log(this.halftime1);
    let cData1 = this.dateModify1(this.halftime1, 30);
    this.addminute1 = this.dateModify(cData1, value1);
    this.DriverLocation1 = this.dateModify1(this.halftime1, this.TimeChange1);
  }

  dateModify(value, minsToAdd) {
    console.log(value, minsToAdd)
    function D(J) { return (J < 10 ? '0' : '') + J; };
    var piece = value.split(':');
    var mins = parseInt(piece[0]) * 60 + +parseInt(piece[1]) + +minsToAdd;
    var modify = D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
    return modify;
  }

  dateModify1(value1, minsToAdd1) {
    function D(J) { return (J < 10 ? '0' : '') + J; };
    var piece = value1.split(':');
    var mins = parseInt(piece[0]) * 60 + +parseInt(piece[1]) + +minsToAdd1;
    var modify1 = D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
    return modify1;
  }


  addMinutes(times, minsToAdd) {
    console.log(times);
    function D(J) { return (J < 10 ? '0' : '') + J; };
    var piece = times.split(':');
    var mins = piece[0] * 60 + +piece[1] + +minsToAdd;

    return D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
  }

  getorigin(ev: any) {
    const val = ev.target.value;
    if (val.length > 0) {
      if (val && val.trim() != '') {
        this.envservice.internationalAirport(val)
          .subscribe((user) => {
            this.isItemAvailable2 = true;
            this.response = user;
            this.list = this.response.Data.Data.list1;
            console.log(this.list);
            error => {
              console.log(error);
            }
          });
      }
    } else {
      this.list = [];
    }
  }

  getCardYear(event, value) {
    this.envservice.getCardyear(this.form1.get('ExpMonth').value)
      .subscribe((data: any) => {
        console.log(data)
        this.cardYear = data.Data;
      })
  }

  putvalue(row) {
    console.log(row);
    const val = row.AirCode;
    this.form1.controls['AirlineName'].setValue(val);
    this.isItemAvailable = false;
  }

  // -----------------------------------------Roundtrip---------------------------------------------
  putAirlineRoundtrip(row) {
    console.log(row);
    const val = row.AirCode;
    this.form1.controls['AirlineNameR'].setValue(val);
    this.isItemAvailable = false;
  }
// -----------------------------------------Roundtrip---------------------------------------------

  putvalue2(row) {
    console.log(row)
    const val = row.AirportName;
    this.form1.controls['OriginAirport'].setValue(val);
    this.isItemAvailable2 = false;
    this.formData1.FlightType = this.form1.get('FlightType').value;
    this.formData1.FlightType = row.LocationType == 'I' ? 'INTERNATIONAL FLIGHT' : 'DOMESTIC FLIGHT';
    console.log(this.formData1.FlightType);
    this.form1.controls['FlightType'].setValue(this.formData1.FlightType);
    if (row.LocationType == 'I') {
      this.onButtonClick();
    } else {
      this.onButtonClick1();
    }
  }

  // -----------------------------------------Roundtrip---------------------------------------------
  putOriginAirport(row) {
    console.log(row)
    const val = row.AirportName;
    this.form1.controls['OriginAirportR'].setValue(val);
    this.isItemAvailable2 = false;
    this.formData2.FlightTypeReturn = this.form1.get('FlightTypeR').value;
    this.formData2.FlightTypeReturn = row.LocationType == 'I' ? 'INTERNATIONAL FLIGHT' : 'DOMESTIC FLIGHT';
    console.log(this.formData2.FlightTypeReturn);
    this.form1.controls['FlightTypeR'].setValue(this.formData2.FlightTypeReturn);
    if (row.LocationType == 'I') {
      this.onButtonClickR();
    } else {
      this.onButtonClick1R();
    }
  }

  putAirline2Roundtrip(row) {
    console.log(row)
    const val = row.AirCode;
    this.form1.controls['AirlineName2R'].setValue(val);
    this.isItemAvailable = false;
  }
  // -----------------------------------------Roundtrip---------------------------------------------

  putvalue3(row) {
    console.log(row)
    const val = row.AirCode;
    this.form1.controls['AirlineName2'].setValue(val);
    this.isItemAvailable = false;
  }

  onSubmit(item) {
    this.presentLoading().then(a => {
      if (this.locationType == 'A') {
        // this.formData1.flight_arrival_time = this.halftime;
        // this.formData1.flight_arrival_time1 = this.halftime1;
        this.formData1.AirlineName = this.form1.get('AirlineName').value;
        this.formData1.FlightNo = this.form1.get('FlightNumber').value;
        this.formData1.start_Terminalno = this.form1.get('Terminal').value;
        this.formData1.FlightDepAirport = this.form1.get('OriginAirport').value;
        this.formData1.FlightType = this.form1.get('FlightType').value;
        this.formData1.FlightScheduleHourMin = this.halftime;
        this.formData1.end_Airline = this.form1.get('AirlineName2').value;
        this.formData1.end_FlightNo = this.form1.get('FlightNumber2').value;
        this.formData1.end_Flight_DepartureTime = this.form1.get('DepartureTime').value;
        this.formData1.end_Terminalno = this.form1.get('Terminal2').value;
        // this.formData1.end_Destination = this.form1.get('DestinationAirport').value;
        if (this.form1.get('DestinationAirport').value == '') {
          this.formData1.end_Destination = this.form1.get('OriginAirport').value;
        } else {
          this.formData1.end_Destination = this.form1.get('DestinationAirport').value;
        }
        this.formData1.NoPassenger = this.form1.get('Passengers').value;
        this.formData1.NoSuitcase = this.form1.get('Suitcases').value;
        this.formData1.specialIns = this.form1.get('SpecialInstruction').value;
        this.formData1.BEmail = this.form1.get('Email').value;
        this.formData1.BFirstName = this.form1.get('FirstName').value;
        this.formData1.BLastName = this.form1.get('LastName').value;
        this.formData1.BMobileNo = this.form1.get('PhoneNumber').value;
        this.formData1.BTelePhoneNo = this.form1.get('TelephoneNumber').value;
        this.formData1.IsPassenger = this.form1.get('BookingFor').value;
        this.formData1.CreditCardType = this.form1.get('CardType').value;
        this.formData1.CreditCardNo = this.form1.get('CardNumber').value;
        this.formData1.CreditCardExpMonth = this.form1.get('ExpMonth').value;
        this.formData1.CreditCardExpYear = this.form1.get('ExpYear').value;
        this.formData1.CreditCardCVV = this.form1.get('CVV').value;
        this.formData1.CreditCardFirstLastName = this.form1.get('CardHolder').value;
        this.formData1.Address1 = this.form1.get('Address1').value;
        this.formData1.Address2 = this.form1.get('Address2').value;
        this.formData1.City = this.form1.get('City').value;
        this.formData1.State = this.form1.get('State').value;
        this.formData1.ZipCode = this.form1.get('ZipCode').value;
        this.formData1.Country = this.form1.get('Country').value;
        if (this.formData1.IsPassenger = 'NO') {
          this.formData1.pFirstName = this.form1.get('FirstName').value;
          this.formData1.pLastName = this.form1.get('LastName').value;
          this.formData1.pMobileNo = this.form1.get('PhoneNumber').value;
          this.formData1.pTelePhoneNo = this.form1.get('TelephoneNumber').value;
          this.formData1.pEmail = this.form1.get('Email').value;
        } else {
          this.formData1.pFirstName = this.form1.get('Passengerfirstname').value;
          this.formData1.pLastName = this.form1.get('Passengerlastname').value;
          this.formData1.pMobileNo = this.form1.get('Passengercellphone').value;
          this.formData1.pTelePhoneNo = this.form1.get('Passengertelephone').value;
          this.formData1.pEmail = this.form1.get('Passengeremail').value;
        }
        this.formData1.FlightMeetingPoint = this.form1.get('MeetingPoint').value;
         this.formData1.FlightDelaypickup = this.form1.get('DelayedPickup').value;
        this.formData1.PaymentType = this.paymentType;
        if (this.serviceName == "Round Trip") {
          this.formData2.AirlineNameReturn = this.form1.get('AirlineNameR').value;
           this.formData2.FlightNoReturn = this.form1.get('FlightNumberR').value;
          this.formData2.FlightDepAirportReturn = this.form1.get('OriginAirportR').value;
          this.formData2.FlightTypeReturn = this.form1.get('FlightTypeR').value;
          this.formData2.FlightScheduleHourMinReturn = this.halftime2;
          this.formData2.FlightDelaypickupReturn = this.form1.get('DelayedPickupR').value;
          this.formData2.FlightMeetingPointReturn = this.form1.get('MeetingPointR').value;
          this.formData2.start_TerminalnoReturn = this.form1.get('TerminalR').value;
          this.formData2.end_TerminalnoReturn = this.form1.get('Terminal2R').value;
          this.formData2.end_AirlineReturn = this.form1.get('AirlineName2R').value;
          this.formData2.end_FlightNoReturn = this.form1.get('FlightNumberR').value;
          this.formData2.end_Flight_DepartureTimeReturn = this.form1.get('DepartureTimeR').value;
          this.formData2.end_DestinationReturn = this.form1.get('DestinationAirportR').value;
          // this.formData2.EndFlightScheduleHourMinReturn
          // this.formData2.IsAirlineFreeTextReturn
          this.formData2.NoPassengerReturn = this.form1.get('Passengers2').value;
          this.formData2.NoSuitcaseReturn = this.form1.get('Suitcases2').value;
          this.formData2.specialInsReturn = this.form1.get('SpecialInstruction2').value;
          this.formData2.end_placeNameReturn = this.locationstart;
          this.formData2.start_placeNameReturn = this.locationend;
        }
      } else if(this.tolocationType == 'A' && this.serviceName == "Round Trip"){
        this.formData1.AirlineName = this.form1.get('AirlineName').value;
        this.formData1.FlightNo = this.form1.get('FlightNumber').value;
        this.formData1.start_Terminalno = this.form1.get('Terminal').value;
        this.formData1.FlightDepAirport = this.form1.get('OriginAirport').value;
        this.formData1.FlightType = this.form1.get('FlightType').value;
        this.formData1.FlightScheduleHourMin = this.halftime;
        this.formData1.end_Airline = this.form1.get('AirlineName2').value;
        this.formData1.end_FlightNo = this.form1.get('FlightNumber2').value;
        this.formData1.end_Flight_DepartureTime = this.form1.get('DepartureTime').value;
        this.formData1.end_Terminalno = this.form1.get('Terminal2').value;
        // this.formData1.end_Destination = this.form1.get('DestinationAirport').value;
        if (this.form1.get('DestinationAirport').value == '') {
          this.formData1.end_Destination = this.form1.get('OriginAirport').value;
        } else {
          this.formData1.end_Destination = this.form1.get('DestinationAirport').value;
        }
        this.formData1.NoPassenger = this.form1.get('Passengers').value;
        this.formData1.NoSuitcase = this.form1.get('Suitcases').value;
        this.formData1.specialIns = this.form1.get('SpecialInstruction').value;
        this.formData1.BEmail = this.form1.get('Email').value;
        this.formData1.BFirstName = this.form1.get('FirstName').value;
        this.formData1.BLastName = this.form1.get('LastName').value;
        this.formData1.BMobileNo = this.form1.get('PhoneNumber').value;
        this.formData1.BTelePhoneNo = this.form1.get('TelephoneNumber').value;
        this.formData1.IsPassenger = this.form1.get('BookingFor').value;
        this.formData1.CreditCardType = this.form1.get('CardType').value;
        this.formData1.CreditCardNo = this.form1.get('CardNumber').value;
        this.formData1.CreditCardExpMonth = this.form1.get('ExpMonth').value;
        this.formData1.CreditCardExpYear = this.form1.get('ExpYear').value;
        this.formData1.CreditCardCVV = this.form1.get('CVV').value;
        this.formData1.CreditCardFirstLastName = this.form1.get('CardHolder').value;
        this.formData1.Address1 = this.form1.get('Address1').value;
        this.formData1.Address2 = this.form1.get('Address2').value;
        this.formData1.City = this.form1.get('City').value;
        this.formData1.State = this.form1.get('State').value;
        this.formData1.ZipCode = this.form1.get('ZipCode').value;
        this.formData1.Country = this.form1.get('Country').value;
        if (this.formData1.IsPassenger = 'NO') {
          this.formData1.pFirstName = this.form1.get('FirstName').value;
          this.formData1.pLastName = this.form1.get('LastName').value;
          this.formData1.pMobileNo = this.form1.get('PhoneNumber').value;
          this.formData1.pTelePhoneNo = this.form1.get('TelephoneNumber').value;
          this.formData1.pEmail = this.form1.get('Email').value;
        } else {
          this.formData1.pFirstName = this.form1.get('Passengerfirstname').value;
          this.formData1.pLastName = this.form1.get('Passengerlastname').value;
          this.formData1.pMobileNo = this.form1.get('Passengercellphone').value;
          this.formData1.pTelePhoneNo = this.form1.get('Passengertelephone').value;
          this.formData1.pEmail = this.form1.get('Passengeremail').value;
        }
        this.formData1.FlightMeetingPoint = this.form1.get('MeetingPoint').value;
         this.formData1.FlightDelaypickup = this.form1.get('DelayedPickup').value;
        this.formData1.PaymentType = this.paymentType;
        if (this.serviceName == "Round Trip") {
          this.formData2.AirlineNameReturn = this.form1.get('AirlineNameR').value;
           this.formData2.FlightNoReturn = this.form1.get('FlightNumberR').value;
          this.formData2.FlightDepAirportReturn = this.form1.get('OriginAirportR').value;
          this.formData2.FlightTypeReturn = this.form1.get('FlightTypeR').value;
          this.formData2.FlightScheduleHourMinReturn = this.halftime2;
          this.formData2.FlightDelaypickupReturn = this.form1.get('DelayedPickupR').value;
          this.formData2.FlightMeetingPointReturn = this.form1.get('MeetingPointR').value;
          this.formData2.start_TerminalnoReturn = this.form1.get('TerminalR').value;
          this.formData2.end_TerminalnoReturn = this.form1.get('Terminal2R').value;
          this.formData2.end_AirlineReturn = this.form1.get('AirlineName2R').value;
          this.formData2.end_FlightNoReturn = this.form1.get('FlightNumberR').value;
          this.formData2.end_Flight_DepartureTimeReturn = this.form1.get('DepartureTimeR').value;
          this.formData2.end_DestinationReturn = this.form1.get('DestinationAirportR').value;
          // this.formData2.EndFlightScheduleHourMinReturn
          // this.formData2.IsAirlineFreeTextReturn
          this.formData2.NoPassengerReturn = this.form1.get('Passengers2').value;
          this.formData2.NoSuitcaseReturn = this.form1.get('Suitcases2').value;
          this.formData2.specialInsReturn = this.form1.get('SpecialInstruction2').value;
          this.formData2.end_placeNameReturn = this.locationstart;
          this.formData2.start_placeNameReturn = this.locationend;
        }
      }else {
        this.formData1.NoPassenger = this.form1.get('Passengers').value;
        this.formData1.NoSuitcase = this.form1.get('Suitcases').value;
        this.formData1.specialIns = this.form1.get('SpecialInstruction').value;
        this.formData1.BEmail = this.form1.get('Email').value;
        this.formData1.BFirstName = this.form1.get('FirstName').value;
        this.formData1.BLastName = this.form1.get('LastName').value;
        this.formData1.BMobileNo = this.form1.get('PhoneNumber').value;
        this.formData1.BTelePhoneNo = this.form1.get('TelephoneNumber').value;
        this.formData1.IsPassenger = this.form1.get('BookingFor').value;
        this.formData1.CreditCardType = this.form1.get('CardType').value;
        this.formData1.CreditCardNo = this.form1.get('CardNumber').value;
        this.formData1.CreditCardExpMonth = this.form1.get('ExpMonth').value;
        this.formData1.CreditCardExpYear = this.form1.get('ExpYear').value;
        this.formData1.CreditCardCVV = this.form1.get('CVV').value;
        this.formData1.CreditCardFirstLastName = this.form1.get('CardHolder').value;
        this.formData1.Address1 = this.form1.get('Address1').value;
        this.formData1.Address2 = this.form1.get('Address2').value;
        this.formData1.City = this.form1.get('City').value;
        this.formData1.State = this.form1.get('State').value;
        this.formData1.ZipCode = this.form1.get('ZipCode').value;
        this.formData1.Country = this.form1.get('Country').value;
        if (this.formData1.IsPassenger = 'NO') {
          this.formData1.pFirstName = this.form1.get('FirstName').value;
          this.formData1.pLastName = this.form1.get('LastName').value;
          this.formData1.pMobileNo = this.form1.get('PhoneNumber').value;
          this.formData1.pTelePhoneNo = this.form1.get('TelephoneNumber').value;
          this.formData1.pEmail = this.form1.get('Email').value;
        } else {
          this.formData1.pFirstName = this.form1.get('Passengerfirstname').value;
          this.formData1.pLastName = this.form1.get('Passengerlastname').value;
          this.formData1.pMobileNo = this.form1.get('Passengercellphone').value;
          this.formData1.pTelePhoneNo = this.form1.get('Passengertelephone').value;
          this.formData1.pEmail = this.form1.get('Passengeremail').value;
        }
        this.formData1.PaymentType = this.paymentType;
        if (this.serviceName == "Round Trip") {
          this.formData2.NoPassengerReturn = this.form1.get('Passengers2').value;
          this.formData2.NoSuitcaseReturn = this.form1.get('Suitcases2').value;
          this.formData2.specialInsReturn = this.form1.get('SpecialInstruction2').value;
          this.formData2.end_placeNameReturn = this.locationstart;
          this.formData2.start_placeNameReturn = this.locationend;
          }
      }
      if (this.formData1.NoPassenger == '0' && this.formData1.NoSuitcase == '0') {
        alert('Enter number of passengers or luggage.')
        this.loadingController.dismiss().then(() => console.log('dismissed'));
      } else if (this.formData2.NoPassengerReturn == '0' && this.formData2.NoSuitcaseReturn == '0' && this.serviceName == "Round Trip") {
        alert('Enter number of passengers or luggage.')
        this.loadingController.dismiss().then(() => console.log('dismissed'));
      } else {
        localStorage.setItem("form_values", JSON.stringify(this.formData1));
        localStorage.setItem("form_values2", JSON.stringify(this.formData2));
        this.router.navigate(['/reviewdetails']);
        this.loadingController.dismiss().then(() => console.log('dismissed'));
      }
    });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
      cssClass: 'custom-loader',
      spinner: null
    });
    return await loading.present();
  }
 
  ScrollToOrigin(){
    let O = document.getElementById('origintrip').offsetTop;
    this.content.scrollToPoint(0,O,1500);
  }
  ScrollToReturn(){
    let R = document.getElementById('returntrip').offsetTop;
    this.content.scrollToPoint(0,R,1500);
  }
}
