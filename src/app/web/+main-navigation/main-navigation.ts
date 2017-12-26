import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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
  configRoot = 'ConfigPage';

  constructor(public navCtrl: NavController) {}

}
