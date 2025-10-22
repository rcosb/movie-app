import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { DetailsPage } from './details/details.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'details/:id',
    component: DetailsPage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];