import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/signUp/signUp.component';


const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
   {path:"register",component:SignUpComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
