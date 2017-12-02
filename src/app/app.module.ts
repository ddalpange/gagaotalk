import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2'; // 파이어베이스 루트 모듈입니다.
import { AngularFireDatabaseModule } from 'angularfire2/database'; // 파이어베이스 데이터베이스 모듈입니다.
import { AngularFireAuthModule } from 'angularfire2/auth'; // 파이버베이스 인증 모듈입니다.

import { MemoListPageModule } from './../pages/memo-list/memo-list.module';
import { MemoDetailPageModule } from './../pages/memo-detail/memo-detail.module';
import { MemoCreatePageModule } from './../pages/memo-create/memo-create.module';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MemoManagerProvider } from './../providers/memo-manager/memo-manager';

import { MyApp } from './app.component';
import { AuthManagerProvider } from '../providers/auth-manager/auth-manager';
import { FriendListPageModule } from '../pages/friend-list/friend-list.module';
import { ChattingListPageModule } from '../pages/chatting-list/chatting-list.module';
import { MainNavigationPageModule } from '../pages/main-navigation/main-navigation.module';
import { PipesModule } from '../pipes/pipes.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { RegisterPageModule } from '../pages/register/register.module';


export const firebaseConfig = {
  apiKey: "AIzaSyAb_0ZNH9Bsj_vPZ4F2W07KqoqwIobUp4A",
  authDomain: "memo-28314.firebaseapp.com",
  databaseURL: "https://memo-28314.firebaseio.com",
  projectId: "memo-28314",
  storageBucket: "memo-28314.appspot.com",
  messagingSenderId: "830787341186"
};


@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MemoCreatePageModule,
    MemoDetailPageModule,
    MemoListPageModule,
    FriendListPageModule,
    ChattingListPageModule,
    MainNavigationPageModule,
    ProfilePageModule,
    RegisterPageModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MemoManagerProvider,
    AuthManagerProvider
  ],

})
export class AppModule {}