
import { Injectable } from '@angular/core';
import { Movie } from '../model/movies-list';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Movie[] = [
    new Movie("https://br.web.img3.acsta.net/pictures/bzp/01/40137.jpg", uuidv4(), "Serviço de Entregas Kiki", "Hayao Miyazaki", "Descrição1", 10),
    new Movie("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ__gbILnE3jJ4cC5-5MYRg1yJpKINKnb4mlkElPRgei9fynPah", uuidv4(), "A Viagem de Chihiro", "Toshio Suzuki", "Descrição 2", 20),
    new Movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZish2n99p_FbSsSv5zNzK0X3clcQhQmC1Zimm-HAtDQiYod7", uuidv4(), "Meu Amigo Totoro", "Hayao Miyazaki", "Descrição 3", 30),
    new Movie("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTali4zX4xnLgUTsCJzijuYA3bKj6VI12T9ZPGhH72Z7kQXwq5s", uuidv4(), "Princesa Monoke", "Hayao Miyazaki", "Descrição 4", 40),
    new Movie("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhENK_lY0b4rkTQJF4SDpoAreaPqCC6a6tuolp1B_Mbr3PN18U", uuidv4(), "O Castelo no Céu", "Hayao Miyazaki", "Descrição 5", 50),
    new Movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZ7FR5KMc8sY9rMJ520kSC1C_o6IxYl-vs5vKzglEhcEA755p", uuidv4(), "O Castelo Animado", "Hayao Miyazaki", "Descrição 6", 60)
  ]

  constructor() { }

  getListMovies(): Movie[] {
    return this.movies
  }


}
