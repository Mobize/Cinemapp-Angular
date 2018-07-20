import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, asyncScheduler } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { Response } from './response';
import { Token } from './token';
import { AuthService } from '../../core/auth';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(protected http: HttpClient, private auth: AuthService) {}

  login(body: { email: string; password: string }) {

    return this.http.post<Response<Token>>(`/api/account/login`, body).pipe(tap((response) => {
      if (response.success && response.data) {
        /** @todo Use the Auth service to connect */
        this.auth.connect(response.data.token);
      }
    }));

  }

  logout() {

    return of(true, asyncScheduler).pipe(tap(() => {
      /** @todo Use the Auth service to disconnect */
      this.auth.disconnect();
    }));

  }

  register(body: { email: string; password: string | { password1: string; password2: string; }; }) {

    return this.http.post<Response>(`/api/account/register`, body);

  }

  isAvailable(email: string) {

    return this.http.get<Response>(`/api/account/available/${email}`).pipe(map((response) => response.success));

  }

}
