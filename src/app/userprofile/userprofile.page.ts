import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {
  password: boolean;
  form: FormGroup;
  profile: any;
  email: any;
  firstname: any;
  lastname: any;
  repeatPassword: any;
  telephone: any;
  
  constructor(private envservice: EnvService, private _FB: FormBuilder,public loadingController: LoadingController,
    public appcomp : AppComponent) {
    this.form = this._FB.group({
      Firstname : [''],
      Lastname : [''],
      email : [''],
      dob : [''],
      telephone: ['']
    });
    const value = localStorage.getItem('loginData');
    this.profile = JSON.parse(value);
    console.log(this.profile);
    this.email = this.profile.Email;
    this.firstname = this.profile.FirstName;
    this.lastname = this.profile.LastName;
   }

  ngOnInit() {
     if(localStorage.getItem("user_id")){
      this.appcomp.isLoggedin=localStorage.isLoggedin;
      this.appcomp.isLoggedOut=false;
    }
  }

  updateProfile(){
   // this.password= this.form.get('dob').value;\
   this.presentLoading().then(a => {
    this.telephone = this.form.get('telephone').value;
     
this.envservice.updateProfile(this.firstname,this.lastname,this.email,this.telephone,this.email).subscribe((data:any) =>{
if(data.Message == 'success'){
  alert(data.Data)
  this.loadingController.dismiss();
}
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
}
