import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'dta-button',
  imports: [NgClass],
  templateUrl: './button.html',
})
export class Button {
  text = input<string>('');
  bClass = input<string | string[]>('');
  rLink = input<string>('');
}
