import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { PricingComponent } from '../pricing/pricing.component';
import { FooterComponent } from '../footer/footer.component';
import { Hero2Component } from '../hero2/hero2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BenefitsComponent, PricingComponent, FooterComponent, Hero2Component ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
