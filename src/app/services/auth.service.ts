import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    constructor(private http: HttpClient, private envservice: EnvService){

    }

  }