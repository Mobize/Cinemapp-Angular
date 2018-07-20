import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'cinemapp-pagination',
  template: `
    <mat-slider min="1" [max]="total" [value]="current" (change)="onChange($event)"></mat-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {

  @Input() total: number;
  @Input() current: number;
  @Output() pagination = new EventEmitter<number>();

  onChange(event: MatSliderChange) {

    this.pagination.emit(event.value || 1);

  }

}
