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

	defaultPhotoURL: string = "/assets/img/avatar/default-person.png";
	defaultBackgroundURL: string = "/assets/img/background/background-6.jpg";

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
  ) { }

  ionViewDidLoad() {
  }

  gonnaChatRoom() {
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
