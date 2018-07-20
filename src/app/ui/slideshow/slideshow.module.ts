import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material';

import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlideComponent } from './slideshow/slide/slide.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatSliderModule],
  declarations: [SlideshowComponent, SlideComponent, PaginationComponent],
  exports: [SlideshowComponent, SlideComponent, PaginationComponent]
})
export class SlideshowModule {}
