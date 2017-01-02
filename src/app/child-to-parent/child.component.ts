import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'child',
    template: `
        <div>자식
            <button (click)="updateParent(active)">부모에게 이벤트 보내기</button>
        </div>
    `,
    styles: [`
        div {
            border: 2px dotted #666;
            margin-top: 5px;
            padding: 10px;
            width: 90%;
            height: 50%;
        }
    `]
})
export class ChildComponent {
    active = false;
    @Output() outputProperty = new EventEmitter<boolean>();

    updateParent(active: boolean) {
        this.active = !active;
        this.outputProperty.emit(this.active);
    }
}