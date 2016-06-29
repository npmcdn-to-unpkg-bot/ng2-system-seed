import { provideRouter, RouterConfig } from '@angular/router';

import { InfoComponent } from './+info/info.component';
import { ConsoleComponent } from './+console/console.component';

const routes: RouterConfig = [
  { path: '', component: InfoComponent },
  { path: 'console', component: ConsoleComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
