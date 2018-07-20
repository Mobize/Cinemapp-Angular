import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cinemapp-menu',
  template: `
    <mat-toolbar color="primary">
      <a routerLink="/cinema/movies" routerLinkActive="nav-active">
        <mat-icon>movie</mat-icon>
        <ng-container i18n="menu movies|Menu item for movies@@menuMovies">Films</ng-container>
      </a>
      <a routerLink="/cinema/theaters" routerLinkActive="nav-active">
        <mat-icon>theaters</mat-icon>
        <ng-container i18n="menu theaters|Menu item for theaters@@menuTheaters">Cinémas</ng-container>
      </a>
      <a *ngIf="isConnected" routerLink="/account/profile" routerLinkActive="nav-active">
        <mat-icon>event</mat-icon>
        <ng-container i18n="menu reservations|Menu item for reservations@@menuReservations">Mes résas</ng-container>
      </a>
      <a *ngIf="!isConnected" routerLink="/account/login" routerLinkActive="nav-active">
        <mat-icon>account_circle</mat-icon>
        <ng-container i18n="menu account|Menu item for account@@menuAccount">Compte</ng-container>
      </a>
    </mat-toolbar>
  `,
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  @Input() isConnected = false;

}
