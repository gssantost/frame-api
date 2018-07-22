import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../utils/interfaces';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {

  @Input() username: string;
  @Input() profile: string;
  @Input() props: Post;
  @Output() navigate: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleUsernameClick(id: number) {
    this.navigate.emit(id);
  }

}