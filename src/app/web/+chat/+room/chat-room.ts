import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content, NavParams } from 'ionic-angular';
import { DatabaseManagerProvider } from "../../../biz/providers/database-manager/database-manager";
import { AngularFirestoreDocument } from "angularfire2/firestore";
import { Chat } from "../../../biz/models/chat.interface";
import { Observable } from "rxjs/Observable";
import { User } from "../../../biz/models/user.interface";
import { AuthManagerProvider } from "../../../biz/providers/auth-manager/auth-manager";
import { Message } from "../../../biz/models/message.interface";


@IonicPage({
  name: 'ChatRoomPage',
  segment: 'chat/room/:id'
})
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
  @ViewChild(Content) content: Content;
  chatBox: string = '';

  chatDoc: AngularFirestoreDocument<Chat>;
  chat$: Observable<Chat>;
  users: User[];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private db: DatabaseManagerProvider,
    private auth: AuthManagerProvider
  ) {
  }

  ionViewDidLoad() {
    const id = this.navParams.get('id');
    this.chatDoc = this.db.chats().doc(id);
    this.chat$ = this.chatDoc.valueChanges();

    this.chat$.subscribe((chat) => {
      console.log(chat);
    });
  }

  isMe(userId): boolean {
    return this.auth.getUserInfo().uid === userId;
  }

  getUser(userId): any {
  }


  send() {

    this.chatDoc.collection<Message>('messages').add({
      uid: this.auth.getUserInfo().uid,
      content: 'dfsdf',
      sendTimeAt: new Date(),
      unReadCount: 3
    });

    this.chatBox = '';
    this._scrollToBottom();
    window.setTimeout(() => {this.receive()}, 500);
  }

  receive() {
    this._scrollToBottom();
  }

  viewProfile() {
    this.navCtrl.push('ProfilePage');
  }

  private _scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

}
