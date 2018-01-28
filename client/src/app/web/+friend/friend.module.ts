import { NgModule } from '@angular/core';
import { FriendListPageModule } from './+list/friend-list.module';
import { DirectivesModule } from "../../biz/directives/directives.module";

@NgModule({
  imports: [
    FriendListPageModule,
		DirectivesModule
  ]
})
export class FriendPageModule {}
