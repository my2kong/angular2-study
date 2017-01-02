import {Component} from '@angular/core';
import {MockService} from "./mock.service";
import {User} from "./user";

@Component({
    selector: 'mock',
    template: `
        <b>이름출력</b>
        <div *ngFor="let o of listUser">
            {{o.id}} | {{o.name}}
        </div>
    `,
    providers: [
        MockService
    ]
})
export class MockComponent {
    listUser: User[];

    constructor(private userService: MockService) {
        this.listUser = userService.getUser();
    }
}