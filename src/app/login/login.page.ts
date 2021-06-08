import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnvService } from '../services/env.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  
  form: FormGroup;
  formData = {"UserName":"", "Password":""}
  email: any;
  public isLoggedin : boolean = false;
  public isLoggedOut : boolean = true;
  response: any;
  errorResponse: any;
  constructor(private _FB: FormBuilder, private envservice: EnvService,
    public loadingController: LoadingController, private router: Router,
    public alertController: AlertController, private route: ActivatedRoute, private googlePlus: GooglePlus) {

    this.form = this._FB.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
    }

  ngOnInit() {
    localStorage.isLoggedin=false;
    localStorage.isLoggedOut=true;
    console.log(localStorage);

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.email = JSON.parse(params.special);
      }
    });
    this.form.controls['username'].setValue(this.email);
  }

  onLogin(){
    this.presentLoading().then(a => {
    this.formData.UserName = this.form.get('username').value;
    this.formData.Password = this.form.get('password').value;
    // this.envservice.login(this.formData).then((data: any) =>{
      this.envservice.login(this.formData).then((data:any) => {
this.response = JSON.parse(data.data);
    console.log("data", data.status);
    console.log(this.response.Data.Data); // data received by server
    console.log(data.headers);
     localStorage.setItem("user_id", this.response.Data.Data.Userid);
      localStorage.setItem("username", this.response.Data.Data.Email);
      localStorage.setItem("loginData", JSON.stringify(this.response.Data.Data));
if(this.response.Message == 'success'){
  this.isLoggedin=true;
  this.isLoggedOut=false;
  localStorage.isLoggedin=true;
  localStorage.isLoggedOut=false;
  localStorage.NavigateMytrips=true;
  this.router.navigate(['/mytrips']);
  // this.router.navigate(['/mytrips']);
  
  this.loadingController.dismiss();  
}
  })
  .catch(error => {
this.errorResponse = JSON.parse(error.error)
    console.log("error", error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);
console.log("error", error);
alert(this.errorResponse.Message)
  this.loadingController.dismiss(); 
  });
      // console.log(data);
      // localStorage.setItem("user_id", data.Data.Data.Userid);
      // localStorage.setItem("username", data.Data.Data.Email);
      // localStorage.setItem("loginData", JSON.stringify(data.Data.Data));
// if(data.Message == 'success'){
//   this.isLoggedin=true;
//   this.isLoggedOut=false;
//   localStorage.isLoggedin=true;
//   localStorage.isLoggedOut=false;
//   localStorage.NavigateMytrips=true;
//   this.router.navigate(['/mytrips']);
//   // this.router.navigate(['/mytrips']);
  
//   this.loadingController.dismiss();  
// }
// },(error: HttpErrorResponse)=>{
//   alert(error.error.Message)
//   this.loadingController.dismiss(); 
// });
    });
  }


  hideShowPassword() {
    console.log('123')
   this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
   this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: '<ion-img src="/assets/icon/ajax-loader.gif"></ion-img>',
      cssClass:'custom-loader',
      spinner: null
      });
    return await loading.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
     header: 'Forgot Password',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Enter your email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (value) => {
            this.presentLoading().then(a => {
             this.envservice.sendotp(value.name1).subscribe((data:any) =>{
            console.log(data);
            if(data.Message == 'success'){
              let navigationExtras: NavigationExtras = {
                queryParams: {
                  special: JSON.stringify(value.name1)
                }
              };
              this.router.navigate(['/otp-confirmation'], navigationExtras);
              let passwordValue = '1';
              localStorage.setItem("forgot_password", passwordValue);
              this.loadingController.dismiss();
            }
            //  this.router.navigate(['/otp-confirmation'])
            //   this.loadingController.dismiss();
            // }
            },(error: HttpErrorResponse)=>{
              if(error.error.Message == "Email id not match"){
                this.presentAlert();
              }
             
              this.loadingController.dismiss(); 
            });
            });
          }
        }
      ]
    });

    await alert.present();
  }
 async presentAlert() {
    const alert = await this.alertController.create({
     // header: 'Alert',
     message: 'Email id not match',
      buttons: ['OK']
    });

    await alert.present();

  }

  googleLogin(){
    this.googlePlus.login({})
  .then(res => console.log(res))
  .catch(err => console.error(err));
  }
}
