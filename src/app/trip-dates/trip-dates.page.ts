import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-trip-dates',
  templateUrl: './trip-dates.page.html',
  styleUrls: ['./trip-dates.page.scss'],
})
export class TripDatesPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  confirmDates(){
    this.dismissModal();
  }
}
