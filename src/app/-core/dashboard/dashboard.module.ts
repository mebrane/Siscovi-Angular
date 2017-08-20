import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard.routing';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting,
  ],
  declarations: [],
  exports: [
    DashboardRouting
  ]
})
export class DashboardModule { }
