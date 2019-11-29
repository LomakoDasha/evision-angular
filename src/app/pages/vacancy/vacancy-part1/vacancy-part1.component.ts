import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancy-part1',
  templateUrl: './vacancy-part1.component.html',
  styleUrls: ['./vacancy-part1.component.scss']
})
export class VacancyPart1Component implements OnInit {
  public imagePath: string = './assets/vacancy.jpg';

  constructor() { }

  ngOnInit() {
  }

}
