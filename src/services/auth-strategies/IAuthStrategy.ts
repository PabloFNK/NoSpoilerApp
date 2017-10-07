import * as firebase from 'firebase/app';

export interface IAuthStrategy {
  login(username?: string, password?: string): Promise<firebase.User>;
  logout(): Promise<void>;
}
