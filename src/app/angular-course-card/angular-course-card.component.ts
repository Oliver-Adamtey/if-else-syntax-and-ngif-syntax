import { Component } from '@angular/core';
import { COURSE } from './db-data';

@Component({
  selector: 'app-angular-course-card',
  standalone: true,
  imports: [],
  templateUrl: './angular-course-card.component.html',
  styleUrl: './angular-course-card.component.scss'
})
export class AngularCourseCardComponent {

  courses = COURSE;
  OnCourseViewed() {
  throw new Error('Method not implemented.');
  }
  course: any;

}
