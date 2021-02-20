import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReduxPageComponent } from './redux-page.component';


const routes: Routes = [
  {
    path: '',
    component: ReduxPageComponent,
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReduxPageRoutingModule { }
