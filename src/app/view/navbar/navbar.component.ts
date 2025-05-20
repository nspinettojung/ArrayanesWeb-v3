import { NgClass, ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isScrolled = false;
  isMobile = window.innerWidth < 768;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 75;
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.isMobile = window.innerWidth < 768; // Cambia el valor si el tamaño de la pantalla cambia
  }

  openWhatsApp() {
    window.open('https://wa.me/5493547540855', '_blank');
  }

  ngAfterViewInit(): void {
    this.setupOffcanvasLinks();
  }

  private setupOffcanvasLinks(): void {
    const links = document.querySelectorAll('[data-bs-dismiss="offcanvas"]');

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = (event.target as HTMLAnchorElement).getAttribute(
          'href'
        );

        if (targetId?.startsWith('#')) {
          event.preventDefault(); // Evita que Bootstrap lo bloquee

          setTimeout(() => {
            document
              .querySelector(targetId)
              ?.scrollIntoView({ behavior: 'smooth' });

            const offcanvas = document.querySelector('.offcanvas.show');
            if (offcanvas) {
              bootstrap.Offcanvas.getInstance(offcanvas)?.hide();
            }
          }, 300); // Permite el scroll antes de cerrar el offcanvas
        }
      });
    });
  }
}
