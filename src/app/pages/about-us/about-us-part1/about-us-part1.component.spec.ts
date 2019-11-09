import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPart1Component } from './about-us-part1.component';

describe('AboutUsPart1Component', () => {
  let component: AboutUsPart1Component;
  let fixture: ComponentFixture<AboutUsPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
