import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  constructor(router: Router) {
    router.events.subscribe((events) => console.log('second', events))
  }
}
