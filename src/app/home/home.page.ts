import { Component, ViewChild, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EnvService } from '../services/env.service';
import { LoadingController, Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular'
import { ModelfromComponent } from '../modelfrom/modelfrom.component';
import { ToastController } from '@ionic/angular';
import { ModeltoComponent } from '../modelto/modelto.component';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IonReorderGroup } from '@ionic/angular';
import * as moment from 'moment';
import { AppComponent } from '../app.component';
import { StopsLocationPage } from '../stops-location/stops-location.page';

declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  autocompleteItems;
  autocomplete;
  segment: string;

  public addresses: any[] = [];

  @ViewChild(IonReorderGroup, { static: true }) reorderGroup: IonReorderGroup;
 // directionsService = new google.maps.DirectionsService;
  // directionsDisplay = new google.maps.DirectionsRenderer;

  form1: FormGroup;
  currentLocation: any = {
    lat: 0,
    lng: 0
  };
  start: any;
  end: any;
  data: any = {};
  modalCtrl: any;
  marker: any;
  response: any;
  public input: string = '';
  public countries: string[] = [];
  userLat: number;
  userLong: number;
  loading: any;
  items: any;
  rows: any;
  message: any;
  Startlocation: any;
  stop1: any;
  Endlocation: any;
  dateShow: boolean = true;
  timeShow: boolean = true;

  dateShow1: boolean = true;
  timeShow1: boolean = true;

  formData1 = {
    "Startlocation": "", "Endlocation": "", "Servicetype": "", "PickUpDate": "", "PickupTime": "", "screenType": "m",
    "eventValue": "", "hourlyType": "", "waitingTime": "", "ReturnDate": "", "returnPickuptime": ""
  }
  formData = {
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
  }
  isItemAvailable = false;
  isItemAvailable1 = false;
  selectMonthYear: any;
  selectDay: any;
  selectDate: any;
  fulltime: any;
  halftime: any;
  selectReturnMonthYear: any;
  selectReturnDay: any;
  selectReturnDate: any;
  fullArrivaltime: any;
  halfArrivaltime: any;
  selectRoundtripDay: any;
  selectRoundtripMonthYear: any;
  selectRoundtripDate: any;
  d: Date = new Date();
  minDate: string = new Date().toISOString();
  maxData: any = (new Date()).getFullYear() + 10;

  fullRoundtriptime: any;
  halfRoundtriptime: any;
  formDatas = {};
  objLiclsResStops = [];
  oldid: any;
  newid: any;
  noOfService: any;
  noOfHours: any;
  waitingTime: any;
  date: String = new Date().toISOString();
  FullTime: string;
  HalfTime: string;
  locationType: any;
  locationName: any;
  subscription: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  isLoggedin: boolean;
  isLoggedOut: boolean;
  diffSelectedReturnTime: any;
  stopControls: FormArray;
  errorResponse: any;
  constructor(
    private _FB: FormBuilder,
    private router: Router,
    private envservice: EnvService,
    public modalController: ModalController,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    private platform: Platform,
    public appcomp: AppComponent
  ) {

    this.form1 = this._FB.group({
      FromLocationName: ['', Validators.required],
      ToLocationName: ['', Validators.required],
      Servicetype: [''],
      PickUpDate: ['', Validators.required],
      PickupTime24H: ['', Validators.required],
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

  ionViewWillEnter(){
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
      .subscribe((data: any) => {
        this.noOfService = data.Data;
      })
  }

  hourlyType() {
    this.envservice.getHourlyType()
      .subscribe((data: any) => {
        this.noOfHours = data.Data;
       });
  }

  getHours(value){
console.log(value.detail.value);
localStorage.setItem("noofHours", value.detail.value);
  }

  waitTime() {
    this.envservice.getWaitingTime()
      .subscribe((data: any) => {
        this.waitingTime = data.Data;
      })
  }

  stopFields() {
    return this._FB.group({
      StopLocation: ['', Validators.required],
      StopWatingTime: ['', Validators.required],
    });
  }

  addNewInputField(): void {
    const control = <FormArray>this.form1.controls.objLiclsResStops;
    control.push(this.stopFields());
console.log(control.value);
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.form1.controls.objLiclsResStops;
    control.removeAt(i);
  }

  async stopModal(i) {
    const modal = await this.modalController.create({
      component: StopsLocationPage
    });
    modal.onDidDismiss()
      .then((data) => {
        const val = data.data;
        const control = <FormArray>this.form1.controls.objLiclsResStops;
        control.at(i).setValue({
          StopLocation: val.Location_Name + val.Location_Address,
          StopWatingTime: ''
        })

      });

    return await modal.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: '<ion-img src="/assets/icon/loader.gif"></ion-img><span>Please wait while we calculate your ride..</span>',
      cssClass: 'custom-loader',
      spinner: null
    });
    return await loading.present();
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


   async presentmodal1() {
    // let O = document.getElementById('origintrip').offsetTop;
    // this.content.scrollToPoint(0,O,2500);
    const modal = await this.modalController.create({
      component: ModelfromComponent
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
    return await modal.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModeltoComponent
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
    return await modal.present();
  }

  changeDate() {
    let date = this.form1.get('PickUpDate').value;
    let monthYear = moment(date).add(0, 'year').format('MMM YYYY');
    let datttt = moment(date).format('DD');
    let day = moment(date).format('dddd');
    let old = moment(date).format('DD/MM/YYYY');
    let curr_time = moment(date).format('hh:mm');
    this.selectMonthYear = monthYear;
    this.selectDay = datttt;
    this.selectDate = day;
    this.dateShow = false;
  }

  addMinutes(times, minsToAdd) {
    function D(J) { return (J < 10 ? '0' : '') + J; };
    var piece = times.split(':');
    var mins = piece[0] * 60 + +piece[1] + +minsToAdd;
    return D(mins % (24 * 60) / 60 | 0) + ':' + D(mins % 60);
  }

  //// Time section
  changeTime() {
    let time = this.form1.get('PickupTime24H').value;
    let full = moment(time).format('H:mm');
    let half = moment(time).format('hh:mm A');
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
    let monthYear1 = moment(date).add(0, 'year').format('MMM YYYY');
    let datttt1 = moment(date).format('DD');
    let day1 = moment(date).format('dddd');
    let old = moment(date).format('DD/MM/YYYY');
    let curr_time = moment(date).format('hh:mm');
    this.selectReturnMonthYear = monthYear1;
    this.selectReturnDay = datttt1;
    this.selectReturnDate = day1;
    this.dateShow1 = false;
  }
  changetRoundtripTime() {
    let time = this.form1.get('ReturnTime24H').value;
    let full1 = moment(time).format('H:mm');
    let half1 = moment(time).format('hh:mm A');
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

  doReorder(ev: any) {
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
const control = <FormArray>this.form1.controls.objLiclsResStops;
let newIndex: number = this.oldid + this.newid;
    if(newIndex === -1) {
      newIndex = control.length - 1;
      console.log(newIndex);
    } else if(newIndex == control.length) {
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

  getItems(ev: any) {
    const val = ev.target.value;
    if (val.length > 0) {
      if (val && val.trim() != '') {
        this.envservice.suggetionlist(val)
          .subscribe((user) => {
            this.isItemAvailable = true;
            this.response = user;
            this.items = this.response.Data;
          }, (error: HttpErrorResponse) => {
            this.message = error.error.Message;
           // this.presentToast();
         });
      }
    } else {
      this.items = [];
    }
  }

  getItem(ev: any) {
    const vals = ev.target.value;
    if (vals.length > 0) {
      if (vals && vals.trim() != '') {
        this.envservice.suggetionlist(vals)
          .subscribe((user) => {
            this.isItemAvailable1 = true;
            this.response = user;
            this.rows = this.response.Data;
          }, (error: HttpErrorResponse) => {
            this.message = error.error.Message;
         //   this.presentToast();
         //   this.loadingController.dismiss();
          });
      }
    } else {
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
    let selectedDate = moment(date).format('DD/MM/YYYY');
    let selectedMonth = moment(date).format('MM');
    let selectedonlyDate = moment(date).format('DD');
    let returndate = this.form1.get('ReturnDate').value;
    let selectedReturnDate = moment(returndate).format('DD/MM/YYYY');
    let selectedReturnMonth = moment(returndate).format('MM');
    let selectedonlyReturnDate = moment(returndate).format('DD');
    let time = this.form1.get('PickupTime24H').value;
    let selctedTime = moment(time).format('H:mm');
    let returntime = this.form1.get('ReturnTime24H').value;
    let selectedReturnTime = moment(returntime).format('H:mm');
    var timeNow = new Date().getTime();
    var oneHourIntoFuture = new Date(timeNow + 1000 * 60 * 60 * 1);
    let time24 = moment(oneHourIntoFuture).format('H:mm');
    let currentDate = moment(timeNow).format('DD/MM/YYYY');
    if (selectedDate == currentDate) {
      if (selctedTime < time24) {
        this.message = "Time: start date time must be greater than 1 hours from current date time";
        this.presentToast();
      } else if (this.segment == "2" && selectedReturnDate < selectedDate) {
        this.message = "Return date must be greater or equal than pickup date";
        this.presentToast();
      } else if (this.segment == "2" && selectedReturnTime < time24) {
        this.message = "Time: return date time must be greater than 1 hours from pickup date time";
        this.presentToast();
      } else {
        this.afterValidations();
      }
    } else if (this.segment == "2" && selectedReturnMonth < selectedMonth) {
      this.message = "Return date must be greater or equal than pickup date";
      this.presentToast();
    } else if (this.segment == "2" && selectedReturnDate == selectedDate) {
      if (selectedReturnTime < time24) {
        this.message = "Time: return date time must be greater than 1 hours from pickup date time";
        this.presentToast();
      } else {
        this.afterValidations();
      }
    } else if (this.segment == "2" && selectedReturnMonth == selectedMonth && selectedonlyReturnDate < selectedonlyDate) {
      this.message = "Return date must be greater or equal than pickup date";
      this.presentToast();
    } else {
      this.afterValidations();
    }
  }

  afterValidations() {
    this.formData1.Startlocation = this.form1.get('FromLocationName').value;
    this.formData1.Endlocation = this.form1.get('ToLocationName').value;
    this.formData1.PickUpDate = moment(this.form1.get('PickUpDate').value).format('MM/DD/YYYY');
    this.form1.controls['PickUpDate'].setValue(moment(this.form1.get('PickUpDate').value).format('MM/DD/YYYY'));
    this.formData1.PickupTime = moment(this.form1.get('PickupTime24H').value).format('hh:mm A');
    this.formData1.Servicetype = this.form1.get('TypeOfService').value;
    if (this.formData1.PickupTime == 'Invalid date') {

    } else
      this.form1.controls['PickupTime24H'].setValue(moment(this.form1.get('PickupTime24H').value).format('hh:mm A'));

    //for hourly
    this.formData1.eventValue = this.form1.get('Event').value;
    this.formData1.hourlyType = this.form1.get('HourlyTime').value;

    //for Wait & Return
    this.formData1.waitingTime = this.form1.get('WaitingTime').value;

    //for RoundTrip
    this.formData1.returnPickuptime = moment(this.form1.get('ReturnTime24H').value).format('hh:mm A');
    this.formData1.ReturnDate = moment(this.form1.get('ReturnDate').value).format('MM/DD/YYYY');
    this.form1.controls['ReturnDate'].setValue(moment(this.form1.get('ReturnDate').value).format('MM/DD/YYYY'));
    if (this.formData1.returnPickuptime == 'Invalid date') {

    } else
      this.form1.controls['ReturnTime24H'].setValue(moment(this.form1.get('ReturnTime24H').value).format('hh:mm A'));
    if (this.segment != "1" && this.formData1.Startlocation == this.formData1.Endlocation) {
      this.message = 'Please select hourly event type.';
      this.presentToast();
      this.segment = "1";
    } else if (this.segment == "1" && this.formData1.eventValue == '') {
      this.message = "Please Select Event.";
      this.presentToast();
    } else {
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
          let resData: any = this.response.Data;
          localStorage.setItem('all_detail', JSON.stringify(resData));
          this.router.navigate(['/vehicles']);
          this.loadingController.dismiss();
        }
      }).catch(error => {
        this.errorResponse = JSON.parse(error.error)
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

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: this.message,
      duration: 2000
    });
    toast.present();
  }

}
