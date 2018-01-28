import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatListPage } from './chat-list';
import { PipesModule } from "../../../biz/pipes/pipes.module";
import { ChatListItemComponent } from './item/chat-list-item';

@NgModule({
  declarations: [
  	ChatListPage,
		ChatListItemComponent
  ],
  imports: [
    IonicPageModule.forChild(ChatListPage),
    PipesModule
  ],
  exports: [
    ChatListPage
  ]
})
export class ChatListPageModule {}
