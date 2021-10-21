import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfproductComponent } from './shelfproduct.component';

describe('ShelfproductComponent', () => {
  let component: ShelfproductComponent;
  let fixture: ComponentFixture<ShelfproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelfproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
