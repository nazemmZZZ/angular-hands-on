import { TestBed } from '@angular/core/testing';

import { AutocompleteDataService } from './autocomplete-data.service';

describe('AutocompleteDataService', () => {
  let service: AutocompleteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocompleteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
