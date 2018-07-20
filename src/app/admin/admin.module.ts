import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule {}
