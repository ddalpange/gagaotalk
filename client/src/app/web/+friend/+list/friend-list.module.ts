import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendListPage } from './friend-list';
import { PipesModule } from "../../../biz/pipes/pipes.module";
import { FriendListItemComponent } from './item/friend-list-item';
import { DirectivesModule } from "../../../biz/directives/directives.module";

@NgModule({
  declarations: [
    FriendListPage,
		FriendListItemComponent
  ],
  imports: [
    IonicPageModule.forChild(FriendListPage),
    PipesModule,
		DirectivesModule
  ],
  exports: [
    FriendListPage
  ]
})
export class FriendListPageModule {}
