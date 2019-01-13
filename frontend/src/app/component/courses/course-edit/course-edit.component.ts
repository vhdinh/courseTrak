import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../service/course/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  id: string;
  course: any = {};
  updateForm: FormGroup;

  constructor(private courseService: CourseService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.courseService.getCourseById(this.id)
        .subscribe(res => {
          this.course = res;
          this.updateForm.get('title').setValue(this.course.title);
          this.updateForm.get('description').setValue(this.course.description);
          this.updateForm.get('professor').setValue(this.course.professor);
          this.updateForm.get('seat').setValue(this.course.seat);

        })
    })
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      description: '',
      professor: ['', Validators.required],
      seat: ['', Validators.required]
    })
  }

  updateCourse(title, description, professor, seat) {
    this.courseService.updateCourse(this.id, title, description, professor, seat).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }
}
