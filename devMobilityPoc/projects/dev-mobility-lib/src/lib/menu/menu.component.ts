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
      title: 'Cool Frameworks',
      children: [
        {
          title: 'Home',
          url: '/home/dev-mobility-lib-menu/home',
          icon: 'logo-ionic'
        },
        {
          title: 'Camera',
          url: '/home/dev-mobility-lib-menu/camera',
          icon: 'logo-google'
        }
      ]

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
