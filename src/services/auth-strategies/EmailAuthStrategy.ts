import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { IAuthStrategy, IRegistrable } from '.';


@Injectable()
export class EmailAuthStrategy implements IAuthStrategy, IRegistrable {

  constructor(public afAuth: AngularFireAuth) {}

  login(email: string, password: string): Promise<firebase.User> {
    return <Promise<firebase.User>>this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        return userCredentials.user;
      });
  }

  logout(): Promise<void> {
    return <Promise<void>>this.afAuth.auth.signOut();
  }

  register(email: string, password: string): Promise<void> {
    return Promise.resolve();
  }

}
