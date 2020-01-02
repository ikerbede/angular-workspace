import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mus-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
  scores = [
    {players: ['Juju', 'Niko'], score: 26},
    {players: ['Tonio', 'Iker'], score: 14}
  ];

  constructor() { }

  ngOnInit() {
  }

}
