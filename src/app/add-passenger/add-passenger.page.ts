import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.page.html',
  styleUrls: ['./add-passenger.page.scss'],
})
export class AddPassengerPage implements OnInit {
  firstName:string;
  lastName:string;
  emailId:string;
  address:string;
  comment:string;
  telephoneNo:string;
  cellNo:string;
  constructor() { }

  ngOnInit() {
  }

}
