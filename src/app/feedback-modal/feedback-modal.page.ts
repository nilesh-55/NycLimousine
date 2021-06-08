import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { EnvService } from '../services/env.service';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.page.html',
  styleUrls: ['./feedback-modal.page.scss'],
})
export class FeedbackModalPage implements OnInit {
  form: FormGroup;
  name: any;
  email: any;
  cellphone: any;
  message: any;

  constructor(private envservice: EnvService ,  private loadingController: LoadingController, 
    private modalController: ModalController, private _FB: FormBuilder) { }

  ngOnInit() {
    this.form = this._FB.group({
      Name : [''],
      email : [''],
      phone: [''],
      Message : ['']
    });
  }

  feedback(){
    this.presentLoading().then(a => {
    this.name = this.form.get('Name').value;
    this.email = this.form.get('email').value;
    this.cellphone = this.form.get('email').value;
    this.message = this.form.get('email').value;
    this.envservice.feedbackPost(this.name,this.email,this.cellphone,this.message).subscribe((data:any) => {
     console.log(data);
      if(data.Message == 'success'){
        alert('Thank You, We will get back to you soon !!')
        this.dismissModal();
      }
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

  dismissModal() {
    this.modalController.dismiss();
   }
}
