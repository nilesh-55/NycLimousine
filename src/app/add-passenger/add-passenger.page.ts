import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.page.html',
  styleUrls: ['./add-passenger.page.scss'],
})
export class AddPassengerPage implements OnInit {
  formData = {"PassengerId":"" , "FKUserId":"" , "FK_User_CCInfoId":"" , "Prefix":"","FirstName":"","LastName":"","EmailId":"","Address":"","Comment":"","TeleNo":"","Cellno":"","IsSavePassangerInfo":""};
  firstName:string;
  lastName:string;
  emailId:string;
  address:string;
  comment:string;
  telephoneNo:string;
  cellNo:string;
  userId: string;
  passengerVal: any;
  errorResponse: any;
  response: any;
  constructor(private envservice: EnvService, private loadingController: LoadingController, public modalController: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
    if(localStorage.getItem("addPassengers")){
      var passengerValue = localStorage.getItem("addPassengers");
      this.passengerVal = JSON.parse(passengerValue);
      console.log(this.passengerVal);
      this.firstName = this.passengerVal.FirstName;
      this.lastName = this.passengerVal.LastName;
      this.emailId = this.passengerVal.EmailId;
      this.address = this.passengerVal.Address;
      this.comment = this.passengerVal.Comment;
      this.telephoneNo = this.passengerVal.TeleNo;
      this.cellNo = this.passengerVal.Cellno;
    }
  }

  addPassenger(){
    var id = localStorage.getItem("user_id");
    // var username = localStorage.getItem("username")
    this.userId = id;
    // this.userName = username;
    this.presentLoading().then(a => {
      if(localStorage.getItem("addPassengers")){
        var passengerValue = localStorage.getItem("addPassengers");
        this.passengerVal = JSON.parse(passengerValue);
        console.log(this.passengerVal);
        this.formData.PassengerId=this.passengerVal.PassengerId;
      }else{
        this.formData.PassengerId="0";
      }
      this.formData.FKUserId=this.userId;
      this.formData.FK_User_CCInfoId="null";
      this.formData.Prefix="null";
      this.formData.FirstName=this.firstName;
      this.formData.LastName=this.lastName;
      this.formData.EmailId=this.emailId;
      this.formData.Address=this.address;
      this.formData.Comment=this.comment;
      this.formData.TeleNo=this.telephoneNo;
      this.formData.Cellno=this.cellNo;
      this.formData.IsSavePassangerInfo="null";
      console.log(this.formData.PassengerId);
      this.envservice.addPassengers(this.formData).then((data:any) => {
this.response = JSON.parse(data.data);
   console.log(this.response);
this.presentToast(this.response.Data);
this.loadingController.dismiss();  
this.dismissModal();
      }).catch(error => {
        this.errorResponse = JSON.parse(error.error)
            console.log("error", error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        console.log("error", error);
        alert(this.errorResponse.Message)
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

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
