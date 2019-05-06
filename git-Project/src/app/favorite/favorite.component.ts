import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  //template: '', //for small components i.e. less than 5-10 lines of code
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
    .glyphicon {
      color: green;
  }
  .glyphicon-star {
    background: black;
}
  `
]
})
export class FavoriteComponent {
 @Input('is-favorite') isFavorite: boolean;
 @Output('change') change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}