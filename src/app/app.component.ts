import { Component } from '@angular/core';
import { changeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mosh-tut';

  courses: any[] = [];

  viewMode = "invalid";

  favChanged(event: changeEventArgs) {
    console.log(`Fav Changed to: ${event.newVal}`);
  }

  addCourse() {
    let lastId = this.courses[this.courses.length - 1].id;
    this.courses.push({id: lastId + 1, name: `Course ${lastId + 1}`});
  }

  editCourse(i:number) {
    this.courses[i].name += ' updated ';
  }

  deleteCourse(i:number) {
    this.courses.splice(i, 1);
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'Course 1'},
      {id: 2, name: 'Course 2'},
      {id: 3, name: 'Course 3'}
    ];
  }

  identityFn(index, course) {
    return course ? course.id : undefined;
  }
}
