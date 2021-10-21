import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BasketservicesService } from 'src/app/services/basketservices.service';
import { BasketItem } from 'src/app/models/basket items-models';
import { Ibasket } from 'src/app/models/basket-models';
import { HttpHeaders } from '@angular/common/http';
import { ElementSchemaRegistry } from '@angular/compiler';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/models/products-model';
import { data } from 'jquery';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']

})
export class BasketComponent implements OnInit {

  Item: Array<any> = [{
    productId: '',
    productName: '',
    price: '',
    quantity: '',
    pictureUrl: '',


  }]


  basketid = []
  prodid: Number[] = []
  pname: string[] = []
  quant: Number[] = []
  imgurl: string[] = []
  pricep: Number[] = []
  empid = ''
  role = ''
  id = ''
  i = 0
  ap: any
  k: any = 0
  quantity = 1
  jwtHelper = new JwtHelperService();

totalla=0

  private myarray: [{ productId: number, price: number, discount: number }];

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router, private basketsevice: BasketservicesService, private ps: ProductsService) {



  }
  showprod: IProducts[];
  psdata: IProducts[];
  ba: BasketItem[];
  basketdata: Ibasket[];
  bd: any
  q = 0

  public basketform !: FormGroup;
  ngOnInit(): void {



    const ab = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');

    console.log(ab);
    this.role = ab.role;
    this.empid = ab.nameid;

    this.ps.getprodforemp().subscribe(
      data => {
      this.showprod = data
      console.log("prod", this.showprod);
    })


    this.basketsevice.getbasket()
      .subscribe(
        data => {

          this.basketdata = data
          this.bd = Array.of(this.basketdata)
          console.log("basket:", this.basketdata)


        }
      )
  }
  addquantity(available: any) {

    if (this.quantity >= available) {
      alert("stock not available")
    }
    else {
      this.quantity += 1
      document.getElementById('minus')!.style.fill = '#4BB543'
    }

  }
  total(total:any){
this.totalla=total
  }
  lessquantity() {
    if (this.quantity > 1) {
      document.getElementById('minus')!.style.fill = '#4BB543'
      this.quantity = this.quantity - 1;
    }
    else {
      document.getElementById('minus')!.style.fill = 'grey'
    }

  }
  info: Info1
  add(id: any) {

    this.prodid[this.i] = id;
    this.quant[this.i] = this.quantity;
    this.i++;
    this.ap = this.i
    this.q = Number(this.quant[this.i])


    console.log(this.info);


   this.basketsevice.postbasket(id,this.quantity)



  }

}
type Info1 = Array<{ pname: string; pquantity: Number; pprice: Number; pictureUrl: string; }>;
