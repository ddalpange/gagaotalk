import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2'; // 파이어베이스 루트 모듈입니다.
import { AngularFireDatabaseModule } from 'angularfire2/database'; // 파이어베이스 데이터베이스 모듈입니다.
import { AngularFireAuthModule } from 'angularfire2/auth'; // 파이버베이스 인증 모듈입니다.

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { WebPageModule } from './web/web.module';
import { PipesModule } from './biz/pipes/pipes.module';
import { ProvidersModule } from './biz/providers/providers.module';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { DirectivesModule } from "./biz/directives/directives.module";

const firebaseConfig = {
  apiKey: "AIzaSyDbtHRdtprI1td-OMwx_9isoKen5fojclE",
  authDomain: "gagaotalk-707cd.firebaseapp.com",
  databaseURL: "https://gagaotalk-707cd.firebaseio.com",
  projectId: "gagaotalk-707cd",
  storageBucket: "gagaotalk-707cd.appspot.com",
  messagingSenderId: "708119708357"
};

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    WebPageModule,
    PipesModule,
    ProvidersModule,
		DirectivesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],

})
export class AppModule {}
