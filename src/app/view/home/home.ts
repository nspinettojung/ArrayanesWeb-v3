import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Card } from '../../shared/card/card';
import { ICard } from '../../core/interface/i-card';
import { Footer } from '../../shared/footer/footer';
import { RouterLink } from '@angular/router';
import { Button } from "../../shared/button/button";

@Component({
  selector: 'dta-home',
  imports: [Navbar, Card, Footer, RouterLink, Button],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  cards: ICard[] = [
    {
      imgCard: 'img/DPB/DPB-4.webp',
      tCard: 'Departamento amplio',
      description: 'Un departamento amplio y luminoso, ideal para familias.',
    },
    {
      imgCard: 'img/DPP/DPP-4.webp',
      tCard: 'Departamento acogedor',
      description: 'Un departamento acogedor y ideal para parejas.',
    },
    {
      imgCard: 'img/DPB/DPB-6.webp',
      tCard: 'Comodidad y estilo',
      description: 'Un departamento con estilo moderno y todas las comodidades.',
    },
  ];

  cardsT: ICard[] = [
    {
      imgCard: 'img/DPP/DPP-3.webp',
      tCard: 'Cocinas equipadas',
      description: 'Cocinas equipadas con electrodomésticos modernos y utensilios de cocina.',
    },
    {
      imgCard: 'img/DPP/DPP-2.webp',
      tCard: 'Departamento moderno',
      description:
        'Departamento con ambiente climatizado y wi-fi de alta velocidad.',
    },
  ];
}
