import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { ChangelogComponent } from './changelog/changelog.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  // Public layout
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'landing', component: LandingComponent },
      { path: '', component: LoginComponent }
    ]
  },
  // Private layout
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      { path: 'logout', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', component: ChangelogComponent, canActivate: [AuthGuard] },
      
    ],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' });
