import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent {

  movies: Array<any> = [];

  constructor(
    private httpClient: HttpClient,
  ) {
    this.init();
  }

  init(): void {
    this.httpClient.get('https://127.0.0.1:8000/api/movies')
      .subscribe(
        (result: any) => {
          this.movies = result;
          console.log(result);
          result.forEach((movie: any) => {
            console.log(movie)
          })
        }
      )
  }

}
