import {Component, ViewEncapsulation} from '@angular/core';
import {AppState} from './app.service';

@Component({
    selector: 'app',
    styleUrls: [
        './app.component.css'
    ],
    template: `
        <nav>
            <span>
                <a [routerLink]=" ['./hello-child'] ">hello-child</a>
            </span>
        </nav>
        
        <main>
            <router-outlet></router-outlet>
        </main>
    `,
    styles: [`
        nav {
          margin-bottom: 10px;
        }
    `]
})
export class AppComponent {
    angularclassLogo = 'assets/img/angularclass-avatar.png';
    name = 'Angular 2 Webpack Starter';
    url = 'https://twitter.com/AngularClass';

    constructor(public appState: AppState) {

    }

    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }

}