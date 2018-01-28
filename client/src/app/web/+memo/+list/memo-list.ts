import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController } from 'ionic-angular';
import { Memo } from '../../../biz/models/memo.interface';
import { MemoManagerProvider } from '../../../biz/providers/memo-manager/memo-manager';
import { AuthManagerProvider } from '../../../biz/providers/auth-manager/auth-manager';


@IonicPage({
  name: 'MemoListPage',
  segment: 'memo/list'
})

@Component({
  selector: 'page-memo-list',
  templateUrl: 'memo-list.html',
})

export class MemoListPage {

  searchKeyword: string = '';
  viewCount: number = 10;
  memoList: Observable<Memo[]>;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    private authManager: AuthManagerProvider,
    private memoManager: MemoManagerProvider) {
  }
 
  ngOnInit() {
    this.memoList = this.memoManager.getMemoList();
  }

  doInfinite(infiniteScroll: any) {
    window.setTimeout(() => {
      this.viewCount += this.viewCount;
      infiniteScroll.complete();
    }, 500);
  }

  filterMemo(memo: Memo): boolean {
    return memo.title.includes(this.searchKeyword) || memo.contents.includes(this.searchKeyword);
  }

  onClickViewMemoDetail(memo: Memo, memoKey: string) {
    this.navCtrl.push('MemoDetailPage', { memo: memo, memoKey: memoKey });
  }
  
  onClickCreateMemo() {
    this.navCtrl.push('MemoCreatePage');
  }

  onClickMoreOption() {
    const actionSheet = this.getMoreOptionActionSheet();
    actionSheet.present();
  }

  getMoreOptionActionSheet() {
    return this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Logout',
          role: 'destructive',
          handler: () => {
            this.authManager.logoutUser();
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
  }
}