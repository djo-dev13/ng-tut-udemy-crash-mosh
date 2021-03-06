import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') private isClicked: Boolean = false;

  @Output('change') click = new EventEmitter();

  constructor() { }

  onClick() {
    this.isClicked = !this.isClicked;
    this.click.emit({newVal: this.isClicked});
  }

  ngOnInit() {
  }

}

export interface changeEventArgs {
  newVal: boolean
}
