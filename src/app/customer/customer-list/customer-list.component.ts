import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Customer } from './../customer.model';
import { CustomerService } from './../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

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
    this.router.navigate([id], {relativeTo: this.route});
  }

}
