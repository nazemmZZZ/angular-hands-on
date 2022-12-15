import { TestBed } from '@angular/core/testing';

import { ProductDataServiveService } from './product-data-servive.service';

describe('ProductDataServiveService', () => {
  let service: ProductDataServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDataServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
