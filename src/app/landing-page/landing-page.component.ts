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

  /**
   * Scrolls the viewport to the element with the specified ID.
   *
   * @param id The ID of the element to scroll to.
   */
  scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }

  public imageSrc: string = '/assets/img/arrowdown.png';

  /**
   * Updates the source of the arrow down image when the mouse enters
   * the image.
   */
  onMouseEnter() {
    this.imageSrc = '/assets/img/arrowdown_hover.png';
  }

  /**
   * Updates the source of the arrow down image when the mouse leaves
   * the image.
   */
  onMouseLeave() {
    this.imageSrc = '/assets/img/arrowdown.png';
  }

}
