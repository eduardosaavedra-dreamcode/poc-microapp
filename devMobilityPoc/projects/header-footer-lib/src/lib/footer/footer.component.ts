import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() appName: string;
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    console.log("Acción desde la "+ this.appName);
  }

}
