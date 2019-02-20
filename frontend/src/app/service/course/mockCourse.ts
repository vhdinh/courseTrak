import {Observable, of} from 'rxjs/index';
import {Course} from '../../model/course.model';

const courseObject: Course[] = [];
// const course1: Course = {
//   id: '1',
//   title: 'Testing Course',
//   description: 'Testing Course Description',
//   professor: 'Vu Dinh',
//   seat: 25,
//   student: ['Testing1'],
//   status: 'Open'
// };

export class MockCourse {
  public getCourses(): Observable<Course[]> {
    return of(courseObject);
  }

  public addCourse(title, description, professor, seat, student, status) {
    const newCourse = {
      id: '1',
      title: title,
      description: description,
      professor: professor,
      seat: seat,
      student: student,
      status: status
    };
    return courseObject.push(newCourse)
  }
}
