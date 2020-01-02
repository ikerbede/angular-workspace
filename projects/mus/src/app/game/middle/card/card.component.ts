import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mus-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() type: string;
  @Input() value: number;

  isMusEnabled = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'bastoi',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/bastoi.svg'));
    this.matIconRegistry.addSvgIcon(
      'ezpata',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/ezpata.svg'));
    this.matIconRegistry.addSvgIcon(
      'kopa',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/kopa.svg'));
    this.matIconRegistry.addSvgIcon(
      'urre',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/urre.svg'));
  }

  ngOnInit() {
  }

}
