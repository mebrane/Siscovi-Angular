import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class CounterService {

  private counter = 0;
  counterChanged$ = new Subject<number>();

  constructor() { }

  upCounter() {
    this.counter++;
    console.log('counter', this.counter);
  }

  downCounter() {
    this.counter--;
    console.log('counter', this.counter);
  }


}
