import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor () {}

  navs: { name: string; icon: string }[] = [
    {
      name: 'Home',
      icon: '/assets/icons/Home.png'
    },
    {
      name: 'Webinar',
      icon: '/assets/icons/webinar.png'
    },
    {
      name: 'SKP',
      icon: '/assets/icons/SKP.png'
    },
    {
      name: 'Calendar',
      icon: '/assets/icons/Calender.png'
    },
    {
      name: 'Notification',
      icon: '/assets/icons/Bell.png'
    },
  ]

  ngOnInit (): void {}
}
