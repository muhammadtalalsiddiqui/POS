import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductstypeComponent } from './productstype.component';

describe('ProductstypeComponent', () => {
  let component: ProductstypeComponent;
  let fixture: ComponentFixture<ProductstypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductstypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
