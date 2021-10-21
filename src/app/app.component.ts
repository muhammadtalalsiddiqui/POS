import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { map, shareReplay } from 'rxjs/operators';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
//import { MaterialModule } from './material.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POS';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    userType:string;


  constructor(private breakpointObserver: BreakpointObserver) {
    this.userType="dashboard" }
}
