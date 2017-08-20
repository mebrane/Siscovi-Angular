import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';

@NgModule({
  imports: [
    CommonModule,
    ProfileRouting,
  ],
  declarations: [ProfileComponent],
  exports: [
    ProfileRouting
  ]
})
export class ProfileModule { }
