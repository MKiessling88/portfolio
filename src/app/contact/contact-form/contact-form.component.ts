import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  safePrivacyPolicy: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer, private translate: TranslateService) {
    this.translate.get('PRIVACY_POLICY').subscribe((html: string) => {
      this.safePrivacyPolicy = this.sanitizer.bypassSecurityTrustHtml(html);
    });
  }

  contactData = {
    name: '',
    email: '',
    message: '',
    termsAccepted: false
  }

  onSubmit() {
    console.log(this.contactData);
  }

}
