import { Injectable } from '@angular/core';
import { IPayment } from '../models/payment-model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { JwtConfig, JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  HttpHeaders:any
  jwtHelper =new JwtHelperService();
  constructor(private http:HttpClient) {

   }


   getpayment()
   {
    const test =localStorage.getItem('token');
    const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
    console.log(decryptedUser);
      const HTTPheaders =new HttpHeaders({
       'Authorization':"Bearer "+test
     });
     return this.http.get<IPayment[]>("http://api.pos.nastechltd.co/api/PaymentMethod/paymentMethod",{headers:HTTPheaders})


   }
   deletepayment(id: any){
    const test =localStorage.getItem('token');
    const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
    console.log(decryptedUser);
      const HTTPheaders =new HttpHeaders({
       'Authorization':"Bearer "+test
     });
    console.log("del",id)
    return this.http.delete("http://api.pos.nastechltd.co/api/PaymentMethod/paymentMethod/"+id,{headers:HTTPheaders})
   }
}
