import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  uri = 'http://localhost:4000';

  constructor(
    private http: HttpClient
  ) { }

  getCourses() {
    return this.http.get(`${this.uri}/course`);
  }

  getCourseById(id) {
    return this.http.get(`${this.uri}/course/${id}`);
  }

  addCourse(title, description, professor, seat, student, status) {
    const course = {
      title: title,
      description: description,
      professor: professor,
      seat: seat,
      student: student,
      status: status
    };
    return this.http.post(`${this.uri}/course/add`, course);
  }

  updateCourse(id, title, description, professor, seat) {
    const course = {
      title: title,
      description: description,
      professor: professor,
      seat: seat,
      // student: student,
      // status: status
    };
    return this.http.put(`${this.uri}/course/update/${id}`, course);
  }

  deleteCourse(id) {
    return this.http.get(`${this.uri}/course/delete/${id}`);
  }

}
