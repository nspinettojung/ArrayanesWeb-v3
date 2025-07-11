import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../button/button';
import { NavbarL } from '../../core/interface/navbar-l';

@Component({
  selector: 'dta-navbar',
  imports: [RouterLink, Button],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  rLinks: NavbarL[] = [
    { text: 'Inicio', link: '/' },
    { text: 'Instalaciones', link: '/alojamiento' },
    { text: 'Sobre nosotros', link: '/sobre-nosotros' },
  ];
}
