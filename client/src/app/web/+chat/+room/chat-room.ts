import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content, NavParams } from 'ionic-angular';
import { DatabaseManagerProvider } from "../../../biz/providers/database-manager/database-manager";
import { AuthManagerProvider } from "../../../biz/providers/auth-manager/auth-manager";
import { mockUsers } from "../../../biz/mocks/users.mock";
import { mockMessages } from "../../../biz/mocks/messages.mock";

@IonicPage({
  name: 'ChatRoomPage',
  segment: 'chat/room/:id'
})
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
  @ViewChild(Content) content: Content;
  users = mockUsers;
  messages = mockMessages;
  userId = 'a';

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private db: DatabaseManagerProvider,
    private auth: AuthManagerProvider
  ) {
  }

  ionViewDidLoad() {

  }

  isMe(userId): boolean {
    return this.userId === userId;
  }

  getUser(userId): any {
    return this.users.filter(user => user.id === userId)[0];
  }

  send(value) {
    this.messages.push({
      userId: this.userId,
      sendTimeAt: new Date(),
      content: value,
      unReadCount: 2
    });

    this._scrollToBottom();
    window.setTimeout(() => {this.receive()}, 500);
  }

  receive() {
    this.messages.push({
      userId: 'b',
      sendTimeAt: new Date(),
      content: '어쩌라고!',
      unReadCount: 2
    });

    this._scrollToBottom();
  }

  viewProfile() {
    this.navCtrl.push('ProfilePage');
  }

  private _scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

}
