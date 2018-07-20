import { Component, Input, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, debounceTime, first, tap } from 'rxjs/operators';

/**
 * @todo Add form group binding
 * @todo Add formControlName
 * @todo Add mat-error if email is missing with a getter
 * @todo Add mat-error if email already exists
 */
@Component({
  selector: 'cinemapp-email-with-validation',
  template: `
    <div>
      <mat-form-field>
        <input type="email" matInput placeholder="Votre adresse e-mail" required autocomplete="email">
      </mat-form-field>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailWithValidationComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() name = 'email';
  @Input() api: (value: string) => Observable<boolean>;

  constructor(protected changeDetector: ChangeDetectorRef) {}

  ngOnInit() {

    /** @todo Set async validator
     *  @todo Check if there is a value, otherwise observable of null
     *  @todo Catch error
     *  @todo Manual complete with first()
     *  @todo markForCheck()
     */


  }

}
