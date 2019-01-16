import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

}
