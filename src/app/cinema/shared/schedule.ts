import { Movie } from './movie';
import { Theater } from './theater';

export interface Schedule {
  id: number;
  hour: string;
  movie: Movie;
  theater: Theater;
}
