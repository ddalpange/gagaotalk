import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../biz/models/user.interface';
import { Observable } from 'rxjs/Observable';
import { AuthManagerProvider } from '../../../biz/providers/auth-manager/auth-manager';
import { DatabaseManagerProvider } from '../../../biz/providers/database-manager/database-manager';
import { AngularFireList } from 'angularfire2/database';

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

  friends: Observable<User[]>;
  firendsRef: AngularFireList<{}>;

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
    private auth: AuthManagerProvider,
    private db: DatabaseManagerProvider) {
  }

  ngOnInit () {
    this.firendsRef = this.db.users();
    this.friends = this.firendsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    });
    console.log(this.friends);
  }

  viewMessages(chat) {
    console.log(chat);
    this.navCtrl.push('ChattingRoomPage', { chatId: chat.id });
  }

}
