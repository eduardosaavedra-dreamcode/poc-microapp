import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DevdacticLibService } from 'devdactic-lib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  childMessage = "";
  user = null;
  constructor(private devdacticLibService: DevdacticLibService,
    private router: Router,
    private storage: Storage
  ) {
   }
  ngOnInit(): void {
    this.storage.set('appName', 'superApp');
  }

  getData() {
    this.devdacticLibService.getData().subscribe(res => {
      console.log('res ', res);
      this.user = res;
    });
  }

  getDataEmitter($event: string) {
    this.childMessage = $event;
  }

  goToMicroApp2() {
    this.router.navigate(['home/dev-mobility-lib-menu']);
  }

}
