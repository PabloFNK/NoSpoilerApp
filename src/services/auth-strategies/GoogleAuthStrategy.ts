import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { IAuthStrategy } from './IAuthStrategy';


@Injectable()
export class GoogleAuthStrategy implements IAuthStrategy {

  constructor(public afAuth: AngularFireAuth) {}

  login(): firebase.Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(): firebase.Promise<any> {
    return this.afAuth.auth.signOut();
  }

}
