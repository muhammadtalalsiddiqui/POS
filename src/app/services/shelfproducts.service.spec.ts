import { TestBed } from '@angular/core/testing';

import { ShelfproductsService } from './shelfproducts.service';

describe('ShelfproductsService', () => {
  let service: ShelfproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelfproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
