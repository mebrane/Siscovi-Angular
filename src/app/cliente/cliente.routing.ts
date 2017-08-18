import { ClienteComponent } from './cliente.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { Routes } from '@angular/Router';
export const clieRoutes: Routes = [
  {
    path: 'clientes',
    component: ClienteComponent,
    children: [
      {
        path: ':id/edit',
        component: ClienteFormComponent
      }
    ]
  }
];
