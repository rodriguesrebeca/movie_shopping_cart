import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductsComponent } from './shopping-list/products/products.component';
import { HomeComponent } from "./home/home.component"
import { CartComponent } from './cart/cart.component';
import { CartproductComponent } from './cart/cartproduct/cartproduct.component';
import { CartFormComponent } from './cart/cart-form/cart-form.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'filmes', component: ShoppingListComponent },
  { path: 'checkout', component: CartComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShoppingListComponent,
    ProductsComponent,
    HomeComponent,
    CartComponent,
    CartproductComponent,
    CartFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
