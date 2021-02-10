import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dev-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
