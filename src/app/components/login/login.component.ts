import { Component, Input, output, inject} from '@angular/core';
import { Router } from '@angular/router';
import { Login } from "../interfaces/login";
import { LoginService } from '../services/login.service'; 
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
HttpClient

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent { 
  
  Login:Login = {
    username: '1',
    password: '1'
  };
  //Inyectar la información del servicio
  loginService: LoginService = inject(LoginService);
  constructor(){
    this.Login = this.loginService.getDataLogin();
  }

  formLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmitLogin(){
    this.loginService.submitLogin(
      this.formLogin.value.username ?? '',
      this.formLogin.value.password ?? ''
    );
  }







}
