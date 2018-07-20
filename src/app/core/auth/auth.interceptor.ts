import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(protected router: Router, private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    /**
     * @todo Check if there is a token
     * @todo Add the token in the HTTP header
     */
    const authReq = !this.auth.token ? req : req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.auth.token}`)
    });

    return next.handle(authReq).pipe(tap(() => {}, (error) => {

      if ((error instanceof HttpErrorResponse) && (error.status === 401 || error.status === 403)) {

        /** Disconnect with the Auth service */
        this.auth.disconnect();

      }

    }));

  }

}
