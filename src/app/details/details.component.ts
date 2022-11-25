import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestApiService} from '../shared/rest-api.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TrailerComponent} from '../trailer/trailer.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  movieId = this.router.snapshot.params['movie-id'];
  MovieDetails: any = {};
  innerWidth: any;
  watchList: any;

  saveToWatchList() {
    let data = {
     id: this.movieId };
    localStorage.setItem('watchList' , JSON.stringify(data))
  }

  constructor(
    public router: ActivatedRoute,
    public restApi: RestApiService,
    public dialog: MatDialog,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    return this.restApi.getMovieDetails(this.movieId).subscribe((data: {}) => {
      this.MovieDetails = data;
    });
  }



  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const relativeWidth = this.innerWidth > 1500 ? (1500 * 80) / 100 : (this.innerWidth * 80) / 100; // take up to 80% of the screen size
    const relativeHeight = (relativeWidth * 9) / 16; // 16:9 to which we add 120 px for the dialog action buttons ("close")
    dialogConfig.width = relativeWidth + 'px';
    dialogConfig.height = relativeHeight + 'px';

  }
}
