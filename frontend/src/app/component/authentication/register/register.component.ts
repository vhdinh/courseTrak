import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../service/user/user.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {tap} from 'rxjs/internal/operators';
import {AuthenticationService} from '../../../service/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService
  ) {
    this.createForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(4) ]]
    })
  }

  ngOnInit() {
  }

  register() {
    let data = {
      email: this.createForm.value.email,
      firstName: this.createForm.value.firstName,
      lastName: this.createForm.value.lastName,
      password: this.createForm.value.password
    };
    this.userService.addUser(data).subscribe((data: any) => {
      if (data && data.alert) {
        this.snackBar.open(`${data.alert}`, 'OK', {
          duration: 3000,
        });
      } else {
        localStorage.setItem('token', data.token);
        this.router.navigate(['user/list']);
      }
    }, (error) => {
      this.snackBar.open('Log in failed', 'OK', {
        duration: 3000,
      });
    })
  }

}
