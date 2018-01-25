import { Component } from '@angular/core';
import { AlertController, LoadingController, IonicPage } from 'ionic-angular';
import { AuthManagerProvider } from '../../biz/providers/auth-manager/auth-manager';
import { DatabaseManagerProvider } from '../../biz/providers/database-manager/database-manager';

@IonicPage({
  name: 'RegisterPage',
  segment: 'register'
})
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email: string = '';
  password: string = '';
  passwordConfirm: string = '';
  displayName: string = '';
  phoneNumber: string = '';
  isSignUp: boolean = false;

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private auth: AuthManagerProvider
  ) { }

  toggleSiginup() {
    this.isSignUp = !this.isSignUp;
    this.email = '';
    this.password = '';
    this.passwordConfirm = '';
  }

  login() {
    let loader = this.getLoader('로그인 중입니다.');
    loader.present();

    this.auth.loginUser(this.email, this.password)
      .then(user => {
        loader.dismiss();
      })
      .catch(err => {
        loader.dismiss();
        const alert = this.getAlert('실패', err.message);
        alert.present();
      });;
  }

  facebookLogin() {
    let loader = this.getLoader('로그인 중입니다.');
    loader.present();

    this.auth.facebookLogin()
      .then(user => {
        console.log(user.toJSON());
        loader.dismiss();
      })
      .catch(err => {
        loader.dismiss();
        const alert = this.getAlert('실패', err.message);
        alert.present();
      });;
  };

  googleLogin() {
    let loader = this.getLoader('로그인 중입니다.');

    loader.present();

    this.auth.googleLogin()
      .then(res => {
        loader.dismiss();
      })
      .catch(err => {
        loader.dismiss();
        const alert = this.getAlert('실패', err.message);
        alert.present();
      });;
  };

  resetPassword() {
    let loader = this.getLoader('임시 비밀번호를 발급중입니다.');
    loader.present();

    this.auth.resetPassword(this.email)
      .then(user => {
        loader.dismiss();
        const alert = this.getAlert('성공', '임시 비밀번호를 발송하였습니다.');
        alert.present();
      })
      .catch(err => {
        loader.dismiss();
        const alert = this.getAlert('실패', err.message);
        alert.present();
      });;
  }

  signup() {
    if(!this.password || this.password !== this.passwordConfirm || !this.phoneNumber || !this.displayName) {
      const alert = this.getAlert('실패', '입력을 안하신게 있네요.');
      alert.present();
      return;
    }

    let loader = this.getLoader('회원가입 중입니다.');
    loader.present();

    this.auth.signupUser(this.email, this.password, this.displayName, this.phoneNumber)
      .then(user => {
        loader.dismiss();
        const alert = this.getAlert('성공', '회원가입에 성공하였습니다.');
        alert.present();
      })
      .catch(err => {
        loader.dismiss();
        const alert = this.getAlert('실패', err.message);
        alert.present();
      });
  }

  getAlert(title: string, message: string) {
    return this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [{
        text: '확인',
      }]
    });
  }

  getLoader(content: string) {
    return this.loadingCtrl.create({
      content: content
    });
  }
}
