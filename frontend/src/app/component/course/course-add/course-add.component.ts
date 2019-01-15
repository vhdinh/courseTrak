import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../service/course/course.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

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
      seat: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(0),
        Validators.max(50)
      ]]
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
