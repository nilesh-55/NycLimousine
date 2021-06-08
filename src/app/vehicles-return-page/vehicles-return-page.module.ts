import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VehiclesReturnPagePage } from './vehicles-return-page.page';

const routes: Routes = [
  {
    path: '',
    component: VehiclesReturnPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VehiclesReturnPagePage]
})
export class VehiclesReturnPagePageModule {}
