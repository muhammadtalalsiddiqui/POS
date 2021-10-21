import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { IShops } from '../models/shop-model';
import{map} from 'rxjs/operators'
import * as $ from 'jquery'
import { Observable, observable } from 'rxjs';
import { JwtConfig, JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  HttpHeaders:any
  jwtHelper =new JwtHelperService();
  constructor(private http:HttpClient) {

   }
   getshops()
   {
    const test =localStorage.getItem('token');
    const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
    console.log(decryptedUser);
      const HTTPheaders =new HttpHeaders({
       'Authorization':"Bearer "+test
     });
     return this.http.get<IShops[]>("http://api.pos.nastechltd.co/api/Shop/shop",{headers:HTTPheaders})


   }
   deleteshops(id: any){
    const test =localStorage.getItem('token');
    const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
    console.log(decryptedUser);
      const HTTPheaders =new HttpHeaders({
       'Authorization':"Bearer "+test
     });
    console.log("del",id)
    return this.http.delete("http://api.pos.nastechltd.co/api/Shop/shop/"+id,{headers:HTTPheaders})
   }
}
