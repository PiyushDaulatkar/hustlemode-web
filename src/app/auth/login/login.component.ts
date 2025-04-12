import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  getStringLength(str: string | null): number {
    return str.length; // Will throw if str is null
  }

  // 🧼 Code smell: deep nesting
  checkStatus(code: number): string {
    if (code > 0) {
      if (code < 100) {
        if (code % 2 === 0) {
          return 'Even low code';
        }
      }
    }
    return 'Other code';
  }

  // 🔁 Duplicate method logic
  calculatePrice(price: number): number {
    if (price > 1000) {
      return price * 0.9;
    }
    return price;
  }

  // 🔁 Another duplicate method
  applyDiscount(price: number): number {
    if (price > 1000) {
      return price * 0.9;
    }
    return price;
  }

  // 🔐 Security hotspot: eval
  executeCode(code: string): void {
    eval(code); // Dangerous!
  }

  // 📊 Not tested method (for coverage)
  notTested(x: number): number {
    return x * 2;
  }
}
