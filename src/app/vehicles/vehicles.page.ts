import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {
  locationType: any;
  FullTime: string;
  HalfTime: string;
  roundtrip: any;
  locationAddress: any;
  serviceName: any;
  data: any;
  selectDate: any;
  fulltime: any;
  halftime: any;
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
  minimumHour: string;

  constructor(private router: Router) {

    const data = localStorage.getItem('all_detail');
    this.data = JSON.parse(data);
    console.log(this.data);
    this.locationType = this.data.FromLocationDetail.Location_Type;

    const value = localStorage.getItem('fromLocation');
    this.locationstart = value;
    const value2 = localStorage.getItem('toLocation');
    this.locationend = value2;
    this.selectDate = moment(this.data.PickUpDateDisp).format('DD');
    this.selectMonthYear = moment(this.data.PickUpDateDisp).format('MMM YYYY');
    this.selectDay = moment(this.data.PickUpDateDisp).format('dddd');
    this.FullTime = moment(this.data.PickupDateTime).format('H:mm');
    this.HalfTime = moment(this.data.PickupDateTime).format('h:mm A');

    this.vehicleDetails = this.data.clsVehicelDetail;
    console.log(this.vehicleDetails)

    this.vehicleName = this.data.clsVehicelDetail.Vehicle_Name;
    this.serviceName = this.data.TypeOfServiceName;
  }

  ngOnInit() {
    this.roundtrip = this.data.TypeOfServiceName;
    localStorage.removeItem('salesTax');
    localStorage.removeItem('amenityData');
    localStorage.removeItem('salesTax2');
    localStorage.removeItem('amenityData2');

    const val = localStorage.getItem("noofHours");
    this.minimumHour = val;
console.log(this.minimumHour);
  }

  ionViewWillEnter(){
    localStorage.removeItem('numberofHours');
     localStorage.removeItem("amenityData");
  }

  viewDetail(item: any) {
    console.log(item);
    localStorage.setItem('car_detail', JSON.stringify(item));
    this.router.navigate(['/selectvehicle']);
  }
}
