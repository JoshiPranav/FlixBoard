import { Injectable } from '@angular/core';
import { MovieData } from './MovieData';
import { Movie } from './Movie';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { MovieDetail } from './MovieDetail';

@Injectable()
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  search(title: string, year: number): Observable<Movie[]> {
    let url = 'http://www.omdbapi.com/?s=' + title;

    if (year) {
      url = url + '&y=' + year;
    }

    url = url + '&plot=short&r=json&apikey=ffcb9ce2';
    console.log(url);
    return this.httpClient.get(url)
              .map(data => {
                    const movieData = <MovieData>data;
                    return movieData.Search;
                  }
              )
              .catch(this.handleError);
  }

  fetch(imdbID: string, plotType: string): Observable<MovieDetail> {
    const url = 'http://www.omdbapi.com/?i=' + imdbID + '&plot=' + plotType + '&r=json&apikey=ffcb9ce2';
    return this.httpClient.get(url)
                  .map(data => {
                      return <MovieDetail>data;
                    }
                  )
                  .catch(this.handleError);
  }

  private handleError(error: Response) {
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}
