import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflineComponent } from './pages/offline/offline.component';
import { UnavailableComponent } from './pages/unavailable/unavailable.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'oops', children: [
    { path: 'offline', component: OfflineComponent },
    { path: 'unavailable', component: UnavailableComponent },
    { path: 'not-found', component: NotFoundComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OopsRoutingModule {}
