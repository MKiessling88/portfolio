import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from "./../landing-page/landing-page.component";
import { WhyMeComponent } from '../why-me/why-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { ReviewsComponent } from './../reviews/reviews.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent, ReviewsComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
