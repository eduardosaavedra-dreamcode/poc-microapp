import { Component, OnInit } from '@angular/core';
import { DevMobilityLibService } from '../dev-mobility-lib.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'dev-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  dataEnvironment: { [index: string]: any; } = {};
  token: string;

  constructor(private devMobilityLibService: DevMobilityLibService, private storage: Storage) { }
  ngOnInit(): void {
    this.storage.get('token').then(token => {
      this.token = token;
    });
    console.log(this.devMobilityLibService.getEnvironment());
    this.dataEnvironment["logintr"] = this.devMobilityLibService.getEnvironment().logintr;
    this.dataEnvironment["logintrenv"] = this.devMobilityLibService.getEnvironment().logintrenv;
    this.dataEnvironment["blogApiTerms"] = this.devMobilityLibService.getEnvironment().blogApiTerms;
    this.dataEnvironment["blogApiPolicies"] = this.devMobilityLibService.getEnvironment().blogApiPolicies;
    this.dataEnvironment["bienestarUrlApi"] = this.devMobilityLibService.getEnvironment().bienestarUrlApi;
    this.dataEnvironment["base64EncodedKeyFromJava"] = this.devMobilityLibService.getEnvironment().base64EncodedKeyFromJava;
  }

}
