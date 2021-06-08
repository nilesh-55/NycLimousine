import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-modalpage',
  templateUrl: './modalpage.page.html',
  styleUrls: ['./modalpage.page.scss'],
})
export class ModalpagePage implements OnInit {
  agreement: any;
  response: any;
  errorResponse: any;

  constructor(private envservice: EnvService, public modalController: ModalController, public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading().then(a => {
    this.envservice.getTermsConditions()
  .then((data:any) => {
console.log(data.data); 
this.response = JSON.parse(data.data);
    console.log("data", data.status);
    console.log(this.response); // data received by server
    console.log(data.headers); 
this.agreement = this.response.Data;
this.loadingController.dismiss(); 
  }).catch(error => {
    this.errorResponse = JSON.parse(error.error)
        console.log("error", error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
    console.log("error", error);
    alert(this.errorResponse.Message)
      this.loadingController.dismiss(); 
      });;
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

  dismissModal() {
    this.modalController.dismiss();
  }

}
