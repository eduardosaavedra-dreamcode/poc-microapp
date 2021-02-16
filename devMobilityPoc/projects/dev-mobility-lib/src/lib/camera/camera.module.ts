import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CameraComponent } from './camera.component';
import { CameraRoutingModule } from './camera-routing.module';


 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraRoutingModule
  ],
  declarations: [CameraComponent]
})
export class CameraModule {}