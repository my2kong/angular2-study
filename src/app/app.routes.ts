import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

// Component
import {PromiseComponent} from "./promise/promise.component";
import {ParentComponent} from "./shared-service/parent.component";

export const ROUTES: Routes = [
  { path: '', component: ParentComponent },
  { path: 'parent-component', component: ParentComponent },
  { path: '**',    component: NoContentComponent },
];
