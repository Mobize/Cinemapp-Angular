import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AccountService } from '../../shared/account.service';
import { AutocompleteService } from '../../shared/autocomplete.service';

/**
 * @todo Add a reactive binding to form
 * @todo Add email, password and city components with form binding
 * @todo Add api bindings to email and city
 */
@Component({
  template: `
    <mat-card>
      <form method="post" (ngSubmit)="register()">
        <h1>Inscription</h1>
        <p>Attention : il s'agit d'une app de test. E-mail et mot de passe seront
        visibles en clair par n'importe qui.</p>
        <cinemapp-errors [errors]="errors"></cinemapp-errors>
        <button type="submit" mat-raised-button color="accent">Valider l'inscription</button>
        <p class="center"><a routerLink="/account/login">Déjà inscrit/e ? Connectez-vous.</a></p>
      </form>
    </mat-card>
  `
})
export class ReactiveComponent implements AfterViewInit {

  /** @todo Form builder */

  /** @todo Api observables with manual this-binding */

  errors: string[] = [];

  constructor(
    protected account: AccountService,
    protected autocomplete: AutocompleteService,
    protected router: Router,
    protected snackBar: MatSnackBar,
    protected changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit() {

    /** @todo Detect changes */


  }

  register() {

    const loading = this.snackBar.open(`Connexion en cours...`);

    /** @todo Pass form data */
    this.account.register({ email: '', password: '' }).subscribe((response) => {

      if (response.success) {

        this.snackBar.open(`Inscription réussie`, `OK`, { duration: 2000 });

        this.router.navigate(['/account/login'], { queryParamsHandling: 'preserve' });

      } else {
        this.errors = response.error.split('.').slice(0, -1);
      }

    }, () => {

      loading.dismiss();

      this.errors = [`Pas de connexion Internet`];

    });

  }

}
