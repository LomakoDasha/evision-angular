import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-part3',
  templateUrl: './about-us-part3.component.html',
  styleUrls: ['./about-us-part3.component.scss']
})
export class AboutUsPart3Component implements OnInit {
  public title: string = 'О нас';
  public imagePathPeople: string = './assets/about-us-img.jpg';

  constructor() { }

  ngOnInit() {
  }

}
