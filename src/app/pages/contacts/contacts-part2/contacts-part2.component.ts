import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-part2',
  templateUrl: './contacts-part2.component.html',
  styleUrls: ['./contacts-part2.component.scss']
})
export class ContactsPart2Component implements OnInit {
  public title: string = 'Пожалуйста, заполните форму, мы свяжемся с вами в ближайшее время';
  public latitude: number = 53.9000000;
  public longitude: number = 27.5666700;

  constructor() { }

  ngOnInit() {
  }

}
