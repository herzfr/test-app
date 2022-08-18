import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ErrorHandlingService } from '../config/error-handling.service';
import { UrlConstant } from '../general/url_service';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl: any;
  private timeOut = 30000;

  headers_object = new HttpHeaders().set('Content-Type', 'application/json');

  httpOptions = {
    headers: this.headers_object,
  };

  constructor(private http: HttpClient, private error: ErrorHandlingService) {
    this.apiUrl = environment.url;
  }

  getAllPosts() {
    return this.http
      .get<any>(this.apiUrl + UrlConstant.posts, this.httpOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        timeout(this.timeOut),
        catchError(this.error.handleError)
      );
  }

  getAllComment(id: number) {
    return this.http
      .get<any>(
        this.apiUrl + UrlConstant.posts + '/' + id + '/comments',
        this.httpOptions
      )
      .pipe(
        map((res) => {
          return res;
        }),
        timeout(this.timeOut),
        catchError(this.error.handleError)
      );
  }
}
