import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
import { ModalController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-modelto',
  templateUrl: './modelto.component.html',
  styleUrls: ['./modelto.component.scss'],
})
export class ModeltoComponent implements OnInit {
  isItemAvailable1 = false;
  rows: any;
  response: any;
  showLoaderImg = false;
  formData0 = {"from":"" , "to": "","row":""}
  constructor(public modalController: ModalController,private envservice: EnvService) { 
    this.showLoaderImg = false;
  }

  ngOnInit() {}



  ClearInput(row) {
    this.formData0.row = '';
  }
  
  dismissModal() {
    this.modalController.dismiss();
  }

  getItem(ev: any) {
    const val = ev.target.value;
    if (val.length > 0) {
      this.showLoaderImg = true;
      if (val && val.trim() != '') {
        this.envservice.suggetionlist(val)
          .subscribe((user) => {
            this.isItemAvailable1 = true;
            this.response = user;
            this.rows = this.response.Data;
            console.log(this.rows)
            this.showLoaderImg = false;
            this.rows = this.rows.filter((item) => {
              return (item.Location_Name + item.Location_Address);
            })
            },(error: HttpErrorResponse)=>{
              if(error.error.Message){
                this.showLoaderImg = false;
              }
               });
      }
    } else {
      this.rows = [];
    }
  }
  catch(error) {
    console.log(error);
  }


  putvalue(row) {
    this.modalController.dismiss(row);
  }

  async presentmodal() {
    const modal = await this.modalController.create({
      component: ModeltoComponent
    });
    modal.onDidDismiss()
      .then((data) => {
        const val = data.data;
        this.formData0.to = val.Location_Name;
    });
    
    return await modal.present();
  }

}

