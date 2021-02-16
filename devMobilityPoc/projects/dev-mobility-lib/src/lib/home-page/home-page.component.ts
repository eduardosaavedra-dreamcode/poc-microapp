import { Component, OnInit } from '@angular/core';
import { DevMobilityLibService } from '../dev-mobility-lib.service';

@Component({
  selector: 'dev-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  dataEnvironment: { [index: string]: any; } = {};

  constructor(private devMobilityLibService: DevMobilityLibService) { }

  ngOnInit(): void {
    console.log(this.devMobilityLibService.getEnvironment());
    this.dataEnvironment["logintr"] = this.devMobilityLibService.getEnvironment().logintr;
    this.dataEnvironment["logintrenv"] = this.devMobilityLibService.getEnvironment().logintrenv;
    this.dataEnvironment["blogApiTerms"] = this.devMobilityLibService.getEnvironment().blogApiTerms;
    this.dataEnvironment["blogApiPolicies"] = this.devMobilityLibService.getEnvironment().blogApiPolicies;
    this.dataEnvironment["bienestarUrlApi"] = this.devMobilityLibService.getEnvironment().bienestarUrlApi;
    this.dataEnvironment["base64EncodedKeyFromJava"] = this.devMobilityLibService.getEnvironment().base64EncodedKeyFromJava;
  }

}
