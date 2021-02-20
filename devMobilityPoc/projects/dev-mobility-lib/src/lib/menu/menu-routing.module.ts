import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
 
const routes: Routes = [
  {
    path: '',
    redirectTo : 'home',
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
      },
      {
        path: 'qr-scanner',
        loadChildren: () => import('../qr-scanner/qr-scanner.module').then( m => m.QrScannerModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('../tasks-page/tasks-page.module').then( m => m.TasksPageModule)
      },
      {
        path: 'redux',
        loadChildren: () => import('../redux-page/redux-page.module').then( m => m.ReduxPageModule)
      }
    ]
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}