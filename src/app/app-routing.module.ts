import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesPageModule' },
  { path: 'selectvehicle', loadChildren: './selectvehicle/selectvehicle.module#SelectvehiclePageModule' },
  { path: 'filldetails', loadChildren: './filldetails/filldetails.module#FilldetailsPageModule' },
  { path: 'reviewdetails', loadChildren: './reviewdetails/reviewdetails.module#ReviewdetailsPageModule' },
  { path: 'placeorder', loadChildren: './placeorder/placeorder.module#PlaceorderPageModule' },
  { path: 'thankyou', loadChildren: './thankyou/thankyou.module#ThankyouPageModule' },
  { path: 'farecalculations', loadChildren: './farecalculations/farecalculations.module#FarecalculationsPageModule' },
  { path: 'vehicles-return-page', loadChildren: './vehicles-return-page/vehicles-return-page.module#VehiclesReturnPagePageModule' },
  { path: 'select-returnvehicle', loadChildren: './select-returnvehicle/select-returnvehicle.module#SelectReturnvehiclePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'mytrips', loadChildren: './mytrips/mytrips.module#MytripsPageModule' },
  { path: 'modalpage', loadChildren: './modalpage/modalpage.module#ModalpagePageModule' },
  { path: 'otp-confirmation', loadChildren: './otp-confirmation/otp-confirmation.module#OtpConfirmationPageModule' },
  { path: 'my-payment', loadChildren: './my-payment/my-payment.module#MyPaymentPageModule' },
  { path: 'payment-modal', loadChildren: './payment-modal/payment-modal.module#PaymentModalPageModule' },
  { path: 'privacy-modal', loadChildren: './privacy-modal/privacy-modal.module#PrivacyModalPageModule' },
  { path: 'my-projects', loadChildren: './my-projects/my-projects.module#MyProjectsPageModule' },
  { path: 'farecalculationsreturn', loadChildren: './farecalculationsreturn/farecalculationsreturn.module#FarecalculationsreturnPageModule' },
  { path: 'userprofile', loadChildren: './userprofile/userprofile.module#UserprofilePageModule' },
  { path: 'my-passengers', loadChildren: './my-passengers/my-passengers.module#MyPassengersPageModule' },
  { path: 'legalpage', loadChildren: './legalpage/legalpage.module#LegalpagePageModule' },
  { path: 'feedback-modal', loadChildren: './feedback-modal/feedback-modal.module#FeedbackModalPageModule' },
  { path: 'add-project', loadChildren: './add-project/add-project.module#AddProjectPageModule' },
  { path: 'add-passenger', loadChildren: './add-passenger/add-passenger.module#AddPassengerPageModule' },
  { path: 'trip-dates', loadChildren: './trip-dates/trip-dates.module#TripDatesPageModule' },
  { path: 'stops-location', loadChildren: './stops-location/stops-location.module#StopsLocationPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
