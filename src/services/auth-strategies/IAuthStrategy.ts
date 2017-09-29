import * as firebase from 'firebase/app';

export interface IAuthStrategy {
  login(): Promise<firebase.User>;
  logout(): Promise<void>;
}
