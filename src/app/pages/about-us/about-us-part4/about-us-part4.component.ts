import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-part4',
  templateUrl: './about-us-part4.component.html',
  styleUrls: ['./about-us-part4.component.scss']
})
export class AboutUsPart4Component implements OnInit {
  public title1: string = 'Кто мы ?';
  public title2: string = 'Чем Мы занимаемся ?';
  public title3: string = 'Почему Мы ?';

  constructor() { }

  ngOnInit() {
  }

}
