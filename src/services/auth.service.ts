import { Injectable } from '@angular/core';
import { IAuthStrategy, GoogleAuthStrategy } from './auth-strategies';

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

  constructor(private googleAuthStrategy: GoogleAuthStrategy) {
    this.authStrategyMap = {
      [AuthTypeEnum.google]: this.googleAuthStrategy
    };
  }

  public setLoginType(loginType: AuthTypeEnum): void {
    console.log(loginType);
    this.authStrategy = this.authStrategyMap[loginType];
  }

  public login(): Promise<User> {
    return this.authStrategy.login()
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

}
