import {Component, Input} from "@angular/core";

@Component({
    selector:'search-box',
    moduleId: module.id,
    templateUrl: 'search-box.component.html',
    styleUrls: ['search-box.component.css']
})
export class SearchBox {

    @Input('placeholder')
    text = 'Type your search content';

    clear(input) {
        console.log('Cleared');
        input.value = 'Type your search content';
    }
}
