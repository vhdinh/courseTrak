import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MockCourse} from './mockCourse';

fdescribe('CourseService', () => {

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
  it('should get back empty list of course', () => {
    service.getCourses().subscribe(data => {
      expect(data.length).toEqual(0);
    });
  });
  it('should get back 1 list item of course', async() => {
    await service.addCourse(
      'Testing Course',
      'Testing Course Description',
      'Vu Dinh',
      25,
      ['Testing1'],
      'Open');
    service.getCourses().subscribe(data => {
      expect(data.length).toEqual(1);
      expect(data[0].title).toContain('Testing Course');
      expect(data[0].description).toContain('Testing Course Description');
      expect(data[0].professor).toContain('Vu Dinh');
      expect(data[0].seat).toEqual(25);
      expect(data[0].status).toContain('Open');

    })
  })


});
