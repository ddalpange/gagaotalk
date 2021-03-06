import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Memo } from '../../models/memo.interface';
import { AuthManagerProvider } from '../auth-manager/auth-manager';

/*
  Generated class for the MemoManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MemoManagerProvider {

  memoList: Observable<Memo[]>
  memoListRef: AngularFireList<Memo>;
  constructor(
    private http: Http,
    private afDB: AngularFireDatabase,
    private authManager: AuthManagerProvider
  ) {
    this.initMemoList();
  }

  initMemoList() {
    const userInfo = this.authManager.getUserInfo();
    if(!userInfo) return;
    this.memoListRef = this.afDB.list(`/memoList/${userInfo.uid}`)
    this.memoList = this.memoListRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    })
  }

  getMemoList(): Observable<Memo[]> {
    return this.memoList;
  }

  createMemo(title: string, contents: string) {

    let memo: Memo = {
      title: title,
      uid: this.authManager.getUserInfo().uid,
      contents: contents,
      author: this.authManager.getUserInfo().email,
      publishedDate: new Date(),
      recentUpdatedDate: new Date(),
    }

    this.memoListRef.push(memo);
  }

  deleteMemo(memoKey: string) {
    this.memoListRef.remove(memoKey);
  }

  editMemo(memoToChange: Memo, memoKey: string, title: string, contents: string) {
    memoToChange.title = title;
    memoToChange.contents = contents;
    this.memoListRef.set(memoKey, memoToChange);
  }

}
