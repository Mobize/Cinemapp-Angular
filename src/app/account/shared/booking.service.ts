import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { LocalStorage, JSONSchema } from '@ngx-pwa/local-storage';

import { Response } from './response';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  protected readonly localStorageKey = 'booking';
  protected readonly reservationsSchema: JSONSchema = {
    items: {
      properties: {
        movieTitle: { type: 'string' },
        theaterTitle: { type: 'string' },
        scheduleId: { type: 'number' },
        scheduleHour: { type: 'string' },
      },
      required: ['movieTitle', 'theaterTitle', 'scheduleId', 'scheduleHour']
    }
  };
  protected reservationsSubject = new BehaviorSubject<Reservation[]>([]);

  get reservations() {
    return this.reservationsSubject.asObservable();
  }

  constructor(protected http: HttpClient, protected localStorage: LocalStorage) {

    /** @todo Verify data with the JSON Schema and catch error */
    this.localStorage.getItem<Reservation[]>(this.localStorageKey, { schema: this.reservationsSchema })
      .subscribe((reservations) => {

        this.reservationsSubject.next(reservations || []);

      });

  }

  book(schedule: number) {

    return this.http.post<Response<Reservation>>(`/api/book`, { schedule })
    .pipe(tap((response) => {

      if (response.success && response.data) {

        const newReservations = this.reservationsSubject.getValue();
        newReservations.push(response.data);

        this.reservationsSubject.next(newReservations);

        this.localStorage.setItemSubscribe(this.localStorageKey, newReservations);

      }

    }));

  }

  cancel(id: number) {

    const newReservations = this.reservationsSubject.getValue();
    newReservations.splice(id, 1);

    this.reservationsSubject.next(newReservations);

    this.localStorage.setItemSubscribe(this.localStorageKey, newReservations);

  }

}
