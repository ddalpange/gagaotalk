import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthManagerProvider } from './../providers/auth-manager/auth-manager';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    authManager: AuthManagerProvider,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    authManager.getAuthState().subscribe((user => {
      if(user)
        this.rootPage = 'MainNavigationPage';
      else 
        this.rootPage = 'RegisterPage';
    }));
  }  
}