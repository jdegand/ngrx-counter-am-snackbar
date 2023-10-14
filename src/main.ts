import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { counterReducer } from './app/store/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { CounterEffects } from './app/store/counter.effects';
import { EffectsModule } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(CommonModule, BrowserModule, EffectsModule.forRoot([CounterEffects]), StoreModule.forRoot({ count: counterReducer }), MatSnackBarModule),
        provideAnimations()
    ]
})
    .catch(err => console.error(err));