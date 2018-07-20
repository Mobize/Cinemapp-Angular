import {
  Component, Input, AfterContentInit, OnDestroy, ContentChildren,
  QueryList, Inject, PLATFORM_ID, ChangeDetectionStrategy, ChangeDetectorRef, NgZone
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { SlideComponent } from './slide/slide.component';

/** @todo Modify ChangeDetection to OnPush */
@Component({
  selector: 'cinemapp-slideshow',
  template: `
    <div id="slideshow">
      <div id="slides" (swipe)="onSwipe($event)" [style.transform]="transform"
      [style.transitionDuration.ms]="speed" (transitionend)="onTransitionEnd()">
        <ng-content></ng-content>
      </div>
      <div id="pagination">
        <cinemapp-pagination [current]="current" [total]="total" (pagination)="onPagination($event)"></cinemapp-pagination>
      </div>
    </div>
  `,
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements AfterContentInit, OnDestroy {

  /** Delay between each automatic move */
  @Input() delay = 5000;
  /** Speed for one move */
  @Input() speed = 1000;
  /** Slides list */
  @ContentChildren(SlideComponent) slides: QueryList<SlideComponent>;
  /** Total of slides */
  total = 0;
  /** Currently displayed slide */
  current = 1;
  /** Reference to the current timer */
  timer = 0;
  /** Transform value to move the slide */
  transform = '';

  /** Inject ChangeDetectorRef */
  constructor(@Inject(PLATFORM_ID) protected platformId: Object) {}

  ngAfterContentInit() {

    if (this.slides) {

      this.total = this.slides.length;

      this.start();

    }

  }

  ngOnDestroy() {

    this.stop();

  }

  /** Launches the automatic delay */
  start() {

    if (isPlatformBrowser(this.platformId)) {

      /* Stop any current timer to avoid concurrent timers */
      this.stop();

      /* Launches a new timer and then move */
      this.timer = window.setTimeout(() => {

        this.move();

        /** @todo Launch the change detection manually */


      }, this.delay);

    }

  }

  /** Stops the current timeout */
  stop() {

    if (isPlatformBrowser(this.platformId)) {

      window.clearTimeout(this.timer);

    }

  }

  /**
   * Move to another slide
   * @param next Position of the destination slide
   */
  move(next = this.getNextPosition()) {

    /* Translate the slides container */
    this.transform = `translateX(${(1 - next) * 100}%)`;

    /* Update the new current position */
    this.current = next;

    /* The transitionend event (registered in constructor) will relaunch a new timer */

  }

  /**
   * Calculate next position
   * @returns Next position
   */
  getNextPosition() {

    return (this.current < this.total) ? (this.current + 1) : 1;

  }

  /** Transition listener handler */
  onTransitionEnd() {

    /* Relaunch a new timer */
    this.start();

  }

  /** Pagination listener handler */
  onPagination(page: number) {

    /* Stop the automatic delay as the user interacts */
    this.stop();

    /* Move to the wanted slide */
    this.move(page);

  }

  onSwipe(event: PointerEventInput) {

    switch (event.direction) {

      case Hammer.DIRECTION_RIGHT:
        if (this.current > 1) {
          this.stop();
          this.move(this.current - 1);
        }
        break;

      case Hammer.DIRECTION_LEFT:
        if (this.current <= this.total) {
          this.stop();
          this.move();
        }
        break;

    }

  }

}
