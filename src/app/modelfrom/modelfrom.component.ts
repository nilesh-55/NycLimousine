import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnvService } from '../services/env.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-modelfrom',
  templateUrl: './modelfrom.component.html',
  styleUrls: ['./modelfrom.component.scss'],
})
export class ModelfromComponent implements OnInit {
  currentModal: any;
  modalCtrl: any;
  items: any;
  response: any;
  isItemAvailable = false;
  showLoaderImg = false;
  formData0 = {"from":"" , "to": "","row":""}
  constructor(public modalController: ModalController, private envservice: EnvService) { 
    this.showLoaderImg = false;
  }

  ngOnInit() {
    
  }

  ClearInput(row) {
    this.formData0.row = '';
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  getItems(ev: any) {
    const val = ev.target.value;
    if (val.length > 0) {
      this.showLoaderImg = true;
      if (val && val.trim() != '') {
        this.envservice.suggetionlist(val)
          .subscribe((user) => {
            this.isItemAvailable = true;
            this.response = user;
            this.items = this.response.Data;
            console.log(this.items)
            this.showLoaderImg = false;
            this.items = this.items.filter((item) => {
              return (item.Location_Name + item.Location_Address );
              // .toLowerCase().indexOf(val.toLowerCase()) > -1 
            })
        },(error: HttpErrorResponse)=>{
          if(error.error.Message){
            this.showLoaderImg = false;
          }
           });
      }
    } else {
      this.items = [];
    }
  }
  catch(error) {
    console.log(error);
  }


  putvalue(row) {
    this.modalController.dismiss(row);
  }

}
