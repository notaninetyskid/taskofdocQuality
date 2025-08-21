import { Component, Input, OnInit } from '@angular/core'
import { Webinar } from 'src/app/modals/webinar.modal'

@Component({
  selector: 'app-continue-watching',
  templateUrl: './continue-watching.component.html',
  styleUrls: ['./continue-watching.component.scss']
})
export class ContinueWatchingComponent implements OnInit {
  constructor () {}

  @Input() data!: Webinar

  ngOnInit (): void {}

  progress: number = 50 

  get dashOffset () {
    const total = 360
    return total - (this.progress / 100) * total
  }
}
