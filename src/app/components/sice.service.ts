import { Injectable } from '@angular/core';
import { Login } from './interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class SiceService {

  constructor() { }

  Login:Login = {
    username: 'userss',
    password: 'passwordsss'
  };

  getDataLogin(): Login {
    return this.Login;
  }

}
