import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'ca-info',
  template: `
    <h1>Info</h1>
    <a [routerLink]="['console']">Console</a>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class InfoComponent {
}
