import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  private listOfAuthors: string[];

  private emailAddress = "test.email@default.com";

  private authorDescription = "this is a very long description that need to be trimmed in order to display the custome pipe functionality in angular framework";

  constructor(authors: AuthorsService) {
    this.listOfAuthors = authors.getAuthors();
  }

  onClick($event) {
    console.log("Btn clicked!");
    $event.stopPropagation();
  }

  alertClicked() {
    console.log("Alert Clicked!");
  }

  onEnter(email) {
    console.log(email);
  }

  onEnterTwo() {
    console.log(this.emailAddress);
  }

  ngOnInit() {
  }

}
