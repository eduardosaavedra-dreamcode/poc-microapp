import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DevdacticLibModule } from 'devdactic-lib';
import { HeaderFooterLibModule } from 'header-footer-lib';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    DevdacticLibModule,
    HeaderFooterLibModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
