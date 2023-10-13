import { ApplicationConfig } from "@angular/core";
import { provideStore } from "@ngrx/store";
import { counterReducer } from "./store/counter.reducer";
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from "@ngrx/effects";
import { CounterEffects } from "./store/counter.effects";
import { MatSnackBarModule } from "@angular/material/snack-bar";

export const appConfig: ApplicationConfig = {
    providers: [
        MatSnackBarModule,
        provideAnimations(),
        provideStore({ count: counterReducer }),
        provideEffects([CounterEffects])
    ],
  };