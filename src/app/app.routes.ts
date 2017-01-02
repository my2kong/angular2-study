import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

// hello
import {HelloWorldComponent} from "./hello/hello.component";

// Nested
import {NestedParentComponent} from "./nested-component/parent.component";

// output
import {ChildToParentComponent} from "./child-to-parent/child-to-parent.component";

// Input
import {ParentToChildInputComponent} from "./parent-to-child-input/parent-to-child-input.compontent";
import {AppParentToChildInputsComponent} from "./parent-to-child-input/app-parent-to-child-inputs.compontent";

// Viewchild
import {ViewChildComponent} from "./viewchild/viewchild.component";

export const ROUTES: Routes = [
  { path: '',      component: HelloWorldComponent },
  { path: 'hello', component: HelloWorldComponent },
  { path: 'nested-component', component: NestedParentComponent },
  { path: 'parent-to-child-input-component', component: ParentToChildInputComponent },
  { path: 'app-parent-to-child-inputs-component', component: AppParentToChildInputsComponent },
  { path: 'child-to-parent-component', component: ChildToParentComponent },
  { path: 'viewchild-component', component: ViewChildComponent },
  { path: '**',    component: NoContentComponent },
];
