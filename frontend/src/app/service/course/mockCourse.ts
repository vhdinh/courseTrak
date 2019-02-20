import {Observable, of} from 'rxjs/index';
import {Course} from '../../model/course.model';

const courseObject: Course[] = [];
const course1: Course = {
  id: '1',
  title: 'Testing Course',
  description: 'Testing Course Description',
  professor: 'Vu Dinh',
  seat: 25,
  student: ['Testing1'],
  status: 'Open'
};

export class MockCourse {
  public getCourses(): Observable<Course[]> {
    return of(courseObject);
  }

  public addCourse() {
    return courseObject.push(course1)
  }
}
