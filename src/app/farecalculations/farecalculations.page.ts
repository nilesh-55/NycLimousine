import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-farecalculations',
  templateUrl: './farecalculations.page.html',
  styleUrls: ['./farecalculations.page.scss'],
})
export class FarecalculationsPage implements OnInit {
  carData: any;
  extraCharges: any;
  rate: any;
  finalRate: any;
  total_Price: string;
  Sales_tax_Span: any;
  amenities_fare: any;
  amenityFare: any;
  NewSales_tax: any;
  discount: any;
  Sales_tax_value: any;
  sales: any;
  details: string;
  data: any;
  congestionCharge: any;
  finalCalculation: any;
  hourlyRate: any;
  hours: any;
  servicetypes: any;
  waitingTime: any;
  minHours: any;
  discountedValue: any;
  afterDiscount: any;
  serviceName: any;
  total = 0 ;
  saleValue: any;
  subtotal: any;
  airport_parking: any;
  tolls: any;
  Sales_tax_Span2: any;
  rate2: string;
  carData2: any;
  extraCharges2: any;
  amenities_fare2: any;
  saleValue2: number;
  sales2: any;
  Sales_tax_value2: any;
  finalCalculation2: any;
  subtotal2: string;
  amenityFare2: any;
  final_Price: any;
  discount2: any;
  discountedValue2: string;
  afterDiscount2: string;
  discount_description: any;
  Hourly_discount_min_hours: any;
  hourlyCalculate: boolean;
  hourlyValue: any;
  discount_descriptionReturn: any;
  vehicleStopRates: any;
  locationstart: string;
  locationend: string;
  discountSpan: any;
  constructor(private modalController: ModalController) { 

    const data = localStorage.getItem('car_detail');
    this.carData = JSON.parse(data);
    console.log(this.carData);

    if(localStorage.getItem('all_detail')){
    this.details = localStorage.getItem('all_detail');
    this.data= JSON.parse(this.details);
    let congestion = this.data.CongestionSurchargeValue;
    this.congestionCharge = congestion
    // let Rate=0;
    // if(congestion>0){
    // Rate = (Number(this.carData.clsVehicleFinalRates.Inclusive_all_tax)+ Number(congestion))
    // this.finalRate = Rate
    // console.log(this.finalRate)
    // }else{
    //   this.finalRate = this.carData.clsVehicleFinalRates.Total_Fare;
    // }
    }
    this.finalRate = this.carData.clsVehicleFinalRates.Total_Fare;
    this.serviceName = this.data.TypeOfServiceName;
   
    this.extraCharges = this.carData.clsVehicleExtraCharges;
   
    this.discount = this.carData.clsVehicleFinalRates.Discount_Span;
    this.discount_description = this.carData.clsVehicleFinalRates.Discount_Descripion;
    //----------------Airport Parking-------------//
    if(this.carData.clsVehicleFinalRates.Airport_Parking == 0){
      this.airport_parking = null;
    }else if(this.carData.clsVehicleFinalRates.Airport_Parking == null){
      this.airport_parking = null;
    }else{
      this.airport_parking = Number(this.carData.clsVehicleFinalRates.Airport_Parking).toFixed(2);
    }
    //----------------Airport Parking-------------//

    //--------------------Tolls---------------------//
   if(this.carData.clsVehicleFinalRates.Tolls == 0){
      this.tolls = null;
    }else if(this.carData.clsVehicleFinalRates.Tolls == null){
      this.tolls = null;
    }else{
      this.tolls = Number(this.carData.clsVehicleFinalRates.Tolls).toFixed(2);
    }
    //--------------------Tolls---------------------//

    if(this.carData.clsVehicleFinalRates.Sales_tax != null){
      this.Sales_tax_Span = this.carData.clsVehicleFinalRates.Sales_tax;
      this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_Span;
    }
    // if(localStorage.getItem('salesTax')){
    //   const salesValue = localStorage.getItem('salesTax');
    //   this.sales = JSON.parse(salesValue);
    //   console.log(this.sales)
    //   this.Sales_tax_Span = Number(this.sales).toFixed(2);
    //   this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_value;
    // }

    
    // if(this.carData.clsVehicleFinalRates.Sales_tax != null){
   
    // }
    // var final_price = localStorage.getItem('Final_rate');
    // this.total_Price =final_price;



// var check = this.extraCharges.findIndex(x=>x.ExtraChargeSpan_val);
// if(check != -1)
// {
//   console.log(this.extraCharges[check].ExtraChargeSpan_val)
//   // this.extraCharges[check].ExtraChargeSpan_val=(Number(this.finalRate)*Number(this.extraCharges[check].ExtraChargeValue)/100);
//       console.log(this.extraCharges);
// }
// let saletaxValue=this.carData.clsVehicleFinalRates.Sales_tax_value;
//  console.log("sales tax addition",Number(this.finalRate) + Number(this.extraCharges[check].ExtraChargeSpan_val));
// this.Sales_tax_Span = (((Number(this.finalRate) + Number(this.extraCharges[check].ExtraChargeSpan_val)) * Number(saletaxValue))/100).toFixed(2);

// console.log(Number(this.Sales_tax_Span).toFixed(2));

// this.finalCalculation = (Number(this.finalRate) + Number(this.extraCharges[check].ExtraChargeSpan_val)+ Number(this.Sales_tax_Span)+ Number(this.congestionCharge)).toFixed(2);
// console.log(this.finalCalculation)



// var check = this.extraCharges.findIndex(x=>x.ExtraChargeSpan_val);
// if(check != -1)
// {
//   console.log(this.extraCharges[check].ExtraChargeSpan_val)
// }
// console.log(check)

this.oneWay();
this.hourly();
this.waitAndReturn();
this.roundtrip();
  }

  ngOnInit() {
    this.vehicleStopRates = this.carData.clsLiVehicleStopRates;
  }

oneWay(){
  let extracharge = 0;
  this.servicetypes = this.data.Event;

  if(this.serviceName == "One way"){
    console.log("One way", this.serviceName);
    const value1 = localStorage.getItem('fromLocation');
    this.locationstart = value1;
    const value2 = localStorage.getItem('toLocation');
   this.locationend = value2;
    this.rate = Number(this.carData.clsVehicleFinalRates.Rate).toFixed(2);
    this.discountSpan = this.carData.clsVehicleFinalRates.DiscountValWithoutSign;
    this.discountedValue = ((Number(this.discountSpan) * Number(this.rate))/100).toFixed(2);
    this.afterDiscount = (Number(this.rate) - Number(this.discountedValue)).toFixed(2);
    
    //for vehicle extra charges

    this.vehicleStopRates = this.carData.clsLiVehicleStopRates;
    var check = this.vehicleStopRates.findIndex(x=>x.Hourly_Rate);
    let stops = 0;
    if(check != -1)
    {
      
          for(var i = 0; i < this.vehicleStopRates.length; i++){
            console.log(this.vehicleStopRates[i].Hourly_Rate);
             stops = stops + this.vehicleStopRates[i].Hourly_Rate;
             }
          }
   if(this.discountSpan == null || 0){
      this.finalRate = this.carData.clsVehicleFinalRates.Rate + stops;
       }else{
      this.finalRate = this.afterDiscount + stops;
       }
        
  var check = this.extraCharges.findIndex(x=>x.ExtraChargeSpan_val);
  if(check != -1)
  {
    console.log(this.extraCharges[check].ExtraChargeSpan_val)
    this.extraCharges[check].ExtraChargeSpan_val=(Number(this.finalRate)*Number(this.extraCharges[check].ExtraChargeValue)/100).toFixed(2);
        console.log(this.extraCharges);
        for(var i = 0; i < this.extraCharges.length; i++){
          console.log(this.extraCharges[i].ExtraChargeSpan_val)
            extracharge=extracharge+Number(this.extraCharges[i].ExtraChargeSpan_val);
            this.extraCharges[i].NewExtraChargeValue = this.extraCharges[i].ExtraChargeSpan_val;
         }
         console.log(this.extraCharges)
         localStorage.setItem("extracharges", JSON.stringify(this.extraCharges));
  }
  console.log(check)
  
  if(localStorage.getItem('amenityData')){
    var amenities_data = localStorage.getItem('amenityData');
    this.amenities_fare = JSON.parse(amenities_data);
    console.log(this.amenities_fare)
    this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
  }
  this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
  if(localStorage.getItem('salesTax')){
    const salesValue = localStorage.getItem('salesTax');
    this.sales = JSON.parse(salesValue);
    console.log(this.sales)
    if(this.sales == 0){
this.Sales_tax_Span = null;
    }else if(this.sales == null){
      this.Sales_tax_Span = null;
    }else{
      this.Sales_tax_Span = Number(this.sales).toFixed(2);
    }
    console.log(this.Sales_tax_Span)
    this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_Span;
  }
  this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
  console.log(this.saleValue)
  // if(this.Sales_tax_Span != this.saleValue){
  //   this.subtotal = (Number(extracharge) + Number(this.rate)).toFixed(2);
  //   console.log("subtotal is", this.Sales_tax_Span > this.saleValue)
  // }
  if(localStorage.getItem('final_rate')){
    const FinalRate= localStorage.getItem('final_rate');
     this.finalCalculation = JSON.parse(FinalRate);
     }
     let finalValue = this.carData.clsVehicleFinalRates.Inclusive_all_tax;
     if(this.finalCalculation != finalValue){
      this.subtotal = (Number(extracharge) + Number(this.finalRate)).toFixed(2);
     }
  }  
}

hourly(){
  let total = 0;
  let extracharge = 0;
  this.servicetypes = this.data.Event;
  if(this.serviceName == "Hourly"){
    console.log(this.serviceName);
    this.Hourly_discount_min_hours = this.carData.clsVehicleFinalRates.Hourly_discount_min_hours;
    if(localStorage.getItem('numberofHours')){
      var newHourly = localStorage.getItem('numberofHours');
this.minHours = newHourly;
console.log(this.minHours)
    }else{
    this.minHours = this.carData.clsVehicleFinalRates.Hourly_min_hours;
    console.log(this.minHours)
    }

    this.hourlyRate=Number(this.carData.clsVehicleFinalRates.Hourly_Rate).toFixed(2);
    this.hours = this.carData.clsVehicleFinalRates.minHorly;
    this.servicetypes = this.data.Event;
    console.log(this.servicetypes)
   
    this.discountedValue = ((Number(this.carData.clsVehicleFinalRates.DiscountValWithoutSign) * Number(this.hourlyRate))/100).toFixed(2);
    this.afterDiscount = (Number(this.hourlyRate) - Number(this.discountedValue)).toFixed(2);
   
   
    
    if(this.carData.clsVehicleFinalRates.DiscountValWithoutSign != 0 && this.minHours >= this.Hourly_discount_min_hours){
      this.finalRate =Number((this.minHours * this.afterDiscount)).toFixed(2);
      this.hourlyCalculate = true;
    }else if(this.minHours < this.Hourly_discount_min_hours){
      this.finalRate =Number((this.minHours * this.hourlyRate)).toFixed(2);
      this.hourlyCalculate = false;
    }
  
    var check = this.extraCharges.findIndex(x=>x.ExtraChargeSpan_val);
    if(check != -1)
    {
      console.log(this.extraCharges[check].ExtraChargeSpan_val)
      this.extraCharges[check].ExtraChargeSpan_val=(Number(this.finalRate)*Number(this.extraCharges[check].ExtraChargeValue)/100).toFixed(2);
          console.log(this.extraCharges);
          for(var i = 0; i < this.extraCharges.length; i++){
            console.log(this.extraCharges[i].ExtraChargeSpan_val)
              extracharge=extracharge+Number(this.extraCharges[i].ExtraChargeSpan_val);
           }
    }
    if(localStorage.getItem('amenityData')){
      var amenities_data = localStorage.getItem('amenityData');
      this.amenities_fare = JSON.parse(amenities_data);
      console.log(this.amenities_fare)
      // console.log(this.amenities_fare.clsVehicleFinalRates.NewInclusivealltax)
      this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
      var check = this.amenities_fare.findIndex(x=>x.selectAmenityAmt);
      if(check != -1)
      {
       console.log(this.amenities_fare[check].selectAmenityAmt);
       }
       for(var i = 0; i < this.amenities_fare.length; i++){
        console.log(this.amenities_fare[i].selectAmenityAmt)
         total=total+Number(this.amenities_fare[i].selectAmenityAmt);
      }
  }

    let saletaxValue=this.carData.clsVehicleFinalRates.Sales_tax_value;
    if(localStorage.getItem('salesTax')){
      const salesValue = localStorage.getItem('salesTax');
      this.sales = JSON.parse(salesValue);
      console.log(this.sales)
  if(this.sales == 0){
        this.Sales_tax_Span = null;
            }else if(this.sales == null){
              this.Sales_tax_Span = null;
            }else{
              // this.Sales_tax_Span = Number(this.sales).toFixed(2);
              this.Sales_tax_Span = (((Number(this.finalRate) + Number(extracharge)+ Number(total)) * Number(saletaxValue))/100).toFixed(2);
   
            }
            console.log(this.Sales_tax_Span)

      // this.Sales_tax_Span = Number(this.sales).toFixed(2);
    }
    // else if(extracharge != 0){
    // this.Sales_tax_Span = (((Number(this.finalRate) + Number(extracharge)+ Number(total)) * Number(saletaxValue))/100).toFixed(2);
    // }


this.finalCalculation = (Number(this.finalRate)+ Number(extracharge)+ Number(total)+ Number(this.Sales_tax_Span)+ Number(this.congestionCharge)).toFixed(2);
 localStorage.setItem("finalValue", this.finalCalculation)
//  if(localStorage.getItem('final_rate')){
//   const FinalRate= localStorage.getItem('final_rate');
//      this.finalCalculation = JSON.parse(FinalRate);
//  } 
 // if(localStorage.getItem('final_rate')){
    //   const FinalRate= localStorage.getItem('final_rate');
    //    this.finalCalculation = JSON.parse(FinalRate);
    //    }  
      }
}

waitAndReturn(){
  this.servicetypes = this.data.Event;
console.log(this.serviceName)
if(this.serviceName =="Wait and Return"){
  let extracharge = 0;
  this.rate = Number(this.carData.clsVehicleFinalRates.Rate).toFixed(2);
  this.waitingTime = Number(this.carData.clsVehicleFinalRates.WaitingTimeCost).toFixed(2);
  console.log(this.waitingTime)
  var check = this.extraCharges.findIndex(x=>x.ExtraChargeSpan_val);
  if(check != -1)
  {
    console.log(this.extraCharges[check].ExtraChargeSpan_val)
    this.extraCharges[check].ExtraChargeSpan_val=((Number(this.rate) + Number(this.waitingTime))*Number(this.extraCharges[check].ExtraChargeValue)/100).toFixed(2);
        console.log(this.extraCharges);
      
        for(var i = 0; i < this.extraCharges.length; i++){
          console.log(this.extraCharges[i].ExtraChargeSpan_val)
            extracharge=extracharge+Number(this.extraCharges[i].ExtraChargeSpan_val);
         }

         this.finalRate= (Number(this.rate)+ Number(this.waitingTime)+ Number(extracharge)).toFixed(2);
  
        // for(var i = 0; i < this.extraCharges.length; i++){
        //   console.log(this.extraCharges[i].ExtraChargeSpan_val)
        //     extracharge=extracharge+Number(this.extraCharges[i].ExtraChargeSpan_val);
        //     this.extraCharges[i].NewExtraChargeValue = this.extraCharges[i].ExtraChargeSpan_val;
        //  }
        //  console.log(this.extraCharges)
        //  localStorage.setItem("extracharges", JSON.stringify(this.extraCharges));
  
      }
  let saletaxValue=this.carData.clsVehicleFinalRates.Sales_tax_value;
  if(localStorage.getItem('salesTax')){
   const salesValue = localStorage.getItem('salesTax');
    this.sales = JSON.parse(salesValue);
  // if(this.sales == 0){
  //     this.Sales_tax_Span = null;
  //         }else if(this.sales == null){
  //           this.Sales_tax_Span = null;
  //         }else{
            this.Sales_tax_Span = Number(this.sales).toFixed(2);
          // }
        }

  if(localStorage.getItem('amenityData')){
    var amenities_data = localStorage.getItem('amenityData');
    this.amenities_fare = JSON.parse(amenities_data);
    console.log(this.amenities_fare)
    // console.log(this.amenities_fare.clsVehicleFinalRates.NewInclusivealltax)
    this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
    // console.log(this.amenityFare)
    // this.total_Price= this.amenities_fare.clsVehicleFinalRates.NewInclusivealltax;
  // console.log(this.total_Price)
  
}
if(localStorage.getItem('final_rate')){
  const FinalRate= localStorage.getItem('final_rate');
   this.finalCalculation = JSON.parse(FinalRate);
   }
  }
}

roundtrip(){
  let extracharge = 0;
  this.servicetypes = this.data.Event;

  if(this.serviceName == "Round Trip"){
    console.log("Round Trip", this.serviceName);

    //for going
    this.rate = Number(this.carData.clsVehicleFinalRates.Rate).toFixed(2);
    this.discountedValue = ((Number(this.carData.clsVehicleFinalRates.DiscountValWithoutSign) * Number(this.rate))/100).toFixed(2);
    this.afterDiscount = (Number(this.rate) - Number(this.discountedValue)).toFixed(2);
    if(this.discountedValue == null || 0){
      this.finalRate = this.carData.clsVehicleFinalRates.Rate;
    }else{
      this.finalRate = this.afterDiscount;
    }
    //for vehicle extra charges
    
        
    var check = this.extraCharges.findIndex(x=>x.ExtraChargeSpan_val);
  if(check != -1)
  {
    console.log(this.extraCharges[check].ExtraChargeSpan_val)
    this.extraCharges[check].ExtraChargeSpan_val=(Number(this.finalRate)*Number(this.extraCharges[check].ExtraChargeValue)/100).toFixed(2);
        console.log(this.extraCharges);
        for(var i = 0; i < this.extraCharges.length; i++){
          console.log(this.extraCharges[i].ExtraChargeSpan_val)
            extracharge=extracharge+Number(this.extraCharges[i].ExtraChargeSpan_val);
            this.extraCharges[i].NewExtraChargeValue = this.extraCharges[i].ExtraChargeSpan_val;
         }
         console.log(this.extraCharges)
         localStorage.setItem("extracharges", JSON.stringify(this.extraCharges));
  }
  console.log(check)
  
  if(localStorage.getItem('amenityData')){
    var amenities_data = localStorage.getItem('amenityData');
    this.amenities_fare = JSON.parse(amenities_data);
    console.log(this.amenities_fare)
    this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
  }
  this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
  if(localStorage.getItem('salesTax')){
    const salesValue = localStorage.getItem('salesTax');
    this.sales = JSON.parse(salesValue);
    console.log(this.sales)
    if(this.sales == 0){
this.Sales_tax_Span = null;
    }else if(this.sales == null){
      this.Sales_tax_Span = null;
    }else{
      this.Sales_tax_Span = Number(this.sales).toFixed(2);
    }
    console.log(this.Sales_tax_Span)
    this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_Span;
  }
  this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
  console.log(this.saleValue)
  // if(this.Sales_tax_Span != this.saleValue){
  //   this.subtotal = (Number(extracharge) + Number(this.rate)).toFixed(2);
  //   console.log("subtotal is", this.Sales_tax_Span > this.saleValue)
  // }
  if(localStorage.getItem('final_rate')){
    const FinalRate= localStorage.getItem('final_rate');
     this.finalCalculation = JSON.parse(FinalRate);
     }
     let finalValue = this.carData.clsVehicleFinalRates.Inclusive_all_tax;
     if(this.finalCalculation != finalValue){
      this.subtotal = (Number(extracharge) + Number(this.finalRate)).toFixed(2);
     }

     //for return
  
     if(localStorage.getItem('car_detail2')){
      const data2 = localStorage.getItem('car_detail2');
      this.carData2 = JSON.parse(data2);
      console.log(this.carData2);
      this.discount2 = this.carData2.clsVehicleFinalRates.Discount_Span;
      let extracharge2 = 0;
     this.rate2 = Number(this.carData2.clsVehicleFinalRates.Rate).toFixed(2);
     this.discountedValue2 = ((Number(this.carData2.clsVehicleFinalRates.DiscountValWithoutSign) * Number(this.rate2))/100).toFixed(2);
    this.afterDiscount2 = (Number(this.rate2) - Number(this.discountedValue)).toFixed(2);
    this.discount_descriptionReturn = this.carData2.clsVehicleFinalRates.Discount_Descripion;
    if(this.discountedValue == null || 0){
      this.finalRate = this.carData.clsVehicleFinalRates.Rate;
    }else{
      this.finalRate = this.afterDiscount2;
    }
     //for vehicle extra charges
     
         this.finalRate = this.carData2.clsVehicleFinalRates.Rate;
   
         this.extraCharges2 = this.carData2.clsVehicleExtraCharges;
     var check = this.extraCharges2.findIndex(x=>x.ExtraChargeSpan_val);
   if(check != -1)
   {
     console.log(this.extraCharges2[check].ExtraChargeSpan_val)
     this.extraCharges2[check].ExtraChargeSpan_val=(Number(this.finalRate)*Number(this.extraCharges2[check].ExtraChargeValue)/100).toFixed(2);
         console.log(this.extraCharges2);
         for(var i = 0; i < this.extraCharges2.length; i++){
           console.log(this.extraCharges2[i].ExtraChargeSpan_val)
             extracharge2=extracharge2+Number(this.extraCharges2[i].ExtraChargeSpan_val);
             this.extraCharges2[i].NewExtraChargeValue = this.extraCharges2[i].ExtraChargeSpan_val;
          }
          console.log(this.extraCharges2)
          localStorage.setItem("extracharges2", JSON.stringify(this.extraCharges2));
   }
   console.log(check)
   
   if(localStorage.getItem('amenityData2')){
     var amenities_data = localStorage.getItem('amenityData2');
     this.amenities_fare2 = JSON.parse(amenities_data);
     console.log(this.amenities_fare2)
     this.amenityFare2 = this.amenities_fare2.clsVehicleAmenityDetails;
   }
   this.saleValue2 = Number(this.carData2.clsVehicleFinalRates.Sales_tax);
   if(localStorage.getItem('salesTax2')){
     const salesValue2 = localStorage.getItem('salesTax2');
     this.sales2 = JSON.parse(salesValue2);
     console.log(this.sales2)
     if(this.sales2 == 0){
 this.Sales_tax_Span2 = null;
     }else if(this.sales2 == null){
       this.Sales_tax_Span2 = null;
     }else{
       this.Sales_tax_Span2 = Number(this.sales2).toFixed(2);
     }
     console.log(this.Sales_tax_Span2)
     this.Sales_tax_value2 = this.carData2.clsVehicleFinalRates.Sales_tax_Span;
   }
   this.saleValue2 = Number(this.carData2.clsVehicleFinalRates.Sales_tax);
   console.log(this.saleValue2)
   // if(this.Sales_tax_Span != this.saleValue){
   //   this.subtotal = (Number(extracharge) + Number(this.rate)).toFixed(2);
   //   console.log("subtotal is", this.Sales_tax_Span > this.saleValue)
   // }
   if(localStorage.getItem('final_rate2')){
     const FinalRate2= localStorage.getItem('final_rate2');
      this.finalCalculation2 = JSON.parse(FinalRate2);
      console.log(this.finalCalculation);
      console.log(this.finalCalculation2);
      this.final_Price = (Number(this.finalCalculation) + Number(this.finalCalculation2)).toFixed(2);
      }
      let finalValue2 = this.carData2.clsVehicleFinalRates.Inclusive_all_tax;
      if(this.finalCalculation2 != finalValue2){
       this.subtotal2 = (Number(extracharge2) + Number(this.rate2)).toFixed(2);
      }
    }
    }  
}


  getRates(value){
    this.hourlyValue = value.detail.value.Text
     console.log(value.detail.value.Text);
    localStorage.setItem("numberofHours", value.detail.value.Text);
    if(this.discountedValue != 0 && this.hourlyValue >= this.Hourly_discount_min_hours){
        this.finalRate =Number((value.detail.value.Text * this.afterDiscount)).toFixed(2);
        this.hourlyCalculate = true;
   }else if(this.hourlyValue < this.Hourly_discount_min_hours){
    this.finalRate =Number((value.detail.value.Text * this.hourlyRate)).toFixed(2);
    this.hourlyCalculate = false;
    }else{
      this.finalRate =Number((value.detail.value.Text * this.hourlyRate)).toFixed(2);
    }
    localStorage.setItem("subtotal", this.finalRate);
    var check = this.extraCharges.findIndex(x=>x.ExtraChargeSpan_val);
if(check != -1)
{
  console.log(this.extraCharges[check].ExtraChargeSpan_val)
  this.extraCharges[check].ExtraChargeSpan_val=(Number(this.finalRate)*Number(this.extraCharges[check].ExtraChargeValue)/100).toFixed(2);
      console.log(this.extraCharges);
}

if(localStorage.getItem('amenityData')){
  var amenities_data = localStorage.getItem('amenityData');
  this.amenities_fare = JSON.parse(amenities_data);
  console.log(this.amenities_fare)
  // console.log(this.amenities_fare.clsVehicleFinalRates.NewInclusivealltax)
  this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
  var check = this.amenities_fare.findIndex(x=>x.selectAmenityAmt);
  if(check != -1)
  {
   console.log(this.amenities_fare[check].selectAmenityAmt);
   }
}
let total = 0;
for(var i = 0; i < this.amenities_fare.length; i++){
 console.log(this.amenities_fare[i].selectAmenityAmt)
   total=total+Number(this.amenities_fare[i].selectAmenityAmt);
}
console.log("amenity", total)
let extracharge = 0;
for(var i = 0; i < this.extraCharges.length; i++){
  console.log(this.extraCharges[i].ExtraChargeSpan_val)
  extracharge=extracharge+Number(this.extraCharges[i].ExtraChargeSpan_val);
}
console.log("extracharges", extracharge)

let saletaxValue=this.carData.clsVehicleFinalRates.Sales_tax_value;
 console.log("sales tax addition",Number(this.finalRate) + Number(extracharge));

 if(localStorage.getItem('salesTax')){
  const salesValue = localStorage.getItem('salesTax');
  this.sales = JSON.parse(salesValue);
// if(this.sales == 0){
//     this.Sales_tax_Span = null;
//         }else if(this.sales == null){
//           this.Sales_tax_Span = null;
//         }else{
          // this.Sales_tax_Span = Number(this.sales).toFixed(2);
      //   }
      }

 
this.Sales_tax_Span = (((Number(this.finalRate) + Number(extracharge)+ Number(total)) * Number(saletaxValue))/100).toFixed(2);
console.log(Number(this.Sales_tax_Span).toFixed(2));
localStorage.setItem("salesTax" , this.Sales_tax_Span);

this.finalCalculation = (Number(this.finalRate) + Number(extracharge)+ Number(this.Sales_tax_Span)+ Number(total)+ Number(this.congestionCharge)).toFixed(2);
localStorage.setItem(this.finalCalculation , "final_rate");  
console.log(this.finalCalculation)
}

  dismissModal() {
   this.modalController.dismiss(this.finalCalculation);
  }

  
}
