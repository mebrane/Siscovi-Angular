import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from '../-auth/login/login.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './../-shared/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/Router';
// import { NotFoundComponent } from '../-shared/not-found/not-found.component';

const ROUTES: Routes = [
  {
    path: '', // component: IndexComponent,
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },

  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [RouterModule]
})
export class CoreRouting { }
