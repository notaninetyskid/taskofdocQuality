import { Component, Input, OnInit } from '@angular/core';
import { speaker } from 'src/app/modals/speakers.modal';

@Component({
  selector: 'app-top-speakers',
  templateUrl: './top-speakers.component.html',
  styleUrls: ['./top-speakers.component.scss']
})
export class TopSpeakersComponent implements OnInit {

  @Input() data!: speaker;
  @Input() type!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
