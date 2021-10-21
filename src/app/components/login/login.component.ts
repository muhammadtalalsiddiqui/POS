import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';
import { JwtConfig, JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  jwtHelper =new JwtHelperService();
  public loginForm !:FormGroup;
  loginModel:Login;

  constructor(private formbuilder :FormBuilder , private http:HttpClient, private router:Router
    ) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({

      email:[''],
      password:[''],
    })

    }

    login()
  {
    this.loginModel=this.loginForm.value;
    this.http.post("http://api.pos.nastechltd.co/api/Account/login",this.loginModel, {responseType: 'text'} )
    .subscribe(
      (Response: any) => {
        localStorage.setItem('token',Response)
        const decryptedUser=this.jwtHelper.decodeToken(Response)
        console.log(decryptedUser);
        if(decryptedUser.role=='Admin')
        {
          this.router.navigate(['/dashboard']);
        }
        else if(decryptedUser.role=='Employee')
        {
          this.router.navigate(['/basket']);

        }





      },
      (error: any) => {
          console.log(error)
      })


  }





}
