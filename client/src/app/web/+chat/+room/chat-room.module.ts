import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatRoomPage } from './chat-room';
import { ChatRoomItemComponent } from './item/chat-room-item';

@NgModule({
  declarations: [
		ChatRoomPage,
		ChatRoomItemComponent
  ],
  imports: [
    IonicPageModule.forChild(ChatRoomPage),
  ],
  exports: [
    ChatRoomPage
  ]
})
export class ChatRoomPageModule {}
