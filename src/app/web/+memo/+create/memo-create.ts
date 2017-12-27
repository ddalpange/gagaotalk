import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Memo } from '../../../biz/models/memo.interface';
import { MemoManagerProvider } from '../../../biz/providers/memo-manager/memo-manager';

@IonicPage({
  name: 'MemoCreatePage',
  segment: 'memo/create'
})
@Component({
  selector: 'page-memo-create',
  templateUrl: 'memo-create.html',
})

export class MemoCreatePage {
  memo: Memo;
  memoKey: string;
  title: string;
  contents: string;
  
  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private memoManager: MemoManagerProvider) {
  }

  ngOnInit() {
    let memo = this.navParams.get('memo');
    let memoKey = this.navParams.get('memoKey');
    if(memo) {
      this.memo = memo;
      this.memoKey = memoKey;
      this.title = memo.title;
      this.contents = memo.contents;
    }
  }

  onSaveMemo() {
    
    if(!this.title || !this.contents) {
      const alert = this.getValidationFailAlert();
      alert.present();
      return;
    }

    if(this.memo) {
      this.memoManager.editMemo(this.memo, this.memoKey, this.title, this.contents);
    } else {
      this.memoManager.createMemo(this.title, this.contents);
    }
    
    this.navCtrl.pop();
  }

  getValidationFailAlert() {
    return this.alertCtrl.create({
      title: '앗!!',
      subTitle: '제목과 내용중 안쓰신게 있네요!'
    });
  }
}