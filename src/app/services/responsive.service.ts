import { inject, Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private readonly minWidth956px = '(min-width: 956px)';
  private readonly breakpointObserver = inject(BreakpointObserver);

  screenWidth$ = this.breakpointObserver.observe([this.minWidth956px]);
}
