import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseEditComponent} from './component/course/course-edit/course-edit.component';
import {CourseListComponent} from './component/course/course-list/course-list.component';
import {LoginComponent} from './component/authentication/login/login.component';
import {RegisterComponent} from './component/authentication/register/register.component';
import {CourseAddComponent} from './component/course/course-add/course-add.component';
import {CourseDetailComponent} from './component/course/course-detail/course-detail.component';
import {UserListComponent} from './component/user/user-list/user-list.component';
import {UserEditComponent} from './component/user/user-edit/user-edit.component';

const routes: Routes = [
  // AUTHENTICATION
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  // USER
  { path: 'user/list', component: UserListComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  // COURSE
  { path: 'course/list', component: CourseListComponent },
  { path: 'course/add', component: CourseAddComponent },
  { path: 'course/edit/:id', component: CourseEditComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'course', redirectTo: 'course/list', pathMatch: 'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
