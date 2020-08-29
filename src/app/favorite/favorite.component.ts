import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  private isClicked: Boolean = false;

  constructor() { }

  onClick() {
    this.isClicked = !this.isClicked;
  }

  ngOnInit() {
  }

}
