import { Component } from '@angular/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  currentImageRemote: string = '/assets/img/Remote.png';
  currentImagePosition: string = '/assets/img/Vector.png';

}
