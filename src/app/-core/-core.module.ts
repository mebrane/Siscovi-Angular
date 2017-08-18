import { ApolloModule } from 'apollo-angular';
import { AuthModule } from '../-auth/-auth.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ClienteModule } from '../cliente/cliente.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { provideClient } from './apollo.config';
import { RouterModule } from '@angular/router';
import { routes } from './core.routing';
import { SharedModule } from './../-shared/-shared.module';


@NgModule({
  imports: [
    DashboardModule,
    CommonModule,
    ApolloModule.forRoot(provideClient),
    BsDropdownModule.forRoot(),
    SharedModule,
    AuthModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent
  ],
  exports: [
     ApolloModule,
     SharedModule,
     RouterModule,
  ]
})
export class CoreModule { }
