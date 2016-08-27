import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './components/heroes.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);