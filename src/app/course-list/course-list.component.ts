import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.filteredCourses = courses;
      console.log('Courses:', this.courses);
    });
  }

  filterCourses(): void {
    this.filteredCourses = this.courses.filter(course =>
      course.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      course.coursename.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  resetFilter(): void {
    this.searchTerm = '';
    this.filteredCourses = this.courses;
  }

  sortBy(field: keyof Course): void {
    this.filteredCourses.sort((a, b) => {
      const valueA = a[field] ?? '';
      const valueB = b[field] ?? '';
      return valueA.localeCompare(valueB);
    });
  }
}
