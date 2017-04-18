import { Component, HostListener} from '@angular/core';

import { hoveringAnimationTrigger, hoveringLettersTrigger } from './hoveringAnimation';

@Component({
  selector: 'sp-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  animations: [
    hoveringAnimationTrigger,
    hoveringLettersTrigger
  ]
})
export class StoryComponent {
  hovered: string = 'default';

  @HostListener('mouseenter') hovering() {
    this.hovered = 'hovered';
  }
  @HostListener('mouseleave') left() {
    this.hovered = 'default';
  }
}
