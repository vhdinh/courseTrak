import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs/index';
import { map } from 'rxjs/operators';
import {User} from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  uri = 'http://localhost:4000';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(data) {
    return this.http.post(`${this.uri}/login`, data).pipe(map((user: any) => {
      if (user.signed_user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user.signed_user));
        localStorage.setItem('token', user.token);
        this.currentUserSubject.next(user.signed_user)
      };
      return user;
    }));
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isLoggedIn() {
    return (localStorage.getItem('token') !== null);
  }

}
