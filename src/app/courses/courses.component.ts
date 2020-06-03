import { Component, OnInit } from '@angular/core';
import { course } from '../course.model';
import { courseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  course = '';
  selectedCourses = [];
  courses = [];
  constructor(courseService: courseService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit(): void {}

  onCourseSelect(course) {
    if (!this.selectedCourses.includes(course)) {
      this.selectedCourses.push(course);
      return this.selectedCourses;
    }
  }

  onDelete(course) {
    this.selectedCourses = this.selectedCourses.filter(function (item) {
      return item !== course;
    });
  }
}
