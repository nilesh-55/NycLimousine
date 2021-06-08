import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
import { LoadingController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.page.html',
  styleUrls: ['./my-projects.page.scss'],
})
export class MyProjectsPage implements OnInit {

  formData = {"dfltWhere":"" , "IsActive":"" , "iColumns":"" , "iDisplayLength":"","UserID":""}
  projects: any;
  userId: string;
  
  constructor(private envservice: EnvService, private loadingController: LoadingController,public appcomp : AppComponent) { }

  ngOnInit() {
    this.getProjectDetails();
    if(localStorage.getItem("user_id")){
      this.appcomp.isLoggedin=localStorage.isLoggedin;
      this.appcomp.isLoggedOut=false;
    }
  }

  getProjectDetails(){
    var id = localStorage.getItem("user_id")
    this.userId = id;
    // this.presentLoading().then(a => {
    this.formData.dfltWhere = "All";
    this.formData.IsActive = "true";
    this.formData.iColumns = "10";
    this.formData.iDisplayLength = "10";
    this.formData.UserID = this.userId;
this.envservice.getProjectList(this.formData).subscribe((data:any) => {
  this.projects = data.Data.Data.aaData;
  console.log(this.projects);
  this.loadingController.dismiss();
  });
// });
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
