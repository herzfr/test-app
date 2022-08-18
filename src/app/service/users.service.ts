import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthDto } from '../models/dto/auth.dto';
import { catchError, map, timeout } from 'rxjs/operators';
import { UrlConstant } from '../general/url_service';
import { ErrorHandlingService } from '../config/error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl: any;
  private timeOut = 30000;

  headers_object = new HttpHeaders().set('Content-Type', 'application/json');

  httpOptions = {
    headers: this.headers_object,
    // withCredentials: true,
  };

  constructor(private http: HttpClient, private error: ErrorHandlingService) {
    this.apiUrl = environment.url;
  }

  signin() {
    return this.http
      .get<any>(this.apiUrl + UrlConstant.user, this.httpOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        timeout(this.timeOut),
        catchError(this.error.handleError)
      );
  }

  getAllUser() {
    return this.http
      .get<any>(this.apiUrl + UrlConstant.user, this.httpOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        timeout(this.timeOut),
        catchError(this.error.handleError)
      );
  }
}
