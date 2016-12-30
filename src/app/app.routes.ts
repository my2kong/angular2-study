import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

// hello
import {HelloWorldComponent} from "./hello/hello.component";

// Nested
import {NestedParentComponent} from "./nested-component/parent.component";


export const ROUTES: Routes = [
  { path: '',      component: HelloWorldComponent },
  { path: 'hello', component: HelloWorldComponent },
  { path: 'nested-component', component: NestedParentComponent },
  { path: '**',    component: NoContentComponent },
];
