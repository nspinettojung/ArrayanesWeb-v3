import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dta-deptoff',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './deptoff.html',
  styleUrl: './deptoff.scss',
})
export class Deptoff {}
