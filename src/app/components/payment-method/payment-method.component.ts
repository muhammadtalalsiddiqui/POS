import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map, shareReplay } from 'rxjs/operators';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';
import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MDCDataTable} from '@material/data-table';
import { IPayment } from 'src/app/models/payment-model';
import { PaymentService } from 'src/app/services/payment.service';
@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  userType:string;

  jwtHelper =new JwtHelperService();
  public paymentform !:FormGroup;
title1='Payment Method';
  userrole='';

  constructor(private formbuilder :FormBuilder , private http:HttpClient, private router:Router,private paymentservices: PaymentService, private breakpointObserver: BreakpointObserver) {
    this.userType="dashboard" }
   paymentdata:IPayment[];
  ngOnInit(): void {

    const decryptedUser=this.jwtHelper.decodeToken(localStorage.getItem('token')||'{}');
    this.paymentform=this.formbuilder.group({


      type:[''],
      description:['']

    })



    this.paymentservices.getpayment()
    .subscribe(
      data=>
      {

        this.paymentdata=data
        console.log("payment:",this.paymentdata)

      }

    )
    const abc=this.jwtHelper.decodeToken(localStorage.getItem('token')||'{}');
     this.userrole=abc.role

     //this.userid=decryptedUser.nameid
  }
  delete(data: any){

    this.paymentservices.deletepayment(data).subscribe(Response=>{
      alert("Deleted Sucessfully")


      console.log(Response)
      this.ngOnInit();
      return Response

    })






  }


  add(){
    console.log(this.paymentform.value);
    this.http.post("http://api.pos.nastechltd.co/api/PaymentMethod/paymentMethod",this.paymentform.value )
    .subscribe(
      (Response: any) => {


        alert(Response.message)
         this.ngOnInit();
      },
      (error: any) => {
          console.log(error)
      })


  }

}


