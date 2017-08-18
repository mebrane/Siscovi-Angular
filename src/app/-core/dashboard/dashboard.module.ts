import { ClienteModule } from '../../cliente/cliente.module';
import { CommonModule } from '@angular/common';
import { dashboardRoutes } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClienteModule,
    RouterModule.forChild(dashboardRoutes),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
