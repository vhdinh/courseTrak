import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {Router} from '@angular/router';
import {User} from '../../../model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  displayedColumns = ['email', 'firstName', 'lastName', 'role', 'actions'];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      console.log('USERS', data);
      this.users = data;
    })
  }

}
