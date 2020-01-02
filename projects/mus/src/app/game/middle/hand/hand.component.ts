import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mus-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  cards = [
    {type: 'bastoi', value: 3},
    {type: 'ezpata', value: 11},
    {type: 'kopa', value: 12},
    {type: 'urre', value: 7}
  ];

  constructor() { }

  ngOnInit() {
    this.cards.sort((a, b) => b.value - a.value);
  }

}
