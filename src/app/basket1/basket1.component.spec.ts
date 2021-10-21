import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basket1Component } from './basket1.component';

describe('Basket1Component', () => {
  let component: Basket1Component;
  let fixture: ComponentFixture<Basket1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Basket1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Basket1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
