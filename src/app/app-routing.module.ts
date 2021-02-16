import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'devdactic-lib-custom',
    loadChildren: () => import('devdactic-lib').then( m => m.CustomPageModule)
  },
  {
    path: 'home/dev-mobility-lib-menu',
    loadChildren: () => import('dev-mobility-lib').then( m => m.MenuModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
