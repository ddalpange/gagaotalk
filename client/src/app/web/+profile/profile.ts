import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../biz/models/user.interface";
import { DatabaseManagerProvider } from "../../biz/providers/database-manager/database-manager";
import { Observable } from "rxjs/Observable";
import { ChatManagerProvider } from "../../biz/providers/chat-manager/chat-manager";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ProfilePage',
  segment: 'profile/:uid'
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  following = false;

  uid: string;
  user$: Observable<User>;

  posts = [
    {
      postImageUrl: 'assets/img/background/background-2.jpg',
      text: `I believe in being strong when everything seems to be going wrong.
             I believe that happy girls are the prettiest girls.
             I believe that tomorrow is another day and I believe in miracles.`,
      date: 'November 5, 2016',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    }
  ];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private db: DatabaseManagerProvider,
    private chat: ChatManagerProvider
  ) { }

  ionViewDidLoad() {
    this.uid = this.navParams.get('uid');
    this.user$ = this.db.users().doc<User>(this.uid).valueChanges();
  }

  gonnaChatRoom() {
    this.chat.createChat([this.uid]);
  }

  imageTapped(post) {
    // this.toastCtrl.create('Post image clicked');
  }

  comment(post) {
    // this.toastCtrl.create('Comments clicked');
  }

  like(post) {
    // this.toastCtrl.create('Like clicked');
  }
}
