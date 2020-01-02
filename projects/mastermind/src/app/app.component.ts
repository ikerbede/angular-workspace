import { Component, OnInit } from '@angular/core';
import { Attempt } from './models/attempt';
import { Palette } from './models/colors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  palette = Palette;
  secretColors: string[] = [];
  attempts: Attempt[] = [];
  currentAttempt: Attempt;

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      this.secretColors.push(Palette[Math.floor(Math.random() * Palette.length)]);
    }
    console.log(`The secret code is: ${JSON.stringify(this.secretColors)}`);
    this.currentAttempt = new Attempt([]);
  }

  pickUpColor(color: string) {
    if (this.currentAttempt.colors.length < 4) {
      this.currentAttempt.colors.push(color);
    }
    if (this.currentAttempt.colors.length === 4) {
      this.getRedsAndWhites();
      this.attempts.push({...this.currentAttempt});
      this.currentAttempt = new Attempt([]);
    }
  }

  private getRedsAndWhites() {
    const notWhites: string[] = [];
    console.log(`Current attempt: ${JSON.stringify(this.currentAttempt.colors)}`);
    this.currentAttempt.colors.forEach((color, index) => {
      if (this.secretColors[index] === color) {
        this.currentAttempt.whites++;
      } else {
        notWhites.push(this.secretColors[index]);
      }
    });
    console.log(`Not whites: ${JSON.stringify(notWhites)}`);
    notWhites.forEach((color) => {
      if (this.currentAttempt.colors.indexOf(color) >= 0) {
        this.currentAttempt.reds++;
      }
    });
  }
}
