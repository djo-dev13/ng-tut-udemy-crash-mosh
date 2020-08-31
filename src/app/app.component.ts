import { Component } from '@angular/core';
import { changeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mosh-tut';

  courses = [1,2];

  favChanged(event: changeEventArgs) {
    console.log(`Fav Changed to: ${event.newVal}`);
  }
}
