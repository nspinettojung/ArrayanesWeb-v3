import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-deptopb',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './deptopb.html',
  styleUrl: './deptopb.scss'
})
export class Deptopb {
selectedImage: string | null = null;

openModal(img: string) {
  this.selectedImage = img;
}

closeModal() {
  this.selectedImage = null;
}
}
