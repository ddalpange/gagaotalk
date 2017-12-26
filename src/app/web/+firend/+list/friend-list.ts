import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../biz/models/memo/user.interface';
import { AuthManagerProvider } from '../../../biz/providers/auth-manager/auth-manager';

/**
 * Generated class for the FriendListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'FriendListPage',
  segment: 'friend/list'
})
@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {
  user: User;
  friends: User[];

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

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private auth: AuthManagerProvider) {
  }

  ngOnInit () {
    this.user = this.auth.getUserInfo();
    console.log('유저', this.user);
  }

  viewMessages(chat) {
    this.navCtrl.push('ChattingRoomPage', { chatId: chat.id });
  }

}
