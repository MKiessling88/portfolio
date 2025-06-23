import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project: any;
  @Input() index!: number;

  /**
   * Opens the specified URL in a new browser tab.
   * @param link - The URL to be opened.
   */
  openLink(link: string) {
    window.open(link, '_blank');
  }
}
