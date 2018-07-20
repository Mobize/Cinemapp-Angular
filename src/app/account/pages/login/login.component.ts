import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

import { AccountService } from '../../shared/account.service';

/**
 * @todo Listen to submit event
 * @todo Add bindings on the form fields
 */
@Component({
  template: `
    <mat-card>
      <form method="post" (ngSubmit)="login()" #registerControl="ngForm">
        <h1>Connexion</h1>
        <ul *ngIf="errors.length">
          <li *ngFor="let error of errors">{{error}}</li>
        </ul>
        <mat-form-field>
          <input type="email" name="email"[(ngModel)]="email" #emailControl="ngModel"
           matInput placeholder="Votre adresse e-mail" required autocomplete="email">
          <mat-error>L'e-mail est obligatoire</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input type="password" name="password" [(ngModel)]="password" matInput
          placeholder="Votre mot de passe" required autocomplete="off">
          <mat-error>Le mot de passe est obligatoire</mat-error>
        </mat-form-field>
        <button type="submit" mat-raised-button color="accent">Se connecter</button>
        <p class="center"><a routerLink="/account/register">Pas encore inscrit/e ? Créez un compte.</a></p>
      </form>
    </mat-card>
  `
})
export class LoginComponent {

  email = '';
  password = '';
  errors: string[] = [];

  constructor(protected account: AccountService, protected router: Router, protected snackBar: MatSnackBar) {}

  login() {

    const loading = this.snackBar.open(`Connexion en cours...`);

    /** @todo Pass form data to the service */
    this.account.login({ email: this.email, password: this.password }).subscribe((response) => {

      if (response.success) {

        this.snackBar.open(`Connexion réussie`, `OK`, { duration: 2000 });

        this.router.navigate(['/account/profile'], { queryParamsHandling: 'preserve' });

      } else {
        this.errors = response.error.split('.').slice(0, -1);
      }

    }, () => {

      this.errors = [`Pas de connexion Internet`];

    }, () => {

      loading.dismiss();

    });

  }

}

