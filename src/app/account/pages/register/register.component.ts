import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { switchMap, filter } from 'rxjs/operators';

import { AccountService } from '../../shared/account.service';
import { AutocompleteService } from '../../shared/autocomplete.service';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';


/**
 * @todo Listen ngSubmit event
 * @todo Add 2-way bindings on email and password
 * @todo Add user error feedback on empty email
 * @todo Disable submit button until valid inputs
 */
@Component({
  template: `
    <mat-card>
      <form method="post" (ngSubmit)="register()" #registerControl="ngForm">
        <h1>Inscription</h1>
        <p>Attention : il s'agit d'une app de test. E-mail et mot de passe seront
        visibles en clair par n'importe qui.</p>
        <ul *ngIf="errors.length">
          <li *ngFor="let error of errors">{{error}}</li>
        </ul>
        <mat-form-field>
          <input type="email" name="email" [(ngModel)]="email" #emailControl="ngModel"
           matInput placeholder="Votre adresse e-mail" required autocomplete="email">
          <p [hidden]="emailControl.valid">L'email est obligatoire.</p>
          </mat-form-field>
        <mat-form-field>
          <input type="password" name="password" [(ngModel)]="password" matInput
          placeholder="Votre mot de passe" required autocomplete="off">
          <mat-error>Le mot de passe est obligatoire</mat-error>
        </mat-form-field>
        <div>
          <p>J'ai une carte :</p>
          <mat-radio-group name="card">
            <mat-radio-button value="" checked>Non</mat-radio-button>
            <mat-radio-button value="ugc">UGC</mat-radio-button>
            <mat-radio-button value="gaumont">Gaumont</mat-radio-button>
          </mat-radio-group>
        </div>
        <mat-form-field>
          <mat-select name="category" placeholder="Genre de film préféré">
            <mat-option value="">Non spécifié</mat-option>
            <mat-option value="action">Action</mat-option>
            <mat-option value="comedy">Comédie</mat-option>
            <mat-option value="drama">Drame</mat-option>
            <mat-option value="horror">Horreur</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <textarea name="profile" matInput placeholder="A propos de vous" matTextareaAutosize></textarea>
        </mat-form-field>
        <mat-form-field>
          <input type="text" name="city" [formControl]="cityControl" [matAutocomplete]="cityAuto" matInput placeholder="Votre ville">
        </mat-form-field>
        <mat-autocomplete #cityAuto>
           <mat-option *ngFor='let suggestion of citySuggestions' [value]="suggestion">{{suggestion}}</mat-option>
        </mat-autocomplete>
        <div>
          <mat-checkbox name="conditions" required>
            J'accepte les conditions d'utilisation. *
          </mat-checkbox>
        </div>
        <button type="submit" mat-raised-button color="accent" [disabled]="registerControl.invalid">Valider l'inscription</button>
        <p class="center"><a routerLink="/account/login">Déjà inscrit/e ? Connectez-vous.</a></p>
      </form>
    </mat-card>
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  errors: string[] = [];
  cityControl = new FormControl('');
  citySuggestions: string[] = [];
  citySubscription: Subscription;

  constructor(
    protected account: AccountService,
    protected autocomplete: AutocompleteService,
    protected router: Router,
    protected snackBar: MatSnackBar) {}

  ngOnInit() {

    this.citySubscription = (this.cityControl.valueChanges as Observable<string>).pipe(
      filter((value) => value.length > 2),
      debounceTime(500),
      switchMap((value) => this.autocomplete.getCitySuggestions(value))
    ).subscribe((suggestions) => {
      this.citySuggestions = suggestions;
    });

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.citySubscription.unsubscribe();
  }

  register() {

    const loading = this.snackBar.open(`Connexion en cours...`);

    /** @todo Pass form data to the service */
    this.account.register({ email: this.email, password: this.password }).subscribe((response) => {

      if (response.success) {

        this.snackBar.open(`Inscription réussie`, `OK`, { duration: 2000 });

        this.router.navigate(['/account/login'], { queryParamsHandling: 'preserve' });

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
