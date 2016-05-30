import { PathLocationStrategy } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import {SeedApp} from './app/seed-app';

import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/reducers/counter.reducer';

import { provideRouter } from '@ngrx/router';
import { ROUTES } from './routes';


// enableProdMode()

bootstrap(SeedApp, [
  HTTP_PROVIDERS,
  provideStore({ counter: counterReducer }),
  provideRouter(ROUTES, PathLocationStrategy)
])
.catch(err => console.error(err));
