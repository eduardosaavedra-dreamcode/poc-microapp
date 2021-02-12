import { NgModule } from '@angular/core';
import { DevMobilityLibComponent } from './dev-mobility-lib.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [DevMobilityLibComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [DevMobilityLibComponent]
})
export class DevMobilityLibModule { }
