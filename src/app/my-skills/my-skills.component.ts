import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills = [
    { imagePath: 'assets/img/skills/skill-Angular.png' },
    { imagePath: 'assets/img/skills/skill-TypeScript.png' },
    { imagePath: 'assets/img/skills/skill-JavaScript.png' },
    { imagePath: 'assets/img/skills/skill-HTML.png' },
    { imagePath: 'assets/img/skills/skill-CSS.png' },
    { imagePath: 'assets/img/skills/skill-Rest-Api.png' },
    { imagePath: 'assets/img/skills/skill-Firebase.png' },
    { imagePath: 'assets/img/skills/skill-GIT.png' },
    { imagePath: 'assets/img/skills/skill-Scrum.png' },
    { imagePath: 'assets/img/skills/skill-MaterialDesign.png' },
  ];
}
