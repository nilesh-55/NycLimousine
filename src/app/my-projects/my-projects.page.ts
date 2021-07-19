import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { AddProjectPage } from '../add-project/add-project.page';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.page.html',
  styleUrls: ['./my-projects.page.scss'],
})
export class MyProjectsPage implements OnInit {

  formData = {"dfltWhere":"" , "IsActive":"" , "iColumns":"" , "iDisplayLength":"","UserID":""}
  projects: any;
  userId: string;
  response: any;
  errorResponse: any;
  projectInfo: any;
  username: string;
  
  constructor(private envservice: EnvService, private loadingController: LoadingController,public appcomp : AppComponent, public modalController: ModalController,public alertController: AlertController,private toastCtrl: ToastController) { }

  ngOnInit() {
    if(localStorage.getItem("user_id")){
      this.appcomp.isLoggedin=localStorage.isLoggedin;
      this.appcomp.isLoggedOut=false;
    }
    var user_name = localStorage.getItem('username')
    this.username = user_name;
  }

  ionViewWillEnter(){
    this.getProjectDetails();
  }

  getProjectDetails(){
    var id = localStorage.getItem("user_id");
    this.userId = id;
    this.presentLoading().then(a => {
    this.formData.dfltWhere = "All";
    this.formData.IsActive = "true";
    this.formData.iColumns = "10";
    this.formData.iDisplayLength = "10";
    this.formData.UserID = this.userId;
this.envservice.getProjectList(this.formData).then((data:any) => {
  this.response = JSON.parse(data.data);
  console.log(this.response);
  this.projects = this.response.Data.Data.aaData;
  console.log(this.projects);
  this.loadingController.dismiss();
  }).catch(error => {
  this.errorResponse = JSON.parse(error.error);
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

  async addProject(){
localStorage.removeItem('project');
      const modal = await this.modalController.create({
        component: AddProjectPage
      });
      modal.onDidDismiss()
      .then((data) => {
        this.getProjectDetails();
      });
      return await modal.present();
  }

  async editProject(value){
    console.log(value);
localStorage.setItem("project", JSON.stringify(value));
      const modal = await this.modalController.create({
        component: AddProjectPage
      });
      modal.onDidDismiss()
      .then((data) => {
        this.getProjectDetails();
      });
      return await modal.present();
  }

  deletePassenger(values){
    localStorage.setItem("project", JSON.stringify(values));
    if(localStorage.getItem('project')){
      var projectDetails = localStorage.getItem('project');
      this.projectInfo = JSON.parse(projectDetails);
      console.log(this.projectInfo);
    }
    this.presentAlertConfirm();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      message: 'Are you sure want to Delete ?',
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
              console.log(this.userId,this.username,this.projectInfo.ProjectId)
         this.envservice.deleteProject(this.userId,this.username,this.projectInfo.ProjectId).then((data:any) =>{
          this.response = JSON.parse(data.data);
          console.log(this.response);
          if(this.response.Message == 'success'){
  this.presentToast(this.response.Data);
  this.loadingController.dismiss(); 
  this.getProjectDetails();
  }
         })
         .catch(error => {
          this.errorResponse = JSON.parse(error.error)
              console.log("error", error.status);
              console.log(this.errorResponse.Message); // error message as string
              console.log(error.headers);
              this.presentToast(this.errorResponse.Message);
            this.loadingController.dismiss(); 
            });
          });
          }
        }
      ]
    });
    await alert.present();
  }
  
  async presentToast(info) {
    const toast = await this.toastCtrl.create({
      message: info,
      duration: 2000
    });
    toast.present();
  }
}
