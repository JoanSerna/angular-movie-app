import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Movie } from './../models/movie';
import { SearchMovie } from './../models/search-movie';
@Injectable({
  providedIn: 'root',
})
export class SearchMovieService {
  constructor(private httpClient: HttpClient) {}
  getMovieByIMDb(IMDb: string | null): Observable<HttpResponse<Movie>> {
    return this.httpClient.get<Movie>(
      `${environment.endPoint}?apiKey=${environment.apiKey}&i=${IMDb}`,
      { observe: 'response', responseType: 'json' }
    );
  }
  searchMovieByTitle(title: string): Observable<HttpResponse<SearchMovie>> {
    return this.httpClient.get<SearchMovie>(
      `${environment.endPoint}?apiKey=${environment.apiKey}&s=${title}`,
      { observe: 'response', responseType: 'json' }
    );
  }
}
