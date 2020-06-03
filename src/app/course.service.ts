import { course } from './course.model';
import { Injectable } from '@angular/core';

@Injectable()
export class courseService {
  course1: course;
  course2: course;
  course3: course;

  courses = [];

  constructor() {
    this.course1 = new course('react', 'reactjs', 'learn react');
    this.course2 = new course('angular', 'angularjs', 'learn angular');
    this.course3 = new course('spring', 'spring', 'learn spring');
    this.courses.push(this.course1);
    this.courses.push(this.course2);
    this.courses.push(this.course3);
  }

  getCourses(): course[] {
    return this.courses;
  }
}
