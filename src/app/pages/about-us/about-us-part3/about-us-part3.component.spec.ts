import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPart3Component } from './about-us-part3.component';

describe('AboutUsPart3Component', () => {
  let component: AboutUsPart3Component;
  let fixture: ComponentFixture<AboutUsPart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsPart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
