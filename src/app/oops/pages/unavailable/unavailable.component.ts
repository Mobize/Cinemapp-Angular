import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <mat-card>
      <mat-card-title>Service inaccessible</mat-card-title>
      <mat-card-content>
        <p>Le service est momentanément indisponible. Merci de réessayer ultérieurement.</p>
        <p *ngIf="isConnected | async"><a routerLink="/account/profile">Accéder à vos réservations</a></p>
      </mat-card-content>
    </mat-card>
  `
})
export class UnavailableComponent {

  isConnected = false;

  constructor() {}

}
