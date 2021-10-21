import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/admin dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RegisteradminComponent } from './components/register/registeradmin/registeradmin.component';
import { AdminRegComponent } from './components/admin-reg/admin-reg.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ProductstypeComponent } from './components/productstype/productstype.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { ShelfproductComponent } from './shelfproduct/shelfproduct.component';
import { ProductsComponent } from './products/products.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { BasketComponent } from './components/basket/basket.component';
import { Basket1Component } from './basket1/basket1.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    RegisteradminComponent,
    AdminRegComponent,
    ShopsComponent,
    ProductstypeComponent,
    SidenavbarComponent,
    ShelfproductComponent,
    ProductsComponent,
    PaymentMethodComponent,
    BasketComponent,
    Basket1Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    NgbModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
