import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})

export class MySkillsComponent implements AfterViewInit {

  constructor(public translate: TranslateService, private el: ElementRef) { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }

  skills = [
    {
      imagePath: 'assets/img/skills/angular.png',
      name: 'Angular'
    },
    {
      imagePath: 'assets/img/skills/typeScript.png',
      name: 'TypeScript'
    },
    {
      imagePath: 'assets/img/skills/javaScript.png',
      name: 'JavaScript'
    },
    {
      imagePath: 'assets/img/skills/html.png',
      name: 'HTML'
    },
    {
      imagePath: 'assets/img/skills/css.png',
      name: 'CSS'
    },
    {
      imagePath: 'assets/img/skills/api.png',
      name: 'REST-API'
    },
    {
      imagePath: 'assets/img/skills/fireBase.png',
      name: 'Firebase'
    },
    {
      imagePath: 'assets/img/skills/git.png',
      name: 'GIT'
    },
    {
      imagePath: 'assets/img/skills/scrum.png',
      name: 'Scrum'
    },
    {
      imagePath: 'assets/img/skills/materialDesign.png',
      name: 'Material Design'
    },
    {
      imagePath: 'assets/img/skills/challenge.png',
      name: 'Challenge me'
    },
  ];
}
