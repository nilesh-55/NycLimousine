import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.page.html',
  styleUrls: ['./add-project.page.scss'],
})
export class AddProjectPage implements OnInit {
  userId: string;
  formData = {"ProjectId":"" , "ProjectName":"" , "projectdescription":"" , "fk_user_ccinfoid":"","useriD":"","username":""};
  form: FormGroup;
  projectName: string;
  projectDescription: string;
  userName: string;
  cardNumber:string;
  message: string;
  projectVal: any;
  response: any;
  constructor(private loadingController: LoadingController, private envservice: EnvService, private _FB: FormBuilder, public modalController: ModalController,private toastCtrl: ToastController) { }

  ngOnInit() {
    if(localStorage.getItem("project")){
      var projectValue = localStorage.getItem("project");
      this.projectVal = JSON.parse(projectValue);
      console.log(this.projectVal);
      this.projectName= this.projectVal.ProjectName;
      this.projectDescription = this.projectVal.ProjectDescription;
    }else{

    }
  }

  addProject(){
    var id = localStorage.getItem("user_id");
    var username = localStorage.getItem("username")
    this.userId = id;
    this.userName = username;
    this.presentLoading().then(a => {
      if(localStorage.getItem("project")){
        var projectValue = localStorage.getItem("project");
        this.projectVal = JSON.parse(projectValue);
        this.formData.ProjectId=this.projectVal.ProjectId;
      }else{
        this.formData.ProjectId="0";
      }
      this.formData.ProjectName=this.projectName;
      this.formData.projectdescription=this.projectDescription;
      this.formData.fk_user_ccinfoid=null;
      this.formData.useriD=this.userId;
      this.formData.username=this.userName;
      console.log(this.formData.ProjectId);
      this.envservice.addProjects(this.formData.ProjectId,this.formData.ProjectName,this.formData.projectdescription,this.formData.fk_user_ccinfoid,this.formData.useriD,this.formData.username).then((data:any) => {
        this.response = JSON.parse(data.data);
          console.log(this.response);
this.presentToast(this.response.Data);
this.loadingController.dismiss();  
this.dismissModal();
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
