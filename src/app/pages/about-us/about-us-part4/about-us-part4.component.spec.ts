import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPart4Component } from './about-us-part4.component';

describe('AboutUsPart4Component', () => {
  let component: AboutUsPart4Component;
  let fixture: ComponentFixture<AboutUsPart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsPart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
