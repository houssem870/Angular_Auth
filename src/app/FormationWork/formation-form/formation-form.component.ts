import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';


@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})

export class FormationFormComponent implements OnInit {
  formationss:any;



  constructor(
    private FormationService:FormationService ) {
    this.formationss=new Formation();
     }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formationss)
    this.FormationService.addFormation(this.formationss).subscribe();
  }

}
