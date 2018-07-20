import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { offlineProviders } from '@ngx-pwa/offline';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './ui/layout';
import { CinemaModule } from './cinema/cinema.module';
import { AccountModule } from './account/account.module';
import { OopsModule } from './oops/oops.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    LayoutModule,
    CinemaModule,
    AccountModule,
    OopsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi : true},
    offlineProviders({ routeOffline: '/oops/offline', routeUnavailable: '/oops/unavailable' }),
  ]
})
export class AppModule {}
