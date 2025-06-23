import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {

  constructor(public translate: TranslateService, private scroller: ViewportScroller) { }

  /**
   * Scrolls the viewport to the element with the specified ID.
   *
   * @param id The ID of the element to scroll to.
   */
    scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }

  currentImageRemote: string = '/assets/img/Remote.png';
  currentImagePosition: string = '/assets/img/Vector.png';

}
