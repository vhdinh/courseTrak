import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MockCourse} from './mockCourse';

describe('CourseService', () => {

  let service: CourseService;

  beforeEach(() => {TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      RouterTestingModule
    ],
    providers: [
      {provide: CourseService, useClass: MockCourse}
    ]
  });
  service = TestBed.get(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get back list of course', () => {
    service.getCourses().subscribe(data => {
      // expect(data).to.have.length(1);
    });
  });


});
