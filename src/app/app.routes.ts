import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

// Component
import {PromiseComponent} from "./promise/promise.component";

export const ROUTES: Routes = [
  { path: '', component: PromiseComponent },
  { path: 'promise-component', component: PromiseComponent },
  { path: '**',    component: NoContentComponent },
];
