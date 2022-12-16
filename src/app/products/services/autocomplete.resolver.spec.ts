import { TestBed } from '@angular/core/testing';

import { AutocompleteResolver } from './autocomplete.resolver';

describe('AutocompleteResolver', () => {
  let resolver: AutocompleteResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AutocompleteResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
