import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ShopsService } from 'src/app/services/shops.service';
import { IShops } from 'src/app/models/shop-model';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title='Dashboard'
  jwtHelper =new JwtHelperService();
  userrole='';
  httpClient: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  userType:string;




  constructor(private ShopsService:ShopsService,private breakpointObserver: BreakpointObserver) { this.userType="dashboard" }
 shopdata:IShops[];


  ngOnInit(): void {

this.ShopsService.getshops()
.subscribe(
  data=>
  {
    console.log(this.shopdata)
    this.shopdata=data
    console.log

  }

)


    const decryptedUser=this.jwtHelper.decodeToken(localStorage.getItem('token')||'{}');
     this.userrole=decryptedUser.role


  var ctx = document.getElementById('myChart');
var myChart = new Chart('myChart', {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


  }
  opensidenav() {
    if (document.getElementById("sidenav1")!.style.width == "0%" && document.getElementById("navhead")!.style.display == "none"
    ) {
      document.getElementById("sidenav1")!.style.width = "50%";
      document.getElementById("abcd")!.style.backgroundColor = "black";
      document.getElementById("sidenavopenbut")!.style.fill = "white";
      document.getElementById("navhead")!.style.display = "block";
      document.getElementById("navhead")!.style.marginTop = "10px";
      document.getElementById("navhead")!.style.marginLeft = "10px";


    }
    else {
      document.getElementById("sidenav1")!.style.width = "0%"
      document.getElementById("abcd")!.style.backgroundColor = "white";
      document.getElementById("sidenavopenbut")!.style.fill = "black";
      document.getElementById("navhead")!.style.display = "none";
    }
  }
  catalog() {

  }
  extensions() {

  }
  designs() {

  }
  sales() {

  }
  customers() {

  }
  delete(data: any){
    this.ShopsService.deleteshops(data);



  }


}
