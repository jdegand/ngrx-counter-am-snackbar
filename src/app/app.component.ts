import { Component } from "@angular/core";
import { MyCounterComponent } from "./my-counter/my-counter.component";

@Component({
    selector: 'app-root',
    template: `
    <h1>NgRx Counter Angular Material Snackbar</h1>
    <app-my-counter></app-my-counter>
  `,
    standalone: true,
    imports: [MyCounterComponent]
})
export class AppComponent {

}