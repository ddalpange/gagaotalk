import { FormControl, FormBuilder } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';

interface Chat {
  userId: string;
  text: string;
  sendTimeAt: Date;
}

interface MockUser {
  id: string;
  image: string;
  name: string;
}
/**
 * Generated class for the ChattingRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ChattingRoomPage',
  segment: 'chatting/room'
})
@Component({
  selector: 'page-chatting-room',
  templateUrl: 'chatting-room.html',
})
export class ChattingRoomPage {
  me: MockUser = {
    id: 'a',
    name: 'ddalpange',
    image: '/assets/img/avatar/me.jpg'
  };

  users: MockUser[] = [
    {
      id: 'b',
      name: '모모',
      image: '/assets/img/avatar/momo.jpg'
    }
  ];

  chats: Chat[] = [
    {
      userId: 'b',
      text: '안녕하세요.',
      sendTimeAt: new Date()
    }, {
      userId: 'b',
      text: '안녕하세요.',
      sendTimeAt: new Date()
    }, {
      userId: 'a',
      text: '안녕하세요.',
      sendTimeAt: new Date()
    }
  ]

  @ViewChild(Content) content: Content;
  chatBox: string = '';

  constructor(private navCtrl: NavController) {
  }

  isMe(userId): boolean {
    return this.me.id === userId;
  }

  getUser(userId): MockUser {
    let users = this.users.slice();
    users.push(this.me);
    console.log(this.users.concat(new Array(this.me)).filter(user => user.id === userId))
    return this.users.concat(new Array(this.me)).filter(user => user.id === userId)[0];
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

  send() {
    this.chats.push({
      userId: this.me.id,
      text: this.chatBox,
      sendTimeAt: new Date()
    });

    this.scrollToBottom();

    window.setTimeout(() => {this.receive()}, 500);
  }

  receive() {
    this.chats.push({
      userId: this.users[0].id,
      text: '어쩌라고!',
      sendTimeAt: new Date()
    });

    this.scrollToBottom();
  }

  viewProfile() {
    this.navCtrl.push('ProfilePage');
  }

}
