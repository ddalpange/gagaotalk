import { NgModule } from '@angular/core';
import { ChattingListPageModule } from './+list/chatting-list.module';
import { ChattingRoomPageModule } from './+room/chatting-room.module'; 

@NgModule({
  imports: [
    ChattingListPageModule,
    ChattingRoomPageModule
  ]
})
export class ChattingPageModule {}
