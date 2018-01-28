import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendListPage } from './friend-list';
import { PipesModule } from "../../../biz/pipes/pipes.module";

@NgModule({
  declarations: [
    FriendListPage,
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
