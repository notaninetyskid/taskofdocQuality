import { Component, OnInit } from '@angular/core'
import { Webinar } from '../modals/webinar.modal'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor () {}

  active: string = 'For you'

  tabs: string[] = ['For you', 'Live', 'Upcoming']

  webinars: Webinar[] = [
    {
      Thumbnail: '1',
      title: '1',
      description: '1',
      credits: {
        credit: '1',
        expiringIn: '1'
      }
    }
  ]

  ngOnInit (): void {}
}
