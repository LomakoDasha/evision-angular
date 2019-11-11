import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancy-part2',
  templateUrl: './vacancy-part2.component.html',
  styleUrls: ['./vacancy-part2.component.scss']
})
export class VacancyPart2Component implements OnInit {
  public title: string = 'Актуальные вакансии';

  constructor() { }

  ngOnInit() {
  }

}
