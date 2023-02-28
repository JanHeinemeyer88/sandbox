import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as events from 'events';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angularSandbox';

  constructor(router: Router) {
    router.events.subscribe((events) => console.log('main', events))
  }
}
