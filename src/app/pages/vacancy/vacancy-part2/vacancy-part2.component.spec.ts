import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyPart2Component } from './vacancy-part2.component';

describe('VacancyPart2Component', () => {
  let component: VacancyPart2Component;
  let fixture: ComponentFixture<VacancyPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
