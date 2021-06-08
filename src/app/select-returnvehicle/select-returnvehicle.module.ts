import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectReturnvehiclePage } from './select-returnvehicle.page';

const routes: Routes = [
  {
    path: '',
    component: SelectReturnvehiclePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectReturnvehiclePage]
})
export class SelectReturnvehiclePageModule {}
