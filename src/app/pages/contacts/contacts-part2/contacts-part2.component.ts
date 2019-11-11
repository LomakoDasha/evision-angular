import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-part2',
  templateUrl: './contacts-part2.component.html',
  styleUrls: ['./contacts-part2.component.scss']
})
export class ContactsPart2Component implements OnInit {
  public title: string = 'Пожалуйста, заполните форму, мы свяжемся с вами в ближайшее время';
  public imagePathMap: string = '/assets/contacts-map.jpg';

  constructor() { }

  ngOnInit() {
  }

}
