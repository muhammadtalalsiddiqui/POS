import { Component, OnInit } from '@angular/core';
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
import { ElementSchemaRegistry } from '@angular/compiler';
import { ShelfproductsService } from '../services/shelfproducts.service';
import { IShelfprod } from '../models/shelf-products-models';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../services/products.service';
import { IProducts } from '../models/products-model';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map, shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  userType:string;

  jwtHelper =new JwtHelperService();
  public shopform !:FormGroup;
  public productform !:FormGroup;

  userrole='';
  classList: any;
  nextElementSibling: any;
abc:'';
shopid:'';
prod_type_id_var='';
prod_sleve_id_var='';
pt='Select Products type';
psel='Select Products type';
unittext='Unit Of Measure';
unit_var='';



constructor(private formbuilder :FormBuilder  ,private http:HttpClient, private router:Router,private ShopsService:ShopsService ,private product:ProductsService,private producttype:ProductstypeService,private productshelf:ShelfproductsService ,private breakpointObserver: BreakpointObserver) {
  this.userType="dashboard" }
productshelfdata:IShelfprod[];
productsdata:IProducts[];
producttypedata:IProductsType[];
shopdata:IShops[];
ngOnInit(): void {
  console.log("hi",this.ptypeid());
 this.shopform=this.formbuilder.group({

   ownerId:[''],
   title:[''],


 })


 this.ShopsService.getshops()
 .subscribe(
   data=>
   {

     this.shopdata=data
     console.log("shp",this.shopdata)

   }

 )
 const abc=this.jwtHelper.decodeToken(localStorage.getItem('token')||'{}');
  this.userrole=abc.role
}
addu(id:any)
{
  this.selectprodtype(id);
  this.selectprodshelve(id);
  console.log("shop:",id)
  this.shopid=id;
  document.getElementById("ptypedrop")!.style.display='block';
  document.getElementById("pshelvedrop")!.style.display='block';
  document.getElementById("shop")!.style.display='none';



}
sid()
{
  return(this.shopid);
}
prod_type_id(id:any,title:any)
{
  this.prod_type_id_var=id;
  console.log("this.prod_type_id_var",this.prod_type_id_var)
  this.pt=title;

}
ptypeid()
{
  return this.prod_type_id_var;
}
getval(val:any)
{
  console.log(val);
}
prod_shelve_id(id:any,title:any)
{
  this.prod_sleve_id_var=id;
  console.log("this.prod_sleve_id_var",this.prod_sleve_id_var)
  this.psel=title;
}
pshelvid()
{
  return this.prod_sleve_id_var;
}
Unit(num:any,name:any)
{
  this.unit_var=num;
  this.unittext=name
  console.log("unit",num)
}
unitid()
{
  return this.unit_var;
}

add(title:any,price:any,stock:any,minthres:any,desc:any){
  this.productform=this.formbuilder.group({



    title: [title],
    unitOfMeasure:[Number(this.unit_var)],
    price:[price],
    stock:[stock],
    minimumThreshold:[minthres],
    productTypeId:[Number(this.prod_type_id_var)],
    description: [desc],
    productShelvesId:[Number(this.prod_sleve_id_var)],


 })


 const test =localStorage.getItem('token');
 const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
 console.log(decryptedUser);
   const HTTPheaders =new HttpHeaders({
    'Authorization':"Bearer "+test
  });
 console.log("shopval_______",this.productform.value);
 this.http.post("http://api.pos.nastechltd.co/api/Product/product",this.productform.value ,{headers:HTTPheaders})
 .subscribe(
   (Response: any) => {

     alert(Response)
     this.productform.reset;
      this.ngOnInit();
   },
   (error: any) => {
       console.log(error)
   })
   this.ngOnInit();

}

delete(data: any){
this.product.deleteprod(data).subscribe((Response:any)=>{

  alert(Response)

 })
 this.ngOnInit()

 this.ngOnInit()
}
edit(data:any){}
select(id:any)
{
  console.log(id)
this.product.getprod(id)
 .subscribe(
   data=>
   {

     this.productsdata=data;
   }

 )


}
selectprodtype(id:any)
{

  this.producttype.getproductstype(id)
  .subscribe(
    data=>
    {

      this.producttypedata=data;
    }

  )


}
selectprodshelve(id:any){
  this.productshelf.getshelfprod(id)
  .subscribe(
    data=>
    {

      this.productshelfdata=data;
    }

  )


  }

}

