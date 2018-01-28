import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/map';
import { User } from 'firebase/app';
import { DatabaseManagerProvider } from "../database-manager/database-manager";

@Injectable()
export class AuthManagerProvider {

  private afUser: firebase.User = null;
  private authState: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: DatabaseManagerProvider
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
    this.afUser = null;
  }

  loginUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  facebookLogin() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  googleLogin() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        if (res.additionalUserInfo.isNewUser) {
          const user = res.user.toJSON();
          this._saveDatabase(user);
        }
      });
  }

  signupUser(email: string, password: string, displayName: string, phoneNumber: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this._saveDatabase({
          ...user.toJSON(), displayName: displayName, phoneNumber: phoneNumber
        });
      });
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser() {
    return this.afAuth.auth.signOut();
  }

  private _saveDatabase(user) {
    this.db.users().doc(user.uid).set(user);
  }

}
