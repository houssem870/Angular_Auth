import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SignUpInfo {
  firstName: string;
  lastName:string;
  adress:string;
  telephone:string;
  username: string;
  email: string;
  role: string[];
  password: string;

  constructor(firstName: string,lastName:string,adress:string,telephone:string,
              username: string, email: string, password: string,role: string[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.adress = adress;
    this.telephone = telephone;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
