import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {Router} from '@angular/router';
import {User} from '../../../model/user.model';
import {AuthenticationService} from '../../../service/authentication/authentication.service';

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
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    console.log('LIST OF USER', this.authService.isLoggedIn());

    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    })
  }

  editUser(id) {
    this.router.navigate([`user/edit/${id}`])
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(() => {
      this.fetchUsers();
    })
  }

}
