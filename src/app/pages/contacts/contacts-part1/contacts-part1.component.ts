import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-part1',
  templateUrl: './contacts-part1.component.html',
  styleUrls: ['./contacts-part1.component.scss']
})
export class ContactsPart1Component implements OnInit {
  public title: string = 'Свяжитесь с нами !';
  public imagePath: string = './assets/contacts.jpg';

  constructor() { }

  ngOnInit() {
  }

}
