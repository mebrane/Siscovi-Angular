import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NotFoundComponent, ForbiddenComponent],
  exports: [NotFoundComponent, NotFoundComponent],
  providers: [CounterService]
})
export class SharedModule { }
