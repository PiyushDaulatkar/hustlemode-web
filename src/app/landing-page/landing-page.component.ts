import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HeroBannerComponent } from "./hero-banner/hero-banner.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, HeroBannerComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
