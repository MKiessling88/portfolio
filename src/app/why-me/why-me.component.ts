import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent implements AfterViewInit {

  constructor(public translate: TranslateService, private scroller: ViewportScroller, private el: ElementRef) { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // nur einmal animieren
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }


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
