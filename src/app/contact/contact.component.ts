import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(public translate: TranslateService,  private scroller: ViewportScroller) { }

  numberSrc = '/assets/img/icon_phone.png';
  mailSrc = '/assets/img/icon_email.png';
  gitIconSrc = '/assets/img/VectorGIT.png';
  mailIconSrc = '/assets/img/VectorMail.png';
  linkedIconSrc = '/assets/img/VectorLinked.png';
  arrowSrc = '/assets/img/arrowup.png';

  onIconHover(icon: string, hover: boolean): void {

    const basePath = '/assets/img/';
    const suffix = hover ? '_Hover' : '';

    switch (icon) {
      case 'git':
        this.gitIconSrc = `${basePath}VectorGIT${suffix}.png`;
        break;
      case 'mail':
        this.mailIconSrc = `${basePath}VectorMail${suffix}.png`;
        break;
      case 'linked':
        this.linkedIconSrc = `${basePath}VectorLinked${suffix}.png`;
        break;
      case 'mail1':
        this.mailSrc = `${basePath}icon_email${suffix}.png`;
        break;
      case 'number':
        this.numberSrc = `${basePath}icon_phone${suffix}.png`;
        break;
      case 'arrow':
        this.arrowSrc = `${basePath}arrowup${suffix}.png`;
        break;
    }
  }

    scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }

}
