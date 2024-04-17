import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./presentation/landing-page/landing-page.component').then(m => m.LandingPageComponent)
    },
    {
        path: 'iniciar-sesion',
        loadComponent: () => import('./presentation/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
