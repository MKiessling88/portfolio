import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HeaderComponent } from "./shared/header/header.component";
import { WhyMeComponent } from "./why-me/why-me.component";
import { MySkillsComponent } from "./my-skills/my-skills.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent, HeaderComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
