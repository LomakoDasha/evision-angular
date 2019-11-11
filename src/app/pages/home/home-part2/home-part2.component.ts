import { Component } from '@angular/core';

@Component({
  selector: 'app-home-part2',
  templateUrl: './home-part2.component.html',
  styleUrls: ['./home-part2.component.scss']
})
export class HomePart2Component {
  public title1: string = 'О нас';
  public title2: string = 'Направления деятельности';
  public imagePath1: string = '/assets/home-img1.jpg';
  public imagePath2: string = '/assets/home-img2.jpg';
  public listItems = ['Прикладные программы', 'Прикладное программное обеспечение', 'Разработка программного обеспечения на заказ',];
  // public listItems = [
  //   {
  //     id: 1,
  //     item: 'Прикладные программы'
  //   },
  //   {
  //     id: 2,
  //     item: 'Прикладное программное обеспечение'
  //   },
  //   {
  //     id: 3,
  //     item: 'Разработка программного обеспечения на заказ'
  //   }
  // ];

  constructor() { }

}
