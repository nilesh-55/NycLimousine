import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FarecalculationsreturnPage } from './farecalculationsreturn.page';

const routes: Routes = [
  {
    path: '',
    component: FarecalculationsreturnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FarecalculationsreturnPage]
})
export class FarecalculationsreturnPageModule {}
