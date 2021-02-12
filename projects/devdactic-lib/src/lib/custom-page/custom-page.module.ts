import { CustomPageComponent } from './custom-page.component';
import { CustomPageRoutingModule } from './custom-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderFooterLibModule } from 'header-footer-lib';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomPageRoutingModule,
    HeaderFooterLibModule
  ],
  declarations: [CustomPageComponent]
})
export class CustomPageModule {}