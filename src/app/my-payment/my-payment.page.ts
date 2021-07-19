import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvService } from '../services/env.service';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { PaymentModalPage } from '../payment-modal/payment-modal.page';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-payment',
  templateUrl: './my-payment.page.html',
  styleUrls: ['./my-payment.page.scss'],
})
export class MyPaymentPage implements OnInit {
  formData = {"dfltWhere":"" , "IsActive":"" , "iColumns":"" , "iDisplayLength":"","UserID":""}
  payments: any;
  userId: string;
  paymentInfo: any;
  username: string;
  response: any;
  constructor(private router:Router, private envservice: EnvService, public modalController: ModalController,
    private loadingController: LoadingController, public appcomp : AppComponent,public alertController: AlertController) { }

  ngOnInit() {
    // this.getPaymentDetails();
    if(localStorage.getItem("user_id")){
      this.appcomp.isLoggedin=localStorage.isLoggedin;
      this.appcomp.isLoggedOut=false;
    }
    var user_name = localStorage.getItem('username')
    this.username = user_name;
  }

  ionViewWillEnter(){
    this.getPaymentDetails();
  }

  async addPayment(){
    localStorage.removeItem('addPayments');
    const modal = await this.modalController.create({
      component: PaymentModalPage
    });
    modal.onDidDismiss()
      .then((data) => {
        this.getPaymentDetails();
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

  getPaymentDetails(){
    var id = localStorage.getItem("user_id")
    this.userId = id;
    this.presentLoading().then(a => {
    this.formData.dfltWhere = "All";
    this.formData.IsActive = "true";
    this.formData.iColumns = "10";
    this.formData.iDisplayLength = "10";
    this.formData.UserID = this.userId;
this.envservice.getPaymentList(this.formData).then((data:any) => {
  this.response = JSON.parse(data.data);
  console.log(this.response);
  this.payments = this.response.Data.Data.aaData;
  this.loadingController.dismiss();
  });
});
  }

  async presentModal(values) {
    console.log(values);
    localStorage.setItem("addPayments", JSON.stringify(values));
    const modal = await this.modalController.create({
      component: PaymentModalPage
    });
    return await modal.present();
  }

  deletePayment(values){
    localStorage.setItem("addPayments", JSON.stringify(values));
    if(localStorage.getItem('addPayments')){
      var paymentDetails = localStorage.getItem('addPayments');
      this.paymentInfo = JSON.parse(paymentDetails);
      console.log(this.paymentInfo);
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
         this.envservice.deletePayment(this.paymentInfo.CCInfoId,this.username,this.userId).subscribe((data:any) =>{
console.log(data);
if(data.Message == 'success'){
  this.alertInfo();
 this.getPaymentDetails();
}
         });
   
          });
          }
        }
      ]
    });

    await alert.present();
  }
  alertInfo() {
    alert('Card Info deleted Successfully..!!')
    this.loadingController.dismiss();
  }
}
