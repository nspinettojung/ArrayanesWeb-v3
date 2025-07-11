import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from "../../shared/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alojamiento',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './alojamiento.html',
  styleUrl: './alojamiento.scss',
})
export class Alojamiento {}
