import { Component, OnInit } from '@angular/core';
import { DevMobilityLibService } from '../dev-mobility-lib.service';

@Component({
  selector: 'dev-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private devMobilityLibService: DevMobilityLibService) { }

  ngOnInit(): void {
    console.log(this.devMobilityLibService.getEnvironment());
  }

}
