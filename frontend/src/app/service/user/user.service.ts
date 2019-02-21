import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000';

  constructor(
    private http: HttpClient
  ) { }

  updateUser(id, password, firstName, lastName, role) {
    const user = {
      password: password,
      firstName: firstName,
      lastName: lastName,
      role: role
    };
    return this.http.put(`${this.uri}/user/update/${id}`, user);
  }

  getUsers() {
    return this.http.get(`${this.uri}/user`);
  }

}
