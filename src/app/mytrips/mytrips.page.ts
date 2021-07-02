import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
import * as moment from 'moment';
import { AppComponent } from '../app.component';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.page.html',
  styleUrls: ['./mytrips.page.scss'],
})
export class MytripsPage implements OnInit {
  formData = {"dfltWhere":"" , "IsActive":"" , "iColumns":"" , "iDisplayLength":"","UserID":""}
  myTrips: any;
  userId: string;
  selectMonthYear: string;
  selectDay: string;
  selectDate: string;
  isLoggedin: any;
  isLoggedOut: any;
  errorResponse: any;
  response: any;

  

  constructor(private envservice: EnvService, public appcomp: AppComponent, public loadingController: LoadingController) { 
    if(localStorage.getItem("user_id")){
      this.appcomp.isLoggedin=localStorage.isLoggedin;
      this.appcomp.isLoggedOut=false;
    }
  }

  ngOnInit() {
    this.tripList();
  //   this.isLoggedin=localStorage.isLoggedin;
  // this.isLoggedOut=localStorage.isLoggedOut;
  }

  tripList() {
    var id = localStorage.getItem("user_id")
    this.userId = id;
    this.presentLoading().then(a => {
    this.formData.dfltWhere = "All";
    this.formData.IsActive = "true";
    this.formData.iColumns = "10";
    this.formData.iDisplayLength = "10";
    this.formData.UserID = this.userId;
    this.envservice.getTripList(this.formData).then((data: any) => {
      this.response = JSON.parse(data.data);
     console.log(this.response);
      // console.log(data.Data.Data.aaData);
      this.myTrips = this.response.Data.Data.aaData;
      let date = this.response.Data.Data.aaData.Pickup_Date;
      let monthYear = moment(date).add(0, 'year').format('MMM YYYY');
      let datttt = moment(date).format('DD');
      let day = moment(date).format('dddd');
      this.selectMonthYear = monthYear;
      this.selectDay = datttt;
      this.selectDate = day;
      this.loadingController.dismiss();
      }).catch(error => {
        this.errorResponse = JSON.parse(error.error)
            console.log("error", error.status);
            console.log(this.errorResponse); // error message as string
            console.log(error.headers);
          this.loadingController.dismiss(); 
          });
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
      cssClass:'custom-loader',
      spinner: null
      });
    return await loading.present();
  }
}
