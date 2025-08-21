import { Component, OnInit } from '@angular/core'
import { Webinar } from '../modals/webinar.modal'
import {
  continueWatching,
  liveWebinars,
  topSpeakers,
  upcomingWebinars,
  webinarsBased
} from '../data/data'
import { speaker } from '../modals/speakers.modal'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor () {}

  topicOfBased: string = 'cardiology'
  active: string = 'For you'

  tabs: string[] = ['For you', 'Live', 'Upcoming']

  upcomingWebinars: Webinar[] = []
  webinarsBased: Webinar[] = []
  liveWebinars: Webinar[] = []
  continueWatching: Webinar[] = []
  topSpeakers: speaker[] = []

  ngOnInit (): void {
    this.upcomingWebinars = upcomingWebinars
    this.webinarsBased = webinarsBased
    this.liveWebinars = liveWebinars
    this.continueWatching = continueWatching
    this.topSpeakers = topSpeakers
  }
}
