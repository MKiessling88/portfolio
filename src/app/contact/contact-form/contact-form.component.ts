import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule],
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

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    termsAccepted: false
  }


  mailTest = false;

  post = {
    endPoint: 'https://kiessling-marcel.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

/**
 * Handles the submission of the contact form.
 * 
 * @param ngForm - The Angular form object containing the form state and controls.
 */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

}
