import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { API } from '../../app.api';
import { Users, UserInfo } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // USERS
  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${API}/users`)
    .pipe(
      map(response => response),
      retry(2),
      catchError(this.handleError)
    );
  }
  // INFO USER BY ID
  getUserById(id): Observable<UserInfo[]> {
    return this.httpClient.get<UserInfo[]>(`${API}/users/${id}`)
    .pipe(
      map(response => response),
      retry(2),
      catchError(this.handleError)
    );
  }
  // ERRORS
  handleError(error: HttpErrorResponse): Observable<[]> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    } else {
      errorMessage = `Error code: ${error.status},  message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
