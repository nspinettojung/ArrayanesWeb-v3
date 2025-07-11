import { Component, input } from '@angular/core';

@Component({
  selector: 'dta-card',
  imports: [],
  templateUrl: './card.html',
})
export class Card {
  imgCard = input<string>('');
  tCard = input<string>('');
  description = input<string>('');
  cCard = input<string | string[]>('');
}
