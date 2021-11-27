export class Movie {
    forEach(arg0: (movie: any) => void) {
      throw new Error('Method not implemented.');
    }
    img: string;
    id: string;
    name: string;
    director: string ;
    text: string ;
    price: number;

    constructor(img: string, id: string, name: string, director: string, text: string, price: number){
        this.img = img;
        this.id = id;
        this.name = name;
        this.director = director;
        this.text = text;
        this.price = price;
    }
}