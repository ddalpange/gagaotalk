import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChattingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ChattingListPage',
  segment: 'chatting/list',
})
@Component({
  selector: 'page-chatting-list',
  templateUrl: 'chatting-list.html',
})
export class ChattingListPage {

  chats = [{
    imageUrl: 'assets/img/avatar/marty-avatar.png',
    title: 'McFly',
    lastMessage: 'Hey, what happened yesterday?',
    timestamp: new Date()
  },
  {
    imageUrl: 'assets/img/avatar/ian-avatar.png',
    title: 'Venkman',
    lastMessage: 'Sup, dude',
    timestamp: new Date()
  }
  ,
  {
    imageUrl: 'assets/img/avatar/sarah-avatar.jpg',
    title: 'Sarah Mcconnor',
    lastMessage: 'You still ow me that pizza.',
    timestamp: new Date()
  }];

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  viewMessages(chat) {
    this.navCtrl.push('ChattingRoomPage', { chatId: chat.id });
  }
}
