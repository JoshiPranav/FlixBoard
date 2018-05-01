import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../shared/movies.service';
import { MovieDetail } from '../shared/MovieDetail';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public movieDetail: MovieDetail;
  public isShortPlot = true;

  constructor(private route: ActivatedRoute,
              private movieService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getData(params['imdbID'], 'short');
   });
  }

  togglePlot() {
    this.getData(this.movieDetail.imdbID, this.isShortPlot === true ? 'full' : 'short');
    this.isShortPlot = !this.isShortPlot;
  }

  getData(imdbID: string, plotType: string) {
    this.movieService.fetch(imdbID, plotType).subscribe(data => {
      this.movieDetail = data;
    });
  }
}

