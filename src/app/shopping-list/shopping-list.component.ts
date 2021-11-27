import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movies-list';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  movieList: Movie[] = []  
  
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movieList = this.moviesService.getListMovies()
  }

}
