import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  deviceClass = 'desktop';
  deviceWidth = 0;

  constructor() {

  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.deviceWidth = window.innerWidth;

    if (this.deviceWidth <= 768) {
      this.deviceClass = 'mobile';
    }

    else if (this.deviceWidth <= 1024) {
      this.deviceClass = 'laptop';
    }

    else if (this.deviceWidth <= 1440) {
      this.deviceClass = 'laptop';
    }

    else {
      this.deviceClass = 'desktop';
    }
  }


  ngOnInit(): void {

    this.deviceWidth = window.innerWidth;

    if (this.deviceWidth <= 768) {
      this.deviceClass = 'mobile';
    }

    else if (this.deviceWidth <= 1024) {
      this.deviceClass = 'laptop';
    }

    else if (this.deviceWidth <= 1440) {
      this.deviceClass = 'laptop';
    }

    else {
      this.deviceClass = 'desktop';
    }
  }

}
