import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User } from '../../../biz/models/user.interface';
import { DatabaseManagerProvider } from '../../../biz/providers/database-manager/database-manager';
import { AuthManagerProvider } from "../../../biz/providers/auth-manager/auth-manager";

@IonicPage({
  name: 'FriendListPage',
  segment: 'friend/list'
})
@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {

  constructor(
    private navCtrl: NavController,
    private auth: AuthManagerProvider,
    private db: DatabaseManagerProvider) {
  }

  ionViewDidLoad () {
  }

	openProfile(friend: User) {
    this.navCtrl.push('ProfilePage', { uid: '123' });
  }
}
