import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseListComponent } from './component/course/course-list/course-list.component';
import { CourseEditComponent } from './component/course/course-edit/course-edit.component';
import { MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule } from '@angular/material';
import {CourseService} from './service/course/course.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './component/authentication/login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import { RegisterComponent } from './component/authentication/register/register.component';
import { CourseAddComponent } from './component/course/course-add/course-add.component';
import { CourseDetailComponent } from './component/course/course-detail/course-detail.component';
import {AuthenticationService} from './service/authentication/authentication.service';
import { UserListComponent } from './component/user/user-list/user-list.component';
import {UserEditComponent} from './component/user/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseEditComponent,
    LoginComponent,
    RegisterComponent,
    CourseAddComponent,
    CourseDetailComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [CourseService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
