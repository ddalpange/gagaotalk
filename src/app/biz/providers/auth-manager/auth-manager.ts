import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/map';
import { User } from 'firebase/app';

@Injectable()
export class AuthManagerProvider {

  private userInfo: User = null;
  private afUser: firebase.User = null;
  private authState: Observable<firebase.User>

  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.initAuth();
  }

  initAuth() {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(
      (afUser: firebase.User) => {
        if(afUser) {
          this.setUserInfo(afUser);
        } else {
          this.initUserInfo();
        }
      }
    )
  }

  getAuthState(): Observable<firebase.User> {
    return this.authState;
  }

  getUserInfo(): firebase.User {
    return this.afUser;
  }

  setUserInfo(afUser: firebase.User) {
    this.afUser = afUser;
  }

  initUserInfo() {
    this.userInfo = null;
    this.afUser = null;
  }

  loginUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  facebookLogin() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  googleLogin() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signUpUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser() {
    return this.afAuth.auth.signOut();
  }

}
