import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <button routerLink="/second" routerLinkActive="active">Navigate to Second</button>
    <button routerLink="/third" routerLinkActive="active">Navigate to Third</button>

    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
