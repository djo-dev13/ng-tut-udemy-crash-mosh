import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  
  private listOfAuthors: string[];
  
  constructor(authors: AuthorsService) {
    this.listOfAuthors = authors.getAuthors();
  }

  ngOnInit() {
  }

}
