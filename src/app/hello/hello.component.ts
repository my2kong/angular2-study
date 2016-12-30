import {Component} from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: `
        <h1>{{title}}</h1>
        <input type="text" [(ngModel)]="title">
        <textarea [(ngModel)]="title"></textarea>
    `,
    styles: [`
        input,textarea{margin-top:20px;display:block}
    `]
})
export class HelloWorldComponent {
    title = 'Hello Component';
}