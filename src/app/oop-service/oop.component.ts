import {Component} from '@angular/core';
import {FirstChild, SecondChild} from "../import-service/parent.service";
import {Parent} from "./parent.service";

@Component({
    selector: 'oop-cmp',
    template: `
        <b>생성자 주입방식</b><br>
        {{firstChildData | json}}<br><br>
        <b>상속방식</b><br>
        {{secondChildData | json}}
    `,
    providers: [Parent, FirstChild, SecondChild]
})
export class OopComponent {
    firstChildData;
    secondChildData;

    constructor(firstChild: FirstChild,
                secondChild: SecondChild) {
        this.firstChildData = firstChild.getData();
        this.secondChildData = secondChild.getData();
    }
}