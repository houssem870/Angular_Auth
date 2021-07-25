import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SignUpInfo} from "../model/sign-up-info/signUpInfo.module";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class authService {

  private signupUrl = 'http://localhost:8090/auth/signUp';

  constructor(private http: HttpClient) {
  }



  // SignUpInfo(name,username,email,role,password)
  signUp(info: SignUpInfo): Observable<any> {
    return this.http.post(this.signupUrl, info, httpOptions);
  }
}
