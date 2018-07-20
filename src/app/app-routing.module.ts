import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** @todo Lazy-load admin module */
const routes: Routes = [
  { path: '', redirectTo: 'cinema/movies', pathMatch: 'full' },
  { path: '**', redirectTo: 'oops/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
