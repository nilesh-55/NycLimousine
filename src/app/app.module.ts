import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule,FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { EnvService } from './services/env.service';
import { ModelfromComponent } from './modelfrom/modelfrom.component';
import { ModeltoComponent } from './modelto/modelto.component';
import { FarecalculationsPage } from './farecalculations/farecalculations.page';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalpagePage } from './modalpage/modalpage.page';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { PaymentModalPage } from './payment-modal/payment-modal.page';
import { PrivacyModalPage } from './privacy-modal/privacy-modal.page';
import { FarecalculationsreturnPage } from './farecalculationsreturn/farecalculationsreturn.page';
import { LoginPage } from './login/login.page';
import { LegalpagePage } from './legalpage/legalpage.page';
import { FeedbackModalPage } from './feedback-modal/feedback-modal.page';
import { HTTP } from '@ionic-native/http/ngx';
import { AddProjectPage } from './add-project/add-project.page';
import { AddPassengerPage } from './add-passenger/add-passenger.page';
import { TripDatesPage } from './trip-dates/trip-dates.page';

@NgModule({
  declarations: [
    AppComponent,
    ModelfromComponent,
    ModeltoComponent,
    FarecalculationsPage,
    ModalpagePage,
    PaymentModalPage,
    PrivacyModalPage,
    FarecalculationsreturnPage,
    LegalpagePage,
    FeedbackModalPage,
    AddProjectPage,
    AddPassengerPage,
    TripDatesPage
  ],
  entryComponents: [
    ModelfromComponent,
    ModeltoComponent,
    FarecalculationsPage,
    ModalpagePage,
    PaymentModalPage,
    PrivacyModalPage,
    FarecalculationsreturnPage,
    LegalpagePage,
    FeedbackModalPage,
    AddProjectPage,
    AddPassengerPage,
    TripDatesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AutoCompleteModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FormBuilder,
    HttpClient,
    EnvService,
    LoadingController,
    CallNumber,
    GooglePlus,
    LoginPage,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
