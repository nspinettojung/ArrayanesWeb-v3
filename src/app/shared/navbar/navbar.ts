import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../button/button';
import { NavbarL } from '../../core/interface/navbar-l';
import { NgClass } from '@angular/common';

@Component({
  selector: 'dta-navbar',
  imports: [RouterLink, Button, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  rLinks: NavbarL[] = [
    { text: 'Inicio', link: '/' },
    { text: 'Instalaciones', link: '/alojamiento' },
    { text: 'Sobre nosotros', link: '/sobre-nosotros' },
  ];
  showMenu = false;
}
