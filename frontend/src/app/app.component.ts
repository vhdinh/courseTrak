import { Component } from '@angular/core';
import {AuthenticationService} from './service/authentication/authentication.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      console.log('SUBSCRIPTION CHANGED', user);
      this.currentUser = user;
    })
  }

  login() {
    this.router.navigate([`login`]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

}
