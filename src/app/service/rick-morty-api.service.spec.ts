import { TestBed } from '@angular/core/testing';

import { RickMortyApiService } from './rick-morty-api.service';

describe('RickMortyApiService', () => {
  let service: RickMortyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickMortyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
