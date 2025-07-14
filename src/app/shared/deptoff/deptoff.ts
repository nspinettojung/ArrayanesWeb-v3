import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';
import { Modal } from '../modal/modal';

@Component({
  selector: 'dta-deptoff',
  imports: [Navbar, Footer, RouterLink, Modal],
  templateUrl: './deptoff.html',
  styleUrl: './deptoff.scss',
})
export class Deptoff {
  imagenes = [
    'img/DPP/DPP-1.webp',
    'img/DPP/DPP-2.webp',
    'img/DPP/DPP-3.webp',
    'img/DPP/DPP-4.webp',
    'img/DPP/DPP-5.webp',
  ];

  // openModal(img: string) {
  //   this.selectedImage = img;
  // }

  // closeModal() {
  //   this.selectedImage = null;
  // }

  imagenSeleccionada = this.imagenes[0];
  modalOpen = false;

  openModal(img: string) {
    this.imagenSeleccionada = img;
    this.modalOpen = true;
  }
}
