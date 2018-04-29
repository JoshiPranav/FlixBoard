import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesService {

  constructor(private httpClient: Http) { }

  search(title: string, year: number): Observable<Array<Movie>> {
    let url = 'http://www.omdbapi.com/?s=' + title;

            if (year) {
                url = url + '&y=' + year;
            }

            url = url + '&plot=short&r=json&apikey=ffcb9ce2';
            console.log(url);
            return this.httpClient.get(url)
                    .map(response => response.json().Search)
                    .catch(this.handleError);
                }
              private handleError(error: Response) {
                  console.error(error);
                  const msg = `Error status code ${error.status} at ${error.url}`;
                  return Observable.throw(msg);
                }
        }
