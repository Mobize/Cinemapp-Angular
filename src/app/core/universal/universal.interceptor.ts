import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

  constructor(
    @Inject(PLATFORM_ID) protected platformId: Object,
    @Optional() @Inject('serverUrl') protected serverUrl: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (isPlatformServer(this.platformId) && this.serverUrl) {

      return next.handle(req.clone({
        url: `${this.serverUrl}${req.url}`
      }));

    }

    return next.handle(req);

  }

}
