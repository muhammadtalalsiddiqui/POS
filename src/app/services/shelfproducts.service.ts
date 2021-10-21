import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{map} from 'rxjs/operators'
import * as $ from 'jquery'
import { Observable, observable } from 'rxjs';
import { IShelfprod } from '../models/shelf-products-models';
import { JwtConfig, JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ShelfproductsService {
  HttpHeaders:any
  jwtHelper =new JwtHelperService();

  constructor(private http:HttpClient) { }



  getshelfprod(id :any)
  {
   const test =localStorage.getItem('token');
   const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
   console.log(decryptedUser);
     const HTTPheaders =new HttpHeaders({
      'Authorization':"Bearer "+test
    });
    return this.http.get<IShelfprod[]>("http://api.pos.nastechltd.co/api/ProductShelves/productShelves/"+id,{headers:HTTPheaders})


  }
  deleteproductshelf(id: any){
    const test =localStorage.getItem('token');
    const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
    console.log(decryptedUser);
      const HTTPheaders =new HttpHeaders({
       'Authorization':"Bearer "+test
     });
    console.log("del",id)
    return this.http.delete("http://api.pos.nastechltd.co/api/ProductShelves/productShelves/"+id,{headers:HTTPheaders})
   }
}
