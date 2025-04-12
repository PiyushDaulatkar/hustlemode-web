import { Component } from '@angular/core';
import { HeaderComponent } from '../../landing-page/header/header.component';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent {
  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  OnSubmit() {
    console.log('object :>> ');
  }
}
