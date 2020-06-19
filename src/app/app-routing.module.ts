import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{path: "slideshow", component: SlideshowComponent}, {path: "form", component: FormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
