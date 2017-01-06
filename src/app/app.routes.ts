import { Routes, RouterModule } from '@angular/router';

// Component
import {IntroComponent} from "./intro/intro.component";

export const ROUTES: Routes = [
  { path: '', component: IntroComponent },
  //{ path: 'parent-component', component: ParentComponent },
  //{ path: '**',    component: NoContentComponent },
];
