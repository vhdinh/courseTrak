import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../service/authentication/authentication.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private snackBar: MatSnackBar
  ) {
    this.createForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(4) ]]
    })
  }

  ngOnInit() {
  }

  // login() {
  //   let data = {
  //     email: this.createForm.value.email,
  //     password: this.createForm.value.password
  //   };
  //   this.authService.login(data).subscribe((data) => {
  //     if (!data) {
  //       this.snackBar.open('Log in failed', 'OK', {
  //         duration: 3000,
  //       });
  //     } else {
  //       console.log('LOGGED IN', data);
  //
  //     }
  //   })
  // }

  login() {
    let data = {
      email: this.createForm.value.email,
      password: this.createForm.value.password
    };
    this.authService.login(data).subscribe((data: any) => {
      console.log('login', data);
      if (data && data.alert) {
        this.snackBar.open(`${data.alert}`, 'OK', {
          duration: 3000,
        });
      } else {
        localStorage.setItem('token', data.token);
        // localStorage.setItem('currentUser', JSON.stringify(data.signed_user));
        this.router.navigate(['course/list']);
      }
    }, (error) => {
      this.snackBar.open('Log in failed', 'OK', {
        duration: 3000,
      });
    })
  }


  register() {
    this.router.navigate([`register`]);
  }

}
