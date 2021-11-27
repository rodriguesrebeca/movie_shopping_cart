import { TestBed } from '@angular/core/testing';

import { ShoppingToCartService } from './shopping-to-cart.service';

describe('ShoppingToCartService', () => {
  let service: ShoppingToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingToCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
