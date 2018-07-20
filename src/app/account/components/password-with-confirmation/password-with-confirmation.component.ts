import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * @todo Add form group binding
 * @todo Add formGroupName and formControlNames
 * @todo Add mat-error if first password is missing
 * @todo Add mat-error if passwords do not match
 */
@Component({
  selector: 'cinemapp-password-with-confirmation',
  template: `
    <div>
      <div>
        <mat-form-field>
          <input type="password" matInput placeholder="Votre mot de passe" required autocomplete="off">
        </mat-form-field>
        <mat-form-field>
          <input type="password" matInput placeholder="Confirmez-le" autocomplete="off">
        </mat-form-field>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordWithConfirmationComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() name = 'password';
  @Input() fieldName1 = 'password1';
  @Input() fieldName2 = 'password2';

  ngOnInit() {

    /**
     * @todo Set validator
     * @todo Object.values from group controls
     */


  }

}
