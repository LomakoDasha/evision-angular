import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-part1',
  templateUrl: './products-part1.component.html',
  styleUrls: ['./products-part1.component.scss']
})
export class ProductsPart1Component implements OnInit {
  public imagePath: string = './assets/products.jpg';

  constructor() { }

  ngOnInit() {
  }

}
