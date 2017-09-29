import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { IAuthStrategy } from './IAuthStrategy';


@Injectable()
export class GoogleAuthStrategy implements IAuthStrategy {

  constructor(public afAuth: AngularFireAuth) {}

  login(): Promise<firebase.User> {
    return <Promise<firebase.User>>this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredentials) => {
        return userCredentials.user;
      });
  }

  logout(): Promise<void> {
    return <Promise<void>>this.afAuth.auth.signOut();
  }

}
