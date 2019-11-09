import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPart1Component } from './products-part1.component';

describe('ProductsPart1Component', () => {
  let component: ProductsPart1Component;
  let fixture: ComponentFixture<ProductsPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
