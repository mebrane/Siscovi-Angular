import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
  } from '@angular/core';
import { CounterService } from './../../-shared/counter.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild('f') loginForm: NgForm;

  constructor(private router: Router, private countSrv: CounterService) {

   }

  ngOnInit() {
    $('body').addClass('app-login');
    $('html').addClass('app-login');
    this.countSrv.upCounter();

  }

  onSubmit() {
    console.log(this.loginForm);
    this.router.navigate(['/dashboard']);
  }


  public ngOnDestroy(): void {
    $('body').removeClass('app-login');
    $('html').removeClass('app-login');
  }
}
