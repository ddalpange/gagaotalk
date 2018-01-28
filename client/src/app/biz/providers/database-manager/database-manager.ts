import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { User } from "../../models/user.interface";
import { Chat } from "../../models/chat.interface";

/*
  Generated class for the DatabaseManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseManagerProvider {

  constructor(
    private afDb: AngularFireDatabase,
    private afDoc: AngularFirestore
    ) {
  }

  users(): AngularFirestoreCollection<User> {
    return this.afDoc.collection('users');
  }

  chats(): AngularFirestoreCollection<Chat> {
    return this.afDoc.collection('chats');
  }

}
