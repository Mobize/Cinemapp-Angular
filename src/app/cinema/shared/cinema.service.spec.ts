import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { CinemaService } from './cinema.service';
import { Movie } from './movie';

describe('CinemasService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinemaService]
    });
  });

  it('should be created', inject([CinemaService], (service: CinemaService) => {
    expect(service).toBeTruthy();
  }));

});
