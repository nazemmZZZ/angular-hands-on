import { TestBed } from '@angular/core/testing';

import { ProductEntitiyServiceService } from './product-entitiy-service.service';

describe('ProductEntitiyServiceService', () => {
  let service: ProductEntitiyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEntitiyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
