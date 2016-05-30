import { provideStore } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { counterReducer } from './counter.reducer';


export const storeProvider = provideStore({
  counterReducer,
  router: routerReducer
});
