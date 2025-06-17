import { Component } from '@angular/core';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  
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
