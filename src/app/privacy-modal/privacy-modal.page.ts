import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-privacy-modal',
  templateUrl: './privacy-modal.page.html',
  styleUrls: ['./privacy-modal.page.scss'],
})
export class PrivacyModalPage implements OnInit {
  privacyStatement: any;
  
  constructor(public modalController: ModalController, public loadingController: LoadingController,
    private envservice: EnvService) { }

  ngOnInit() {
    this.presentLoading().then(a => {
   this.envservice.privacyStatement().subscribe((data: any) => {
console.log(data.Data);
this.privacyStatement = data.Data;
this.loadingController.dismiss();
   });
   });
  }

  dismissModal(){
    this.modalController.dismiss();
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
