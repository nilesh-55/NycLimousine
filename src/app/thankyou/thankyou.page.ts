import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Platform, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import {CallNumber} from '@ionic-native/call-number/ngx';
import { PrivacyModalPage } from '../privacy-modal/privacy-modal.page';
import { FeedbackModalPage } from '../feedback-modal/feedback-modal.page';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {
  confirmation: any;
  confirmatioNo: any;
  vehicleImage: any;
  vehicleName: any;
  passegerName: any;
  locationFrom: any;
  locationTo: any;
  selectDate: any;
  selectMonthYear: any;
  selectDay: any;
  fulltime: any;
  halftime: any;
  totalPrice: any;
  final_Price: any;
  locationstart: string;
  locationend: string;
  subscription: any;
  backButtonSubscription: any;
  serviceName: any;
  vehicleImage2: any;
  vehicleName2: any;
  passegerName2: any;
  selectDate2: string;
  selectMonthYear2: string;
  selectDay2: string;
  fulltime2: string;
  halftime2: string;

  constructor(private platform: Platform, private router: Router, private callNumber: CallNumber,
    private modalController: ModalController) {

    let fullname ="123456789000";
let names = fullname.split("9", -3);
// let firstName = names[0];
// console.log(firstName)
let lastName = [(names.length -1)];
console.log(names)

var str = "12654567890123";
    var n1 = str.slice(11);
    console.log(n1);

    var finalData = localStorage.getItem('final_confirmation')
    this.confirmation = JSON.parse(finalData);
    console.log(this.confirmation.Data)

    this.confirmatioNo = this.confirmation.Data.confirmationNo;
    this.vehicleImage = this.confirmation.Data.clsSelectVehicelDetails.Vehicle_Image;
    this.vehicleName = this.confirmation.Data.clsSelectVehicelDetails.Vehicle_Name;
    this.passegerName = this.confirmation.Data.clsSelectVehicelDetails.clsPaymentDetail.BFirstName;
    const value1 = localStorage.getItem('fromLocation');
    this.locationstart = value1;
    const value2 = localStorage.getItem('toLocation');
   this.locationend = value2;
    this.locationFrom = this.confirmation.Data.FromLocationDetail.Location_City;
    this.locationTo = this.confirmation.Data.ToLocationDetail.Location_City;
    this.selectDate = moment(this.confirmation.Data.PickUpDateDisp).format('DD');
        this.selectMonthYear = moment(this.confirmation.Data.PickUpDateDisp).format('MMM YYYY');
        this.selectDay = moment(this.confirmation.Data.PickUpDateDisp).format('dddd');
        this.fulltime = moment(this.confirmation.Data.PickupDateTime).format('H:mm');
        this.halftime = moment(this.confirmation.Data.PickupDateTime).format('h:mm A');
       
        this.totalPrice = this.confirmation.Data.clsSelectVehicelDetails.clsVehicleFinalRates.NewInclusivealltax;
        // var finalAmount = this.confirmation.Data
        // localStorage.getItem('Final_rate');
        // this.final_Price = finalAmount;

//--------------------------------Roundtrip------------------------//        
        this.serviceName = this.confirmation.Data.TypeOfServiceName;
        if(this.serviceName == "Round Trip"){
          this.vehicleImage2 = this.confirmation.Data.clsSelectReturnVehicelDetails.Vehicle_Image;
          this.vehicleName2 = this.confirmation.Data.clsSelectReturnVehicelDetails.Vehicle_Name;
          this.passegerName2 = this.confirmation.Data.clsSelectReturnVehicelDetails.clsPaymentDetail.BFirstName;
          this.selectDate2 = moment(this.confirmation.Data.ReturnDateDisp).format('DD');
        this.selectMonthYear2 = moment(this.confirmation.Data.ReturnDateDisp).format('MMM YYYY');
        this.selectDay2 = moment(this.confirmation.Data.ReturnDateDisp).format('dddd');
        this.fulltime2 = moment(this.confirmation.Data.ReturnDateTime).format('H:mm');
        this.halftime2 = moment(this.confirmation.Data.ReturnDateTime).format('h:mm A');
        this.final_Price = (Number(this.confirmation.Data.clsSelectVehicelDetails.clsVehicleFinalRates.NewInclusivealltax) +
        Number(this.confirmation.Data.clsSelectReturnVehicelDetails.clsVehicleFinalRates.NewInclusivealltax)).toFixed(2);
       
        }
//--------------------------------Roundtrip------------------------//
   }

  ngOnInit() {
  }

  homepage(){
    localStorage.removeItem('salesTax');
  localStorage.removeItem('amenityData');
  localStorage.removeItem('salesTax2');
  localStorage.removeItem('amenityData2');
  localStorage.removeItem('car_detail2');
  localStorage.removeItem('car_detail');
  localStorage.removeItem('all_detail');
    this.router.navigate(['/home']);
  }

  ionViewDidEnter(){
    this.subscription = this.platform.backButton.subscribe(()=>{
        navigator['app'].exitApp();
    });
}

ionViewWillLeave(){
    this.subscription.unsubscribe();
}

toCall(){
  this.callNumber.callNumber("+12123666600", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
}
// ngOnDestroy() {
//   this.backButtonSubscription.unsubscribe();
// }

async writeTous(){
  const modal = await this.modalController.create({
    component: FeedbackModalPage,
  });
  return await modal.present();
}

}
