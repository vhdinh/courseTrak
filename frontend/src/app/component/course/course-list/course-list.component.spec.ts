import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import {MatCardModule, MatDividerModule, MatMenuModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {CourseService} from '../../../service/course/course.service';
import {MockCourse} from '../../../service/course/mockCourse';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let service: CourseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      imports: [
        MatDividerModule,
        MatTableModule,
        MatMenuModule,
        MatCardModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        {provide: CourseService, useClass: MockCourse}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CourseService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should render create course button', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('#newCourseBtn');
    expect(button).toBeTruthy();
    expect(button.textContent).toMatch('Add New Course');
  });
  it('should render empty table',  () => {
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('table');
    expect(table).toBeTruthy();
    expect(table.rows.length).toEqual(1);
  });
  it('should render table with data', async() => {
    await service.addCourse(
      'Testing Course',
      'Testing Course Description',
      'Vu Dinh',
      25,
      ['Testing1'],
      'Open');
    await component.fetchCourses();
    const table = fixture.debugElement.nativeElement.querySelector('table');
    fixture.detectChanges();
    expect(table).toBeTruthy();
    expect(table.rows.length).toEqual(2);
    expect(table.rows[1].querySelector('.courseTitle').innerHTML).toContain('Testing Course');
    expect(table.rows[1].querySelector('.cdk-column-description').innerHTML).toContain('Testing Course Description');
    expect(table.rows[1].querySelector('.cdk-column-professor').innerHTML).toContain('Vu Dinh');
    expect(table.rows[1].querySelector('.cdk-column-seats').innerHTML).toContain('25');
    expect(table.rows[1].querySelector('.cdk-column-status').innerHTML).toContain('Open');
  });
});
