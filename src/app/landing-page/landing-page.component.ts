import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

    constructor(private scroller: ViewportScroller) {}

  scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }

  public imageSrc: string = '/assets/img/Arrow Up.png';

  onMouseEnter() {
    this.imageSrc = '/assets/img/arrowup_hover.png';
  }

  onMouseLeave() {
    this.imageSrc = '/assets/img/Arrow Up.png';
  }

}
