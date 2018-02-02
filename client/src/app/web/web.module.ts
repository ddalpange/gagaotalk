import { NgModule } from '@angular/core';
import { ChatPageModule } from './+chat/chat.module';
import { ConfigPageModule } from './+config/config.module';
import { FriendPageModule } from './+friend/friend.module';
import { MainNavigationPageModule } from './+main-navigation/main-navigation.module';
// import { MemoPageModule } from './+memo/memo.module';
import { ProfilePageModule } from './+profile/profile.module';
import { RegisterPageModule } from './+register/register.module';
import { FeedPageModule } from "./+feed/feed.module";


@NgModule({
  imports: [
    ChatPageModule,
    ConfigPageModule,
    FriendPageModule,
    MainNavigationPageModule,
    // MemoPageModule,
    ProfilePageModule,
    RegisterPageModule,
		FeedPageModule
  ]
})
export class WebPageModule {}
