import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

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
  chatListRoot = 'ChatListPage';
  memoListRoot = 'MemoListPage';
  configRoot = 'ConfigPage';

  isAndroid: boolean = false;

  // tabList = [
  //   {
  //     root: 'FriendListPage',
  //     tabTitle: '친구',
  //     tabUrlPath: 'friend/list',
  //     tabIcon: 'person'
  //   }, {
  //     root: 'ChatListPage',
  //     tabTitle: '채팅',
  //     tabUrlPath: 'chat/list',
  //     tabIcon: 'text'
  //   }, {
  //     root: 'MemoListPage',
  //     tabTitle: '피드',
  //     tabUrlPath: 'memo/list',
  //     tabIcon: 'paper'
  //   }, {
  //     root: 'ConfigPage',
  //     tabTitle: '더보기',
  //     tabUrlPath: 'config',
  //     tabIcon: 'more'
  //   }
  // ];

  constructor(private platform: Platform) {
    this.isAndroid = platform.is('android');
  }

}
