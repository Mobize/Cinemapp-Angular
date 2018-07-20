import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from './movie';
import { Theater } from './theater';
import { Schedule } from './schedule';
import { Slide } from './slide';
import { Slide as SlideshowSlide } from '../../ui/slideshow';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(protected http: HttpClient) {}

  getMovies(): Observable<Movie[]> {

    return this.http.get<Movie[]>(`/api/cinema/movies`);

  }

  getMovie(id: number): Observable<Movie> {

    return this.http.get<Movie>(`/api/cinema/movie/${id}`).pipe(map((movie) => ({
      ...movie, schedulesGroups: this.groupMovieSchedules(movie.schedules || [])
    })));

  }

  getTheaters(): Observable<Theater[]> {

    return this.http.get<Theater[]>(`/api/cinema/theaters`);

  }

  getTheater(id: number): Observable<Theater> {

    return this.http.get<Theater>(`/api/cinema/theater/${id}`).pipe(map((theater) => ({
      ...theater, schedulesGroups: this.groupTheaterSchedules(theater.schedules || [])
    })));

  }

  getSlides(): Observable<SlideshowSlide[]> {

    return this.http.get<Slide[]>(`/api/cinema/slides`).pipe(map((slides) =>
      slides.map((slide) => ({ ...slide, link: `/cinema/movies/${slide.movieId}` }))
    ));

  }

  groupMovieSchedules(schedules: Schedule[]): Schedule[][] {

    return this.groupSchedules(schedules, 'theater');

  }

  groupTheaterSchedules(schedules: Schedule[]): Schedule[][] {

    return this.groupSchedules(schedules, 'movie');

  }

  protected groupSchedules(schedules: Schedule[], groupBy: 'movie' | 'theater'): Schedule[][] {

    return Array.from(new Set<number>(schedules.map((schedule) => schedule[groupBy].id)))
    .map((id) => schedules.filter((schedule) => schedule[groupBy].id === id));

  }

}
