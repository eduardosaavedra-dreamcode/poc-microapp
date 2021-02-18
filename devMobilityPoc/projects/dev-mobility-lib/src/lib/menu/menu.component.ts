import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pages = [
    {
      title: 'Ir a superApp',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Environment',
      url: '/home/dev-mobility-lib-menu/home',
      icon: 'construct'
    },
    {
      title: 'Dispositivo',
      children: [
        {
          title: 'Cámara',
          url: '/home/dev-mobility-lib-menu/camera',
          icon: 'logo-google'
        },
        {
          title: 'Lector código QR',
          url: '/home/dev-mobility-lib-menu/qr-scanner',
          icon: 'logo-ionic'
        },
      ]

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
