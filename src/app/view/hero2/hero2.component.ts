import { Component } from '@angular/core';

@Component({
  selector: 'app-hero2',
  standalone: true,
  imports: [],
  templateUrl: './hero2.component.html',
  styleUrl: './hero2.component.css',
})
export class Hero2Component {
  openWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=5493547540855', '_blank');
  }
}
