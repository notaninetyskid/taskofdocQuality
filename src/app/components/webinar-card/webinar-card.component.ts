import { Component, Input, OnInit } from '@angular/core';
import { Webinar } from 'src/app/modals/webinar.modal';

@Component({
  selector: 'app-webinar-card',
  templateUrl: './webinar-card.component.html',
  styleUrls: ['./webinar-card.component.scss']
})
export class WebinarCardComponent implements OnInit {

  @Input() data!: Webinar;
  @Input() type!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
