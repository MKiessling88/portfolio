import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ReviewComponent, TranslateModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  constructor(public translate: TranslateService, private el: ElementRef) { }

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

  public reviews = [
    {
      "name": "Noah Müller",
      "project": "JOIN",
      "review": "’’Marcel was a great team member. He had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’"
    },
    {
      "name": "Noah Müller",
      "project": "JOIN",
      "review": "’’Marcel was a great team member. He had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’"
    },
    {
      "name": "Noah Müller",
      "project": "JOIN",
      "review": "’’Marcel was a great team member. He had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’"
    },
  ];
}
