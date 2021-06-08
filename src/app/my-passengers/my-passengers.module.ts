import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyPassengersPage } from './my-passengers.page';

const routes: Routes = [
  {
    path: '',
    component: MyPassengersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyPassengersPage]
})
export class MyPassengersPageModule {}
