import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_ROUTES } from './shared/constants/app-routes.const';

const routes: Routes = [
  {
    path: APP_ROUTES.DEMOS.MAIN,
    loadChildren: () => import('./pages/demos/demos.module').then(m => m.DemosModule)
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.DEMOS.MAIN
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
