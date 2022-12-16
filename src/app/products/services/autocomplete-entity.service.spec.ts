import { TestBed } from '@angular/core/testing';

import { AutocompleteEntityService } from './autocomplete-entity.service';

describe('AutocompleteEntityService', () => {
  let service: AutocompleteEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocompleteEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
