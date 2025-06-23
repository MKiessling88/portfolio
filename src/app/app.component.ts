import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Marcel Kießling';

  /**
   * Sets the language for the application based on the saved preference in local storage.
   * If no preference is saved, the language defaults to 'en'.
   * @param translate TranslateService
   */
    constructor(public translate: TranslateService) {
      const saved = localStorage.getItem('language') || 'en';
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang(saved);
    translate.use(saved);
   }
}
