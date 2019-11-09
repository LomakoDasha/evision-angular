import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPart2Component } from './about-us-part2.component';

describe('AboutUsPart2Component', () => {
  let component: AboutUsPart2Component;
  let fixture: ComponentFixture<AboutUsPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
