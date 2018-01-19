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

  chats = [
    {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      lastText: "열심히 하면 맛있는걸 먹을수 있다.",
      sendTimeAt: new Date(),
      chatId: "dfd3fXX2df",
      unreadCount: 3
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      lastText: "열심히 하면 맛있는걸 먹을수 있다.",
      sendTimeAt: new Date(),
      chatId: "dfd3fXX2df",
      unreadCount: 3
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      lastText: "열심히 하면 맛있는걸 먹을수 있다.",
      sendTimeAt: new Date(),
      chatId: "dfd3fXX2df",
      unreadCount: 3
    }
  ];

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  viewMessages(chat) {
    this.navCtrl.push('ChattingRoomPage', { chatId: chat.id });
  }
}
