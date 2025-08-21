import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-speakers',
  templateUrl: './top-speakers.component.html',
  styleUrls: ['./top-speakers.component.scss']
})
export class TopSpeakersComponent implements OnInit {

  @Input() data: any;
  @Input() type!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
