import { NgModule } from '@angular/core';
import { MemoListPageModule } from './+list/memo-list.module';
import { MemoDetailPageModule } from './+detail/memo-detail.module';
import { MemoCreatePageModule } from './+create/memo-create.module';

@NgModule({
  imports: [
    MemoListPageModule,
    MemoCreatePageModule,
    MemoDetailPageModule
  ]
})
export class MemoPageModule {}
