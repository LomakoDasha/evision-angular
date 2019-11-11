import { Component, OnInit } from '@angular/core';

enum Emotion {
  Sad,
  Confused,
  Happy,
  Surprised,
}
@Component({
  selector: 'app-home-part4',
  templateUrl: './home-part4.component.html',
  styleUrls: ['./home-part4.component.scss']
})
export class HomePart4Component implements OnInit {
  public emotion = Emotion;
  public currentEmotion = Emotion.Happy;

  constructor() { }

  ngOnInit() {
  }

}
