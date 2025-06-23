import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent implements OnDestroy {

  public projects = [
    {
      "imagePath": "./../../../assets/img/join.png",
      "name": "JOIN",
      "technologies": "HTML | CSS | JavaScript | Firebase",
      "descriptionKey": 'JOIN_TEXT',
      "description": '',
      "GIT": "https://github.com/MKiessling88/Join-Gruppenarbeit",
      "link": "https://marcel-kiessling.developerakademie.net/join/index.html",
      "reverse": false
    }, {
      "imagePath": "./../../../assets/img/tressures.png",
      "name": "Treasures-of-Eternity",
      "technologies": "HTML | CSS | JavaScript",
      "descriptionKey": 'JUMP_TEXT',
      "description": '',
      "GIT": "https://github.com/MKiessling88/Treasures-of-Eternity",
      "link": "https://marcel-kiessling.developerakademie.net/Projekte/jumpandrun/index.html",
      "reverse": true
    }
  ];
  private sub!: Subscription;

  constructor(private translate: TranslateService) {
    this.updateDescriptions();

    this.sub = this.translate.onLangChange.subscribe(() => this.updateDescriptions());
  }

  /**
   * Updates the descriptions of the projects based on the current language.
   * @private
   */
  private updateDescriptions() {
    this.projects.forEach(p => {
      p.description = this.translate.instant(p.descriptionKey);
    });
  }

  /**
   * Called when the component is destroyed. Unsubscribes from the translation change
   * subscription to prevent memory leaks.
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
