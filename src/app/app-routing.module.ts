import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/admin dashboard/dashboard.component';
import { AdminRegComponent } from './components/admin-reg/admin-reg.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ProductstypeComponent } from './components/productstype/productstype.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ShelfproductComponent } from './shelfproduct/shelfproduct.component';
import { ProductsComponent } from './products/products.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { BasketComponent } from './components/basket/basket.component';
import { Basket1Component } from './basket1/basket1.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
 // {path:'/registerAdmin',component:RegisteradminComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'adminRegistration',component:AdminRegComponent},
  {path:'registershop',component:ShopsComponent},
  {path:'productstype',component:ProductstypeComponent},
  {path:'sd',component:SidenavbarComponent},
  {path:'productshelves',component:ShelfproductComponent},
  {path:'products',component:ProductsComponent},
  {path:'payment',component:PaymentMethodComponent},
  {path:'basket',component:BasketComponent},
  {path:'basket1',component:Basket1Component},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
