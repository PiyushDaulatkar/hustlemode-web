import { Component, DestroyRef, inject, OnInit, output } from '@angular/core';
import { Router } from '@angular/router';

import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isDrawerHidden: boolean = true;
  drawerState = output<boolean>();
  private readonly responsiveService = inject(ResponsiveService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  ngOnInit(): void {
    const subscription = this.responsiveService.screenWidth$.subscribe(
      (screenWidth) => {
        if (screenWidth?.breakpoints['(min-width: 956px)']) {
          this.isDrawerHidden = true;
          this.drawerState.emit(this.isDrawerHidden);
        }
      }
    );

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  toggleNavbarDrawer() {
    this.isDrawerHidden = !this.isDrawerHidden;
    this.drawerState.emit(this.isDrawerHidden);
  }

  navigateToRegister() {
    this.router.navigate(['/user/register'], {
      replaceUrl: true,
    });
  }
}
