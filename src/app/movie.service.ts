import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }



  postMovie(movie: Movie): Observable<Movie> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Movie>('http://localhost:3000/Watchlist', movie, {headers});
  }



  deleteMovie(id: number): Observable<Movie> {
    return this.httpClient.delete<Movie>('http://localhost:3000/Watchlist/' + id);
  }
}
