import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppRoutingModule } from './app-router-module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
