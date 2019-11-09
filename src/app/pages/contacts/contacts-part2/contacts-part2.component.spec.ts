import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsPart2Component } from './contacts-part2.component';

describe('ContactsPart2Component', () => {
  let component: ContactsPart2Component;
  let fixture: ComponentFixture<ContactsPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
