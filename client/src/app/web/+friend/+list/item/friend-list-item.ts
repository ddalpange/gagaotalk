import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'friend-list-item',
  templateUrl: 'friend-list-item.html'
})
export class FriendListItemComponent {

	@Input()
	friend: any;

	@Output()
	openProfile = new EventEmitter();

	defaultPhotoURL = "/assets/img/avatar/default-person.png";

  constructor() {
  }

  clickItem(friend) {
  	this.openProfile.emit(friend);
	}

}
