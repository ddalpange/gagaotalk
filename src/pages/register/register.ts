import { Component, ViewChild } from '@angular/core';
import { AlertController, App, LoadingController, NavController, Slides, IonicPage } from 'ionic-angular';
import { AuthManagerProvider } from '../../providers/auth-manager/auth-manager';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'RegisterPage',
  segment: 'register'
})
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  backgroundImage: string = 'assets/img/background/background-dahyeon-1.jpg';
  
  email: string = '';
  password: string = '';
  passwordConfirm: string = '';

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public authManager: AuthManagerProvider,
    public app: App
  ) { }

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  goToLogin() {
    this.slider.slideTo(1);
    this.reset();
  }

  goToSignup() {
    this.slider.slideTo(2);
    this.reset();
  }

  slideNext() {
    this.innerSlider.slideNext();
    this.reset();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
    this.reset();
  }

  reset() {
    this.email = '';
    this.password = '';
    this.passwordConfirm = '';
  }

  login() {
    let loader = this.loadingCtrl.create({
      content: '로그인 중입니다 ..'
    });

    loader.present();

    this.authManager.loginUser(this.email, this.password)
      .then(user => {
      console.log('성공!', user);
      loader.dismiss();
    })
    .catch(err => { 
      console.error('실패!', err);
      loader.dismiss();
      const alert = this.getAlert('실패', err.message);
      alert.present();
    });;
  }

  facebookLogin() {
    let loader = this.loadingCtrl.create({
      content: '로그인 중입니다 ..'
    });

    loader.present();

    this.authManager.facebookLogin()
      .then(user => {
      console.log('성공!', user);
      loader.dismiss();
    })
    .catch(err => { 
      console.error('실패!', err);
      loader.dismiss();
      const alert = this.getAlert('실패', err.message);
      alert.present();
    });;
  };

  googleLogin() {
    let loader = this.loadingCtrl.create({
      content: '로그인 중입니다 ..'
    });

    loader.present();

    this.authManager.googleLogin()
      .then(user => {
      console.log('성공!', user);
      loader.dismiss();
    })
    .catch(err => { 
      console.error('실패!', err);
      loader.dismiss();
      const alert = this.getAlert('실패', err.message);
      alert.present();
    });;
  };
  
  resetPassword() {
    let loader = this.loadingCtrl.create({
      content: '임시 비밀번호를 발급중입니다...'
    });

    loader.present();

    this.authManager.resetPassword(this.email)
      .then(user => {
      console.log('성공!', user);
      loader.dismiss();
      const alert = this.getAlert('성공', '인증 이메일을 발송하였습니다.');
      alert.present();
    })
    .catch(err => { 
      console.error('실패!', err);
      loader.dismiss();
      const alert = this.getAlert('실패', err.message);
      alert.present();
    });;
  }

  signup() {
    if(!this.password || this.password !== this.passwordConfirm) {
      const alert = this.getAlert('실패', '비밀번호를 확인해주세요.');
      alert.present();
      return;
    }

    let loader = this.loadingCtrl.create({
      content: '회원가입 중입니다 ..'
    });
    loader.present();
 
    this.authManager.signUpUser(this.email, this.password)
    .then(user => {
      console.log('성공!', user);
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
}
