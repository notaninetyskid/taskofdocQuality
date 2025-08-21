import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
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
    }
  ]

  ngOnInit (): void {}
}
