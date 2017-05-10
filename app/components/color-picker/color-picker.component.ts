import {Component, Input, Output, EventEmitter} from '@angular/core';

export const BLUE = '#1976d2';
export const RED = '#b13138';

@Component({
    selector: 'color-picker',
    moduleId: module.id,
    template: `<div class="color-title" [ngStyle]="{'color':color}">
                        Pick a Color:
                    </div>
                    <div class="color-picker">
                        <div class="color-sample color-sample-blue" (click)="choose('${RED}')"></div>
                        <div class="color-sample color-sample-red" (click)="choose('${BLUE}')"></div>
                    </div>` ,
    styleUrls: ['color-picker.component.css']
})
export class ColorPicker {

    @Input()
    color:string;

    @Output("color")
    colorOutput = new EventEmitter();

    choose(color:string) {
        this.color = color;
        this.colorOutput.emit(color);
    }

    reset() {
        this.choose('black');
    }
}
