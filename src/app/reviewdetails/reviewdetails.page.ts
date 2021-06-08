import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EnvService } from '../services/env.service';
import { FarecalculationsPage } from '../farecalculations/farecalculations.page';
import { ModalController, LoadingController, IonContent, ToastController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reviewdetails',
  templateUrl: './reviewdetails.page.html',
  styleUrls: ['./reviewdetails.page.scss'],
})
export class ReviewdetailsPage implements OnInit {
  @ViewChild(IonContent, {static: false}) content: IonContent;
  shownGroup = null;
  details: string;
  data: any;
  locationstart: any;
  locationend: any;
  selectDate: any;
  selectMonthYear: any;
  fulltime: any;
  halftime: any;
  selectDay: string;
  carData: any;
  carName: any;
  carInside: any;
  final_Price: string;
  form1: FormGroup;
  formData1 = {"pEmail":"", "P_Prefix":"", "pFirstName":"", "pLastName":"", "pTelePhoneNo":"", "pMobileNo":"",
  "NoPassenger":"", "NoSuitcase":"", "specialIns":"", "IsPassenger":"", "BEmail":"", "B_Prefix":"", 
  "BFirstName":"", "BLastName":"", "BTelePhoneNo":"", "BMobileNo":"", "PaymentType":"", "CreditCardType":"", "CreditCardNo":"",
   "CreditCardExpMonth":"", "CreditCardExpYear":"", "CreditCardCVV":"", "CreditCardFirstLastName":"", "Address1":"","Address2":"",
  "City":"", "State":"", "ZipCode":"","Country":"","AirlineName":"","FlightNo":"","FlightDepAirport":"",
  "FlightType":"","FlightScheduleHourMin":"","FlightDelaypickup":"", "FlightMeetingPoint":"","start_Terminalno":"", 
  "end_Terminalno":"", "end_placeName":"","start_placeName":"","end_Airline":"", "end_FlightNo":"","end_Flight_DepartureTime":"",
  "end_Destination":"", "EndFlightScheduleHourMin":"","IsAirlineFreeText":"","MinHours":"", "MinDiscountHours":"","IsSaveCardInfo":"",
  "liPassengerMaster1":"","FK_ProjectId":""};
  // formData2 = {"pEmail":"", "P_Prefix":"", "pFirstName":"", "pLastName":"", "pTelePhoneNo":"", "pMobileNo":"",
  // "NoPassenger":"", "NoSuitcase":"", "specialIns":"", "IsPassenger":"", "BEmail":"", "B_Prefix":"", 
  // "BFirstName":"", "BLastName":"", "BTelePhoneNo":"", "BMobileNo":"", "PaymentType":"", "CreditCardType":"", "CreditCardNo":"",
  //  "CreditCardExpMonth":"", "CreditCardExpYear":"", "CreditCardCVV":"", "CreditCardFirstLastName":"", "Address1":"","Address2":"",
  // "City":"", "State":"", "ZipCode":"","Country":"","AirlineName":"","FlightNo":"","FlightDepAirport":"",
  // "FlightType":"","FlightScheduleHourMin":"","FlightDelaypickup":"", "FlightMeetingPoint":"","start_Terminalno":"", 
  // "end_Terminalno":"", "end_placeName":"","start_placeName":"","end_Airline":"", "end_FlightNo":"","end_Flight_DepartureTime":"",
  // "end_Destination":"", "EndFlightScheduleHourMin":"","IsAirlineFreeText":"","MinHours":"", "MinDiscountHours":"","IsSaveCardInfo":"",
  // "liPassengerMaster1":"","FK_ProjectId":""};
  formData2 = {"specialInsReturn": "", "AirlineNameReturn": "", "FlightNoReturn": "", "FlightDepAirportReturn": "", "FlightTypeReturn": "", "FlightScheduleHourMinReturn": "",
  "FlightDelaypickupReturn": "", "FlightMeetingPointReturn": "", "start_TerminalnoReturn": "", "end_TerminalnoReturn": "", "end_placeNameReturn": "", "start_placeNameReturn": "",
  "end_AirlineReturn": "", "end_FlightNoReturn": "", "end_Flight_DepartureTimeReturn": "", "end_DestinationReturn": "", "EndFlightScheduleHourMinReturn": "", "IsAirlineFreeTextReturn": "",
  "NoPassengerReturn": "", "NoSuitcaseReturn": ""
};
  formvalues: any;
  allLists: any;
  locationType: any;
  tolocationType: any;
  locationAddress: any;
  tolocationAddress: any;
  totalPrice: any;
  Aircode: any;
  FlightNo: any;
  terminal: any;
  flighttype: any;
  noOfPassenger: any;
  instructions: any;
  suitcases: any;
  email: any;
  name: any;
  number: any;
  number2: any;
  cardType: any;
  cardNo: any;
  expMonth: any;
  expYear: any;
  cvv: any;
  cardHName: any;
  address1: any;
  reservation: any;
  origin: any;
  n1: any;
  amenities_fare: any;
  sales: any;
  Sales_tax_Span: string;
  newhourlyrate: string;
  newSubtotal: string;
  extraCharge: string;
  serviceName: any;
  formvalues2: any;
  selectDate2: string;
  selectMonthYear2: string;
  selectDay2: string;
  fulltime2: string;
  halftime2: string;
  carData2: any;
  carName2: any;
  carInside2: any;
  agreement: any;
  final_Price2: any;
  total: any;
  locationTypeR: any;
  tolocationTypeR: any;
  user_id: string;
  message: any;
  response: any;
  errorResponse: any;
  constructor(private router: Router, private envservice: EnvService, private _FB: FormBuilder,
    private modalController: ModalController, private loadingController: LoadingController, private toastCtrl: ToastController) { 

    this.details = localStorage.getItem('all_detail');
    this.data= JSON.parse(this.details);
    console.log(this.data)
    this.locationType = this.data.FromLocationDetail.Location_Type;
    this.tolocationType = this.data.ToLocationDetail.Location_Type;
    this.locationAddress = this.data.FromLocationDetail.Location_Address
    this.tolocationAddress = this.data.ToLocationDetail.Location_Address
    this.locationType =this.data.FromLocationDetail.Location_Type;
    const value1 = localStorage.getItem('fromLocation');
    this.locationstart = value1;
    const value2 = localStorage.getItem('toLocation');
   this.locationend = value2;
    this.selectDate = moment(this.data.PickUpDateDisp).format('DD');
        this.selectMonthYear = moment(this.data.PickUpDateDisp).format('MMM YYYY');
        this.selectDay = moment(this.data.PickUpDateDisp).format('dddd');
        this.fulltime = moment(this.data.PickupDateTime).format('H:mm');
        this.halftime = moment(this.data.PickupDateTime).format('h:mm A');

        const data = localStorage.getItem('car_detail');
        this.carData = JSON.parse(data);
        this.serviceName = this.data.TypeOfServiceName;
        this.totalPrice = this.carData.clsVehicleFinalRates.Inclusive_all_tax;
        
        this.carName = this.carData.Vehicle_Name;
        this.carInside = this.carData.Luggage_Image;
    
        var finalAmount = localStorage.getItem('final_rate');
        this.final_Price = JSON.parse(finalAmount);
    // -------------------------------Roundtrip---------------------------------------//
        if(localStorage.getItem('final_rate2')){
          var finalAmount2 = localStorage.getItem('final_rate2');
          this.final_Price2 = JSON.parse(finalAmount2);
          console.log(this.final_Price)
          console.log(this.final_Price2)
          this.total = (Number(this.final_Price)+ Number(this.final_Price2)).toFixed(2);
          }

          //-------------------for roundtrip--------------------//
    this.selectDate2 = moment(this.data.ReturnDateDisp).format('DD');
    this.selectMonthYear2 = moment(this.data.ReturnDateDisp).format('MMM YYYY');
    this.selectDay2 = moment(this.data.ReturnDateDisp).format('dddd');
    this.fulltime2 = moment(this.data.ReturnDateTime).format('H:mm');
    this.halftime2 = moment(this.data.ReturnDateTime).format('h:mm A');
    //-------------------for roundtrip--------------------//
   // -------------------------------Roundtrip---------------------------------------//
    if(localStorage.getItem('salesTax')){
      const salesValue = localStorage.getItem('salesTax');
      this.sales = JSON.parse(salesValue);
      console.log(this.sales)
      this.Sales_tax_Span = Number(this.sales).toFixed(2);
      // this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_value;
    }

        var values = localStorage.getItem('form_values');
        this.formvalues=JSON.parse(values);
        console.log(this.formvalues);

  //-----------------for Roundtrip---------------------------//
        if(localStorage.getItem('car_detail2')){
          const data2 = localStorage.getItem('car_detail2');
          this.carData2 = JSON.parse(data2);
          this.carName2 = this.carData2.Vehicle_Name;
        this.carInside2 = this.carData2.Luggage_Image;
        if(localStorage.getItem('form_values2')){
          var values2 = localStorage.getItem('form_values2');
        this.formvalues2=JSON.parse(values2);
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
          Checked: [false, Validators.pattern('true')]
        })
       
 }
 
  ngOnInit() {
   if(this.serviceName == "Round Trip"){
      this.locationTypeR = this.tolocationType;
      this.tolocationTypeR = this.locationType;
    }
    if(localStorage.getItem("user_id")){
      var userId = localStorage.getItem('user_id');
      this.user_id = userId;
      console.log(this.user_id);
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FarecalculationsPage
    });
    return await modal.present();
  }

  toggleGroup(group) {
    console.log(group);
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  
  isGroupShown(group) {
    return this.shownGroup === group;
  }
  nextButton() {
    if (this.serviceName == "Round Trip") {
      this.roundtrip();
    }else{
    this.presentLoading().then(a => {
  this.data.Userid = this.user_id;
    this.data.clsSelectVehicelDetails = this.carData;
    
    this.data.clsSelectVehicelDetails.clsPaymentDetail= this.formvalues;
    this.data.vehicleId = this.carData.VehicleId;
    this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewInclusivealltax = this.final_Price;
    if(localStorage.getItem('amenityData')){
      var amenities_data = localStorage.getItem('amenityData');
      this.amenities_fare = JSON.parse(amenities_data);
      console.log(this.amenities_fare)
      this.data.clsSelectVehicelDetails.clsVehicleAmenityDetails = this.amenities_fare;
    }
   
   
// this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhDisc
// this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhDiscFare

    // this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewSalestax = this.Sales_tax_Span;
      if (this.serviceName == "One way") {

        this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhsubTotal = this.carData.clsVehicleFinalRates.Rate;
        this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewSalestax = this.Sales_tax_Span;
        this.data.clsSelectVehicelDetails.clsVehicleFinalRates.Newhtotalfare = this.carData.clsVehicleFinalRates.Total_Fare;
        this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewTolls =this.carData.clsVehicleFinalRates.Tolls;
        this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewAirport_Parking = this.carData.clsVehicleFinalRates.Airport_Parking;
      }
     
      if (this.serviceName == "Hourly") {
        if (localStorage.getItem('numberofHours')) {
          var newHourly = localStorage.getItem('numberofHours');
          this.newhourlyrate = newHourly;
          console.log(this.newhourlyrate)
          this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewHNoMinHour = this.newhourlyrate
        } else {
          this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewHNoMinHour = this.data.clsSelectVehicelDetails.clsVehicleFinalRates.Hourly_min_hours;
        }
        if (localStorage.getItem('subtotal')) {
          var subTotal = localStorage.getItem('subtotal');
          this.newSubtotal = subTotal;
          console.log(this.newSubtotal);
          this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhsubTotal = this.newSubtotal;
        } else {
          // this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhsubTotal = this.data.clsSelectVehicelDetails.clsVehicleFinalRates.SubTotal;
        }
        // this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewhsubTotal = this.data.clsSelectVehicelDetails.clsVehicleFinalRates.Rate;
      }
      if (localStorage.getItem('extracharges')) {
        var extraCharge = localStorage.getItem('extracharges');
        this.extraCharge = JSON.parse(extraCharge);
        this.data.clsSelectVehicelDetails.clsVehicleExtraCharges = this.extraCharge;
      }
    
    console.log(this.data)
    this.envservice.getConfirmation(this.data)
    .then((data : any) =>
    {
      console.log(data.data);
        this.response = JSON.parse(data.data);
      localStorage.setItem("final_confirmation", JSON.stringify(this.response));
      this.router.navigate(['/thankyou']);
      this.loadingController.dismiss();
    }).catch(error => {
      this.errorResponse = JSON.parse(error.error)
          console.log("error", error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
      console.log("error", error);
      this.message = this.errorResponse.Message;
              this.presentToast();
        this.loadingController.dismiss(); 
        });;
  });
}
  }

  roundtrip() {
    this.presentLoading().then(a => {
      this.data.Userid = this.user_id;
      this.data.clsSelectVehicelDetails = this.carData;


    this.data.clsSelectVehicelDetails.clsPaymentDetail= this.formvalues;
      this.data.vehicleId = this.carData.VehicleId;
      this.data.clsSelectVehicelDetails.clsVehicleFinalRates.NewInclusivealltax = this.final_Price;
      if(localStorage.getItem('amenityData')){
        var amenities_data = localStorage.getItem('amenityData');
        this.amenities_fare = JSON.parse(amenities_data);
        console.log(this.amenities_fare)
        this.data.clsSelectVehicelDetails.clsVehicleAmenityDetails = this.amenities_fare;
      }
      if (localStorage.getItem('extracharges')) {
        var extraCharge = localStorage.getItem('extracharges');
        this.extraCharge = JSON.parse(extraCharge);
        this.data.clsSelectVehicelDetails.clsVehicleExtraCharges = this.extraCharge;
      }
    this.data.clsSelectReturnVehicelDetails = this.carData2;
    this.data.clsSelectReturnVehicelDetails.clsPaymentDetail= this.formvalues2;
    this.data.PickupSelectedVehicle = this.carData2.VehicleId;
    this.data.clsSelectReturnVehicelDetails.clsVehicleFinalRates.NewInclusivealltax = this.final_Price2;
    this.envservice.getReturnConfirmation(this.data).subscribe((data:any) => {
      console.log(data);
      localStorage.setItem("final_confirmation", JSON.stringify(data));
      this.router.navigate(['/thankyou']);
      this.loadingController.dismiss();
    }, (error: HttpErrorResponse) => {
      this.message = error.error.Message;
      this.presentToast();
      this.loadingController.dismiss();
    });
  });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: this.message,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
      cssClass:'custom-loader',
      spinner: null
    });
    return await loading.present();
  }

  async serviceAgreementModal(){
   const modal = await this.modalController.create({
      component: ModalpagePage,
    });
    return await modal.present();
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
