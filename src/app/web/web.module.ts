import { NgModule } from '@angular/core';
import { ChattingPageModule } from './+chatting/chatting.module';
import { ConfigPageModule } from './+config/config.module';
import { FriendPageModule } from './+firend/friend.module';
import { MainNavigationPageModule } from './+main-navigation/main-navigation.module';
import { MemoPageModule } from './+memo/memo.module';
import { ProfilePageModule } from './+profile/profile.module';
import { RegisterPageModule } from './+register/register.module';

@NgModule({
  imports: [
    ChattingPageModule,
    ConfigPageModule,
    FriendPageModule,
    MainNavigationPageModule,
    MemoPageModule,
    ProfilePageModule,
    RegisterPageModule
  ]
})
export class WebPageModule {}
