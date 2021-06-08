import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { EnvService } from '../services/env.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-otp-confirmation',
  templateUrl: './otp-confirmation.page.html',
  styleUrls: ['./otp-confirmation.page.scss'],
})
export class OtpConfirmationPage implements OnInit {
  email: any;
  form: FormGroup;
  otp:string;
  forgotPasswordvalue: string;
  otpVerification: boolean;
  newPasssword: boolean;
  re_enterPassword: any;
  newEnterPassword: any;

  constructor(private router: Router, private route: ActivatedRoute, private envservice: EnvService,
    public loadingController: LoadingController) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.email = JSON.parse(params.special);
      }
    });

    var value = localStorage.getItem("forgot_password");
    this.forgotPasswordvalue = value;
    console.log(this.forgotPasswordvalue);
    this.otpVerification = true;
    this.newPasssword = false;
  }

  ngOnInit() {
  }

  enterOtp(){
    this.presentLoading().then(a => {
 this.envservice.confirmOtp(this.email, this.otp).subscribe((data:any)=>{
   if(data.Data == 'OTP Match'){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.email)
      }
    };
    if(this.forgotPasswordvalue == '1'){
      this.otpVerification = false;
      this.newPasssword = true; 
      
    //  this.getnewPassword();
    
    }else{
    this.router.navigate(['/mytrips'], navigationExtras);
    this.loadingController.dismiss();
    }
   }
console.log(data);
 },(error:HttpErrorResponse)=>
 alert(error.error.Message));
 this.loadingController.dismiss();
});
  }

  getnewPassword(){
    this.presentLoading().then(a => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(this.email)
        }
      };
      if(this.newEnterPassword == this.re_enterPassword){
    this.envservice.getNewPassword(this.re_enterPassword, this.email).subscribe((data:any)=>{
      if(data.Data == 'password Reset'){
     this.router.navigate(['/login'], navigationExtras);
    // this.loadingController.dismiss();
    }
            },(error:HttpErrorResponse)=>
            alert(error.error.Message));
            this.loadingController.dismiss();
          }else{
            alert('Password Mismatch!!')
            this.loadingController.dismiss();
          }
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
