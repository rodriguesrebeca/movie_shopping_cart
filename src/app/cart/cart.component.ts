import { Movie } from 'src/app/model/movies-list';
import { ShoppingToCartService } from './../services/shopping-to-cart.service';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  cartItems: Movie[] = [];
  cartTotal = 0
 
  constructor(private shoppingToCartService : ShoppingToCartService) { }

  clear () {
    location.replace('/filmes')
    this.shoppingToCartService.clear()
  }
  
  ngOnInit(): void   {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]')
    this.cartTotal = 0;
    this.cartItems.forEach(movieItem => {
      this.cartTotal += movieItem.price
    })
      
  }  

    
}
