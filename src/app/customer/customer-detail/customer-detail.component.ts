import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from './../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit, OnDestroy {

  customer: Customer;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerSrv: CustomerService,
  ) { }

  ngOnInit() {
    this.customerSrv.setSelectMode(true);
    const id = +this.route.snapshot.params['id'];
    this.onGetCustomer(id);
    this.route.params
      .subscribe(
      (params: Params) => this.onGetCustomer(+params['id'])
      );
  }

  onGetCustomer(id: number) {
    this.customer = this.customerSrv.getDetail(id);
  }

  ngOnDestroy() {
    this.customerSrv.setSelectMode(false);
  }
}
