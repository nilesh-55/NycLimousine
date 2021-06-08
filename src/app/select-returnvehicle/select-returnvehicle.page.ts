import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { EnvService } from '../services/env.service';
import { AlertController, LoadingController, ModalController, AngularDelegate } from '@ionic/angular';
import { VehiclesPage } from '../vehicles/vehicles.page';
import { ModeltoComponent } from '../modelto/modelto.component';
import { FarecalculationsPage } from '../farecalculations/farecalculations.page';
import { FarecalculationsreturnPage } from '../farecalculationsreturn/farecalculationsreturn.page';
// import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-select-returnvehicle',
  templateUrl: './select-returnvehicle.page.html',
  styleUrls: ['./select-returnvehicle.page.scss'],
})
export class SelectReturnvehiclePage implements OnInit {



  private currentNumber = 0;
  private currentNumber1 = 0;
  private currentNumber2 = 0;
  private currentNumber3 = 0;
  data: any;
  locationstart: any;
  locationend: any;
  selectDate: any;
  selectMonthYear: any;
  fulltime: any;
  halftime: any;
  selectDay: any;
  carData2:any;
  carName: any;
  carPrice: any;
  carImage: any;
  carInside: any;
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
  carData: any;
  amenitiesDetails2: any;
  salevalue2: any;
  sale2: any;
  finalAmount2: any;
  airport_parking2: number;
  tolls2: number;
  theSate1: any;
  discount_description: any;
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
    this.selectDate = moment(this.data.ReturnDateDisp).format('DD');
        this.selectMonthYear = moment(this.data.ReturnDateDisp).format('MMM YYYY');
        this.selectDay = moment(this.data.ReturnDateDisp).format('dddd');
        this.fulltime = moment(this.data.ReturnDateTime).format('H:mm');
        this.halftime = moment(this.data.ReturnDateTime).format('h:mm A');
       
    const data = localStorage.getItem('car_detail2');
    this.carData2 = JSON.parse(data);
    console.log(this.carData2);

    this.carName = this.carData2.Vehicle_Name;
    this.carPrice = this.carData2.clsVehicleFinalRates.Rate;
    console.log(this.carData2.clsVehicleFinalRates.Rate)
    console.log(this.carData2.clsVehicleFinalRates.Inclusive_all_tax)
    this.carImage = this.carData2.Vehicle_Image;
    this.carInside = this.carData2.Luggage_Image;
    this.amenitiesDetails2 = this.carData2.clsVehicleAmenityDetails;
    console.log(this.amenitiesDetails2)
    this.airport_parking2 = Number(this.carData2.clsVehicleFinalRates.Airport_Parking);
    this.tolls2 = Number(this.carData2.clsVehicleFinalRates.Tolls);
    this.discount_description = this.carData2.clsVehicleFinalRates.Discount_Descripion;
   let SalesValues2 = this.carData2.clsVehicleFinalRates.Sales_tax;
    localStorage.setItem("salesTax2", JSON.stringify(SalesValues2));
    
    let congestion2 = this.data.CongestionSurchargeValue
let CongestionValue2=0;
if(congestion2>0){
  CongestionValue2 = (Number(this.carData2.clsVehicleFinalRates.Inclusive_all_tax)+ Number(congestion2))
  this.finalAmount2= CongestionValue2
}else{
  this.finalAmount2 = this.carData2.clsVehicleFinalRates.Inclusive_all_tax;
}
localStorage.setItem("final_rate2", JSON.stringify(this.finalAmount2));
console.log(this.data.CongestionSurchargeValue) 
    // var get_newData= localStorage.getItem('new_data');
    // this.data.new=get_newData;
    // console.log(this.data.new)
    var values = localStorage.getItem('finalValue2')
    console.log(values)
   }

  myId2 = null;


 ngOnInit() {
 }

  getAmenityCalculations(e,amid,price){
        
    console.log(price)
    console.log(e.detail.value.Value,amid);

    this.amenitiesDetails2 = this.carData2.clsVehicleAmenityDetails;
  console.log(this.amenitiesDetails2)
    var check= this.amenitiesDetails2.findIndex(x=>x.FK_AmenityID==amid);
    console.log(check);
    if(check != -1)
    {
    
      this.amenitiesDetails2[check].selectAmenityAmt=Number(e.detail.value.Value * this.amenitiesDetails2[check].AmenityPrice).toFixed(2);
      this.amenitiesDetails2[check].selectAmenityQty=e.detail.value.Value;
    
    }

    console.log('amenity details',this.amenitiesDetails2);
   localStorage.setItem('amenityData2', JSON.stringify(this.amenitiesDetails2))
   
   let calculation = Number(e.detail.value.Value) * Number(price);
   this.cal = calculation
    console.log(calculation)
    let total2 = 0;
 
console.log(this.carData2.clsVehicleFinalRates.Total_Fare);

  for(var i = 0; i < this.amenitiesDetails2.length; i++){
    //var v = this.cal[i];
    console.log(this.amenitiesDetails2[i].selectAmenityAmt)
    //if(this.amenitiesDetails[i].selectAmenityAmt >0){
      total2=total2+Number(this.amenitiesDetails2[i].selectAmenityAmt);
    //}

}
let Total_Fare2=0;
Total_Fare2=this.carData2.clsVehicleFinalRates.Total_Fare+total2;
let saletaxValue2=this.carData2.clsVehicleFinalRates.Sales_tax_value;
let SaleTaxAmount2=0;
if(saletaxValue2>0){
  SaleTaxAmount2=((Number(Total_Fare2)+Number(this.airport_parking2)+Number(this.tolls2))*Number(saletaxValue2)/100);
}
console.log(SaleTaxAmount2)
this.carData2.clsVehicleFinalRates.Sales_tax=SaleTaxAmount2;
this.finalAmount2 =Number((Total_Fare2+SaleTaxAmount2+this.data.CongestionSurchargeValue)).toFixed(2);
console.log(Number(SaleTaxAmount2).toFixed(2));
this.salevalue2 = SaleTaxAmount2;
console.log(this.salevalue2);
if (this.salevalue2 == 0){
  this.sale2 = null;
}
else{
  this.sale2 =Number(SaleTaxAmount2).toFixed(2);
}
console.log(this.sale2)
localStorage.setItem("salesTax2", JSON.stringify(this.sale2));
localStorage.setItem("final_rate2", JSON.stringify(this.finalAmount2));
console.log(total2);

 console.log(this.sum)
  this.data.AmenityId = amid;
    this.data.vehicleId= this.carData2.VehicleId;
    console.log(this.data.vehicleId);
    this.data.Qty= e.detail.value.Value;
  }
 
  stateChange(ev){
    // this.amenitiesDetails = this.carData.clsVehicleAmenityDetails;
this.theSate1=ev.detail.checked;
console.log(this.theSate1);
if(this.theSate1 == true){
var check= this.amenitiesDetails2.findIndex(x=>x.FK_AmenityID==6);
console.log(check);
if(check != -1)
{

  this.amenitiesDetails2[check].selectAmenityAmt=Number(6 * this.amenitiesDetails2[check].AmenityPrice).toFixed(2);
  this.amenitiesDetails2[check].selectAmenityQty=1;
}
console.log(this.amenitiesDetails2);
localStorage.setItem('amenityData2', JSON.stringify(this.amenitiesDetails2));
}else if(this.theSate1 == false){
  var check= this.amenitiesDetails2.findIndex(x=>x.FK_AmenityID==6);
  console.log(check);
  if(check != -1)
  {
   this.amenitiesDetails2[check].selectAmenityAmt=0;
    this.amenitiesDetails2[check].selectAmenityQty=0;
  }
  console.log(this.amenitiesDetails2);
  localStorage.setItem('amenityData2', JSON.stringify(this.amenitiesDetails2));
}
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FarecalculationsreturnPage
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

  goToPayment(){
    this.presentLoading().then(a => {
   this.router.navigate(['/filldetails']);
      this.loadingController.dismiss();
    });
  }
}
