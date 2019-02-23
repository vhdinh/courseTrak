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

  addUser(user) {
    return this.http.post(`${this.uri}/user/add`, user);
  }

  updateUser(id, password, firstName, lastName, role) {
    const user = {
      password: password,
      firstName: firstName,
      lastName: lastName,
      role: role
    };
    return this.http.put(`${this.uri}/user/update/${id}`, user);
  }

  getUserById(id) {
    return this.http.get(`${this.uri}/user/${id}`);
  }

  getUsers() {
    return this.http.get(`${this.uri}/user`);
  }

  deleteUser(id) {
    return this.http.get(`${this.uri}/user/delete/${id}`);
  }

}
