import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {

  selectMode = false;
  private selectMode$: Subscription;

  constructor(
    private customerSrv: CustomerService,
  ) { }

  ngOnInit() {
    this.selectMode$ = this.customerSrv.selectMode$.subscribe(
      (sw: boolean) => {
        setTimeout(() => {
          this.selectMode = sw;
          console.log('selectMode', this.selectMode);
        }, 1);

      }
    );
  }
  ngOnDestroy() {
    this.selectMode$.unsubscribe();
    console.log('Customer Destroyed');
  }

}
