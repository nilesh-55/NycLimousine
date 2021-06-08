import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { EnvService } from '../services/env.service';
import { ToastController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vehicles-return-page',
  templateUrl: './vehicles-return-page.page.html',
  styleUrls: ['./vehicles-return-page.page.scss'],
})
export class VehiclesReturnPagePage implements OnInit {
  locationType: any;
  FullTime: string;
  HalfTime: string;
  servicetypes: any;
  roundtrip: any;
  user(user: any): any {
    throw new Error("Method not implemented.");
  }
  data: any;
  selectDate: any;
  fulltime: any;
  halftime: any;
  message: any;
  response: any;
  selectMonthYear: any;
  selectDay: any;
  locationstart: string;
  locationend: string;
  datepikup: string;
  timepickup: string;
  vehicleName: any;
  vehicleDetails: any;
  fareRateDetails: any;
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private envservice: EnvService,
    private toastCtrl: ToastController) {

    // this.activatedRoute.queryParams.subscribe(params => {
    //   if (params && params.formData) {
    //     this.data = JSON.parse(params.formData);
    //     console.log(this.data)
    const data = localStorage.getItem('all_detail');
    this.data = JSON.parse(data);
    console.log(this.data);
    this.locationType =this.data.FromLocationDetail.Location_Type;
    
    const value1 = localStorage.getItem('fromLocation');
    this.locationstart = value1;
    const value2 = localStorage.getItem('toLocation');
   this.locationend = value2;
        this.selectDate = moment(this.data.ReturnDateDisp).format('DD');
        this.selectMonthYear = moment(this.data.ReturnDateDisp).format('MMM YYYY');
        this.selectDay = moment(this.data.ReturnDateDisp).format('dddd');
        this.FullTime = moment(this.data.ReturnDateTime).format('H:mm');
        this.HalfTime = moment(this.data.ReturnDateTime).format('h:mm A');
       
        this.vehicleDetails= this.data.clsReturnVehicelDetail;
        console.log(this.vehicleDetails)
        
        this.vehicleName= this.data.clsVehicelDetail.Vehicle_Name;
        this.servicetypes = this.data.Event;
        console.log(this.servicetypes)
    //   }
    // });
  
}

ionViewWillEnter(){
  localStorage.removeItem("amenityData2");
}

  ngOnInit() {
    this.roundtrip = this.data.TypeOfServiceName;
   }
   viewDetail(item:any){
     console.log(item);
     localStorage.setItem('car_detail2',JSON.stringify(item));
     this.router.navigate(['/select-returnvehicle']);
   }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: this.message,
      duration: 2000
    });
    toast.present();
  }

  // getRates(v){
  //   console.log(v.detail.value.Text)
  //   console.log(v)
  // }
}
