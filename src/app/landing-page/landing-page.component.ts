import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { FeaturesShowcaseComponent } from "./features-showcase/features-showcase.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, HeroBannerComponent, TestimonialsComponent, FeaturesShowcaseComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  isBlurActive: boolean = false;
  bodyElement: HTMLBodyElement | null = null;

  ngOnInit(): void {
    this.bodyElement = document.querySelector('body');
  }

  toggleBlurLandingPage(isDrawerHidden: boolean) {
    this.isBlurActive = !isDrawerHidden;
    if (this.isBlurActive) {
      this.bodyElement?.classList.add('no-scroll');
    } else {
      this.bodyElement?.classList.remove('no-scroll');
    }
  }
}
