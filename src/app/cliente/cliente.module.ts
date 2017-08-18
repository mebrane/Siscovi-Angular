import { ClienteComponent } from './cliente.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { clieRoutes } from './cliente.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clieRoutes)
  ],
  declarations: [ClienteComponent, ClienteFormComponent, ClienteListComponent],
  exports: [
    RouterModule
  ]
})
export class ClienteModule { }
