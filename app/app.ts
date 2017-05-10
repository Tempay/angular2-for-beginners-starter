import {Component, Input} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

import {SearchBox} from "app/components/search-box/search-box.component.ts";
import {ColorPicker} from "app/components/color-picker/color-picker.component.ts";
import {ColorPreviewer} from "app/components/color-previewer/color-previewer.component.ts";

@Component({
    selector:'my-app',
    template: `<h1>Hello World !</h1>
                        <search-box></search-box>
                        <color-picker #picker color="green" (color)="color = $event"></color-picker>
                        <color-previewer #previewer [colo1r]="color"></color-previewer>
                        <button (click)="picker.reset()">Reset<button>
                    `
})
export class HelloWorld {

    color1:string;

    onColor(color) {

    }

}

@NgModule({
    declarations: [HelloWorld, SearchBox, ColorPicker, ColorPreviewer],
    imports: [BrowserModule],
    bootstrap: [HelloWorld]
})

export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
