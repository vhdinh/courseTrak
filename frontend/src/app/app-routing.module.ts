import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseEditComponent} from './component/courses/course-edit/course-edit.component';
import {CourseListComponent} from './component/courses/course-list/course-list.component';
import {CourseCreateComponent} from './component/courses/course-create/course-create.component';

const routes: Routes = [
  { path: 'create', component: CourseCreateComponent },
  { path: 'edit/:id', component: CourseEditComponent },
  { path: 'list', component: CourseListComponent },
  // { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
