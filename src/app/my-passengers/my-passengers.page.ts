import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { AddPassengerPage } from '../add-passenger/add-passenger.page';

@Component({
  selector: 'app-my-passengers',
  templateUrl: './my-passengers.page.html',
  styleUrls: ['./my-passengers.page.scss'],
})
export class MyPassengersPage implements OnInit {
  formData = {"dfltWhere":"" , "IsActive":"" , "iColumns":"" , "iDisplayLength":"","UserID":""};
  passenger: any;
  userId: string;
  response: any;
  errorResponse: any;
  passengerInfo: any;
  username: string;
  constructor(private envservice: EnvService, private loadingController: LoadingController,
    public appcomp : AppComponent, public modalController: ModalController, public alertController: AlertController,private toastCtrl: ToastController,
    ) { }

  ngOnInit() {
    this.getPassengerDetails();
    if(localStorage.getItem("user_id")){
      this.appcomp.isLoggedin=localStorage.isLoggedin;
      this.appcomp.isLoggedOut=false;
    }
    var user_name = localStorage.getItem('username')
    this.username = user_name;
  }

  getPassengerDetails(){
    var id = localStorage.getItem("user_id")
    this.userId = id;
    this.presentLoading().then(a => {
    this.formData.dfltWhere = "All";
    this.formData.IsActive = "true";
    this.formData.iColumns = "10";
    this.formData.iDisplayLength = "10";
    this.formData.UserID = this.userId;
this.envservice.getPassengerList(this.formData).then((data:any) => {
  this.response = JSON.parse(data.data);
   console.log(this.response);
  this.passenger = this.response.Data.Data.aaData;
  this.loadingController.dismiss();
  }).catch(error => {
    this.errorResponse = JSON.parse(error.error)
        console.log("error", error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
    console.log("error", error);
    alert(this.errorResponse.Message)
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

  async addPassenger(){
    localStorage.removeItem('addPassengers');
    const modal = await this.modalController.create({
      component: AddPassengerPage
    });
    modal.onDidDismiss()
    .then((data) => {
      this.getPassengerDetails();
    });
    return await modal.present();
}

async editPassenger(value){
  localStorage.setItem("addPassengers", JSON.stringify(value));
  const modal = await this.modalController.create({
    component: AddPassengerPage
  });
  modal.onDidDismiss()
  .then((data) => {
    this.getPassengerDetails();
  });
  return await modal.present();
}

deletePassenger(values){
  localStorage.setItem("addPayments", JSON.stringify(values));
  if(localStorage.getItem('addPayments')){
    var paymentDetails = localStorage.getItem('addPayments');
    this.passengerInfo = JSON.parse(paymentDetails);
    console.log(this.passengerInfo);
  }
  this.presentAlertConfirm();
}
async presentAlertConfirm() {
  const alert = await this.alertController.create({
    message: 'Are you sure want to Delete ?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
        }
      }, {
        text: 'Yes',
        handler: () => {
          this.presentLoading().then(a => {
       this.envservice.deletePassenger(this.passengerInfo.PassengerId,this.userId,this.username).then((data:any) =>{
        this.response = JSON.parse(data.data);
        console.log(this.response);
        if(this.response.Message == 'success'){
this.presentToast(this.response.Data);
this.loadingController.dismiss(); 
this.getPassengerDetails();
}
       })
       .catch(error => {
        this.errorResponse = JSON.parse(error.error)
            console.log("error", error.status);
            console.log(this.errorResponse); // error message as string
            console.log(error.headers);
          this.loadingController.dismiss(); 
          });
 
        });
        }
      }
    ]
  });

  await alert.present();
}

async presentToast(info) {
  const toast = await this.toastCtrl.create({
    message: info,
    duration: 2000
  });
  toast.present();
}
}
