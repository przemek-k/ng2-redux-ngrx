import { Routes } from '@ngrx/router';
import { SeedApp } from 'app/seed-app';
import { MyApp } from 'app/components/home/home';
import { About } from 'app/components/about/about';

export const ROUTES: Routes = [
  {
    path: '/',
    component: SeedApp,
    redirectTo: '/home'
  },
  {
    path: '/home',
    component: MyApp,
  },
  {
    path: '/about',
    component: About,
  }
];
