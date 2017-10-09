import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//  importing store and counter module ...
import {StoreModule} from '@ngrx/store';
//  importing reducer funtion ...
import {counterReducer} from './counter';


import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      // initializing counter reducer..
      counter: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
