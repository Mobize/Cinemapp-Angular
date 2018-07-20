import { Injectable } from '@angular/core';
import { ReplaySubject } from '_node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnected = new ReplaySubject<boolean>(1);
  token: string | null = null;
  readonly tokenKey = 'acces_token';

  constructor() {

    this.token = localStorage.getItem(this.tokenKey);

    this.isConnected.next(this.token ? true : false);
  }

  connect(token: string) {

    this.isConnected.next(true);

    this.token = token;

    localStorage.setItem(this.tokenKey, token);
  }

  disconnect() {

    this.isConnected.next(false);

    this.token = null;

    localStorage.removeItem(this.tokenKey);
  }

}
