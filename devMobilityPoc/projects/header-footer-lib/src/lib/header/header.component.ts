import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() url: string;
  @Input() inputIsBackButton: string;
  isBackButton : boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.isBackButton = this.inputIsBackButton && this.inputIsBackButton == 'true' ? true : false;
  }

}
