import { Customer } from './customer.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CustomerService {

  private customers: Customer[]= [
    {
      id: 1,
      RUC: '1234567890123',
      razonSocial: 'Customer 1',
      direccion: '',
      obs: '',
      representante: '',
      telefono: ''
    },
    {
      id: 2,
      RUC: '4235857690423',
      razonSocial: 'Customer 2',
      direccion: '',
      obs: '',
      representante: '',
      telefono: ''
    },
    {
      id: 3,
      RUC: '3967598790987',
      razonSocial: 'Customer 3',
      direccion: '',
      obs: '',
      representante: '',
      telefono: ''
    }
  ];

  selectMode$= new Subject<boolean>();

  constructor() { }

  get(): Customer[] {
    return this.customers.slice();
  }

  getDetail(id: number): Customer {
    return this.customers.find(
      (c) => c.id === id
    );
  }

  setSelectMode(sw: boolean) {
    this.selectMode$.next(sw);
  }


}
