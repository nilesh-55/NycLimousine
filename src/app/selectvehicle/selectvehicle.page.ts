import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { EnvService } from '../services/env.service';
import { AlertController, LoadingController, ModalController, AngularDelegate } from '@ionic/angular';
import { VehiclesPage } from '../vehicles/vehicles.page';
import { ModeltoComponent } from '../modelto/modelto.component';
import { FarecalculationsPage } from '../farecalculations/farecalculations.page';
// import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-selectvehicle',
  templateUrl: './selectvehicle.page.html',
  styleUrls: ['./selectvehicle.page.scss'],
})
export class SelectvehiclePage implements OnInit {

  data: any;
  locationstart: any;
  locationend: any;
  selectDate: any;
  selectMonthYear: any;
  fulltime: any;
  halftime: any;
  selectDay: any;
  carData:any;
  carName: any;
  carPrice: any;
  carImage: any;
  carInside: any;
  amenitiesDetails: any;
  details: string;
  finalAmount: any;
  vehicleData: any;
  locationType: any;
  amenity: any;
  calculation: 0;
  fare: any;
  items: any;
  cal: any;
  public sum : number = 0;
  hours: any;
  airport_parking: any;
  tolls: any;
  salevalue: any;
  sale: string;
  theSate1: boolean;
  amenitiesDetails2: any;
  amenityName: any;
  discount_description: any;
  vehicleStopRates: any;

  constructor(private activatedRoute: ActivatedRoute , private envservice: EnvService,
    public modalController: ModalController, private router: Router, private loadingController: LoadingController) {
    this.details = localStorage.getItem('all_detail');
    this.data= JSON.parse(this.details);
    console.log(this.data)
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
    console.log(this.carData);

    this.carName = this.carData.Vehicle_Name;
    this.carPrice = this.carData.clsVehicleFinalRates.Rate;
    console.log(this.carData.clsVehicleFinalRates.Rate)
    console.log(this.carData.clsVehicleFinalRates.Inclusive_all_tax)
    this.carImage = this.carData.Vehicle_Image;
    this.carInside = this.carData.Luggage_Image;
    this.amenitiesDetails = this.carData.clsVehicleAmenityDetails;
    localStorage.setItem('amenityData', JSON.stringify(this.amenitiesDetails));
    this.hours = this.carData.clsVehicleFinalRates.minHorly;
    this.airport_parking = Number(this.carData.clsVehicleFinalRates.Airport_Parking);
    this.tolls = Number(this.carData.clsVehicleFinalRates.Tolls);
    this.discount_description = this.carData.clsVehicleFinalRates.Discount_Descripion;
    let SalesValues = this.carData.clsVehicleFinalRates.Sales_tax;
    localStorage.setItem("salesTax", JSON.stringify(SalesValues));
    
    let congestion = this.data.CongestionSurchargeValue
let CongestionValue=0;
if(congestion>0){
  CongestionValue = (Number(this.carData.clsVehicleFinalRates.Inclusive_all_tax)+ Number(congestion))
  this.finalAmount= CongestionValue
}else{
  this.finalAmount = this.carData.clsVehicleFinalRates.Inclusive_all_tax;
}
localStorage.setItem("final_rate", JSON.stringify(this.finalAmount));
console.log(this.data.CongestionSurchargeValue) 
    var value = localStorage.getItem('finalValue');
    console.log(value);
    this.vehicleStopRates = this.carData.clsLiVehicleStopRates;
    }

 ngOnInit() {
  var a=this.amenitiesDetails.length;
// this.amenitiesDetails.splice(a-1);
 }

 ionViewWillEnter(){
//  const amount = localStorage.getItem("final_rate");
//  this.finalAmount = JSON.parse(amount);
localStorage.removeItem("car_detail2");
  }

  getAmenityCalculations(e,amid,price){
    console.log(price)
    console.log(e.detail.value.Value,amid);

    this.amenitiesDetails = this.carData.clsVehicleAmenityDetails;
  
    var check= this.amenitiesDetails.findIndex(x=>x.FK_AmenityID==amid);
    console.log(check);
    if(check != -1)
    {
    
      this.amenitiesDetails[check].selectAmenityAmt=Number(e.detail.value.Value * this.amenitiesDetails[check].AmenityPrice).toFixed(2);
      this.amenitiesDetails[check].selectAmenityQty=e.detail.value.Value;
   }


    console.log('amenity details',this.amenitiesDetails);
   localStorage.setItem('amenityData', JSON.stringify(this.amenitiesDetails))
   
   let calculation = Number(e.detail.value.Value) * Number(price);
   this.cal = calculation
    console.log(calculation)
    let total = 0;
 
console.log(this.carData.clsVehicleFinalRates.Total_Fare);

  for(var i = 0; i < this.amenitiesDetails.length; i++){
    //var v = this.cal[i];
    console.log(this.amenitiesDetails[i].selectAmenityAmt)
    //if(this.amenitiesDetails[i].selectAmenityAmt >0){
      total=total+Number(this.amenitiesDetails[i].selectAmenityAmt);
    //}

}
let Total_Fare=0;
Total_Fare=this.carData.clsVehicleFinalRates.Total_Fare+total;
let saletaxValue=this.carData.clsVehicleFinalRates.Sales_tax_value;
let SaleTaxAmount=0;
if(saletaxValue>0){
  SaleTaxAmount=((Number(Total_Fare)+Number(this.airport_parking)+Number(this.tolls))*Number(saletaxValue)/100);
}
console.log(SaleTaxAmount)
this.carData.clsVehicleFinalRates.Sales_tax=SaleTaxAmount;
this.finalAmount =Number((Total_Fare+SaleTaxAmount+this.data.CongestionSurchargeValue)).toFixed(2);
console.log(Number(SaleTaxAmount).toFixed(2));
this.salevalue = SaleTaxAmount;
console.log(this.salevalue);
if (this.salevalue == 0){
  this.sale = null;
}
else{
  this.sale =Number(SaleTaxAmount).toFixed(2);
}
console.log(this.sale);
localStorage.setItem("salesTax", JSON.stringify(this.sale));
localStorage.setItem("final_rate", JSON.stringify(this.finalAmount));
console.log(total);

 console.log(this.sum)
  this.data.AmenityId = amid;
    this.data.vehicleId= this.carData.VehicleId;
    console.log(this.data.vehicleId);
    this.data.Qty= e.detail.value.Value;
  }
 
  stateChange(ev){
    // this.amenitiesDetails = this.carData.clsVehicleAmenityDetails;
this.theSate1=ev.detail.checked;
console.log(this.theSate1);
if(this.theSate1 == true){
var check= this.amenitiesDetails.findIndex(x=>x.FK_AmenityID==6);
console.log(check);
if(check != -1)
{

  this.amenitiesDetails[check].selectAmenityAmt=Number(6 * this.amenitiesDetails[check].AmenityPrice).toFixed(2);
  this.amenitiesDetails[check].selectAmenityQty=1;
}
console.log(this.amenitiesDetails);
localStorage.setItem('amenityData', JSON.stringify(this.amenitiesDetails));
}else if(this.theSate1 == false){
  var check= this.amenitiesDetails.findIndex(x=>x.FK_AmenityID==6);
  console.log(check);
  if(check != -1)
  {
   this.amenitiesDetails[check].selectAmenityAmt=0;
    this.amenitiesDetails[check].selectAmenityQty=0;
  }
  console.log(this.amenitiesDetails);
  localStorage.setItem('amenityData', JSON.stringify(this.amenitiesDetails));
}
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FarecalculationsPage
    });
    modal.onDidDismiss()
    .then((data) => {
      const val = data.data;
      console.log(val);
      this.finalAmount = val;
      localStorage.setItem("final_rate", JSON.stringify(this.finalAmount));
    });
  return await modal.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
      cssClass:'custom-loader',
      spinner: null
     });
    return await loading.present();
  }

  goToPayment() {
    this.presentLoading().then(a => {
      if (this.data.TypeOfServiceName == 'Round Trip') {
        this.router.navigate(['/vehicles-return-page'])
      } else if (this.data.TypeOfServiceName == 'Hourly') {
        this.router.navigate(['/filldetails']);
      } else if (this.data.TypeOfServiceName == 'One way') {
        this.router.navigate(['/filldetails']);
      } else if (this.data.TypeOfServiceName == 'Wait and Return') {
        this.router.navigate(['/filldetails']);
      }
      this.loadingController.dismiss().then(() => console.log('dismissed'));
    });
  }
}
