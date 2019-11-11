import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancy-part3',
  templateUrl: './vacancy-part3.component.html',
  styleUrls: ['./vacancy-part3.component.scss']
})
export class VacancyPart3Component implements OnInit {
  public title: string = 'Не нашли подходящую вакансию ?';

  constructor() { }

  ngOnInit() {
  }

}
