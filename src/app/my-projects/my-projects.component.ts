import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  public projects = [
    {
      "imagePath": "./../../../assets/img/tressures.png",
      "name": "JOIN",
      "technologies": "HTML | CSS | JavaScript | Firebase",
      "discription": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ", 
      "GIT": "https://github.com/MKiessling88/Join-Gruppenarbeit",
      "link": "",
      "reverse": false
    }, {
      "imagePath": "./../../../assets/img/tressures.png",
      "name": "Treasures-of-Eternity",
      "technologies": "HTML | CSS | JavaScript",
      "GIT": "https://github.com/MKiessling88/Treasures-of-Eternity",
      "link": "",
      "reverse": true
    }
  ];

}
