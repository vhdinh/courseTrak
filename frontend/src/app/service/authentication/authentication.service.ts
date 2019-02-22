import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs/index';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  uri = 'http://localhost:4000';

  constructor(
    private http: HttpClient
  ) { }

  login(data) {
    return this.http.post(`${this.uri}/login`, data);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return (localStorage.getItem('token') !== null);
  }

}
