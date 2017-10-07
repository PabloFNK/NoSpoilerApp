import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService, AuthTypeEnum } from '../../services';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register.component';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html'
})
export class LoginPage {

  protected authTypeEnum;

  constructor(public navCtrl: NavController, public authService: AuthService) {
    this.authTypeEnum = AuthTypeEnum;
  }

  login(authStrategy: AuthTypeEnum): void {
    this.authService.setLoginType(authStrategy);
    this.authService.login()
      .then(() => {
        this.navCtrl.setRoot(HomePage);
        console.log(this.authService.userData.email);
      });
  }

  logout(): void {
    this.authService.logout();
  }

  goToRegister(): void {
    this.navCtrl.push(RegisterPage);
  }

}
