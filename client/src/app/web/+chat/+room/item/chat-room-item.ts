import { Component } from '@angular/core';

/**
 * Generated class for the ChatRoomItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-room-item',
  templateUrl: 'chat-room-item.html'
})
export class ChatRoomItemComponent {

  text: string;

  constructor() {
    console.log('Hello ChatRoomItemComponent Component');
    this.text = 'Hello World';
  }

}
