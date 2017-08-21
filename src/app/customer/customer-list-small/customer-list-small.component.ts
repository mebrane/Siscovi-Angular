import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Customer } from './../customer.model';
import { CustomerService } from './../customer.service';

@Component({
  selector: 'app-customer-list-small',
  templateUrl: './customer-list-small.component.html',
  styleUrls: ['./customer-list-small.component.css']
})
export class CustomerListSmallComponent implements OnInit {

  customers: Customer[];

  constructor(
    private customerSrv: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.onGetCustomers();
  }

  onGetCustomers() {
    this.customers = this.customerSrv.get();
  }
  onSelectCustomer(c: Customer) {
    // console.log('c', c);
    const id = c.id;
    this.router.navigate([id], { relativeTo: this.route });
  }
}
