import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChattingListPage } from './chatting-list';

@NgModule({
  declarations: [
    ChattingListPage,
  ],
  imports: [
    IonicPageModule.forChild(ChattingListPage),
  ],
  exports: [
    ChattingListPage
  ]
})
export class ChattingListPageModule {}
