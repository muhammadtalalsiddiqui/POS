import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BasketservicesService } from 'src/app/services/basketservices.service';
import { BasketItem } from 'src/app/models/basket items-models';
import { Ibasket } from 'src/app/models/basket-models';
@Component({
  selector: 'app-basket1',
  templateUrl: './basket1.component.html',
  styleUrls: ['./basket1.component.css']
})
export class Basket1Component implements OnInit {

  id=''

  constructor( private http:HttpClient, private router:Router,private basketsevice: BasketservicesService) { }
  basketdata:Ibasket[];
  bd:any

  ngOnInit(): void {
    this.basketsevice.getbasket()
    .subscribe(
      data=>
      {

        this.basketdata= data
        this.bd = Array.of(this.basketdata)
        console.log("basket:",this.bd)
        console.log("basketitem:",this.bd.BasketItem)

      }
    )
  }

}
