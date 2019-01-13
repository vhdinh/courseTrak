import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../service/course/course.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
