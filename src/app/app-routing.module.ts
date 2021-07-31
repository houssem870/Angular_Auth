import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './signUp/signUp.component';
import  {HomeComponent} from '../app/home/home.component';
import {SignInComponent} from './signIn/signIn.component'

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:"register",
    component:SignUpComponent},

  {path:"",redirectTo:"login",pathMatch:"full"},



];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
