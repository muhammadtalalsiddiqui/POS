import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtConfig, JwtHelperService } from '@auth0/angular-jwt';
import { Ibasket } from '../models/basket-models';
@Injectable({
  providedIn: 'root'
})
export class BasketservicesService {

  HttpHeaders: any
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) {

  }

  postbasket(id: any, quantity: any) {
    const test = localStorage.getItem('token'|| '{}');

    const HTTPheaders = new HttpHeaders({
      'Authorization': "Bearer " + "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJkNDVlOTUzYS1iMzkxLTQ1YzgtYTc3ZC0zMTAwZDkwZGEwMDAiLCJlbWFpbCI6ImVtcGxveWVlQGVtYWlsLmNvbSIsImdpdmVuX25hbWUiOiIxIiwicm9sZSI6IkVtcGxveWVlIiwibmJmIjoxNjM0NzI4MTI3LCJleHAiOjE2MzUzMzI5MjcsImlhdCI6MTYzNDcyODEyNywiaXNzIjoiaHR0cDovL25hc3RlY2gtcG9pbnRPZnNhbGUubmFzdGVjaGx0ZC5jby8ifQ.iWPxzOLbPx02lkFaWofdIMpfoZoTtjKcjR6dUFDKlDgrV4oKmxHGZ42l9sO8zcMynd9xcuHVzphjLk1BDSzdKw"
    });
    console.log("____________",HTTPheaders)
    this.http.post<any>("http://api.pos.nastechltd.co/api/Basket/basket/14/1",{ headers: HTTPheaders }).subscribe(
        (Response: any) => {


          alert(Response.message)

        },
        (error: any) => {
          console.log(error)
        })
  }


  getbasket() {
    const test = localStorage.getItem('token');
    const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
    console.log(decryptedUser);
    const HTTPheaders = new HttpHeaders({
      'Authorization': "Bearer " + test
    });
    return this.http.get<Ibasket[]>("http://api.pos.nastechltd.co/api/Basket/basket", { headers: HTTPheaders })


  }
  deletebasket(id: any) {
    const test = localStorage.getItem('token');
    const decryptedUser = this.jwtHelper.decodeToken(localStorage.getItem('token') || '{}');
    console.log(decryptedUser);
    const HTTPheaders = new HttpHeaders({
      'Authorization': "Bearer " + test
    });
    console.log("del", id)
    return this.http.delete("http://api.pos.nastechltd.co/api/Basket/basket/" + id, { headers: HTTPheaders })
  }
}
