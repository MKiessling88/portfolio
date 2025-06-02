import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ReviewComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

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
  ]
}
