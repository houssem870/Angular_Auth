import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class SignUpInfo {
  firstname: string;
  lastname: string;
  adress: string;
  telephone: string;
  username: string;
  email: string;
  role: string[];
  password: string;

  constructor( @Inject(String)firstname: string, @Inject(String)lastName: string,@Inject(String)adress: string,@Inject(String)telephone: string,
               @Inject(String)username: string,@Inject(String)email: string, @Inject(String)password: string,@Inject(String)role: string[]) {
    this.firstname = firstname;
    this.lastname = lastName;
    this.adress = adress;
    this.telephone = telephone;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
