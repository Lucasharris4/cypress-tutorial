import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cypress-retries-test';
  // random: number;
  home: boolean = false;

  constructor(private router: Router) {

  }
  
  ngOnInit(): void {
    // this.random = Math.round(Math.random() * 2);
    // if (this.random !== 2) {
    //   console.error(this.random);
    // }
    this.home = window.location.pathname === "/home" || window.location.pathname === "/"
  }

  startShow() {
    this.router.navigateByUrl("/slideshow?slide=1");
    this.home = false;
  }

}
