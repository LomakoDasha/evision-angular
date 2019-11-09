import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsPart1Component } from './contacts-part1.component';

describe('ContactsPart1Component', () => {
  let component: ContactsPart1Component;
  let fixture: ComponentFixture<ContactsPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
