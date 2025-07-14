import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-deptopb',
  imports: [Navbar, Footer, RouterLink, Modal],
  templateUrl: './deptopb.html',
  styleUrl: './deptopb.scss',
})
export class Deptopb {
  imagenes = [
    'img/DPB/DPB-1.webp',
    'img/DPB/DPB-2.webp',
    'img/DPB/DPB-3.webp',
    'img/DPB/DPB-4.webp',
    'img/DPB/DPB-5.webp',
    'img/DPB/DPB-6.webp',
    'img/DPB/DPB-7.webp',
    'img/DPB/DPB-8.webp',
  ];
  imagenSeleccionada = this.imagenes[0];
  modalOpen = false;

  openModal(img: string) {
    this.imagenSeleccionada = img;
    this.modalOpen = true;
  }
}
