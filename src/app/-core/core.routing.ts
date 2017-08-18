import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from '../-auth/login/login.component';
import { NotFoundComponent } from '../-shared/not-found/not-found.component';
import { Routes } from '@angular/Router';

export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
];
