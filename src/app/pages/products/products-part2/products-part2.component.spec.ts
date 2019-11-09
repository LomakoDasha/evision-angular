import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPart2Component } from './products-part2.component';

describe('ProductsPart2Component', () => {
  let component: ProductsPart2Component;
  let fixture: ComponentFixture<ProductsPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
