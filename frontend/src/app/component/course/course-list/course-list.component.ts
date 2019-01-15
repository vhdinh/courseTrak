import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../service/course/course.service';
import {Router} from '@angular/router';
import {Course} from '../../../model/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Course[];
  displayedColumns = ['title', 'description','professor', 'seats', 'status', 'actions'];

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getCourses()
      .subscribe((data: Course[]) => {
      console.log('DATA', data);
      this.courses = data;
      })
  }

  viewCourse(id) {
    this.router.navigate([`course/${id}`]);
  }

  editCourse(id) {
    this.router.navigate([`course/edit/${id}`]);
  }
  deleteCourse(id) {
    this.courseService.deleteCourse(id).subscribe(() => {
      this.fetchCourses();
    });
  }

}
