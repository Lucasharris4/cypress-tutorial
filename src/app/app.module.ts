import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SlideOneComponent } from './slideshow/slide-one/slide-one.component';
import { SlideTwoComponent } from './slideshow/slide-two/slide-two.component';
import { SlideThreeComponent } from './slideshow/slide-three/slide-three.component';
import { SlideFourComponent } from './slideshow/slide-four/slide-four.component';
import { SlideFiveComponent } from './slideshow/slide-five/slide-five.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
