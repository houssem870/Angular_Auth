import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SignUpInfo} from "../model/sign-up-info/signUpInfo.module";
import { Injectable } from '@angular/core';



const httpOptions = {
     headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signupUrl = 'http://localhost:8009/auth/signUp';

  constructor(private http: HttpClient) {
  }



  // SignUpInfo(name,username,email,role,password)
  signUp(info: any): Observable<any> {
    return this.http.post(this.signupUrl, info);
  }
}
