import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
courses;
canSave= true;

task = {
  title: 'Review applications',
  assignee: {
    name: 'John Smith'
  }
}

onSave() {
  this.canSave = !this.canSave;
}

loadCourses() {
  
  this.courses = [
    {id: 1, name: 'course 1 '},
    {id: 2, name: 'course 2 '},
    {id: 3, name: 'course 3 '}
  ];
}

trackCourse(index, course) {
  return course ? course.id : undefined;
}

onAdd(){
  this.courses.push({id: 4, name: 'course 4'});
}

onRemove(course) {
  let index = this.courses.indexOf(course);
  this.courses.splice(index, 1);
}

onChange(course) {
  course.name = 'UPDATED';
}

  post = {
  title: 'git-Project Test 2',
  isFavorite: true
  }

  tweet = {
    body: "Here is the body of your tweet...",
    isLiked: false,
    likesCount: 0
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  }
}
