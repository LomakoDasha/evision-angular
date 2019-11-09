import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyPart1Component } from './vacancy-part1.component';

describe('VacancyPart1Component', () => {
  let component: VacancyPart1Component;
  let fixture: ComponentFixture<VacancyPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
