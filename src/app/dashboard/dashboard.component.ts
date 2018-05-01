import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../shared/Movie';
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public year: number;
  public title: string;
  public movies: Movie[];

  constructor(private movieService: MoviesService) {
  }

  search() {
      this.movieService.search(this.title, this.year).subscribe(data => {this.movies = data; });
  }
}
