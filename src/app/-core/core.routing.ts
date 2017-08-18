import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from '../-auth/login/login.component';
import { NotFoundComponent } from './../-shared/not-found/not-found.component';
import { Routes } from '@angular/Router';
// import { NotFoundComponent } from '../-shared/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', // component: IndexComponent,
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },

  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
