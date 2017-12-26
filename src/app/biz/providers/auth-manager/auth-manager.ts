import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/map';
import { User } from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthManagerProvider {

  private userInfo: User = null;
  private afUser: firebase.User = null;
  private authState: Observable<firebase.User>

  constructor(
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase) {
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

  getUserInfo(): User {
    return this.userInfo;
  }

  setUserInfo(afUser: firebase.User) {
    let userInfo: any = afUser.toJSON();
    this.userInfo = userInfo;
    this.afUser = afUser;
    console.log(userInfo);
    let dbObj = this.afDb.object(`user/${this.userInfo.uid}`);
    dbObj.update(this.userInfo);
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
