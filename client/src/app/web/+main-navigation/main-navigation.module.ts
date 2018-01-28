import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainNavigationPage } from './main-navigation';

@NgModule({
  declarations: [
    MainNavigationPage,
  ],
  imports: [
    IonicPageModule.forChild(MainNavigationPage),
  ]
})
export class MainNavigationPageModule {}
