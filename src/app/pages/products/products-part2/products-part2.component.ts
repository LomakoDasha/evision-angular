import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-part2',
  templateUrl: './products-part2.component.html',
  styleUrls: ['./products-part2.component.scss']
})
export class ProductsPart2Component implements OnInit {
  public imagePathProduct1: string = '/assets/product1.png';
  public imagePathProduct2: string = '/assets/product2.png';
  public imagePathProduct3: string = '/assets/product3.png';
  public imagePathProduct4: string = '/assets/product4.png';

  constructor() { }

  ngOnInit() {
  }

}
