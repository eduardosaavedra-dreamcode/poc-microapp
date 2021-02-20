import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxPageComponent } from './redux-page.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReduxPageRoutingModule } from './redux-page-routing.module';
import { HeaderFooterLibModule } from 'header-footer-lib';



@NgModule({
  declarations: [ReduxPageComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReduxPageRoutingModule,
    HeaderFooterLibModule
  ]
})
export class ReduxPageModule { }
