import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'color-previewer',
    template: `
                    <div class="color-previewer" [ngStyle]="{'color':colo1r}">
                        Preview Text Color
                    </div>
                    `
})
export class ColorPreviewer {
    @Input()
    colo1r:string;
}
