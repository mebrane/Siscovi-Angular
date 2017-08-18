import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from './../../-shared/not-found/not-found.component';
import { Routes } from '@angular/router';
export const dashboardRoutes: Routes = [
  {
    path: 'dashboard', children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];
