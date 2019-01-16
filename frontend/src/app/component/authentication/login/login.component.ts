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

  login(email: string, password: string) {
    let data = {
      email: email,
      password: password
    };
    this.authService.login(data).subscribe((data) => {
      if (data.alert) {
        this.snackBar.open('Log in failed', 'OK', {
          duration: 3000,
        });
      } else {
        console.log('LOGGED IN', data);

      }
    })
  }

}
