import { Component } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}

  methodA() {
    let a = 1;
    let b = 2;
    return a + b;
  }

  methodB() {
    let a = 1;
    let b = 2;
    return a + b;
  }

  methodf() {
    let a = 1;
    let b = 2;
    return a + b;
  }

  methodc() {
    let a = 1;
    let b = 2;
    return a + b;
  }

  methodd() {
    let a = 1;
    let b = 2;
    return a + b;
  }

  methode() {
    let a = 1;
    let b = 2;
    return a + b;
  }
}
