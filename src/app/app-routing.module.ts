import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/signUp/signUp.component';
import  {HomeComponent} from '../app/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {path:"",redirectTo:"home",pathMatch:"full"},
   {path:"register",component:SignUpComponent},


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
