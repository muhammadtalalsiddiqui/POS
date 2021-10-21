import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';
import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IShops } from 'src/app/models/shop-model';
import {MDCDataTable} from '@material/data-table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map, shareReplay } from 'rxjs/operators';
import { ShopsService } from 'src/app/services/shops.service';











@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})

export class ShopsComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  userType:string;

  jwtHelper =new JwtHelperService();
  public shopform !:FormGroup;
title1='Shops';
  userrole='';

  constructor(private formbuilder :FormBuilder , private http:HttpClient, private router:Router,private ShopsService:ShopsService ,private breakpointObserver: BreakpointObserver) {
    this.userType="dashboard" }

   shopdata:IShops[];
  ngOnInit(): void {

    const decryptedUser=this.jwtHelper.decodeToken(localStorage.getItem('token')||'{}');
    this.shopform=this.formbuilder.group({

      ownerId:[decryptedUser.nameid],
      title:[''],
      pictureUrl:[''],
      description:['']

    })



    this.ShopsService.getshops()
    .subscribe(
      data=>
      {
        console.log(this.shopdata)
        this.shopdata=data
        console.log

      }

    )
    const abc=this.jwtHelper.decodeToken(localStorage.getItem('token')||'{}');
     this.userrole=abc.role

     //this.userid=decryptedUser.nameid
  }
  delete(data: any){
    alert("delete")
    this.ShopsService.deleteshops(data).subscribe(res=>{
      return res
    })
    this.ngOnInit()





  }


  add(){
    console.log(this.shopform.value);
    this.http.post("http://api.pos.nastechltd.co/api/Shop/shop",this.shopform.value )
    .subscribe(
      (Response: any) => {

        alert('add')
         this.ngOnInit();
      },
      (error: any) => {
          console.log(error)
      })


  }

}
function querySelector(arg0: string): import("@material/data-table").MDCDataTableFoundation | undefined {
  throw new Error('Function not implemented.');
}

