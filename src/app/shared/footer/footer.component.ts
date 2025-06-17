import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

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
