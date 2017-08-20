import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const ROUTES = [
  {
    'path': '',
    'component': CustomerComponent,
    children: [
      {
        'path': 'nuevo',
        'component': CustomerFormComponent,
        'data': {
          editMode: false
        }
      },
      {
        'path': ':id/editar',
        'component': CustomerFormComponent,
        'data': {
          editMode: true
        }
      },
      {
        'path': ':id',
        'component': CustomerDetailComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ]
 })
export class CustomerRouting { }
