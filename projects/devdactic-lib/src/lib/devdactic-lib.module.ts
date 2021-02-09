import { NgModule } from '@angular/core';
import { DevdacticLibComponent } from './devdactic-lib.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomPageComponent } from './custom-page/custom-page.component';



@NgModule({
  declarations: [DevdacticLibComponent, CustomCardComponent, CustomPageComponent],
  imports: [
  ],
  exports: [DevdacticLibComponent]
})
export class DevdacticLibModule { }
