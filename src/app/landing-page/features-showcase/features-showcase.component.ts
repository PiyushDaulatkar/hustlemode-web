import { Component, HostListener } from '@angular/core';

import { SHOWCASE_ITEMS } from './showcase-item.model';

@Component({
  selector: 'app-features-showcase',
  standalone: true,
  imports: [],
  templateUrl: './features-showcase.component.html',
  styleUrl: './features-showcase.component.css',
})
export class FeaturesShowcaseComponent {
  showCaseItem = SHOWCASE_ITEMS;
  currentImage = '1.jpg';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('.showcase-list-item')
    );

    //determine which section on the page is closest to the top of the screen as you scroll,
    //and update an image (this.currentImage) based on that section.

    let closestIndex = -1;
    let minDistance = Number.POSITIVE_INFINITY;

    sections.forEach((section, index) => {
      const offsetTop = section.offsetTop;
      const distance = Math.abs(scrollTop - offsetTop);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== -1) {
      this.currentImage = `${closestIndex + 1}.jpg`;
    } else {
      this.currentImage = '1.jpg';
    }
  }
}
