import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { counterReducer } from "./store/counter.reducer";
import { CounterEffects } from "./store/counter.effects";
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [AppComponent, MyCounterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([CounterEffects]),
    StoreModule.forRoot({ count: counterReducer }),
    MatSnackBarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}