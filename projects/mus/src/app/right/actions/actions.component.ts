import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mus-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  selectedAction: string;
  selectedAmount = 1;
  isAnswer = false;
  max = 40; // Calculate max for hor dago !

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`Selected action: ${this.selectedAction}`);
    console.log(`Selected amount: ${this.selectedAmount}`);
    this.selectedAction = null;
    this.selectedAmount = 1;
  }

}
