import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';

import { CinemaRoutingModule } from './cinema-routing.module';
import { SlideshowModule } from '../ui/slideshow';

import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TheatersComponent } from './pages/theaters/theaters.component';
import { TheaterComponent } from './pages/theater/theater.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesItemComponent } from './components/movies-item/movies-item.component';
import { TheatersListComponent } from './components/theaters-list/theaters-list.component';
import { TheatersItemComponent } from './components/theaters-item/theaters-item.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { TheaterSchedulesComponent } from './components/theater-schedules/theater-schedules.component';
import { MovieSchedulesComponent } from './components/movie-schedules/movie-schedules.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    SlideshowModule,
    CinemaRoutingModule,
  ],
  declarations: [
    MoviesComponent,
    MovieComponent,
    TheatersComponent,
    TheaterComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    MoviesItemComponent,
    TheatersListComponent,
    TheatersItemComponent,
    SchedulesComponent,
    TheaterSchedulesComponent,
    MovieSchedulesComponent,
  ]
})
export class CinemaModule {}
