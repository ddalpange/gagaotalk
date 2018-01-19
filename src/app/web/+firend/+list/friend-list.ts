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

  friends = [
    {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }, {
      image: "/assets/img/avatar/momo.jpg",
      name: "모구리",
      comment: "열심히 하면 맛있는걸 먹을수 있다.",
    }];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private auth: AuthManagerProvider,
    private db: DatabaseManagerProvider) {
  }

  ngOnInit () {
  }

  viewMessages(chat) {
    this.navCtrl.push('ChattingRoomPage', { chatId: chat.id });
  }
}
