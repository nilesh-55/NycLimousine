import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
import { LoadingController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-passengers',
  templateUrl: './my-passengers.page.html',
  styleUrls: ['./my-passengers.page.scss'],
})
export class MyPassengersPage implements OnInit {
  formData = {"dfltWhere":"" , "IsActive":"" , "iColumns":"" , "iDisplayLength":"","UserID":""}
  passenger: any;
  userId: string;
  constructor(private envservice: EnvService, private loadingController: LoadingController,
    public appcomp : AppComponent) { }

  ngOnInit() {
    this.getPassengerDetails();
    if(localStorage.getItem("user_id")){
      this.appcomp.isLoggedin=localStorage.isLoggedin;
      this.appcomp.isLoggedOut=false;
    }
  }

  getPassengerDetails(){
    var id = localStorage.getItem("user_id")
    this.userId = id;
    // this.presentLoading().then(a => {
    this.formData.dfltWhere = "All";
    this.formData.IsActive = "true";
    this.formData.iColumns = "10";
    this.formData.iDisplayLength = "10";
    this.formData.UserID = this.userId;
this.envservice.getPassengerList(this.formData).subscribe((data:any) => {
   console.log(data);
  this.passenger = data.Data.Data.aaData;
  this.loadingController.dismiss();
  });
// });
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
