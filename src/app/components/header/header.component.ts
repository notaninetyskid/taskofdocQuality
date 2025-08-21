import { Component, OnInit } from '@angular/core'
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../sidebar/sidebar.component';
// import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'
// import { SidebarComponent } from '../sidebar/sidebar.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor (private offcanvasService: NgbOffcanvas) {}

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

  activeTab: string = 'Webinar'
  markItOn (s: string) {
    this.activeTab = s
  }

  openSideBar () {
    this.offcanvasService.open(SidebarComponent, { 
      position: 'start',
      panelClass: 'widthSettings'
     })
  }
}
