import { ShoppingToCartService } from './../../services/shopping-to-cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/model/movies-list';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  

  @Input()
  movieItem!: Movie;
  inCart = false

  addToCart(){
    this.shoppingToCartService.sendItemToCart(this.movieItem)
    window.alert('O filme foi adicionado no carrinho!')
    this.inCart = true
  }

  constructor(private shoppingToCartService : ShoppingToCartService) { }

  ngOnInit(): void {  
  }

}

