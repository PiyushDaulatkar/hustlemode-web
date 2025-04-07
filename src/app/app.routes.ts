import { Routes } from '@angular/router';
import { UserRegisterComponent } from './auth/user-register/user-register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'user/register',
    component: UserRegisterComponent,
  },
];
