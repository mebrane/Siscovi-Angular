import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule { }
