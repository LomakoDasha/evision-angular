import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-part2',
  templateUrl: './products-part2.component.html',
  styleUrls: ['./products-part2.component.scss']
})
export class ProductsPart2Component implements OnInit {
  public arrayOfItems = [
    {
      product: 'Сбор отходов',
      img: './assets/product1.png',
      description: 'Система сбора отходов, которая позволяет управлять, повторно использовать различные виды твердых отходов: промышленные, коммерческие и бытовые отходы.'
    },
    {
      product: 'E-Learning',
      img: './assets/product2.png',
      description: 'Система, выполненая в виде процесса презентаций, созданного  с помощью использования презентаций Microsoft PowerPoint на интерактивном веб-сайте, что позволяет с легкостью отображать учебный материал на планшетах или мобильных устройствах при помощи браузера.'
    },
    {
      product: 'RFID',
      img: './assets/product3.png',
      description: 'Одна из основных технологий, которая использует SmartTech. При помощи этой технологиии возможно автоматически идентифицировать и отслеживать приклепленные к ней объекты.'
    },
    {
      product: 'Card Issuing System',
      img: './assets/product4.png',
      description: 'Система для проектирования пластиковой карты, позволяющая с лекгостью создавать карты в соответствии с потребностями пользователей.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
