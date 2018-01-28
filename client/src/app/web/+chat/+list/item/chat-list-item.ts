import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the ChatListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-list-item',
  templateUrl: 'chat-list-item.html'
})
export class ChatListItemComponent {
	@Input()
	chat: any;

	@Output()
	gonnaChat = new EventEmitter();

	defaultPhotoURL = "/assets/img/avatar/default-group.png";

  constructor() {
  }

  clickItem() {
  	this.gonnaChat.emit(this.chat);
	}

}
