import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pages = [
    {
      title: ' Main',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Environment',
      url: '/home/dev-mobility-lib-menu/home',
      icon: 'construct'
    },
    {
      title: 'Device',
      children: [
        {
          title: 'Camera',
          url: '/home/dev-mobility-lib-menu/camera',
          icon: 'logo-google'
        },
        {
          title: 'QR Scanner',
          url: '/home/dev-mobility-lib-menu/home',
          icon: 'logo-ionic'
        },
      ]

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
