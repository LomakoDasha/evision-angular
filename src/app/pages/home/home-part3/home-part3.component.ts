import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-part3',
  templateUrl: './home-part3.component.html',
  styleUrls: ['./home-part3.component.scss']
})
export class HomePart3Component implements OnInit {
  public title: string = 'Кто мы ?';
  public imagePathPerson1: string = '/assets/person1.jpg';
  public imagePathPerson2: string = '/assets/person2.jpg';
  public imagePathPerson3: string = '/assets/person3.jpg';
  public imagePathPerson4: string = '/assets/person4.jpg';

  constructor() { }

  ngOnInit() {
  }

}
