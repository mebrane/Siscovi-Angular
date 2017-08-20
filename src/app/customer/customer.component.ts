import { Component, OnInit } from '@angular/core';
import { CounterService } from '../-shared/counter.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private countSrv: CounterService) { }

  ngOnInit() {
    this.countSrv.upCounter();
  }

}
