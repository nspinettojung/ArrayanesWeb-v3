import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'dta-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  title = input<string>('');
  images = input<string[]>();
  activeImage = input<string>('');
  close = output();
  changeImage = output<{ img: string }>();

  onClose() {
    this.close.emit();
    console.log('Modal closed');
  }

  onSelect(img: string) {
    this.changeImage.emit({ img });
  }
}
