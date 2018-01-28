import { Injectable } from '@angular/core';
import { DatabaseManagerProvider } from "../database-manager/database-manager";
import { User } from "../../models/user.interface";
import { AuthManagerProvider } from "../auth-manager/auth-manager";
import { Chat } from "../../models/chat.interface";

/*
  Generated class for the ChatManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatManagerProvider {

  constructor(
    private auth: AuthManagerProvider,
    private db: DatabaseManagerProvider
  ) {
  }

  /*
  TODO: 향후 toPromise 정상 작동되면 바꿀것.
   */
  createChat(uids: string[]): void {
    const myUid = this.auth.getUserInfo().uid;
    const chatId = this.generateUUID();
    const userNames = [];
    for(let uid of ([myUid, ...uids])) {
      const userDoc = this.db.users().doc<User>(uid);
      const observer = userDoc.valueChanges()
        .subscribe((user: User) => {
          const ownChatIds = user.ownChatIds || [];
          userDoc.update({ownChatIds: [...ownChatIds, chatId]});

          if(user.uid !== myUid) userNames.push(user.displayName);

          if(userNames.length === uids.length) {
            this.db.chats().doc<Chat>(chatId).set({
              id: chatId,
              ownUids: [myUid, ...uids],
              name: userNames.join(', '),
              messages: [{
                uid: myUid,
                sendTimeAt: new Date(),
                content: 'hello world!',
                unReadCount: uids.length
              }],
              isOpen: false,
              isManToMan: uids.length === 1,
              isPrivate: false
            });
          }

          observer.unsubscribe();
        });
    }
  }


  private generateUUID(): string {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = (d + Math.random()*16) % 16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  };

}
