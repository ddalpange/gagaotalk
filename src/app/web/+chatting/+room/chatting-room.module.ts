import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChattingRoomPage } from './chatting-room';

@NgModule({
  declarations: [
    ChattingRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(ChattingRoomPage),
  ],
  exports: [
    ChattingRoomPage
  ]
})
export class ChattingRoomPageModule {}
