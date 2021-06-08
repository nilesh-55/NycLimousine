import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OtpConfirmationPage } from './otp-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: OtpConfirmationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OtpConfirmationPage]
})
export class OtpConfirmationPageModule {}
