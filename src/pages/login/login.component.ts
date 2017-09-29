import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService, AuthTypeEnum } from '../../services';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public authService: AuthService) {}

  ionViewDidLoad() {
    console.log('LoginPage');
    this.authService.setLoginType(AuthTypeEnum.google);
  }

  login() {
    this.authService.login()
      .then(() => {
        this.navCtrl.setRoot(HomePage);
        console.log(this.authService.userData);
      });
  }

  logout() {
    this.authService.logout();
  }

}
