import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Memo } from '../../../biz/models/memo.interface';
import { MemoManagerProvider } from '../../../biz/providers/memo-manager/memo-manager';

@IonicPage({
  name: 'MemoDetailPage',
  segment: 'memo/detail',
})
@Component({
  selector: 'page-memo-detail',
  templateUrl: 'memo-detail.html',
})

export class MemoDetailPage {

  memo: Memo;
  memoKey: string;
  title: string;
  contents: string;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private memoManager: MemoManagerProvider) {
  }
  
  ngOnInit() {
    this.memo = this.navParams.get('memo');
    this.memoKey = this.navParams.get('memoKey');
  }

  onOpenEditMemo() {
    this.navCtrl.push('MemoCreatePage', { memo: this.memo, memoKey: this.memoKey });
  }
  
  onDeleteMemo(memo: Memo) {
    this.memoManager.deleteMemo(this.memoKey);
    this.navCtrl.pop();
  }
}