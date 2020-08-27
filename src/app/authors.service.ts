import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class AuthorsService {

  private authors = ['Mosh', 'Kyle', 'Max', 'Josh']

  constructor() { }

  getAuthors() {
    return this.authors;
  }
}
