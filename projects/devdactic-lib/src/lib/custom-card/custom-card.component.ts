import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dev-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Output() outputFromChild = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  emitterDataToParent() {
    this.outputFromChild.emit("Hi!");
  }

}
