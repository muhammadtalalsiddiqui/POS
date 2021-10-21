import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{map} from 'rxjs/operators'
import * as $ from 'jquery'
import { Observable, observable } from 'rxjs';
import { IProducts } from '../models/products-model';
import { JwtConfig, JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  HttpHeaders:any
  jwtHelper =new JwtHelperService();

  constructor(private http:HttpClient) { }



  getprod(id :any)
  {
   const test =localStorage.getItem('token');
   const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
   console.log(decryptedUser);
     const HTTPheaders =new HttpHeaders({
      'Authorization':"Bearer "+test
    });
    return this.http.get<IProducts[]>("http://api.pos.nastechltd.co/api/Product/product/"+id+"?PageSize=30" ,{headers:HTTPheaders})


  }
  getprodforemp()
  {
   const test =localStorage.getItem('token');
   const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
   console.log(decryptedUser);
     const HTTPheaders =new HttpHeaders({
      'Authorization':"Bearer "+test
    });
    return this.http.get<IProducts[]>("http://api.pos.nastechltd.co/api/Product/productForEmployee?PageSize=30" ,{headers:HTTPheaders})


  }
  deleteprod(id: any){
    const test =localStorage.getItem('token');
    const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
    console.log(decryptedUser);
      const HTTPheaders =new HttpHeaders({
       'Authorization':"Bearer "+test
     });
    console.log("del",id)
    return this.http.delete("http://api.pos.nastechltd.co/api/Product/product/"+id,{headers:HTTPheaders})
   }
   getprodbyid(id:any){
    const test =localStorage.getItem('token');
    const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
    console.log(decryptedUser);
      const HTTPheaders =new HttpHeaders({
       'Authorization':"Bearer "+test
     });
     return this.http.get<IProducts[]>("http://api.pos.nastechltd.co/api/Product/productForEmployee" ,{headers:HTTPheaders})

   }
}
