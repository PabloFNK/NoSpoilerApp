import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../services';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public authService: AuthService) {}

  ionViewDidLoad() {
    console.log('LoginPage');
  }

  login() {
    this.authService.login()
      .then(() => {
        console.log(this.authService.userData);
      });
  }

  logout() {
    this.authService.logout();
  }

}
