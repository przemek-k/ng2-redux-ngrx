import { PathLocationStrategy } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import {SeedApp} from './app/seed-app';

import { storeProvider } from './app/reducers/router.reducer';
import { connectRouterToStore } from '@ngrx/router-store';
import { provideRouter } from '@ngrx/router';
import { ROUTES } from './routes';


// enableProdMode()

bootstrap(SeedApp, [
  HTTP_PROVIDERS,
  storeProvider,
  provideRouter(ROUTES, PathLocationStrategy),
  connectRouterToStore()
])
.catch(err => console.error(err));
