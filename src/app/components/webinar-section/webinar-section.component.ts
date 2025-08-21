import { Component, Input, OnInit } from '@angular/core'
import { speaker } from 'src/app/modals/speakers.modal'
import { Webinar } from 'src/app/modals/webinar.modal'

@Component({
  selector: 'app-webinar-section',
  templateUrl: './webinar-section.component.html',
  styleUrls: ['./webinar-section.component.scss']
})
export class WebinarSectionComponent implements OnInit {
  @Input() title!: string
  @Input() type!: string
  @Input() webinars!: Webinar[]
  @Input() speakers!: speaker[]

  constructor () {}

  ngOnInit (): void {}
}
