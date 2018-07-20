import { Component } from '@angular/core';

@Component({
  template: `
    <mat-card>
      <mat-card-title>Page introuvable</mat-card-title>
      <mat-card-content>
        <p>La page que vous recherchez n'existe pas.</p>
        <p><a routerLink="/">Revenir à la page d'accueil</a></p>
      </mat-card-content>
    </mat-card>
  `
})
export class NotFoundComponent {}
