import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectvehiclePage } from './selectvehicle.page';

const routes: Routes = [
  {
    path: '',
    component: SelectvehiclePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectvehiclePage]
})
export class SelectvehiclePageModule {}
