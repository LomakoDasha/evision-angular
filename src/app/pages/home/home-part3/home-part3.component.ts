import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-part3',
  templateUrl: './home-part3.component.html',
  styleUrls: ['./home-part3.component.scss']
})
export class HomePart3Component implements OnInit {
  public title: string = 'Кто мы ?';
  public workers = [
    {
      id: 1,
      img: '/assets/person1.jpg',
      vacancy: 'Разработчики'
    },
    {
      id: 2,
      img: '/assets/person2.jpg',
      vacancy: 'Тестировщики'
    },
    {
      id: 3,
      img: '/assets/person3.jpg',
      vacancy: 'Дизайнеры'
    },
    {
      id: 4,
      img: '/assets/person4.jpg',
      vacancy: 'Аналитики'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
