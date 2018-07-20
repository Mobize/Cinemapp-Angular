import { Component } from '@angular/core';
import { Network } from '@ngx-pwa/offline';
import { AuthService } from './core/auth';

/** @todo isConnected as async data */
@Component({
  selector: 'cinemapp-root',
  template: `
    <div>
      <cinemapp-header [isConnected]="isConnected | async"></cinemapp-header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class AppComponent {

  /** @todo Get the connection status from the Auth service */
  isConnected = this.auth.isConnected;

  constructor(protected network: Network, private auth: AuthService) {}

}
