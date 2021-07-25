import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormationComponent } from './FormationWork/formation/formation.component';
import { FormationFormComponent } from './FormationWork/formation-form/formation-form.component';
import { QuizComponent } from './QuizWork/quiz/quiz.component';
import { QuizFormComponent } from './QuizWork/quiz-form/quiz-form.component';
import { SignUpComponent } from './auth/signUp/signUp.component';
import {AuthInterceptor} from "./auth/AuthInterceptor.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    FormationFormComponent,
    QuizComponent,
    QuizFormComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
