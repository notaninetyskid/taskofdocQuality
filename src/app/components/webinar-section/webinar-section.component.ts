import { Component, Input, OnInit } from '@angular/core'
import { Webinar } from 'src/app/modals/webinar.modal'

@Component({
  selector: 'app-webinar-section',
  templateUrl: './webinar-section.component.html',
  styleUrls: ['./webinar-section.component.scss']
})
export class WebinarSectionComponent implements OnInit {
  @Input() title!: string
  @Input() live!: boolean
  @Input() webinars!: Webinar[]

  constructor () {}

  ngOnInit (): void {}
}
