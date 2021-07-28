import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Auth.service";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {


  isRegistered = false;
  option = '';
  errorMessage = '';
  list: string[]=[]


 formDemo!: FormGroup
  constructor(private fb: FormBuilder,private authSevice: AuthService ,private router: Router) {}

  ngOnInit() {
    this.formDemo = this.fb.group({
      username: [''],
      email: [''],
      firstname: [''],
      lastname: [''],
      telephone: [''],
      adress: [''],
      password: [''],
      role: []
    });
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.option = event.target.value;}

  get form() {
    return this.formDemo.controls;
  }
  onSubmit() {
   /* console.log("Name :- "+this.form.username.value)
    console.log("Email :- "+this.form.email.value)
    console.log("Address1 :- "+this.form.telephone.value)
    console.log("Address2 :- "+this.form.firstname.value)
    console.log("City :- "+this.form.adress.value)
    console.log("State :- "+this.form.lastname.value)*/
    const myForm = new FormData();
    myForm.append('firstname',this.form.firstname.value);
    myForm.append('lastname',this.form.lastname.value);
    myForm.append('email',this.form.email.value);
    myForm.append('telephone',this.form.telephone.value);
    myForm.append('password',this.form.password.value);
    myForm.append('username',this.form.username.value);
    myForm.append('adress',this.form.adress.value);
    myForm.append('role',this.option);





    this.authSevice.signUp(myForm).subscribe(
      (data: any) => {
        console.log(data);
        this.isRegistered = true;



      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;

      }
    );
  }


}
