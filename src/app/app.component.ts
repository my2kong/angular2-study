/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <!-- Component -->
    <!--
    <nav>
      <span>
        <a [routerLink]=" ['./hello'] ">
          Hello
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./nested-component'] ">
          nested
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./parent-to-child-input-component'] ">
          parent-to-child-input
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./app-parent-to-child-inputs-component'] ">
          app-parent-to-child-inputs
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./child-to-parent-component'] ">
          child-output
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./viewchild-component'] ">
          viewchild-component
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./viewchildren-component'] ">
          viewchildren-component
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./contentchild-component'] ">
          contentchild-component
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./contentchildren-component'] ">
          contentchild-component
        </a>
      </span>
    </nav>
    -->
    
    <nav>
      <span>
        <a [routerLink]=" ['./hello-service'] ">
          hello-service
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
