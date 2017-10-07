import { Injectable } from '@angular/core';
import { IAuthStrategy, GoogleAuthStrategy, EmailAuthStrategy } from './auth-strategies';

import { User } from '../models';

export enum AuthTypeEnum {
  google,
  facebook,
  twitter,
  email,
}

@Injectable()
export class AuthService {

  private _userData: User = null;

  public get userData(): User {
    return this._userData;
  }

  private authStrategyMap;
  private authStrategy: IAuthStrategy;

  constructor(private googleAuthStrategy: GoogleAuthStrategy, private emailAuthStrategy: EmailAuthStrategy) {
    this.authStrategyMap = {
      [AuthTypeEnum.google]: this.googleAuthStrategy,
      [AuthTypeEnum.email]: this.emailAuthStrategy,
      'default': this.googleAuthStrategy
    };
  }

  public setLoginType(loginType: AuthTypeEnum): void {
    console.log(loginType);
    this.authStrategy = this.authStrategyMap[loginType] || this.authStrategyMap['default'];
  }

  public login(user?: string, password?: string): Promise<User> {
    return this.authStrategy.login(user, password)
      .then((userCredentials) => {
        this._userData = userCredentials as User;
        return this._userData;
      });
  }

  public logout(): any {
    return this.authStrategy.logout()
      .then(() => {
        this._userData = null;
      });
  }

  public register(user: string, password: string) {
    return (<EmailAuthStrategy>this.authStrategy).register(user, password);
  }

}
