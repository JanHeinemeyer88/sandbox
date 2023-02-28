import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as events from 'events';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  constructor(router: Router) {
    router.events.subscribe((events) => console.log('first', events))
  }
}
