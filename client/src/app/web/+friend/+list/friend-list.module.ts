import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendListPage } from './friend-list';
import { PipesModule } from "../../../biz/pipes/pipes.module";
import { FriendListItemComponent } from './item/friend-list-item';

@NgModule({
  declarations: [
    FriendListPage,
		FriendListItemComponent
  ],
  imports: [
    IonicPageModule.forChild(FriendListPage),
    PipesModule
  ],
  exports: [
    FriendListPage
  ]
})
export class FriendListPageModule {}
