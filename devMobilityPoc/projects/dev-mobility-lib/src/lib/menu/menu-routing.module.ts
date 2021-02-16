import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
 
const routes: Routes = [
  {
    path: '',
    redirectTo : 'dev-mobility-lib-menu/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home-page/home-page.module').then( m => m.HomePageModule)
      },
      {
        path: 'camera',
        loadChildren: () => import('../camera/camera.module').then( m => m.CameraModule)
      }
    ]
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}