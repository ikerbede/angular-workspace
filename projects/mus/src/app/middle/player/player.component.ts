import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mus-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() name: string;
  @Input() isEsku: boolean;

  action: string;

  constructor() { }

  ngOnInit() {
    this.action = 'enbido';
  }

}
