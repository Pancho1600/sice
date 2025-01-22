import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  student: any[];
  constructor(private http: HttpClient) { 
    this.student = [];
  }

  Login:Login = {
    username: 'userssDdD',
    password: 'passwordsss'
  };

  getDataLogin(): Login {
    return this.Login;
  }

  url = "http://localhost:3000/user";
  submitLogin(user: string, password: string){
    const data = {
      nacionalidad: 1,
      curp: "JIVL000716HMCMGSA1",
    };
    

    return this.http.get<any>(this.url).subscribe({
      next: (response: any) => {
        console.log('Respuesta exitosa:', response);
      },
      error: (error: any) => {
        console.error('Error al enviar los datos:', error);
      },
      complete: () => {
        console.log('Solicitud completada.');
      },
    })
  }
}
