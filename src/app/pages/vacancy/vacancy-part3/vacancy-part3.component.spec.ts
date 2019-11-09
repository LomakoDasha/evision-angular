import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyPart3Component } from './vacancy-part3.component';

describe('VacancyPart3Component', () => {
  let component: VacancyPart3Component;
  let fixture: ComponentFixture<VacancyPart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyPart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
