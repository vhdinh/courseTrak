import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../service/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {User} from '../../../model/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  id: string;
  user: User;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    // this.createForm();
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.userService.getUserById(this.id)
        .subscribe((res: any) => {
          this.user = res;
          // this.updateForm.get('firstName').setValue(this.user.firstName);
          // this.updateForm.get('lastName').setValue(this.user.lastName);
          // this.updateForm.get('email').setValue(this.user.email);
          // this.updateForm.get('role').setValue(this.user.role);
        })
    })
  }

  // createForm(){
  //   this.updateForm = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', Validators.required],
  //     role: ['']
  //   })
  // }
  //
  // updateUser() {
  //   const user = {
  //     email: this.updateForm.value.email,
  //     firstName: this.updateForm.value.firstName,
  //     lastName: this.updateForm.value.lastName,
  //     role: this.updateForm.value.role
  //   };
  //   this.userService.updateUser(this.id, user).subscribe(() => {
  //     this.snackBar.open('Course updated successfully', 'OK', {
  //       duration: 3000,
  //     });
  //   });
  // }

}
