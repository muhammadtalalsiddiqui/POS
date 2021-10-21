import { Component, OnInit } from '@angular/core';
import { ElementSchemaRegistry } from '@angular/compiler';
import { ShelfproductsService } from '../services/shelfproducts.service';
import { IShelfprod } from '../models/shelf-products-models';
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
import { ShopsService } from 'src/app/services/shops.service';
import { ProductstypeService } from 'src/app/services/productstype.service';
import { IProductsType } from 'src/app/models/productsType-model';
import { HttpHeaders } from '@angular/common/http';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map, shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-shelfproduct',
  templateUrl: './shelfproduct.component.html',
  styleUrls: ['./shelfproduct.component.css']
})
export class ShelfproductComponent implements OnInit {
    jwtHelper =new JwtHelperService();
    public shopform !:FormGroup;
    public productshelfform !:FormGroup;
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    userType:string;


    userrole='';
    classList: any;
    nextElementSibling: any;
  abc:'';





  constructor(private formbuilder :FormBuilder  ,private http:HttpClient, private router:Router,private ShopsService:ShopsService ,private producttype:ProductstypeService,private productshelf:ShelfproductsService ,private breakpointObserver: BreakpointObserver) {
    this.userType="dashboard" }
  productshelfdata:IShelfprod[];
  shopdata:IShops[];
  ngOnInit(): void {
  this.shopform=this.formbuilder.group({

    ownerId:[''],
    title:[''],


  })
  this.productshelfform=this.formbuilder.group({


    shopId:[Number(localStorage.getItem('prodshelf'))],
    title:['']

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
  }
  addu(id:any)
  {
    console.log("shop:",id)


  localStorage.setItem('prodshelf',id);
  console.log("after lc____",Number(localStorage.getItem('prodshelf')))

  }

  add(){

  const test =localStorage.getItem('token');
  const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
  console.log(decryptedUser);
    const HTTPheaders =new HttpHeaders({
      'Authorization':"Bearer "+test
    });
  console.log("shopval_______",this.productshelfform.value);
  this.http.post("http://api.pos.nastechltd.co/api/ProductShelves/productShelves",this.productshelfform.value ,{headers:HTTPheaders})
  .subscribe(
    (Response: any) => {

      alert('add')
        this.ngOnInit();
    },
    (error: any) => {
        console.log(error)
    })
    this.ngOnInit();

  }
  delete(data: any){
  this.productshelf.deleteproductshelf(data).subscribe((Response:any)=>{

    alert(Response)

  })
  this.ngOnInit()

  this.ngOnInit()
  }
  edit(data:any){}
  select(id:any){
  this.productshelf.getshelfprod(id)
  .subscribe(
    data=>
    {

      this.productshelfdata=data;
    }

  )


  }

  }
