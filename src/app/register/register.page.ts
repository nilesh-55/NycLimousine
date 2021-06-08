import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form1: FormGroup;
  formData = {"FirstName":"" , "LastName":"" , "EmailId":"" , "Password":""}
  constructor(private envservice: EnvService,private _FB: FormBuilder, 
    public loadingController: LoadingController, private router: Router) { 

    this.form1 = this._FB.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    })
  }

  ngOnInit() {
    localStorage.removeItem('forgot_password');
  }

  registration(){
    if(this.form1.get('rePassword').value == this.form1.get('password').value){
      this.presentLoading().then(a => {
    this.formData.FirstName = this.form1.get('firstName').value;
    this.formData.LastName = this.form1.get('lastName').value;
    this.formData.EmailId = this.form1.get('email').value;
    this.formData.Password = this.form1.get('password').value;
    this.envservice.register(this.formData).subscribe((data: any) =>
    {
      localStorage.setItem("loginData", JSON.stringify(data.Data.Data));
      localStorage.setItem("user_id", data.Data.Data.Userid);
      localStorage.setItem("username", data.Data.Data.Email);
      localStorage.setItem("loginData", JSON.stringify(data.Data.Data));
if(data.Data.Data.Msg == 'Registration Sucess'){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.formData.EmailId)
    }
  };
  this.router.navigate(['/otp-confirmation'], navigationExtras);
  this.loadingController.dismiss();
    // this.router.navigate(['/otp-confirmation']);
    // this.loadingController.dismiss();
}
  },(error:HttpErrorResponse)=>{
    alert(error.error.Message)
    this.loadingController.dismiss();
  });
  });
  }else{
    alert('Password Mismatch!!')
  }
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
