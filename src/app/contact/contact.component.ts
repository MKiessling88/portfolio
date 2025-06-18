import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(public translate: TranslateService) { }

  gitIconSrc = 'assets/img/VectorGIT.png';
  mailIconSrc = 'assets/img/VectorMail.png';
  linkedIconSrc = 'assets/img/VectorLinked.png';

  onIconHover(icon: string, hover: boolean): void {

    const basePath = 'assets/img/';
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
    }
  }

}
