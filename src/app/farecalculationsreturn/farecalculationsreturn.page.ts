import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-farecalculationsreturn',
  templateUrl: './farecalculationsreturn.page.html',
  styleUrls: ['./farecalculationsreturn.page.scss'],
})
export class FarecalculationsreturnPage implements OnInit {
  carData: any;
  details: string;
  data: any;
  congestionCharge: any;
  finalRate: any;
  serviceName: any;
  extraCharges: any;
  discount: any;
  airport_parking: any;
  tolls: any;
  Sales_tax_Span: any;
  servicetypes: any;
  rate: string;
  amenities_fare: any;
  amenityFare: any;
  saleValue: number;
  sales: any;
  Sales_tax_value: any;
  finalCalculation: any;
  subtotal: string;
  carData2: any;
  rate2: string;
  extraCharges2: any;
  amenities_fare2: any;
  amenityFare2: any;
  saleValue2: number;
  sales2: any;
  Sales_tax_Span2: any;
  Sales_tax_value2: any;
  finalCalculation2: any;
  subtotal2: string;
  discountedValue: string;
  afterDiscount: string;
  discount_description: any;

  constructor(private modalController: ModalController) { 
  
  }

  ngOnInit() {
    const data = localStorage.getItem('car_detail');
    this.carData = JSON.parse(data);
    console.log(this.carData);

    if(localStorage.getItem('all_detail')){
    this.details = localStorage.getItem('all_detail');
    this.data= JSON.parse(this.details);
    let congestion = this.data.CongestionSurchargeValue;
    this.congestionCharge = congestion;
    }
    this.finalRate = this.carData.clsVehicleFinalRates.Total_Fare;
    this.serviceName = this.data.TypeOfServiceName;
   
    this.extraCharges = this.carData.clsVehicleExtraCharges;
   
    this.discount = this.carData.clsVehicleFinalRates.Discount_Span;
    
   

    if(this.carData.clsVehicleFinalRates.Sales_tax != null){
      this.Sales_tax_Span = this.carData.clsVehicleFinalRates.Sales_tax;
      this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_Span;
    }
    this.roundtrip();
  }

  roundtrip(){
    let extracharge = 0;
    this.servicetypes = this.data.Event;
  
    if(this.serviceName == "Round Trip"){
      console.log("Round Trip", this.serviceName);
  
      //for going
  //     this.rate = Number(this.carData.clsVehicleFinalRates.Rate).toFixed(2);
    //   this.discountedValue = ((Number(this.carData2.clsVehicleFinalRates.DiscountValWithoutSign) * Number(this.rate))/100).toFixed(2);
    // this.afterDiscount = (Number(this.rate2) - Number(this.discountedValue)).toFixed(2);
  //   if(this.discountedValue == null || 0){
  //     this.finalRate = this.carData.clsVehicleFinalRates.Rate;
  //   }else{
  //     this.finalRate = this.afterDiscount;
  //   }
  //     //for vehicle extra charges
      
  //         this.finalRate = this.carData.clsVehicleFinalRates.Rate;
    
  //     var check = this.extraCharges.findIndex(x=>x.ExtraChargeSpan_val);
  //   if(check != -1)
  //   {
  //     console.log(this.extraCharges[check].ExtraChargeSpan_val)
  //     this.extraCharges[check].ExtraChargeSpan_val=(Number(this.finalRate)*Number(this.extraCharges[check].ExtraChargeValue)/100).toFixed(2);
  //         console.log(this.extraCharges);
  //         for(var i = 0; i < this.extraCharges.length; i++){
  //           console.log(this.extraCharges[i].ExtraChargeSpan_val)
  //             extracharge=extracharge+Number(this.extraCharges[i].ExtraChargeSpan_val);
  //             this.extraCharges[i].NewExtraChargeValue = this.extraCharges[i].ExtraChargeSpan_val;
  //          }
  //          console.log(this.extraCharges)
  //          localStorage.setItem("extracharges", JSON.stringify(this.extraCharges));
  //   }
  //   console.log(check)
    
  //   if(localStorage.getItem('amenityData')){
  //     var amenities_data = localStorage.getItem('amenityData');
  //     this.amenities_fare = JSON.parse(amenities_data);
  //     console.log(this.amenities_fare)
  //     this.amenityFare = this.amenities_fare.clsVehicleAmenityDetails;
  //   }
  //   this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
  //   if(localStorage.getItem('salesTax')){
  //     const salesValue = localStorage.getItem('salesTax');
  //     this.sales = JSON.parse(salesValue);
  //     console.log(this.sales)
  //     if(this.sales == 0){
  // this.Sales_tax_Span = null;
  //     }else if(this.sales == null){
  //       this.Sales_tax_Span = null;
  //     }else{
  //       this.Sales_tax_Span = Number(this.sales).toFixed(2);
  //     }
  //     console.log(this.Sales_tax_Span)
  //     this.Sales_tax_value = this.carData.clsVehicleFinalRates.Sales_tax_Span;
  //   }
  //   this.saleValue = Number(this.carData.clsVehicleFinalRates.Sales_tax);
  //   console.log(this.saleValue)
  //   // if(this.Sales_tax_Span != this.saleValue){
  //   //   this.subtotal = (Number(extracharge) + Number(this.rate)).toFixed(2);
  //   //   console.log("subtotal is", this.Sales_tax_Span > this.saleValue)
  //   // }
  //   if(localStorage.getItem('final_rate')){
  //     const FinalRate= localStorage.getItem('final_rate');
  //      this.finalCalculation = JSON.parse(FinalRate);
  //      }
  //      let finalValue = this.carData.clsVehicleFinalRates.Inclusive_all_tax;
  //      if(this.finalCalculation != finalValue){
  //       this.subtotal = (Number(extracharge) + Number(this.rate)).toFixed(2);
  //      }
  
       //for return
    
       if(localStorage.getItem('car_detail2')){
        const data2 = localStorage.getItem('car_detail2');
        this.carData2 = JSON.parse(data2);
        console.log(this.carData2);
        let extracharge2 = 0;
       this.rate2 = Number(this.carData2.clsVehicleFinalRates.Rate).toFixed(2);
       this.discountedValue = ((Number(this.carData2.clsVehicleFinalRates.DiscountValWithoutSign) * Number(this.rate2))/100).toFixed(2);
       this.afterDiscount = (Number(this.rate2) - Number(this.discountedValue)).toFixed(2);
       this.discount_description = this.carData2.clsVehicleFinalRates.Discount_Descripion;
        //----------------Airport Parking-------------//
    if(this.carData2.clsVehicleFinalRates.Airport_Parking == 0){
      this.airport_parking = null;
    }else if(this.carData2.clsVehicleFinalRates.Airport_Parking == null){
      this.airport_parking = null;
    }else{
      this.airport_parking = Number(this.carData2.clsVehicleFinalRates.Airport_Parking).toFixed(2);
    }
    //----------------Airport Parking-------------//

    //--------------------Tolls---------------------//
   if(this.carData2.clsVehicleFinalRates.Tolls == 0){
      this.tolls = null;
    }else if(this.carData2.clsVehicleFinalRates.Tolls == null){
      this.tolls = null;
    }else{
      this.tolls = Number(this.carData2.clsVehicleFinalRates.Tolls).toFixed(2);
    }
    //--------------------Tolls---------------------//

       //for vehicle extra charges
       
       if(this.discountedValue == null || 0){
        this.finalRate = this.carData2.clsVehicleFinalRates.Rate;
      }else{
        this.finalRate = this.afterDiscount;
      }
        
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
        }
        let finalValue2 = this.carData2.clsVehicleFinalRates.Inclusive_all_tax;
        if(this.finalCalculation2 != finalValue2){
         this.subtotal2 = (Number(extracharge2) + Number(this.finalRate)).toFixed(2);
        }
      }
      }  
  }

  dismissModal() {
    this.modalController.dismiss();
   }
}
