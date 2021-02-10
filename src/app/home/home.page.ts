import { Component } from '@angular/core';
import { DevdacticLibService } from 'devdactic-lib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = null;

  constructor(private devdacticLibService: DevdacticLibService) { }

  getData() {
    this.devdacticLibService.getData().subscribe(res => {
      console.log('res ', res);
      this.user = res;
    });
  }

}
