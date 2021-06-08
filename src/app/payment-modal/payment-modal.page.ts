import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { EnvService } from '../services/env.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.page.html',
  styleUrls: ['./payment-modal.page.scss'],
})
export class PaymentModalPage implements OnInit {
  paymentInfo: any;
  CardNumber: any;
  CCExpiryMonth: any;
  CCExpiryYear: any;
  CVVNumber: any;
  CardHolderName: any;
  BillingAddress1: any;
  BillingAddress2: any;
  BillingCity: any;
  cardType: any;
  BillingState: any;
  BillingZip: any;
  BillingCountry: any;
  form: FormGroup;
  formData = {"CCInfoId":"", "FKUserId":"", "CardNumber":"", "CVVNumber":"", "CCCardType":"", "CCExpiryMonth":"",
   "CCExpiryYear":"", "CardHolderName":"", "BillingCity":"", "BillingAddress1":"", "BillingAddress2":"",
    "FromScreen":"", "BillingState":"", "BillingZip":"", "BillingCountry":"", "IsDeleted":"","username":"","userid":""}
  cardYear: any;
  username: string;
  userId: string;

  constructor(public modalController: ModalController,private envservice: EnvService,private _FB: FormBuilder,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.form = this._FB.group({
      CardType : ['', Validators.required],
      CardNumber : ['', Validators.required],
      CCExpiryMonth : ['', Validators.required],
      CCExpiryYear : ['', Validators.required],
      CVVNumber : ['', Validators.required],
      CardHolderName : ['', Validators.required],
      BillingAddress1 : ['', Validators.required],
      BillingAddress2 : [''],
      BillingCity : ['', Validators.required],
      BillingState : ['', Validators.required],
      BillingZip : ['', Validators.required],
      BillingCountry : ['', Validators.required],
      });
    this.cardInfo();
   this.getCardYear();
    var value = localStorage.getItem("username");
    this.username = value;
    var id = localStorage.getItem("user_id")
    this.userId = id;
    }

  cardInfo(){
    if(localStorage.getItem('addPayments')){
      var paymentDetails = localStorage.getItem('addPayments');
      this.paymentInfo = JSON.parse(paymentDetails);
      console.log(this.paymentInfo);
      this.cardType = this.paymentInfo.CCCardType;
      this.CardNumber = this.paymentInfo.CardNumber;
       this.CCExpiryMonth = this.paymentInfo.CCExpiryMonth;
      this.CCExpiryYear = this.paymentInfo.CCExpiryYear;
      this.CVVNumber = this.paymentInfo.CVVNumber;
      this.CardHolderName = this.paymentInfo.CardHolderName;
      this.BillingAddress1 = this.paymentInfo.BillingAddress1;
      this.BillingAddress2 = this.paymentInfo.BillingAddress2;
      this.BillingCity = this.paymentInfo.BillingCity;
      this.BillingState = this.paymentInfo.BillingState;
      this.BillingZip = this.paymentInfo.BillingZip;
      this.BillingCountry = this.paymentInfo.BillingCountry;

      this.form.controls['CardType'].setValue(this.cardType);
      this.form.controls['CardNumber'].setValue(this.CardNumber);
      this.form.controls['CCExpiryMonth'].setValue(this.CCExpiryMonth);
      this.form.controls['CCExpiryYear'].setValue(this.CCExpiryYear);
      this.form.controls['CVVNumber'].setValue(this.CVVNumber);
      this.form.controls['CardHolderName'].setValue(this.CardHolderName);
      this.form.controls['BillingAddress1'].setValue(this.BillingAddress1);
      this.form.controls['BillingAddress2'].setValue(this.BillingAddress2);
      this.form.controls['BillingCity'].setValue(this.BillingCity);
      this.form.controls['BillingState'].setValue(this.BillingState);
      this.form.controls['BillingZip'].setValue(this.BillingZip);
      this.form.controls['BillingCountry'].setValue(this.BillingCountry);
    }
  }

  dismissModal() {
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

  addCardDetails(){
    this.presentLoading().then(a => {
    if(localStorage.getItem('addPayments')){
      var paymentDetails = localStorage.getItem('addPayments');
      this.paymentInfo = JSON.parse(paymentDetails);
      this.formData.CCInfoId = this.paymentInfo.CCInfoId;
    }else{
      this.formData.CCInfoId = "0";   
    }   
    this.formData.FromScreen = "MyPayment";
    this.formData.username = this.username;
    this.formData.userid = this.userId;
    this.formData.CCCardType = this.form.get('CardType').value;
    this.formData.CardNumber =   this.form.get('CardNumber').value;
    this.formData.CCExpiryMonth =   this.form.get('CCExpiryMonth').value;
    this.formData.CCExpiryYear =  this.form.get('CCExpiryYear').value;
    this.formData.CVVNumber =  this.form.get('CVVNumber').value;
    this.formData.CardHolderName =  this.form.get('CardHolderName').value;
    this.formData.BillingAddress1 =  this.form.get('BillingAddress1').value;
    this.formData.BillingAddress2 =  this.form.get('BillingAddress2').value;
    this.formData.BillingCity =  this.form.get('BillingCity').value;
    this.formData.BillingState =  this.form.get('BillingState').value;
    this.formData.BillingZip =  this.form.get('BillingZip').value;
    this.formData.BillingCountry =  this.form.get('BillingCountry').value;
this.envservice.savePaymentInfo(this.formData.CCInfoId, this.formData.CardNumber,this.formData.CCCardType,this.formData.CVVNumber,
  this.formData.CCExpiryMonth,this.formData.CCExpiryYear,this.formData.CardHolderName,this.formData.BillingAddress1,this.formData.BillingAddress2,
  this.formData.BillingCity,this.formData.BillingState,this.formData.BillingZip,this.formData.BillingCountry,
  this.formData.FromScreen,this.formData.username,this.formData.userid).subscribe((data:any)=> {
if(data.Message =='success'){
  alert(data.Data)
  this.dismissModal();
}
});
this.loadingController.dismiss();
});
  }

  getCardYear() {
    this.envservice.getCardyear(this.form.get('CCExpiryMonth').value)
      .subscribe((data: any) => {
        console.log(data)
        this.cardYear = data.Data;
      })
  }
}
