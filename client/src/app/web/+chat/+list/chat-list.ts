import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { Chat } from "../../../biz/models/chat.interface";
import { DatabaseManagerProvider } from "../../../biz/providers/database-manager/database-manager";
import { AuthManagerProvider } from "../../../biz/providers/auth-manager/auth-manager";

@IonicPage({
  name: 'ChatListPage',
  segment: 'chat/list',
})
@Component({
  selector: 'page-chat-list',
  templateUrl: 'chat-list.html',
})
export class ChatListPage {

  myUid: string;
  chats$: Observable<Chat[]>;


  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private db: DatabaseManagerProvider,
    private auth: AuthManagerProvider
    ) {
  }

  ionViewDidLoad() {
    this.myUid = this.auth.getUserInfo() ? this.auth.getUserInfo().uid : null;
    this.chats$ = this.db.chats().valueChanges().map(chats => chats.filter(chat => {
      return chat.ownUids.indexOf(this.myUid) > -1
    }));
  }

  viewMessages(chat) {
    this.navCtrl.push('ChatRoomPage', { id: chat.id });
  }
}
