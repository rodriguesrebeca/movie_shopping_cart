import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/model/movies-list';

@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css']
})
export class CartproductComponent implements OnInit {

  @Input()
  cartItems!: Movie;

  constructor() { }
    
  ngOnInit(): void {
    
  }

}
