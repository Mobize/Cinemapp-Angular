import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, filter, switchMap, tap, catchError } from 'rxjs/operators';

/**
 * @todo Add form binding
 * @todo Add control name
 */
@Component({
  selector: 'cinemapp-city-with-autocomplete',
  template: `
    <div>
      <mat-form-field>
        <input type="text" [matAutocomplete]="cityAuto" matInput placeholder="Votre ville">
      </mat-form-field>
      <mat-autocomplete #cityAuto>
        <mat-option *ngFor="let suggestion of citySuggestions$ | async" [value]="suggestion">{{suggestion}}</mat-option>
      </mat-autocomplete>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWithAutocompleteComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() name = 'city';
  @Input() api: (value: string) => Observable<string[]>;
  citySuggestions$: Observable<string[]>;

  constructor(protected changeDetector: ChangeDetectorRef) {}

  ngOnInit() {

    this.citySuggestions$ = ((this.form.get(this.name) as FormControl).valueChanges as Observable<string>).pipe(
      distinctUntilChanged(),
      debounceTime(500),
      filter((value) => (value.length > 2)),
      switchMap(this.api),
      tap(() => { this.changeDetector.markForCheck(); }),
      catchError(() => [])
    );

  }

}
