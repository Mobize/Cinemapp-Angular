import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { OopsRoutingModule } from './oops-routing.module';
import { OfflineComponent } from './pages/offline/offline.component';
import { UnavailableComponent } from './pages/unavailable/unavailable.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    OopsRoutingModule,
  ],
  declarations: [
    OfflineComponent,
    UnavailableComponent,
    NotFoundComponent
  ]
})
export class OopsModule { }
