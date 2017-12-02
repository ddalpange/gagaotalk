import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainNavigationPage } from './main-navigation';
import { ChattingListPageModule } from '../chatting-list/chatting-list.module';
import { MemoListPageModule } from '../memo-list/memo-list.module';
import { FriendListPageModule } from '../friend-list/friend-list.module';

@NgModule({
  declarations: [
    MainNavigationPage,
  ],
  imports: [
    IonicPageModule.forChild(MainNavigationPage),
    ChattingListPageModule,
    MemoListPageModule,
    FriendListPageModule
  ]
})
export class MainNavigationPageModule {}
