import { Routes } from '@angular/router';
import { PreRegistrationParentsComponent } from './components/pre-registration-parents/pre-registration-parents.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, title: 'Sistema Integral de Control Escolar'}, // Ruta inicial
    { path: 'login', component: LoginComponent, title: 'Sistema Integral de Control Escolar'}, // Ruta para login
    // {path:'/preRegistrationParents', component: PreRegistrationParentsComponent, title: 'PreInscripción de Alumnos Para Padres de Familia'}
    { path: '**', redirectTo: '' }
];
