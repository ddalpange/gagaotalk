import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User } from '../../../biz/models/user.interface';
import { DatabaseManagerProvider } from '../../../biz/providers/database-manager/database-manager';
import { AuthManagerProvider } from "../../../biz/providers/auth-manager/auth-manager";

import { Observable } from "rxjs/Observable";


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

  friends$: Observable<User[]>;
  myUid: string;

  constructor(
    private navCtrl: NavController,
    private auth: AuthManagerProvider,
    private db: DatabaseManagerProvider) {
  }

  ionViewDidLoad () {
    let userInfo = this.auth.getUserInfo() || {};
    this.myUid = userInfo['uid'];

    this.friends$ = this.db.users().valueChanges();
  }

  viewMessages(friend: User) {
    this.navCtrl.push('ProfilePage', { uid: friend.uid });
  }
}
