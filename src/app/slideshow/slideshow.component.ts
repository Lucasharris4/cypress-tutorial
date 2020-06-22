import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  header: string = "$ npm install cypress"
  slide: number = 1

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("params", params);
      this.slide = parseInt(params.slide);
    })
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('event', event.code)
    if (event.code === "Space" && this.slide < 5) {
      this.slide++
    } else {
      this.slide = 1
    }
  }


}
