import { TestBed } from '@angular/core/testing';

import { CartEntityService } from './cart-entity.service';

describe('CartEntityService', () => {
  let service: CartEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
