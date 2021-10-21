import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminregisterService {
  [x: string]: any;
 url="http://pos.nastechltd.co/api/Account/registerAdmin";


  constructor(private http:HttpClient,private router:Router) { }
  regadmin(data:any)
  {
    this.http.post('http://api.pos.nastechltd.co/api/Account/register',data)
    .subscribe(res=>{
      alert("registered");
      this.router.navigate(['/login'])

    })
  }
}
