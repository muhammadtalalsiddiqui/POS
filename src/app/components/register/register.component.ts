import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm !:FormGroup;
  constructor( private formbuilder :FormBuilder , private http:HttpClient, private router:Router){ }

  ngOnInit(): void {
    this.registerForm=this.formbuilder.group({
      displayName:[''],
      email:[''],
      password:[''],
      confirmPassword:[''],
      shopId:[0]




    })
  }
  signUp()
  {
    this.http.post('http://api.pos.nastechltd.co/api/Account/register',this.registerForm.value)
    .subscribe(res=>{
      alert("registered");
      this.registerForm.reset();
      this.router.navigate(['/login']);
    })

  }

}
