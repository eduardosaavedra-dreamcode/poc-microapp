import { CustomPageComponent } from './custom-page.component';
import { CustomPageRoutingModule } from './custom-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomPageRoutingModule
  ],
  declarations: [CustomPageComponent]
})
export class CustomPageModule {}