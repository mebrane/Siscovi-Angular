import { BrowserModule } from '@angular/platform-browser';
import { CustomerModule } from '../../customer/customer.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './../../-shared/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'dashboard', children: [
      {
        path: '',
        component: DashboardComponent,
        children: [
            {
              path: '',
              loadChildren: './../../profile/profile.module#ProfileModule'
            },
            {
              path: 'clientes',
              loadChildren: '../../customer/customer.module#CustomerModule'
            },
            {
              path: '**',
              component: NotFoundComponent
            }
        ]
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]

})
export class DashboardRouting { }
