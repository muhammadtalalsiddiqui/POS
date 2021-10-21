import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminregisterService } from 'src/app/services/adminregister.service';
import { AdminRegModel } from 'src/app/models/adminreg-model';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent implements OnInit {
  public regform!:FormGroup;
  constructor(private adminregservice:AdminregisterService,private formbuilder:FormBuilder,public refform:FormGroup) { }

  ngOnInit(): void {


  }
  signup()
  {
    this.regmodel=this.regform.value;
    this.adminregservice.regadmin(this.regmodel);
  }
  regmodel:AdminRegModel;



}
