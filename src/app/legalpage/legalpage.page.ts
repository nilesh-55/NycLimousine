import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-legalpage',
  templateUrl: './legalpage.page.html',
  styleUrls: ['./legalpage.page.scss'],
})
export class LegalpagePage implements OnInit {
  legacyStatement: any;

  constructor(public loadingController: LoadingController, private envservice: EnvService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.presentLoading().then(a => {
      this.envservice.legacyStatement()
    .subscribe((data:any) => {
  this.legacyStatement = data.Data;
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

  dismissModal(){
    this.modalController.dismiss();
  }

}
