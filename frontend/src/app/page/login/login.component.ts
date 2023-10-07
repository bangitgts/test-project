import { Component, OnInit } from '@angular/core';
import { AuthLogin } from './login.model';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.comonent.scss'],
})
export class LoginComponent {
  authLogin = {
    username: '',
    password: '',
  };

  onSubmit(user: AuthLogin) {
    console.log(user);
  }
}
