import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private _userData = null;

  public get userData() {
    return this._userData;
  }

  constructor(public afAuth: AngularFireAuth) {}

  login(): firebase.Promise<any> {
    console.log('login');
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredentials) => {
        this._userData = userCredentials;
      });
  }

  logout(): void {
    console.log('logout');
    this.afAuth.auth.signOut()
      .then(() => {
        this._userData = null;
      });
  }

}
