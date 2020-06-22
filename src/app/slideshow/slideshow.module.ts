import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { SlideshowComponent } from './slideshow.component';
import { FormComponent } from '../form/form.component';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlideTwoComponent } from './slide-two/slide-two.component';
import { SlideThreeComponent } from './slide-three/slide-three.component';
import { SlideFourComponent } from './slide-four/slide-four.component';
import { SlideFiveComponent } from './slide-five/slide-five.component';

@NgModule({
    declarations: [
        AppComponent,
        SlideshowComponent,
        FormComponent,
        SlideOneComponent,
        SlideTwoComponent,
        SlideThreeComponent,
        SlideFourComponent,
        SlideFiveComponent,
    ]
})
export class SlideshowModule { }