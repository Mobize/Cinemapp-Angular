import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../shared/account.service';

@Component({
  template: `
    <mat-card>
      <h1>Déconnexion</h1>
      <p>Déconnexion réussie.</p>
      <p><a routerLink="/account/login">Se reconnecter</a></p>
    </mat-card>
  `
})
export class LogoutComponent implements OnInit {

  constructor(protected account: AccountService) { }

  ngOnInit() {

    this.account.logout().subscribe();

  }

}
