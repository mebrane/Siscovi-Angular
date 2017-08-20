import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRouting } from './customer.routing';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CustomerRouting,
  ],
  declarations: [
    CustomerComponent,
    CustomerFormComponent,
    CustomerListComponent,
    CustomerDetailComponent
  ]
})
export class CustomerModule { }
