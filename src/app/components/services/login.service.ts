import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { 

  }

  Login:Login = {
    username: '',
    password: ''
  };

  getDataLogin(): Login {
    return this.Login;
  }

  url = "http://127.0.0.1:8000/api";
  submitLogin(user: string, password: string){
    const data = {
      nacionalidad: 1,
      curp: "JIVL000716HMCMGSA1",
    };
    

    return this.http.get<any>(`${this.url}/estudiantes/${10}`).subscribe({
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
