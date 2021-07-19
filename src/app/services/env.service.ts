import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, retry } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import _ from 'lodash';

@Injectable({
    providedIn: 'root'
})

export class EnvService{
    API_URL='http://52.188.12.211:900';
    header: any;
    

    constructor(private http: HttpClient, private http1: HTTP){
this.header = this.http1.setHeader('*', String("Access-Control-Allow-Origin"), String("*"));
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      }
    
      handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        return throwError(
          'Something bad happened; please try again later.');
      };
    

    suggetionlist(value) {
        return this.http.post(`${this.API_URL}/Api/Suggestion/SuggestionList?suggestionName=${value}`, value );
    }
   
    vehicleDetails(value){
        return this.http.post(`${this.API_URL}/Api/Reservation/Index`, value);
        // return this.http.post(`${this.API_URL}/Api/Reservation/Index`, value,
        // this.httpOptions)
        //    .pipe(
        //      retry(2),
        //      catchError(this.handleError)
        //    )
        // return this.http1.post(`${this.API_URL}/Api/Reservation/Index`,{}, value)
    }

    waitingTime(value){
        return this.http.post(`${this.API_URL}/Api/Reservation/GetWaitingTime`, value);
    }

    submitAllData (value){
        return this.http1.post(`${this.API_URL}/Api/Reservation/Index`, value, this.http1.setDataSerializer("json"));
        // return this.http1.post(this.API_URL + "/Api/Reservation/Index",{value},this.httpOptions);
    }

    amenityCalculation(value){
        return this.http.post(`${this.API_URL}/Api/Reservation/GetAmenityCalculation`, value)
    }

    forPayment(value){
        return this.http.post(`${this.API_URL}/Api/Reservation/Payment`, value)
    }

    airlineNames(value){
        return this.http.post(`${this.API_URL}/Api/Reservation/GetAirLineWithKeyWord?AirLineName=${value}`, value);
    }

    internationalAirport(value){
        return this.http.post(`${this.API_URL}/Api/Reservation/GetInternationalAirport?AirportName=${value}`, value);
    }

    reviewInformation(value){
        return this.http.post(`${this.API_URL}/Api/Reservation/ReviewConfirmation`,value)
    }

    getServiceList(){
        return this.http.get(`${this.API_URL}/Api/Reservation/GetHourlyEvent`)
    }

    getHourlyType(){
        return this.http.get(`${this.API_URL}/Api/Reservation/GetHourlyTime `)
    }

    getWaitingTime(){
        return this.http.get(`${this.API_URL}/Api/Reservation/GetWaitingTime `)
    }

    getCardyear(value){
        return this.http.get(`${this.API_URL}/Api/Reservation/GetYearList?month=${value}`, value);
    }

    getTerminal(value){
        return this.http.get(`${this.API_URL}/Api/Reservation/GetTermianlList?AirportName=${value}`, value);
    }

    getConfirmation(value){
        // return this.http.post(`${this.API_URL}/Api/Reservation/ConfirmationMessage_V2`,value);
        return this.http1.post(`${this.API_URL}/Api/Reservation/ConfirmationMessage_V2`, value, this.http1.setDataSerializer("json"));
    }

    getReturnConfirmation(value){
        return this.http.post(`${this.API_URL}/Api/Reservation/ReturnConfirmationMessage_V2`,value);
    }

    login(value){
        return this.http1.post(`${this.API_URL}/Api/Account/Login`,{UserName: value.UserName,
        Password: value.Password},this.header);
        // return this.http.post(this.API_URL + "/Api/Account/Login", {UserName: value.UserName,
        // Password: value.Password}).pipe(
        //     map(user => {
        //       return user;
        //     })
        //   )       
         // return this.http.post(this.API_URL + "/Api/Account/Login", value).pipe(
        //     map(user => {
        //       return user;
        //     })
        //   )
    }

    register(value){
        return this.http.post(`${this.API_URL}/Api/Account/RegisterNewuser`,value);
    }

    sendotp(value){
        return this.http.post(`${this.API_URL}/Api/Account/SendOTP?Email=${value}`,value);
    }

    confirmOtp(value1, value2){
        return this.http.post(`${this.API_URL}/Api/Account/OTPConfirmation?emailId=${value1}&otp=${value2}`,value1,value2);
    }

    getTermsConditions(){
        return this.http1.post(`${this.API_URL}/Api/Reservation/GetTermsCondition`, this.header,this.http1.setDataSerializer("json"));
    }

    getNewPassword(value1, value2){
        return this.http.post(`${this.API_URL}/Api/Account/ResetPassword?Password=${value1}&EmailId=${value2}`, value1, value2);
    }

    getTripList(value){
        return this.http1.post(`${this.API_URL}/Api/MyTrip/MYTripList`,value,this.http1.setDataSerializer("json"));
    }

    getPaymentList(value){
        return this.http1.post(`${this.API_URL}/Api/MYPayment/GetPayment`,value,this.http1.setDataSerializer("json"));
    }

    legacyStatement(){
        return this.http.get(`${this.API_URL}/Api/Doc/Legal`, {});
    }

    savePaymentInfo(value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11,value12,value13,value14,
        value15,value16){
        return this.http.post(`${this.API_URL}/Api/MYPayment/SavePayment?CCInfoId=${value1}&CardNumber=${value2}
        &CCCardType=${value3}&CVVNumber=${value4}&CCExpiryMonth=${value5}&CCExpiryYear=${value6}&CardHolderName=${value7}
        &BillingAddress1=${value8}&BillingAddress2=${value9}&BillingCity=${value10}&BillingState=${value11}
        &BillingZip=${value12}&BillingCountry=${value13}&FromScreen=${value14}&username=${value15}&userid=${value16}`, value1);
    }

    privacyStatement(){
        return this.http.get(`${this.API_URL}/Api/Doc/Privacy`, {});
    }

    updateProfile(value1,value2,value3,value4,value5){
        return this.http.post(`${this.API_URL}/api/Account/UPdateAccount?BFirstName=${value1}&BLastName=${value2}&bTeleNo=${value3}&BEmailId=${value4}&username=${value5}`, value1);
    }

    getProjectList(value){
        return this.http1.post(`${this.API_URL}/Api/MYProject/GetprojectList`,value,this.http1.setDataSerializer("json"));
    }

    getPassengerList(value){
        return this.http1.post(`${this.API_URL}/Api/MyPassenger/Getpassenger`,value,this.http1.setDataSerializer("json"));
    }

    feedbackPost(value1,value2,value3,value4,){
        return this.http.post(`${this.API_URL}/Api/Account/SaveData?name=${value1}&EmailID=${value2}
        &telephone=${value3}&Message=${value4}`, {});
    }

    deletePayment(value1, value2, value3){
        return this.http.post(`${this.API_URL}/Api/MYPayment/DeletePayment?CCInfoId=${value1}&Username=${value2}&UserId=${value3}`, value1);
    }

    addProjects(value1, value2, value3,value4,value5,value6){
        return this.http1.post(`${this.API_URL}/Api/MYProject/SaveMaster?ProjectId=${value1}&ProjectName=${value2}&projectdescription=${value3}&fk_user_ccinfoid=${value4}&userid=${value5}&username=${value6}`,this.header, this.http1.setDataSerializer("json"));
    }

    deleteProject(value1, value2, value3){
        return this.http1.post(`${this.API_URL}/Api/MYProject/DeleteProject?UserID=${value1}&UserName=${value2}&ProjectId=${value3}`,this.header, this.http1.setDataSerializer("json"));
    }

    addPassengers(value){
        return this.http1.post(`${this.API_URL}/Api/MyPassenger/SaveMasterpassenger`,value,this.http1.setDataSerializer("json"));
    }

    deletePassenger(value1, value2, value3){
        return this.http1.post(`${this.API_URL}/Api/MyPassenger/DeleteMaster?PkId=${value1}&userid=${value2}&username=${value3}`, this.header, this.http1.setDataSerializer("json"));
    }
}