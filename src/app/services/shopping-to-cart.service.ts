import { Movie } from 'src/app/model/movies-list';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingToCartService {

  subject = new Subject();
  cartItems : Movie[] = [];

  constructor() {}
    
  sendItemToCart(movieItem: Movie){
    this.cartItems.push(movieItem);
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }

  getCartItems(){
    return this.cartItems
  }

  clear(){
    localStorage.clear()
  }
} 
 

