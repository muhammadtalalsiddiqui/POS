import { TestBed } from '@angular/core/testing';

import { ProductstypeService } from './productstype.service';

describe('ProductstypeService', () => {
  let service: ProductstypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductstypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
