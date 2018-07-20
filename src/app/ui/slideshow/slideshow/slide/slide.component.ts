import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Slide } from '../shared/slide';

@Component({
  selector: 'cinemapp-slide',
  template: `
    <div><a [routerLink]="slide.link">
      <picture>
        <source [srcset]="slide.imgSrcFull" media="(min-width: 960px)">
        <source [srcset]="slide.imgSrc" media="(max-width: 959px)">
        <img [src]="slide.imgSrcFull" [alt]="slide.imgAlt">
      </picture>
    </a></div>
  `,
  styleUrls: ['./slide.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideComponent {

  @Input() slide: Slide;

}
