import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthManagerProvider } from '../../biz/providers/auth-manager/auth-manager';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ConfigPage',
  segment: 'config'
})
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private auth: AuthManagerProvider) {
  }

  signout() {
    this.auth.logoutUser();
  }
}
