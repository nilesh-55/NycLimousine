import { Component } from '@angular/core';

import { Platform, ModalController, AlertController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { PrivacyModalPage } from './privacy-modal/privacy-modal.page';
import { LoginPage } from './login/login.page';
import { LegalpagePage } from './legalpage/legalpage.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  userId: string;
  appPages: { title: string; url: string; icon: string; }[];
 isLoggedin: boolean;
  user: string;
  isLoggedOut: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private router: Router, private modalController: ModalController, 
    public loginPanel: LoginPage, public alertController: AlertController, private loadingController: LoadingController) {
    this.initializeApp();
   }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(localStorage.getItem("user_id")){
        this.isLoggedOut = false;
        this.isLoggedin = true;
        }else{
          this.isLoggedOut = true;
          this.isLoggedin = false;
        }
    });
  }

  logOut(){
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      message: 'Are you sure want to <strong>Logout</strong>?',
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
            localStorage.clear();
     this.isLoggedin=false;
    this.isLoggedOut=true;
   this.router.navigate(['/home']);
   this.loadingController.dismiss();
          });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
      cssClass:'custom-loader',
      spinner: null
    });
    return await loading.present();
  }

  ngOnInit()
  { 
    this.isLoggedin=localStorage.isLoggedin;
    this.isLoggedOut=this.isLoggedOut 
  }
 
  async privacyPage(){
    const modal = await this.modalController.create({
      component: PrivacyModalPage,
    });
    return await modal.present();
  }

  async legalpage(){
    const modal = await this.modalController.create({
      component: LegalpagePage,
    });
    return await modal.present();
  }
}
