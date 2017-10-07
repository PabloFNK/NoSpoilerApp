import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../services';

@Component({
  selector: 'page-register',
  templateUrl: 'register.component.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public authService: AuthService) {}

}
