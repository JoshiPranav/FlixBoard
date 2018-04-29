import { Component } from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { map } from 'rxjs/operators';
import { Movie } from './shared/Movie';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public year: number;
  public title: string;
  public movies: Observable<Array<Movie>>;

  constructor(private movieService: MoviesService) {
  }

  search() {
     this.movies = this.movieService.search(this.title, this.year);
  }
}
