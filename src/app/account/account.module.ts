import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule, MatAutocompleteModule, MatCardModule,
  MatButtonModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatListModule, MatSnackBarModule
} from '@angular/material';

import { AccountRoutingModule } from './account-routing.module';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { PasswordWithConfirmationComponent } from './components/password-with-confirmation/password-with-confirmation.component';
import { EmailWithValidationComponent } from './components/email-with-validation/email-with-validation.component';
import { CityWithAutocompleteComponent } from './components/city-with-autocomplete/city-with-autocomplete.component';
import { ErrorsComponent } from './components/errors/errors.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatSnackBarModule,
    AccountRoutingModule,
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    ReactiveComponent,
    PasswordWithConfirmationComponent,
    EmailWithValidationComponent,
    CityWithAutocompleteComponent,
    ErrorsComponent,
  ]
})
export class AccountModule {}
