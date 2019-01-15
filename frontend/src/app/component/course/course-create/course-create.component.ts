import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../service/course/course.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      description: '',
      professor: ['', Validators.required],
      seat: ['', Validators.required]
    })
  }

  addCourse(
    title: string,
    description: string,
    professor: string,
    seat: number) {
    this.courseService.addCourse(title, description, professor, seat, [], 'Open')
      .subscribe(() => {
      this.router.navigate(['/course/list']);
      })
  }

  ngOnInit() {
  }

}
