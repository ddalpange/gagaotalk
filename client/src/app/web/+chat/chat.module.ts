import { NgModule } from '@angular/core';
import { ChatListPageModule } from './+list/chat-list.module';
import { ChatRoomPageModule } from './+room/chat-room.module';

@NgModule({
  imports: [
    ChatListPageModule,
    ChatRoomPageModule
  ]
})
export class ChatPageModule {}
