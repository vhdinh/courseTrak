import { Component } from '@angular/core';
import {AuthenticationService} from './service/authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  loggedIn: boolean;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  getMenu() {
    this.loggedIn = this.authService.isLoggedIn();
  }

  login() {
    this.router.navigate([`login`]);
  }

  logout() {
    this.authService.logout();
  }
}
