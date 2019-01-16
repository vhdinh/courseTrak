import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

}
