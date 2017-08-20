import { Component, OnInit } from '@angular/core';
import { CounterService } from './../-shared/counter.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private countSrv: CounterService) { }

  ngOnInit() {
    this.countSrv.upCounter();
  }

}
