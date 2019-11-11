import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-part2',
  templateUrl: './about-us-part2.component.html',
  styleUrls: ['./about-us-part2.component.scss']
})
export class AboutUsPart2Component implements OnInit {
  public title: string = 'E-Vision в мире';
  public arrayOfItems = [
    {
      id: 1,
      digit: '18',
      info: 'Стран'
    },
    {
      id: 2,
      digit: '15 200+',
      info: 'IT-специалистов'
    },
    {
      id: 3,
      digit: '1 500+',
      info: 'Выполненных проектов'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
