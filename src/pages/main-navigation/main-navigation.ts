import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FriendListPage } from '../friend-list/friend-list';
import { ChattingListPage } from '../chatting-list/chatting-list';
import { MemoListPage } from '../memo-list/memo-list';

/**
 * Generated class for the MainNavigationPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'MainNavigationPage'
})
@Component({
  selector: 'page-main-navigation',
  templateUrl: 'main-navigation.html'
})
export class MainNavigationPage {

  friendListRoot = 'FriendListPage';
  chattingListRoot = 'ChattingListPage';
  memoListRoot = 'MemoListPage';

  constructor(public navCtrl: NavController) {}

}
