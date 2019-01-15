import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseEditComponent} from './component/course/course-edit/course-edit.component';
import {CourseListComponent} from './component/course/course-list/course-list.component';
import {CourseCreateComponent} from './component/course/course-create/course-create.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {CourseAddComponent} from './component/course/course-add/course-add.component';

const routes: Routes = [
  // AUTHENTICATION
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  // COURSE
  { path: 'course/add', component: CourseAddComponent },
  { path: 'course/edit/:id', component: CourseEditComponent },
  { path: 'course/list', component: CourseListComponent },
  { path: 'course', redirectTo: 'course/list', pathMatch: 'full'},
  // { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
